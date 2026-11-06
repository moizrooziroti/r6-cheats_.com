import { blogPosts } from '../data/blog';
import { RSS_FEED_PATH, SITE_ORIGIN, absoluteAssetUrl, canonicalUrl } from '../config/seo';
import { parseBlogDate } from './schema';
import { blogPostPath } from './path';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function buildRssFeed(): string {
  const feedUrl = `${SITE_ORIGIN}${RSS_FEED_PATH}`;
  const items = blogPosts
    .map((post) => {
      const link = canonicalUrl(blogPostPath(post.slug));
      const pubDate = new Date(parseBlogDate(post.date)).toUTCString();
      const imgUrl = absoluteAssetUrl(post.image);
      const enclosure =
        imgUrl.endsWith('.svg')
          ? ''
          : `\n      <enclosure url="${escapeXml(imgUrl)}" type="image/png" />`;
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(post.desc)}</description>
      <pubDate>${pubDate}</pubDate>${enclosure}
    </item>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>R6-Cheats Articles</title>
    <link>${SITE_ORIGIN}/articles/</link>
    <description>Long-form articles about Rainbow Six Siege cheats, ESP, aim assistance, HWID tools, UGC recovery, and Cloud DMA.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;
}
