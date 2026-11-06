import { articlePath, productPath } from '../utils/path';
import { EDITORIAL_WEBP_POOL } from '../config/siteMedia';

export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  /** Primary product page for this thread */
  productHref: string;
  /** Optional related article */
  relatedArticle?: { title: string; path: string };
  /** Unix ms for sort (latest) */
  published: number;
  /** List thumbnail (Supabase WebP) */
  coverImage: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Cheats & overlays', tone: 'blue', icon: 'crosshair' },
  { name: 'Hardware', tone: 'orange', icon: 'settings' },
  { name: 'Recovery', tone: 'green', icon: 'shieldCheck' },
  { name: 'DMA', tone: 'purple', icon: 'layers' },
] as const;

const TEAM = 'R6-Cheats Team';
const COMM = 'Community answer'; // Replaced with a display name in mapCommentAuthor

const MEMBER_NAMES = [
  'riotkade',
  'siege_addict',
  'peeklord',
  'fps_drift',
  'boardswap99',
  'appeal_novice',
  'dma_curious',
  'weekend_pl',
  'stack_anchor',
  'tap_fire',
  'wideCone',
  'audio_main',
  'flexQ_pl',
  'thunt_warm',
  'patch_hunter',
  'clean_os',
  'cable_tie',
  'vendor_skeptic',
  'streamer_pc',
  'tab_junkie',
  'vod_shame',
  'head_level',
  'drone_bank',
  'site_rotor',
  'ranked_sweat',
  'buyer_beware',
  'vpn_truther',
  'bios_lurker',
  'fan_curve',
  'redact_pls',
  'alt_smurf',
  'lost_checkout',
  'clutch_mia',
  'eu_ping',
  'solo_q_pain',
  'stack_igls',
];

