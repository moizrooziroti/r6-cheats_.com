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
    eyebrow: 'Buy Rainbow Six Siege cheats',
    titleLine1: 'Rainbow Six Siege',
    titleLine2: 'Cheats — buy now',
    subtitle:
      'Get the r6-cheats.com Siege bundle: ESP, aim assistance, and wallhack-style visuals, plus an HWID spoofer, UGC recovery, and Cloud DMA. Hit Buy and checkout opens in a new tab.',
    ctaPrimary: 'See all cheats',
    ctaDiscord: 'Buy cheats now',
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
    title: 'What you get with Rainbow Six Siege cheats',
    subtitle:
      'ESP, aim assistance, and wallhack-style visuals are the core buy. Spoofer, UGC, and Cloud DMA sit beside them if you need that extra piece.',
    items: [
      {
        title: 'ESP & intel',
        subtitle: 'Read the round faster.',
        desc:
          'Extra labels for operators, gadgets, and distances—so you spend less time guessing rotations.',
        bullets: [
          'Tune color, distance, and opacity instead of turning on “everything.”',
          'Pair labels with sound so the overlay stays readable in a gunfight.',
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
          'Change one slider per session so you know what actually helped.',
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
        bullets: ['Keep lines thin enough that you can still read the site.'],
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
        bullets: ['Use it to organize the case. The platform still decides the result.'],
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
        bullets: ['Buy this when you want a hardware path, not the on-PC cheats loader.'],
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
    title: 'Why r6-cheats.com is the page to read first',
    subtitle:
      'Four Siege products, each with a Buy button that opens the matching checkout. Read the page, then buy the cheats, the spoofer, UGC, or Cloud DMA without hunting a random shop.',
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
        desc: 'Fifteen Siege guides plus forum threads that point back to one of the four products.',
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
      { value: '4', title: 'Products', desc: 'Cheats, spoofer, UGC recovery, Cloud DMA.' },
    ],
  },
  setup: {
    eyebrow: 'Flow',
    titleLead: 'Pick the cheat, open checkout in',
    titleHighlight: 'three steps',
    intro:
      'Choose ESP, aim assist, or wallhack-style cheats — or the spoofer, UGC, or Cloud DMA — then hit Buy. The partner page is the live price and feature list.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Read FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Skim articles',
        desc: 'Read what ESP, aim assist, and wallhack-style tools actually do, then pick the card that matches.',
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
      'Cheats, HWID spoofer, UGC recovery, and Cloud DMA — each card on r6-cheats.com opens its own page, then Buy goes to checkout.',
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
    badge: '4 steps',
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
        desc: 'Forum posts on this domain discuss our four Siege offers. They are not live Ubisoft tickets.',
      },
    ],
  },
  support: {
    eyebrow: 'Help',
    title: 'Support & resources',
    subtitle:
      'Orders are finished on the partner checkout. r6-cheats.com support only covers this website: the four product pages, articles, and forums.',
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
      'Buyer notes show up here only when we have permission to publish them. Until then, the four product pages are the place to buy.',
    emptyTitle: 'No published reviews yet',
    emptyBody:
      'r6-cheats.com does not invent star ratings. Open a product and use Buy when you are ready to check out.',
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
            'r6-cheats.com is an independent Rainbow Six Siege catalog: one cheats offer, one HWID spoofer, one UGC recovery tool, and one Cloud DMA offer, plus original guides and forums written for those four pages. We are not Ubisoft.',
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
