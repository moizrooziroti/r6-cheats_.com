import fs from 'node:fs';
import path from 'node:path';

const root = 'dist';
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
}
walk(root);

const skip = new Set([
  'blog/index.html',
  'forum/index.html',
  'contact/index.html',
  '404.html',
]);

const problems = [];
const titles = new Map();
const descriptions = new Map();
const buyChecks = {
  'products/rainbow-six-siege-cheats/index.html': '/products/rainbow-six-siege',
  'products/rainbow-six-siege-spoofer/index.html': '/products/hwid-spoofer',
  'products/ugc-account-recovery/index.html': '/products/ugc',
  'products/cloud-dma/index.html': '/products/cloud-dma',
};
const publicPaths = new Set();

for (const file of files) {
  const rel = path.relative(root, file).replaceAll('\\', '/');
  if (skip.has(rel)) continue;
  const urlPath = rel === 'index.html' ? '/' : `/${rel.replace(/index\.html$/, '')}`;
  publicPaths.add(urlPath);
  const html = fs.readFileSync(file, 'utf8');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (html.match(/name="description" content="([^"]*)"/) || [])[1] || '';
  const h1 = (html.match(/<h1\b/g) || []).length;
  const viewport = /name="viewport"/.test(html);
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
  const bare = imgs.filter((tag) => !/\balt\s*=\s*"[^"]+"/i.test(tag));
  if (!title) problems.push(`${rel} missing title`);
  if (!desc) problems.push(`${rel} missing description`);
  if (title.length > 70) problems.push(`${rel} title ${title.length} chars`);
  if (desc.length > 160) problems.push(`${rel} description ${desc.length} chars`);
  if (h1 !== 1) problems.push(`${rel} h1=${h1}`);
  if (!viewport) problems.push(`${rel} missing viewport`);
  if (bare.length) problems.push(`${rel} images missing real alt ${bare.length}`);
  if (/missing-info|lorem ipsum|\$0 — price pending|data\/reviews\.json|hero-placeholder|Dota|Valorant|dotacheats|\bTurbo\b|\]\(\//i.test(html)) {
    problems.push(`${rel} placeholder, raw markdown, or other-game copy`);
  }
  const previousTitle = titles.get(title);
  if (previousTitle) problems.push(`duplicate title: ${title} (${previousTitle}, ${rel})`);
  else titles.set(title, rel);
  const previousDesc = descriptions.get(desc);
  if (previousDesc) problems.push(`duplicate description: ${rel} matches ${previousDesc}`);
  else descriptions.set(desc, rel);
  const expected = buyChecks[rel];
  if (expected) {
    const hrefs = [...html.matchAll(/href="(https:\/\/zadeyo\.com[^"]*)"/g)].map((match) => decodeURIComponent(match[1]));
    if (!hrefs.some((href) => href.includes(expected))) problems.push(`${rel} buy link missing ${expected}`);
  }
  const localHrefs = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((match) => match[1]);
  for (const href of localHrefs) {
    if (href.startsWith('/_astro') || href.startsWith('/images') || href.endsWith('.svg') || href.endsWith('.xml') || href.endsWith('.txt') || href.endsWith('.webmanifest') || href.endsWith('.png') || href.endsWith('.ico')) continue;
    const normalized = href.endsWith('/') ? href : `${href}/`;
    const target = normalized === '/' ? path.join(root, 'index.html') : path.join(root, normalized, 'index.html');
    const redirectHtml = path.join(root, normalized.replace(/^\//, ''), 'index.html');
    if (!fs.existsSync(target) && !fs.existsSync(redirectHtml)) {
      problems.push(`${rel} broken internal link ${href}`);
    }
  }
}

const sitemapFile = fs.existsSync('dist/sitemap.xml') ? 'dist/sitemap.xml' : 'dist/sitemap-0.xml';
const sitemap = fs.existsSync(sitemapFile) ? fs.readFileSync(sitemapFile, 'utf8') : '';
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => {
  const pathname = new URL(match[1]).pathname;
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
});
const robots = fs.readFileSync('public/robots.txt', 'utf8');
for (const page of publicPaths) {
  if (!locs.includes(page)) problems.push(`sitemap missing ${page}`);
}
for (const loc of locs) {
  if (!publicPaths.has(loc)) problems.push(`sitemap extra ${loc}`);
}
if (!robots.includes('https://r6-cheats.com/sitemap.xml')) problems.push('robots missing sitemap');
if (!/User-agent:\s*\*/.test(robots) || !/Allow:\s*\//.test(robots)) problems.push('robots not open');

console.log(`pages ${publicPaths.size} sitemap ${locs.length}`);
if (problems.length) {
  console.log(problems.join('\n'));
  process.exit(1);
}
console.log('QA HTML CHECK CLEAN');