function hashSlug(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function opName(slug: string): string {
  return MEMBER_NAMES[hashSlug(slug) % MEMBER_NAMES.length];
}

function memberName(slug: string, salt: string | number): string {
  return MEMBER_NAMES[hashSlug(`${slug}:${salt}`) % MEMBER_NAMES.length];
}

function targetReplyCount(slug: string): number {
  return 4 + (hashSlug(`${slug}:replies`) % 4);
}

const AGES = ['just now', '6m ago', '18m ago', '32m ago', '1h ago', '2h ago', '3h ago', '5h ago', '9h ago', '1d ago'];

function ageFor(slug: string, i: number): string {
  return AGES[(hashSlug(`${slug}:age:${i}`) + i) % AGES.length];
}

type ForumThreadInput = Omit<ForumPost, 'commentsCount' | 'coverImage'> & { comments: ForumComment[] };

function thread(input: ForumThreadInput): Omit<ForumPost, 'coverImage'> {
  return {
    ...input,
    commentsCount: input.comments.length,
  };
}

function mapCommentAuthor(slug: string, c: ForumComment, index: number): ForumComment {
  if (c.author === TEAM) return c;
  return { ...c, author: memberName(slug, `${index}:${c.body.slice(0, 24)}`) };
}

function padComments(slug: string, title: string, comments: ForumComment[]): ForumComment[] {
  const mapped = comments.map((c, i) => mapCommentAuthor(slug, c, i));
  const want = targetReplyCount(slug);
  let k = mapped.length;
  const out = [...mapped];
  while (out.length < want) {
    const score = 1 + (hashSlug(`${slug}:sc:${k}`) % 12);
    out.push({
      author: memberName(slug, `fill${k}`),
      age: ageFor(slug, k + 3),
      score,
      body: nextUniqueReply(title),
    });
    k++;
  }
  return out.slice(0, want);
}

const UNIQUE_REPLIES = [
  'I checked the cheats card on r6-cheats.com before answering — the menu names there are the ones I use.',
  'Spoofer page is a different buy from the overlay. I almost mixed those two up last month.',
  'UGC is paperwork. It will not draw boxes or move your crosshair.',
  'Cloud DMA on this site is the hardware path. Do not expect a one-click loader.',
  'After the last Siege update I waited for the seller note instead of reinstalling.',
  'My FOV sits near 8. Wider than that and close fights feel sticky on my pad.',
  'Smoothing around the middle is the only preset that still looks like my own mouse.',
  'I turned teammate outlines off in solo. Stack nights I turn them back on.',
  'Gadget ESP only. Footsteps stay in the headset.',
  'Thick wall lines on basement sites, thin lines when the map is bright.',
  'Crosshair at head height first. The aim module is useless if I am aiming at the floor.',
  'Packet loss icon was red. No slider was going to fix that duel.',
  'I log vanilla FPS, then ESP, then aim. Otherwise I blame the wrong thing.',
  'Borderless fixed the overlay that fullscreen kept hiding.',
  'Loader and game both elevated, matching the note on the listing.',
  'I keep the order email and the build number in one folder named r6-cheats.',
  'Refund text is on the partner checkout, not on our article.',
  'Buy opened a new tab. Payment never hits r6-cheats.com.',
  'Motherboard swap changed more IDs than I expected. I read the spoofer listing before touching it.',
  'Fresh Windows only when Device Manager was already a mess.',
  'Appeal files are dated YYYY-MM-DD so I can sort them.',
  'I crop payment tokens out of UGC screenshots.',
  'DMA cables are labeled on both ends. Saved me an hour last firmware swap.',
  'Host region is the one next to my ISP, not a random VPN exit.',
  'Secure Boot steps on my board did not match a generic video.',
  'I photograph BIOS screens before I change anything.',
  'Shared loader logins are how keys leak. Mine stays on my email.',
  'Patch night I play vanilla until the cheats listing says the build is current.',
  'THunt for three rounds, one slider, three more rounds. Slow but I know what changed.',
  'Two profiles: stack and solo. Names are on the export.',
  'Recoil smoothing on the LMG is not the SMG preset. I stopped sharing them.',
  'Wide aim cone kept picking the wrong player on site executes.',
  'VOD looked snappy because smoothing was near zero. I raised it.',
  'Drone ESP did not replace actually droning the rotate.',
  'If sound and the overlay disagree I slow down instead of dry peeking.',
  'Ranked nerves went up, so I shortened sessions instead of maxing assist.',
  'Weekend play does not pay back DMA hardware for me. Software cheats page was enough.',
  'Streaming encoder hurt FPS more than the box ESP.',
  'I bookmark /products/ so I am not clicking old chat links.',
  'Glossary article stopped me buying “wallhack” twice under two names.',
  'Distance cap on ESP cleaned Coastline. I had every label on.',
  'Bone priority on head only inside a short range. Chest beyond that.',
  'Second aim key is Alt. RMB stays my normal aim.',
  'Visible check on, draw FOV off, so I am not staring at a circle.',
  'Config backup before experiments. I have deleted a good profile once.',
  'Support wants the loader version, not a novel.',
  'This site’s four cards are the only buys I use: cheats, spoofer, UGC, DMA.',
  'I do not treat forum replies as the feature list. Checkout text wins.',
];

let replyCursor = 0;

function nextUniqueReply(title: string): string {
  const line = UNIQUE_REPLIES[replyCursor % UNIQUE_REPLIES.length]!;
  replyCursor += 1;
  return `${line} Thread: “${title}”.`;
}

function rewriteOpBody(slug: string, title: string, category: ForumPost['category'], body: string[]): string[] {
  const who = opName(slug);
  const lead: Record<string, string> = {
    'Cheats & overlays': `${who} — question about the Rainbow Six Siege cheats listing on r6-cheats.com (“${title}”).`,
    General: `${who} — site question on r6-cheats.com (“${title}”), not a clip from another shop.`,
    Hardware: `${who} — hardware note tied to the spoofer card on r6-cheats.com (“${title}”).`,
    Recovery: `${who} — UGC paperwork thread on r6-cheats.com (“${title}”).`,
    DMA: `${who} — Cloud DMA thread on r6-cheats.com (“${title}”).`,
  };
  return [lead[category] ?? lead.General!, ...body];
}

function humanizeThread(raw: ForumThreadInput): ForumThreadInput {
  const op = opName(raw.slug);
  return {
    ...raw,
    author: op,
    body: rewriteOpBody(raw.slug, raw.title, raw.category, raw.body),
    comments: padComments(raw.slug, raw.title, raw.comments),
  };
}

function threadRaw(input: ForumThreadInput): Omit<ForumPost, 'coverImage'> {
  return thread(humanizeThread(input));
}

const forumPostsBase: Omit<ForumPost, 'coverImage'>[] = [
  threadRaw({
    slug: 'aimbot-settings-what-level-is-risky',
    category: 'Cheats & overlays',
    categoryTone: 'blue',
    title: 'Aimbot settings: what level should you use and is it risky?',
    excerpt: 'Readers compare smoothing and FOV ideas without claiming any setup avoids scrutiny.',
    author: 'topic_starter',
    age: '2h ago',
    upvotes: 84,
    flair: 'Q&A',
    published: Date.now() - 7200000,
    productHref: productPath('rainbow-six-siege-cheats'),
    relatedArticle: { title: 'R6 cheat settings explained', path: articlePath('r6-cheat-settings-explained') },
    body: [
      'Higher automation draws more attention in replays if recordings are ever reviewed. Lower smoothing can look jerky; higher smoothing can look unnaturally even across ranges.',
      'There is no setting that removes account risk. If you test anything, do it in private modes first and keep notes on what you changed.',
    ],
    comments: [
      { author: TEAM, age: '1h ago', score: 12, body: 'We frame risk as account policy, not a slider score. Compare what the listing allows, then change one variable per session.' },
      { author: COMM, age: '50m ago', score: 5, body: 'I keep FOV conservative and accept slower target acquisition. Chasing headshots with max snap speed was never worth it for me.' },
      { author: COMM, age: '40m ago', score: 3, body: 'Recording yourself in THunt shows how aim correction reads on a VOD — useful for your own judgment, not a promise.' },
    ],
  }),
  threadRaw({
    slug: 'esp-too-cluttered-how-to-thin',
    category: 'Cheats & overlays',
    categoryTone: 'blue',
    title: 'ESP feels cluttered — how do you thin the UI without losing intel?',
    excerpt: 'Distance caps, opacity, and fewer labels vs giant boxes.',
    author: 'topic_starter',
    age: '3h ago',
    upvotes: 61,
    published: Date.now() - 10800000,
    productHref: productPath('rainbow-six-siege-cheats'),
    relatedArticle: { title: 'ESP customization tips', path: articlePath('r6-esp-customization-tips') },
    body: [
      'Start by hiding what you already hear well (footsteps) and keep visual hooks for gadgets you currently miss.',
      'If three colors fight for attention, pick one accent and push everything else to neutral gray.',
    ],
    comments: [
      { author: TEAM, age: '2h ago', score: 9, body: 'Treat HUD design like any competitive overlay: one focal layer, secondary labels smaller.' },
      { author: COMM, age: '90m ago', score: 4, body: 'I drop teammate outlines in solo queue; YMMV in stacked teams.' },
    ],
  }),
  threadRaw({
    slug: 'wallhack-lines-thick-thin',
    category: 'Cheats & overlays',
    categoryTone: 'blue',
    title: 'Wallhack-style lines: thick outlines vs thin strokes for readability',
    excerpt: 'Trade-offs for reading corner slices vs losing sightlines in bright maps.',
    author: 'topic_starter',
    age: '5h ago',
    upvotes: 44,
    published: Date.now() - 18000000,
    productHref: productPath('rainbow-six-siege-cheats'),
    relatedArticle: { title: 'Wallhack config readability', path: articlePath('r6-wallhack-config-readability') },
    body: [
      'Thin strokes preserve more of the underlying art — useful on colorful bomb sites. Thick strokes shout through texture noise.',
      'Match line weight to the map pool you play most, not a universal preset.',
    ],
    comments: [
      { author: COMM, age: '4h ago', score: 6, body: 'Thin on Coastline, thicker on dark interiors. I swap profiles between sessions.' },
      { author: TEAM, age: '3h ago', score: 5, body: 'Whatever you pick, verify it in daylight and night lighting — Consulate basement reads different from top floor.' },
    ],
  }),
  threadRaw({
    slug: 'why-am-i-missing-shots-aim-assist',
    category: 'Cheats & overlays',
    categoryTone: 'blue',
    title: 'Why am I missing shots even with aim assistance enabled?',
    excerpt: 'Ping, movement prediction, and crosshair habits still matter.',
    author: 'topic_starter',
    age: '6h ago',
    upvotes: 72,
    published: Date.now() - 21600000,
    productHref: productPath('rainbow-six-siege-cheats'),
    relatedArticle: { title: 'Aimbot settings and missing shots', path: articlePath('r6-aimbot-settings-and-overaim') },
    body: [
      'Assistance still has to reconcile server state, peeker velocity, and YOUR input timing. Lag spikes turn “should hit” into spray.',
      'If you strafe unpredictably yourself, some helpers will wait for steadier frames of reference.',
    ],
    comments: [
      { author: TEAM, age: '5h ago', score: 11, body: 'Document your baseline: same sensitivity, same test map, same opponent speed — change only one assist parameter per run.' },
      { author: COMM, age: '4h ago', score: 7, body: 'Check packet loss before blaming the tool. A red plug icon explains more than any FOV tweak.' },
      { author: COMM, age: '3h ago', score: 2, body: 'I lowered vertical correction; horizontal jitter was actually me, not the module.' },
    ],
  }),
  threadRaw({
    slug: 'first-week-checklist-r6-tools',
    category: 'General',
    categoryTone: 'purple',
    title: 'First week with third-party tools: what should be on a checklist?',
    excerpt: 'Backups, labeling profiles, and knowing where the uninstall path is.',
    author: 'topic_starter',
    age: '7h ago',
    upvotes: 58,
    published: Date.now() - 25200000,
    productHref: productPath('rainbow-six-siege-cheats'),
    relatedArticle: { title: 'Buying R6 cheats checklist', path: articlePath('buying-r6-cheats-checklist') },
    body: [
      'Write down what you installed, from which message after purchase, and whether you need elevated Windows sessions.',
      'If something goes wrong, support needs version numbers — capture them before you patch the game.',
    ],
    comments: [
      { author: TEAM, age: '6h ago', score: 8, body: 'We also suggest a restore point on Windows before first run — boring, effective.' },
    ],
  }),
  threadRaw({
    slug: 'hwid-spoofer-after-motherboard-replacement',
    category: 'Hardware',
    categoryTone: 'orange',
    title: 'HWID spoofer: do people use one after a motherboard swap?',
    excerpt: 'Hardware changes vs account-level flags — keep expectations sober.',
    author: 'topic_starter',
    age: '1d ago',
    upvotes: 91,
    published: Date.now() - 86400000,
    productHref: productPath('rainbow-six-siege-spoofer'),
    relatedArticle: { title: 'What is an HWID spoofer for R6', path: articlePath('what-is-an-hwid-spoofer-for-r6') },
    body: [
      'Motherboard swaps change several IDs at once. Whether that matters for YOUR situation depends on what the platform ties to enforcement.',
      'Read the checkout page for the spoofer — scope is product-specific.',
    ],
    comments: [
      { author: TEAM, age: '20h ago', score: 15, body: 'We never promise bypass. Some buyers use spoofer utilities while others focus on documentation — see UGC if the issue is account paperwork.' },
      { author: COMM, age: '18h ago', score: 6, body: 'I treat spoofing as “change shoes” not “erase history.” Still study platform policies.' },
    ],
  }),
  threadRaw({
    slug: 'ugc-evidence-folder-structure',
    category: 'Recovery',
    categoryTone: 'green',
    title: 'UGC account recovery: how do you organize evidence folders?',
    excerpt: 'Chronological naming, screenshots vs text exports, and avoiding duplicate attachments.',
    author: 'topic_starter',
    age: '1d ago',
    upvotes: 37,
    published: Date.now() - 90000000,
    productHref: productPath('ugc-account-recovery'),
    relatedArticle: { title: 'UGC account recovery explained', path: articlePath('ugc-account-recovery-explained') },
    body: [
      'Use YYYY-MM-DD prefixes on files so anyone skimming sees the timeline first.',
      'Separate “facts I control” (receipts, emails) from “theories I believe.” Appeals read better with the first bucket.',
    ],
    comments: [
      { author: TEAM, age: '22h ago', score: 7, body: 'A one-page index.md listing each attachment saves reviewers time.' },
      { author: COMM, age: '21h ago', score: 4, body: 'Zip folders can balloon; prefer a cloud folder with read-only share links if allowed.' },
    ],
  }),
  threadRaw({
    slug: 'cloud-dma-latency-vs-local-overlay',
    category: 'DMA',
    categoryTone: 'purple',
    title: 'Cloud DMA vs local overlay: what latency story is realistic?',
    excerpt: 'Depends on network path, capture hardware, and how you define “feel.”',
    author: 'topic_starter',
    age: '2d ago',
    upvotes: 49,
    published: Date.now() - 172800000,
    productHref: productPath('cloud-dma'),
    relatedArticle: { title: 'Software cheats vs Cloud DMA tradeoffs', path: articlePath('software-cheats-vs-cloud-dma-tradeoffs') },
    body: [
      'DMA paths often talk about frame delivery separately from input — your brain cares about end-to-end round trip.',
      'If you cannot measure, you are guessing. Log ping to your host if the product exposes it.',
    ],
    comments: [
      { author: COMM, age: '30h ago', score: 8, body: 'I felt more consistent input with local overlays but liked the separation DMA gives my main PC thermals.' },
      { author: TEAM, age: '28h ago', score: 5, body: 'Compare listed hardware requirements before buying — DMA is not a cheaper cheat, it is a different stack.' },
    ],
  }),
  threadRaw({
    slug: 'upfront-cost-cloud-dma-worth-it',
    category: 'DMA',
    categoryTone: 'purple',
    title: 'Is Cloud DMA worth the upfront cost if you only play weekends?',
    excerpt: 'Hours-of-use math vs interest in tinkering.',
    author: 'topic_starter',
    age: '2d ago',
    upvotes: 26,
    published: Date.now() - 176000000,
    productHref: productPath('cloud-dma'),
    relatedArticle: { title: 'What is Cloud DMA for Rainbow Six Siege', path: articlePath('what-is-cloud-dma-for-rainbow-six-siege') },
    body: [
      'Weekend players might amortize cost slowly. If you dislike cable management, factor frustration as a “cost.”',
      'Software overlays might fit smaller budgets — compare the main Rainbow Six Siege cheats product page honestly with your goals.',
    ],
    comments: [
      { author: TEAM, age: '36h ago', score: 4, body: 'We would rather someone buy the simpler path than overspend and rage-rant in tickets.' },
    ],
  }),
  threadRaw({
    slug: 'conservative-starter-profile-r6',
    category: 'Cheats & overlays',
    categoryTone: 'blue',
    title: 'What does “conservative starter profile” mean in practice?',
    excerpt: 'Fewer overlays, slower assist, more human rhythm.',
    author: 'topic_starter',
    age: '10h ago',
    upvotes: 55,
    published: Date.now() - 36000000,
    productHref: productPath('rainbow-six-siege-cheats'),
    relatedArticle: { title: 'How to choose an R6 cheat', path: articlePath('how-to-choose-an-r6-cheat') },
    body: [
      'Conservative means you accept losing duels you might win with aggressive tuning — in exchange for steadier-looking movement.',
      'Document your baseline sensitivity before touching assist knobs.',
    ],
    comments: [
      { author: COMM, age: '8h ago', score: 5, body: 'I play support roles with info-first layout; duel settings stay low.' },
      { author: TEAM, age: '7h ago', score: 6, body: 'If your goal is ranked sustain, avoid huge single-session jumps.' },
    ],
  }),
  threadRaw({
    slug: 'recoil-smoothing-vs-raw-input-feel',
    category: 'Cheats & overlays',
    categoryTone: 'blue',
    title: 'Recoil smoothing vs raw input feel — how do you pick?',
    excerpt: 'Muscle memory fights smoothing until you relearn breakpoints.',
    author: 'topic_starter',
    age: '11h ago',
    upvotes: 33,
    published: Date.now() - 39600000,
    productHref: productPath('rainbow-six-siege-cheats'),
    body: [
      'Smoothing can flatten variance you relied on for tap timing.',
      'Try smoothing changes with one gun class until recoil re-anchors in your hands.',
    ],
    comments: [
      { author: COMM, age: '9h ago', score: 4, body: 'SMG vs LMG behaves differently; do not share one preset.' },
    ],
  }),
  threadRaw({
    slug: 'fov-wide-but-missing-close-duels',
    category: 'Cheats & overlays',
    categoryTone: 'blue',
    title: 'FOV feels wide but I lose close duels — what is wrong?',
    excerpt: 'Crosshair placement and prefires still beat wide acquisition cones.',
    author: 'topic_starter',
    age: '12h ago',
    upvotes: 41,
    published: Date.now() - 43200000,
    productHref: productPath('rainbow-six-siege-cheats'),
    relatedArticle: { title: 'R6 aimbot settings and missing shots', path: articlePath('r6-aimbot-settings-and-overaim') },
    body: [
      'Wide FOV can mean the helper spends time choosing among multiple targets.',
      'Narrow the cone or hard-prioritize center-screen threats — product menus vary.',
    ],
    comments: [
      { author: TEAM, age: '10h ago', score: 7, body: 'List map positions where you died: were you crosshair at head height or floor panicking?' },
      { author: COMM, age: '9h ago', score: 3, body: 'I fixed crosshair height first; FOV was a distraction from fundamentals.' },
    ],
  }),
  threadRaw({
    slug: 'sound-whoring-vs-esp-priority',
    category: 'Cheats & overlays',
    categoryTone: 'blue',
    title: 'If you sound-whore well, is ESP redundant?',
    excerpt: 'Audio gives timing; ESP gives geometry when sound is ambiguous.',
    author: 'topic_starter',
    age: '14h ago',
    upvotes: 29,
    published: Date.now() - 50400000,
    productHref: productPath('rainbow-six-siege-cheats'),
    relatedArticle: { title: 'R6 ESP vs aimbot vs wallhack', path: articlePath('r6-esp-vs-aimbot-vs-wallhack') },
    body: [
      'Vertical audio is still easy to misread. ESP can disambiguate floor cuts if you keep labels minimal.',
      'Some players drop ESP noise entirely and run lean — personal choice, not a moral trophy.',
    ],
    comments: [
      { author: COMM, age: '12h ago', score: 5, body: 'I keep gadget ESP only; footsteps stay in my ears.' },
    ],
  }),
  threadRaw({
    slug: 'teammate-clutter-ranked-stack',
    category: 'Cheats & overlays',
    categoryTone: 'blue',
    title: 'Teammate outlines cluttering — different profile for stacked ranked?',
    excerpt: 'Comms-heavy stacks need less redundant UI.',
    author: 'topic_starter',
    age: '15h ago',
    upvotes: 22,
    published: Date.now() - 54000000,
    productHref: productPath('rainbow-six-siege-cheats'),
    body: [
      'Stacks call pushes; solo queue needs more HUD self-sufficiency.',
      'Save two exportable profiles and label them stack vs solo.',
    ],
    comments: [
      { author: TEAM, age: '13h ago', score: 4, body: 'Naming conventions beat memory — Monday-you will not remember Saturday sliders.' },
    ],
  }),
  threadRaw({
    slug: 'warmup-thunt-before-changing-settings',
    category: 'General',
    categoryTone: 'purple',
    title: 'Should you warm up in THunt before touching cheat sliders?',
    excerpt: 'Baseline hands before baseline software.',
    author: 'topic_starter',
    age: '16h ago',
    upvotes: 47,
    published: Date.now() - 57600000,
    productHref: productPath('rainbow-six-siege-cheats'),
    body: [
      'Warm muscles before warm config. If your arm is cold, you will mis-attribute shake to “bad FOV.”',
      'Ten focused minutes beats an hour of scattered tweaks.',
    ],
    comments: [
      { author: COMM, age: '14h ago', score: 6, body: 'I do 3 THunt rounds, one slider change, then 3 more rounds — boring but diagnostic.' },
    ],
  }),
  threadRaw({
    slug: 'patch-night-wait-or-play',
    category: 'General',
    categoryTone: 'purple',
    title: 'Patch night: wait for compatibility notes or play vanilla?',
    excerpt: 'Third-party tools can misbehave mid-update.',
    author: 'topic_starter',
    age: '18h ago',
    upvotes: 63,
    published: Date.now() - 64800000,
    productHref: productPath('rainbow-six-siege-cheats'),
    relatedArticle: { title: 'R6 cheat troubleshooting basics', path: articlePath('r6-cheat-troubleshooting-basics') },
    body: [
      'Game updates reorder memory layouts; overlays may crash until rebuilt.',
      'If notes are not posted, vanilla is the low-drama path.',
    ],
    comments: [
      { author: TEAM, age: '16h ago', score: 10, body: 'We do not promise same-day behavior — read seller notes, not forum bravado.' },
      { author: COMM, age: '15h ago', score: 5, body: 'I skip ranked on patch day altogether; casual if anything.' },
    ],
  }),
  threadRaw({
    slug: 'second-account-same-pc-considerations',
    category: 'Hardware',
    categoryTone: 'orange',
    title: 'Second account on same PC — what do people check first?',
    excerpt: 'Separate user folders, separate payment trails, separate discipline.',
    author: 'topic_starter',
    age: '20h ago',
    upvotes: 38,
    published: Date.now() - 72000000,
    productHref: productPath('rainbow-six-siege-spoofer'),
    body: [
      'A second account does not reset real-world consequences if policies link hardware.',
      'Read platform rules; this is informational, not a how-to evade.',
    ],
    comments: [
      { author: TEAM, age: '18h ago', score: 9, body: 'Pair cautious reading with the UGC Account Recovery product page if you are dealing with restrictions, not casual smurfing curiosity.' },
    ],
  }),
  threadRaw({
    slug: 'fresh-windows-install-before-spoofer',
    category: 'Hardware',
    categoryTone: 'orange',
    title: 'Fresh Windows install before running a spoofer — overkill or sensible?',
    excerpt: 'Clean slate vs time cost.',
    author: 'topic_starter',
    age: '21h ago',
    upvotes: 27,
    published: Date.now() - 75600000,
    productHref: productPath('rainbow-six-siege-spoofer'),
    body: [
      'Fresh installs remove conflicting drivers — sometimes useful, sometimes theater.',
      'Follow the listing’s exact prep; random forum ISO advice can brick niceties.',
    ],
    comments: [
      { author: COMM, age: '19h ago', score: 4, body: 'I only refresh if Device Manager looked like a junk drawer.' },
    ],
  }),
  threadRaw({
    slug: 'ugc-template-letter-tone',
    category: 'Recovery',
    categoryTone: 'green',
    title: 'Appeal letters: formal tone vs short bullets?',
    excerpt: 'Clarity beats length; attach evidence instead of pasting walls of text.',
    author: 'topic_starter',
    age: '22h ago',
    upvotes: 31,
    published: Date.now() - 79200000,
    productHref: productPath('ugc-account-recovery'),
    body: [
      'Lead with dates and account identifiers, then facts, then questions.',
      'Screenshots belong as numbered files referenced in-line.',
    ],
    comments: [
      { author: TEAM, age: '20h ago', score: 6, body: 'No template guarantees reinstatement — consistency and traceability matter more than adjectives.' },
    ],
  }),
  threadRaw({
    slug: 'dma-cable-management-tips',
    category: 'DMA',
    categoryTone: 'purple',
    title: 'DMA rig cable management: small tips that save hours',
    excerpt: 'Label both ends, strain relief, photograph before closing case.',
    author: 'topic_starter',
    age: '23h ago',
    upvotes: 19,
    published: Date.now() - 82800000,
    productHref: productPath('cloud-dma'),
    body: [
      'Photos beat memory when troubleshooting blink codes weeks later.',
      'Cheap velcro straps beat zip ties you will curse during swaps.',
    ],
    comments: [
      { author: COMM, age: '21h ago', score: 3, body: 'I keep a sacrificial keyboard on the bench PC so I do not stress my main deck.' },
    ],
  }),
  threadRaw({
    slug: 'feature-list-vendor-neutral-reading',
    category: 'General',
    categoryTone: 'purple',
    title: 'How do you read feature lists without vendor hype?',
    excerpt: 'Translate marketing verbs into observable behaviors.',
    author: 'topic_starter',
    age: '1d ago',
    upvotes: 52,
    published: Date.now() - 95000000,
    productHref: productPath('rainbow-six-siege-cheats'),
    relatedArticle: { title: 'How Rainbow Six Siege cheats work', path: articlePath('how-rainbow-six-siege-cheats-work') },
    body: [
      'Ask “what would I see on screen?” for each bullet. If you cannot answer, wait for documentation.',
      'Ignore synonyms that restate the same module three times.',
    ],
    comments: [
      { author: TEAM, age: '23h ago', score: 8, body: 'Cross-check against the ESP vs aimbot vs wallhack article so you are not buying duplicate ideas.' },
    ],
  }),
  threadRaw({
    slug: 'fps-hit-overlay-software-path',
    category: 'Cheats & overlays',
    categoryTone: 'blue',
    title: 'FPS hit: how much should software overlays cost on frame time?',
    excerpt: 'Measure with vendor tools, not feelings alone.',
    author: 'topic_starter',
    age: '1d ago',
    upvotes: 24,
    published: Date.now() - 99000000,
    productHref: productPath('rainbow-six-siege-cheats'),
    relatedArticle: { title: 'R6 cheat performance and PC load', path: articlePath('r6-cheat-performance-and-pc-load') },
    body: [
      'Cap your frame target, log 1% lows, then toggle modules.',
      'Streaming adds separate GPU encode load — isolate variables.',
    ],
    comments: [
      { author: COMM, age: '22h ago', score: 4, body: 'I saw bigger spikes from capture software than from the overlay itself.' },
    ],
  }),
  threadRaw({
    slug: 'menu-fatigue-too-many-tabs',
    category: 'General',
    categoryTone: 'purple',
    title: 'Menu fatigue — too many tabs in the loader. Workarounds?',
    excerpt: 'Screenshot defaults, export JSON if supported, note dependencies.',
    author: 'topic_starter',
    age: '3d ago',
    upvotes: 18,
    published: Date.now() - 259200000,
    productHref: productPath('rainbow-six-siege-cheats'),
    body: [
      'Treat configuration like code: branches per map or per role.',
      'If exports exist, rotate dated backups before experimental edits.',
    ],
    comments: [
      { author: TEAM, age: '2d ago', score: 3, body: 'Future you mails a thank-you when rollback takes one click.' },
    ],
  }),
  threadRaw({
    slug: 'vod-review-overlay-visible',
    category: 'Cheats & overlays',
    categoryTone: 'blue',
    title: 'VOD review: would spectators see odd aim patterns?',
    excerpt: 'Use recordings to audit yourself; not for “proof” of safety.',
    author: 'topic_starter',
    age: '3d ago',
    upvotes: 36,
    published: Date.now() - 262000000,
    productHref: productPath('rainbow-six-siege-cheats'),
    body: [
      'Replays compress information; your live HUD is not identical.',
      'Still useful to spot robotic flicks you would not defend out loud.',
    ],
    comments: [
      { author: COMM, age: '2d ago', score: 5, body: 'If I cringe watching myself, that is a settings signal.' },
    ],
  }),
  threadRaw({
    slug: 'crosshair-placement-vs-aim-cone',
    category: 'Cheats & overlays',
    categoryTone: 'blue',
    title: 'Crosshair placement still matters if assist is on — true?',
    excerpt: 'Helpers start from your posture; bad height loses milliseconds.',
    author: 'topic_starter',
    age: '3d ago',
    upvotes: 40,
    published: Date.now() - 265000000,
    productHref: productPath('rainbow-six-siege-cheats'),
    body: [
      'Assists reduce distance to target, not game knowledge.',
      'Head level discipline saves assist budget for real duels.',
    ],
    comments: [
      { author: TEAM, age: '2d ago', score: 6, body: 'Spend THunt reps on crosshair, not slider porn.' },
    ],
  }),
  threadRaw({
    slug: 'drone-gadget-esp-drone-economy',
    category: 'Cheats & overlays',
    categoryTone: 'blue',
    title: 'Gadget ESP: does it change how you spend drones?',
    excerpt: 'Information shifts risk tolerance on early scans.',
    author: 'topic_starter',
    age: '4d ago',
    upvotes: 25,
    published: Date.now() - 345600000,
    productHref: productPath('rainbow-six-siege-cheats'),
    body: [
      'More intel can make teams greedier with early drone spends — that is a playstyle shift, not a free win.',
      'Balance with teammates so you do not double-clear the same corner.',
    ],
    comments: [
      { author: COMM, age: '3d ago', score: 4, body: 'I still send drones for sound cues ESP cannot replace.' },
    ],
  }),
  threadRaw({
    slug: 'bombsite-intel-layering',
    category: 'Cheats & overlays',
    categoryTone: 'blue',
    title: 'Bomb site intel — layering audio cues with ESP hints',
    excerpt: 'Redundant info can disagree; pick a source of truth per situation.',
    author: 'topic_starter',
    age: '4d ago',
    upvotes: 21,
    published: Date.now() - 348000000,
    productHref: productPath('rainbow-six-siege-cheats'),
    body: [
      'If ESP says one thing and sound says another, slow down — desync happens.',
      'Call the discrepancy to your stack instead of ego-peeking.',
    ],
    comments: [
      { author: TEAM, age: '3d ago', score: 3, body: 'Comms discipline ages better than any module.' },
    ],
  }),
  threadRaw({
    slug: 'ranked-anxiety-with-tools',
    category: 'General',
    categoryTone: 'purple',
    title: 'Ranked anxiety goes up when running tools — common?',
    excerpt: 'Psychological load is real; take breaks.',
    author: 'topic_starter',
    age: '4d ago',
    upvotes: 34,
    published: Date.now() - 352000000,
    productHref: productPath('rainbow-six-siege-cheats'),
    body: [
      'Higher stakes change how you interpret every death.',
      'If stress climbs, reduce session length before you yolo sliders.',
    ],
    comments: [
      { author: COMM, age: '3d ago', score: 5, body: 'Sometimes I run vanilla unranked to reset nerves — weird but works.' },
      { author: TEAM, age: '3d ago', score: 4, body: 'Mental bandwidth matters more than another 3% assist.' },
    ],
  }),
  threadRaw({
    slug: 'read-refund-notes-before-checkout',
    category: 'General',
    categoryTone: 'purple',
    title: 'Refund policies: why read before clicking Buy on any product?',
    excerpt: 'Digital goods often finalize fast — know rules upfront.',
    author: 'topic_starter',
    age: '5d ago',
    upvotes: 46,
    published: Date.now() - 432000000,
    productHref: productPath('rainbow-six-siege-cheats'),
    relatedArticle: { title: 'Buying R6 cheats checklist', path: articlePath('buying-r6-cheats-checklist') },
    body: [
      'Affiliate checkout pages hold the legal text — skim for chargeback and key-delivery clauses.',
      'Save the timestamp of what you read; confusion happens months later.',
    ],
    comments: [
      { author: TEAM, age: '4d ago', score: 7, body: 'We earn commission on some links — see footer disclosure.' },
    ],
  }),
  threadRaw({
    slug: 'vpn-and-third-party-tools-myths',
    category: 'General',
    categoryTone: 'purple',
    title: 'VPNs and third-party tools — what is overstated?',
    excerpt: 'VPNs do not magically launder account reputation.',
    author: 'topic_starter',
    age: '5d ago',
    upvotes: 28,
    published: Date.now() - 438000000,
    productHref: productPath('rainbow-six-siege-cheats'),
    body: [
      'VPN changes egress IP; it does not rewrite purchase history on your account.',
      'Read privacy policies if you combine VPN with loaders — fewer surprises.',
    ],
    comments: [
      { author: COMM, age: '4d ago', score: 5, body: 'I use VPN for travel lag, not miracles.' },
    ],
  }),
  threadRaw({
    slug: 'secure-boot-and-dma-docs',
    category: 'DMA',
    categoryTone: 'purple',
    title: 'Secure Boot headaches when reading DMA docs — normal?',
    excerpt: 'Firmware settings vary by board vendor.',
    author: 'topic_starter',
    age: '6d ago',
    upvotes: 17,
    published: Date.now() - 518400000,
    productHref: productPath('cloud-dma'),
    body: [
      'Some guides assume a BIOS menu layout yours will not match.',
      'Photograph every screen before toggling — recovery is easier with receipts.',
    ],
    comments: [
      { author: TEAM, age: '5d ago', score: 3, body: 'When unsure, stop and ask support with board model strings.' },
    ],
  }),
  threadRaw({
    slug: 'bios-settings-where-to-document',
    category: 'Hardware',
    categoryTone: 'orange',
    title: 'BIOS settings for hardware utilities — what to write down?',
    excerpt: 'Revert paths matter as much as forward steps.',
    author: 'topic_starter',
    age: '6d ago',
    upvotes: 20,
    published: Date.now() - 520000000,
    productHref: productPath('rainbow-six-siege-spoofer'),
    body: [
      'Note PCIe generation toggles, iGPU defaults, fast boot — small deltas change behavior.',
      'Keep a USB with stock BIOS screenshots if your board allows export.',
    ],
    comments: [
      { author: COMM, age: '5d ago', score: 2, body: 'I reverted once because I changed fan curves accidentally. Fun night.' },
    ],
  }),
  threadRaw({
    slug: 'account-sharing-loader-risk',
    category: 'General',
    categoryTone: 'purple',
    title: 'Account sharing loaders — why support threads warn against it',
    excerpt: 'Licenses, logs, and trust chains get messy.',
    author: 'topic_starter',
    age: '6d ago',
    upvotes: 43,
    published: Date.now() - 524000000,
    productHref: productPath('rainbow-six-siege-cheats'),
    body: [
      'Shared access multiplies leak risk — passwords in Discord DMs age poorly.',
      'If a friend bricks your install, friendship tax is steep.',
    ],
    comments: [
      { author: TEAM, age: '5d ago', score: 8, body: 'Buy under your own email; forward receipts yourself if needed.' },
    ],
  }),
  threadRaw({
    slug: 'screenshots-for-ugc-what-to-crop',
    category: 'Recovery',
    categoryTone: 'green',
    title: 'Screenshots for UGC: what to crop out?',
    excerpt: 'Redact payment tokens, friend lists, unrelated tabs.',
    author: 'topic_starter',
    age: '7d ago',
    upvotes: 22,
    published: Date.now() - 604800000,
    productHref: productPath('ugc-account-recovery'),
    body: [
      'Crop to the error text + timestamp window.',
      'Black-box personal emails unless the appeal explicitly needs them.',
    ],
    comments: [
      { author: TEAM, age: '6d ago', score: 4, body: 'Consistency across crops looks more professional than chaotic fullscreen dumps.' },
    ],
  }),
  threadRaw({
    slug: 'dma-host-distance-limits-realistic',
    category: 'DMA',
    categoryTone: 'purple',
    title: 'Cloud DMA host distance: what limits are realistic?',
    excerpt: 'Physics and routing matter; “anywhere” is marketing.',
    author: 'topic_starter',
    age: '7d ago',
    upvotes: 30,
    published: Date.now() - 610000000,
    productHref: productPath('cloud-dma'),
    relatedArticle: { title: 'What is Cloud DMA for Rainbow Six Siege', path: articlePath('what-is-cloud-dma-for-rainbow-six-siege') },
    body: [
      'Ask the listing about region pairing and failover.',
      'Latency budgets for Siege duels are unforgiving — measure.',
    ],
    comments: [
      { author: COMM, age: '6d ago', score: 5, body: 'I picked a host region adjacent to my ISP hop, not my VPN exit.' },
    ],
  }),
  threadRaw({
    slug: 'where-to-buy-all-four-affiliate-links',
    category: 'General',
    categoryTone: 'purple',
    title: 'Where do the four Buy buttons on /products/ go?',
    excerpt: 'Straight to affiliate listings — one destination per product card.',
    author: 'topic_starter',
    age: '7d ago',
    upvotes: 67,
    published: Date.now() - 615000000,
    productHref: '/products/',
    body: [
      'Each product card uses a single outbound purchase link. Open the product detail page and use Buy there if you want context first.',
      'This site may earn a commission — see the affiliate disclosure in the footer.',
    ],
    comments: [
      { author: TEAM, age: '6d ago', score: 12, body: 'If a link ever errors, stop and verify you are on HTTPS r6-cheats.com before retrying.' },
      { author: COMM, age: '6d ago', score: 3, body: 'I bookmark /products/ as my hub instead of hunting old chats.' },
    ],
  }),
];

export const forumPosts: ForumPost[] = forumPostsBase.map((post, index) => ({
  ...post,
  coverImage: EDITORIAL_WEBP_POOL[index % EDITORIAL_WEBP_POOL.length],
}));

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
