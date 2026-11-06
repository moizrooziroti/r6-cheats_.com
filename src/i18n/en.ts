import type { Translations } from './types';
import { PRIMARY_BUY_URL } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import { blogPosts } from '../data/blog/posts';
import { EXTRA_WEBP, SITE_WEBP } from '../config/siteMedia';

const productBase = PRODUCT_BASE;

const blogItems = blogPosts.map((p) => ({
  tag: p.tag,
  title: p.title,
  slug: p.slug,
  image: p.image,
  desc: p.desc,
  date: p.date,
  readTime: p.readTime,
}));

export const en: Translations = {
  site: {
    name: 'R6-Cheats',
    domain: 'r6-cheats.com',
    title: 'Rainbow Six Siege Cheats | R6 ESP & Aim',
    description:
      'Rainbow Six Siege cheats hub: ESP, aim assistance, and wallhack-style tools for PC — four products, affiliate checkout, articles, and forums.',
    discord: PRIMARY_BUY_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/articles/', label: 'Articles' },
    { href: '/forums/', label: 'Forums' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'PC · Rainbow Six Siege',
    eyebrow: 'Resource site',
    titleLine1: 'Rainbow Six Siege',
    titleLine2: 'Cheats & tools',
    subtitle:
      'Compare four affiliate offers—Rainbow Six Siege cheats (ESP, aimbot-style assist, wallhack-style visibility), HWID spoofer, UGC account recovery, and Cloud DMA. Read articles and forums first; Buy opens checkout in a new tab.',
    ctaPrimary: 'Browse products',
    ctaDiscord: 'Buy cheats',
    modesLabel: 'Focus areas',
    modes: ['ESP', 'Aim assist', 'Wallhack-style', 'HWID · UGC · DMA'],
    metrics: [
      { label: 'Offers', strong: '4' },
      { label: 'Articles', strong: '15' },
      { label: 'Forum threads', strong: '36' },
      { label: 'Support', strong: 'FAQ' },
    ],
  },
  features: {
    eyebrow: 'What we cover',
    title: 'Four ways buyers talk about Siege tools',
    subtitle:
      'Short, neutral descriptions—you’ll match them to vendor listings at checkout. We don’t claim stealth or outcomes.',
    items: [
      {
        title: 'ESP & intel',
        subtitle: 'Read the round faster.',
        desc:
          'Extra labels for operators, gadgets, and distances—so you spend less time guessing rotations.',
        bullets: [
          'Tune color, distance, and opacity instead of turning on “everything.”',
          'Pair with sound—see [forums](/forums/) for clutter threads.',
        ],
        tags: ['R6 ESP', 'Siege overlay', 'gadget intel'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
        image: SITE_WEBP.zadeyoVisuals,
        imageAlt: 'Illustrative ESP / intel overlay — exact UI depends on your checkout listing.',
      },
      {
        title: 'Aim assistance',
        subtitle: 'Travel and acquisition.',
        desc:
          'Smoothing, FOV, bone priority—settings that change how your crosshair moves under stress.',
        bullets: [
          'Change one slider per session ([settings article](/articles/r6-cheat-settings-explained/)).',
          'Expect missed shots when ping or crosshair height is wrong.',
        ],
        tags: ['R6 aimbot', 'smoothing', 'FOV'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
        image: SITE_WEBP.zadeyoAimbot,
        imageAlt: 'Illustrative aim-assist style menu — keys and ranges vary by seller.',
      },
      {
        title: 'Wallhack-style',
        subtitle: 'Geometry emphasis.',
        desc:
          'Outlines through cover trade GPU work for spatial certainty—thicken on dark sites, thin on bright ones.',
        bullets: ['See [readability](/articles/r6-wallhack-config-readability/) before maxing lines.'],
        tags: ['R6 wallhack', 'cover reads', 'verticality'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
        image: SITE_WEBP.levoVisuals,
        imageAlt: 'Illustrative visibility / geometry read — tune for your map pool.',
      },
      {
        title: 'HWID spoofer',
        subtitle: 'Hardware identity tooling.',
        desc:
          'For buyers researching identifier changes—scope only what the listing supports.',
        bullets: ['Not an appeal substitute—use UGC recovery for paperwork.'],
        tags: ['HWID', 'hardware', 'identifiers'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
        image: SITE_WEBP.levoMisc,
        imageAlt: 'Hardware / system context for HWID tools — follow the product documentation.',
      },
      {
        title: 'UGC recovery',
        subtitle: 'Appeal workflows.',
        desc:
          'Organize evidence, timelines, and exports when access is restricted—no outcome promises.',
        bullets: ['Explained in [UGC article](/articles/ugc-account-recovery-explained/).'],
        tags: ['UGC', 'account recovery', 'appeals'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
        image: SITE_WEBP.zadeyoMisc,
        imageAlt: 'Evidence and recovery workflow illustration — outcomes stay with the platform.',
      },
      {
        title: 'Cloud DMA',
        subtitle: 'Separate hardware path.',
        desc:
          'Memory read at a distance—different cost and cabling than overlays.',
        bullets: ['Compare [software vs DMA](/articles/software-cheats-vs-cloud-dma-tradeoffs/).'],
        tags: ['Cloud DMA', 'memory read', 'hardware'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-3',
        image: EXTRA_WEBP.r7,
        imageAlt: 'Separate machine / bridge path concept — confirm gear on the listing.',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why read here first',
    title: 'Editorial framing, not vendor hype',
    subtitle:
      'We publish checklists and tradeoffs so you know what to verify on the checkout page. Third-party tools may breach game terms — account risk stays with you.',
    usLabel: 'This site',
    otherLabel: 'Typical hype',
    rows: [
      {
        title: 'No detection promises',
        desc: 'We don’t use “undetected,” “safe,” or anti-cheat bypass language.',
      },
      {
        title: 'Affiliate clarity',
        desc: 'Buy buttons are sponsored links to a partner checkout.',
      },
      {
        title: 'Four fixed destinations',
        desc: 'Cheats, spoofer, UGC, Cloud DMA — mapped one-to-one.',
      },
      {
        title: 'Articles + forums',
        desc: 'Long-form explainers and text-only Q&A threads you can search.',
      },
      {
        title: 'Honest limitations',
        desc: 'Compatibility and availability change — we say so repeatedly.',
      },
      {
        title: 'Settings discipline',
        desc: 'Slow changes beat “max everything” profiles that feel good for ten minutes.',
      },
    ],
    metrics: [
      { value: '15', title: 'Articles', desc: 'Guides, glossaries, and checklists.' },
      { value: '36', title: 'Forum threads', desc: 'Reader questions and team answers.' },
      { value: '4', title: 'Products', desc: 'Same price until you supply a number.' },
    ],
  },
  setup: {
    eyebrow: 'Flow',
    titleLead: 'From skimming articles to checking out in',
    titleHighlight: 'three calm steps',
    intro:
      'Read, compare the four cards, then open Buy only when checkout language matches what you need.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Read FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Skim articles',
        desc: 'Start with [how cheats work](/articles/how-rainbow-six-siege-cheats-work/) and the [buying checklist](/articles/buying-r6-cheats-checklist/).',
      },
      {
        step: 'Step 2',
        title: 'Pick one offer',
        desc: 'Open a product detail page — each has FAQs and related articles.',
      },
      {
        step: 'Step 3',
        title: 'Buy on checkout',
        desc: 'Use Buy (sponsored, new tab). Save confirmation email and docs.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Built for PC readers',
    subtitle:
      'Confirm OS and hardware on each listing — we keep site copy generic on purpose.',
    items: [
      'Windows 10/11 64-bit (verify on listing)',
      'Ubisoft / Siege client updates',
      'Checkout documentation',
      'Affiliate support channels',
      'Optional DMA gear',
      'Forum search',
      'Articles index',
      'Risk disclosure in footer',
    ],
  },
  cheats: {
    eyebrow: 'Single bundle',
    title: 'Rainbow Six Siege cheats (ESP · aim assist · wallhack-style)',
    subtitle:
      'One card with the same price as the other three — details stay on the affiliate listing.',
    viewAll: 'View product',
    explore: 'Details',
    items: [],
  },
  products: {
    eyebrow: 'Products',
    title: 'Four Rainbow Six Siege offers',
    subtitle:
      'Same checkout price placeholder (see pricing note on cards) — swap in your amount in docs/missing-info.md.',
    viewAll: 'View catalog',
    get: 'Get',
    explore: 'Explore',
    items: [],
  },
  blog: {
    eyebrow: 'Articles',
    title: 'Guides and comparisons',
    subtitle:
      'ESP vs aim vs wallhack, DMA, HWID vocabulary, and checklists — written for shoppers, not hype.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort by date and reading length.',
    filterAll: 'All topics',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: blogItems,
  },
  toolkit: {
    eyebrow: 'Reading paths',
    title: 'Pick your lane',
    subtitle:
      'Match the article series to what you are buying—software overlays, recovery docs, or DMA hardware.',
    items: [
      {
        num: '01',
        label: 'Start',
        title: 'How cheats work',
        desc: '[Technical primer](/articles/how-rainbow-six-siege-cheats-work/) without vendor jargon.',
      },
      {
        num: '02',
        label: 'Terms',
        title: 'ESP vs aim vs wallhack',
        desc: '[Disambiguation](/articles/r6-esp-vs-aimbot-vs-wallhack/) before comparing listings.',
      },
      {
        num: '03',
        label: 'Buy',
        title: 'Checklist',
        desc: '[Questions to ask](/articles/buying-r6-cheats-checklist/) before paying.',
      },
      {
        num: '04',
        label: 'Tune',
        title: 'Settings',
        desc: '[Slider vocabulary](/articles/r6-cheat-settings-explained/) to avoid thrash.',
      },
      {
        num: '05',
        label: 'Hardware',
        title: 'HWID spoofer',
        desc: '[Definition](/articles/what-is-an-hwid-spoofer-for-r6/) plus spoofer product page.',
      },
      {
        num: '06',
        label: 'DMA',
        title: 'Cloud path',
        desc: '[DMA intro](/articles/what-is-cloud-dma-for-rainbow-six-siege/) and tradeoff article.',
      },
    ],
  },
  workflow: {
    eyebrow: 'Workflow',
    badge: '3 steps',
    titleBefore: 'From reading to',
    titleHighlight: 'checkout',
    subtitle: 'Pause on each step—rushing configuration wastes money and time.',
    ctaLabel: 'Open products',
    ctaHref: productBase,
    ctaSecondary: 'Community Q&A',
    ctaSecondaryHref: '/forums/',
    items: [
      {
        num: '01',
        phase: 'Read',
        title: 'Articles first',
        desc: 'Especially risk and vocabulary pieces linked from the home page.',
      },
      {
        num: '02',
        phase: 'Compare',
        title: 'Pick one product',
        desc: 'Cheats vs spoofer vs UGC vs Cloud DMA — different jobs.',
      },
      {
        num: '03',
        phase: 'Purchase',
        title: 'Affiliate checkout',
        desc: 'We may earn a commission — disclosure in footer.',
      },
      {
        num: '04',
        phase: 'After',
        title: 'Organize docs',
        desc: 'Save emails, versions, and uninstall notes in one folder.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Things players overlook',
    items: [
      {
        num: '01',
        title: 'Patch cadence',
        desc: 'Expect friction after seasons — vanilla night is valid.',
      },
      {
        num: '02',
        title: 'Account risk',
        desc: 'Terms of service still apply — no outcome guarantees.',
      },
      {
        num: '03',
        title: 'Forum tone',
        desc: 'Threads are editorial Q&A — not verified customer claims.',
      },
    ],
  },
  support: {
    eyebrow: 'Help',
    title: 'Support & resources',
    subtitle:
      'Checkout handles purchases. We provide FAQ, articles, and forums on this domain.',
    channels: [
      {
        icon: 'navProducts',
        title: 'Browse products',
        desc: 'Four cards with Buy + View — affiliate links only.',
        linkLabel: 'Open catalog',
        href: productBase,
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Risk, affiliate disclosure, and definitions.',
        linkLabel: 'Read FAQ',
        href: '/faq/',
      },
      {
        icon: 'navBlog',
        title: 'Articles',
        desc: 'Long-form explainers — start with the featured article.',
        linkLabel: 'Articles',
        href: '/articles/',
      },
      {
        icon: 'messageCircle',
        title: 'Forums',
        desc: 'Search threads before asking in email.',
        linkLabel: 'Forums',
        href: '/forums/',
      },
    ],
    ticketTitle: 'If you email support',
    ticketItems: [
      { title: 'Offer name', desc: 'Which of the four products (cheats, spoofer, UGC, DMA).' },
      { title: 'What you already tried', desc: 'Article or forum links you followed.' },
      { title: 'No payment disputes here', desc: 'We do not process cards — use checkout support for billing.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Risk, affiliates, and definitions',
    subtitle:
      'Third-party tools may violate Rainbow Six Siege terms and cause account restrictions. No detection or safety guarantees.',
    items: [
      { num: '01', q: 'Are Buy links affiliate?', a: 'Yes — sponsored outbound links; see Affiliate Disclosure.' },
      { num: '02', q: 'Do you claim tools are undetected?', a: 'No. We avoid stealth and bypass language entirely.' },
      { num: '03', q: 'Where are the four products?', a: '/products/ lists cheats, spoofer, UGC recovery, and Cloud DMA.' },
    ],
  },
  reviews: {
    eyebrow: 'Reader notes',
    title: 'Checkout experiences',
    subtitle:
      'Short quotes when we have permission to publish them. No aggregate rating until real reviews exist in data/reviews.json.',
    emptyTitle: 'No published reviews yet',
    emptyBody:
      'When you supply entries for data/reviews.json, they will appear here with pagination. We do not show review schema until content is visible.',
  },
  footer: {
    tagline: 'Rainbow Six Siege cheats — ESP, aim assist, wallhack-style, HWID, UGC, DMA. Affiliate links.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Home overview', ariaLabel: 'Home', scrollTarget: 'features' },
      { href: productBase, label: 'Products', ariaLabel: 'Products' },
      { href: '/articles/', label: 'Articles', ariaLabel: 'Articles' },
      { href: '/forums/', label: 'Forums', ariaLabel: 'Forums' },
      { href: '/faq/', label: 'FAQ', ariaLabel: 'FAQ' },
      { href: '/affiliate-disclosure/', label: 'Affiliate Disclosure', ariaLabel: 'Affiliate Disclosure' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
    affiliateNote:
      'Buy buttons are sponsored affiliate links: we may earn a commission when you complete checkout on the partner site.',
    riskNote:
      'Third-party tools can breach game terms — account restrictions are possible. Content here is informational, not a product warranty.',
  },
  legalPages: {
    affiliateDisclosure: {
      title: 'Affiliate Disclosure',
      description:
        'How sponsored Buy links on r6-cheats.com work and how we are compensated.',
      sections: [
        {
          heading: 'Sponsored outbound links',
          paragraphs: [
            'This site lists four Rainbow Six Siege related offers. Buy buttons on product cards and in the header open a third-party checkout in a new browser tab.',
            'Those links are affiliate or sponsored links: if you complete a qualifying purchase, we may receive a commission at no extra cost to you.',
          ],
        },
        {
          heading: 'Who handles orders',
          paragraphs: [
            'Checkout, payment, delivery, refunds, and support are handled entirely by the partner site. r6-cheats.com does not process your payment or access your order details.',
          ],
        },
        {
          heading: 'Editorial independence',
          paragraphs: [
            'Articles and forum threads are written for general education. They are not personalized advice and can change when the game or listings change.',
          ],
        },
      ],
    },
    about: {
      title: 'About this site',
      description: 'Editorial Rainbow Six Siege cheats resource with affiliate purchases.',
      sections: [
        {
          heading: 'What we publish',
          paragraphs: [
            'r6-cheats.com summarizes product categories (cheats, HWID spoofer, UGC recovery, Cloud DMA), publishes articles, and hosts text-only forum Q&A. We are not the game publisher.',
            'Game names are used descriptively; trademarks belong to their owners.',
          ],
        },
        {
          heading: 'How purchases work',
          paragraphs: [
            'Buy buttons open a partner checkout in a new tab. We may receive a commission — see Affiliate Disclosure.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'How r6-cheats.com handles browsing data and contact messages.',
      sections: [
        {
          heading: 'Analytics',
          paragraphs: [
            'We may use privacy-respecting analytics to see which pages are read. You can block cookies in your browser.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'If you email support, we retain messages only as long as needed to respond.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description: 'Using r6-cheats.com and affiliate checkout links.',
      sections: [
        {
          heading: 'Risk',
          paragraphs: [
            'Third-party software may violate game terms and lead to account restrictions. You accept that risk.',
          ],
        },
        {
          heading: 'Content',
          paragraphs: [
            'Articles and forums are informational. Vendor listings may change without our knowledge — rely on checkout text for features.',
          ],
        },
      ],
    },
    support: {
      title: 'Support',
      description: 'Help using this site — not order fulfillment.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Open checkout',
    browseCheatsMobile: 'Buy',
    homeAria: 'R6-Cheats home',
    checkoutAria: 'Open affiliate checkout',
    discordAria: 'Purchase Rainbow Six Siege cheats',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
