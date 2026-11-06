import { t } from '../i18n';
import { buyUrlForSlug } from '../config/checkout';
import { EXTRA_WEBP, SITE_WEBP } from '../config/siteMedia';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Articles paired with each product detail page (slug under /articles/) */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  'rainbow-six-siege-cheats': [
    'how-rainbow-six-siege-cheats-work',
    'r6-esp-vs-aimbot-vs-wallhack',
    'r6-cheat-settings-explained',
    'r6-esp-customization-tips',
    'r6-aimbot-settings-and-overaim',
    'r6-wallhack-config-readability',
  ],
  'rainbow-six-siege-spoofer': [
    'what-is-an-hwid-spoofer-for-r6',
    'r6-cheat-troubleshooting-basics',
    'software-cheats-vs-cloud-dma-tradeoffs',
  ],
  'ugc-account-recovery': [
    'ugc-account-recovery-explained',
    'buying-r6-cheats-checklist',
    'how-to-choose-an-r6-cheat',
  ],
  'cloud-dma': [
    'what-is-cloud-dma-for-rainbow-six-siege',
    'software-cheats-vs-cloud-dma-tradeoffs',
    'r6-cheat-performance-and-pc-load',
  ],
};

const productBase = '/products/';

/** Product galleries: primary SITE_WEBP stills plus a second Supabase still from EXTRA_WEBP (see siteMedia). */
const IMG = SITE_WEBP;

const siegeSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: '64-bit Windows 10 or 11 (exact minimum build: confirm with checkout listing).' },
  { icon: 'reqSettings', text: 'Administrator or elevated install when the product documentation requires it.' },
  { icon: 'reqWifi', text: 'Stable connection for downloads, updates, and any cloud-linked workflows.' },
  { icon: 'reqCpu', text: 'Hardware that meets Rainbow Six Siege performance expectations for smooth play.' },
];

function slides(
  items: { src: string; alt: string; caption: string; captionDesc: string }[],
): ProductSlide[] {
  return items;
}

const acquisitionDefault = (productLabel: string): ProductAcquisition => ({
  title: `How access works — ${productLabel}`,
  steps: [
    {
      num: '01',
      title: 'Confirm scope on the checkout page',
      desc: 'Review what the listing includes, supported environment notes, and the risk disclosure before paying.',
    },
    {
      num: '02',
      title: 'Complete purchase',
      desc: 'Use the Buy button on this page. It opens the official checkout in a new tab.',
    },
    {
      num: '03',
      title: 'Follow delivery instructions',
      desc: 'Use the access steps provided after purchase. Keep installers and docs in one folder for support requests.',
    },
    {
      num: '04',
      title: 'Validate in a safe session first',
      desc: 'Test overlays or tools in a private or low-stakes session before relying on them under pressure.',
    },
  ],
});

export const productPages: ProductPage[] = [
  {
    slug: 'rainbow-six-siege-cheats',
    kind: 'utility',
    badge: 'Core offer',
    category: 'Core product',
    name: 'Cheats',
    title: 'RAINBOW SIX SIEGE CHEATS',
    subtitle: 'ESP, aim assistance, and wallhack-style visibility layers described in plain language — tuned for players comparing Rainbow Six Siege cheats before checkout.',
    desc: 'Rainbow Six Siege cheats for PC: ESP, aim assistance, and wallhack-style visuals. Buy opens the live module list.',
    features: [
      'Player and gadget ESP-style readouts (as listed at checkout)',
      'Aim assistance controls with tunable parameters',
      'Wallhack-style visibility emphasis when described on the listing',
      'In-menu configuration and saved profiles where applicable',
    ],
    more: 0,
    variant: 'popular',
    buyUrl: buyUrlForSlug('rainbow-six-siege-cheats'),
    images: slides([
      {
        src: IMG.zadeyoVisuals,
        alt: 'Rainbow Six Siege cheat overlay — visuals emphasis (example capture)',
        caption: 'Visual overlay',
        captionDesc: 'Illustrative only; exact modules are on the checkout listing.',
      },
      {
        src: EXTRA_WEBP.r9,
        alt: 'Rainbow Six Siege tactical HUD / intel layer (illustrative)',
        caption: 'Intel layer',
        captionDesc: 'Second still — compare with listing screenshots before purchase.',
      },
    ]),
    overview: {
      title: 'What this bundle is for',
      paragraphs: [
        'Buy Rainbow Six Siege cheats here when you want ESP, aim assistance, and wallhack-style visuals in one menu. Hit Buy and the partner checkout lists the live modules, price, and delivery.',
        'Account risk is real and we do not claim a detection status. The point of this page is a clear path to the cheats, the spoofer, UGC, or Cloud DMA — not a copied feature list from another brand.',
      ],
    },
    acquisition: acquisitionDefault('Siege cheats'),
    goodToKnow:
      'On the cheats page, start with one profile. Confirm ESP, aim, and wallhack names on checkout before you treat a forum screenshot as the menu.',
    limitations:
      'The Rainbow Six Siege cheats offer on r6-cheats.com can conflict with the game rules and can cost the account. We do not state a detection status. Modules can change after a Siege update — checkout is the current list.',
    fullFeatures: [
      'ESP-style enemy and gadget readouts (per listing)',
      'Aim smoothing / FOV-style controls where offered',
      'Visibility-through-surface modes when listed as wallhack',
      'Profile save or import if the product ships it',
      'Readable color and distance options when available',
    ],
    systemRequirements: siegeSystemRequirements,
    about: [
      {
        type: 'p',
        text: 'If you are new to these categories, read [how R6 cheats work](/articles/how-rainbow-six-siege-cheats-work/) and [ESP vs aimbot vs wallhack](/articles/r6-esp-vs-aimbot-vs-wallhack/) before buying.',
      },
    ],
    body: [
      { type: 'h2', text: 'How the pieces fit together' },
      {
        type: 'p',
        text: 'ESP answers “where” — gadgets, traps, and positions. Aim assistance answers “how fast you acquire the shot.” Wallhack-style modes stress what you can see through surfaces when the listing includes that behavior.',
      },
      {
        type: 'h2',
        text: 'After purchase',
      },
      {
        type: 'p',
        text: 'Delivery details, keys, and loaders live on the checkout side. Return here for [forum threads](/forums/) or [articles](/articles/) about settings — not for account recovery; that is the [UGC tool](/products/ugc-account-recovery/) page.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['rainbow-six-siege-cheats'] ?? [],
  },
  {
    slug: 'rainbow-six-siege-spoofer',
    kind: 'utility',
    badge: 'System',
    category: 'System utility',
    name: 'Spoofer',
    title: 'R6 HWID spoofer',
    subtitle: 'Hardware identifier spoofing utilities for Rainbow Six Siege players replacing machines or following strict hardware checks — scope depends on the listing.',
    desc: 'R6 HWID spoofer for Rainbow Six Siege. It changes supported PC identifiers and is not the cheats menu.',
    features: [
      'HWID or component identifier handling (as described at checkout)',
      'Driver or cleanup steps if the listing includes them',
      'Post-change verification workflow when provided',
    ],
    more: 0,
    variant: 'essential',
    buyUrl: buyUrlForSlug('rainbow-six-siege-spoofer'),
    images: slides([
      {
        src: IMG.levoMisc,
        alt: 'PC hardware / system utilities context for HWID tooling (illustrative)',
        caption: 'System & identifiers',
        captionDesc: 'Illustrative — spoofer scope is defined at checkout.',
      },
      {
        src: EXTRA_WEBP.r3,
        alt: 'Windows / driver stack context for identifier tools (illustrative)',
        caption: 'Drivers & reboot',
        captionDesc: 'Follow vendor steps — this is not device-specific documentation.',
      },
    ]),
    overview: {
      title: 'When people look for a spoofer',
      paragraphs: [
        'Hardware bans and strict device ties are common search topics. A spoofer attempts to present different hardware identifiers to the platform when the product supports that workflow.',
        'This is not the same as an appeal. Pair documentation habits with the [UGC Account Recovery](/products/ugc-account-recovery/) page if you are organizing an account case.',
      ],
    },
    acquisition: acquisitionDefault('HWID spoofer'),
    goodToKnow:
      'The spoofer card is only for hardware-identifier scope written on its own listing. It is not the cheats menu and it is not an appeal.',
    limitations:
      'An HWID spoofer on r6-cheats.com does not restore a Rainbow Six Siege account and does not add ESP. Platform rules still apply. Coverage is whatever that checkout page lists for Windows and reboot steps.',
    fullFeatures: [
      'Configurable identifier targets as listed',
      'Reboot or verification steps from documentation',
      'Compatibility notes for Windows builds on the checkout page',
    ],
    systemRequirements: siegeSystemRequirements,
    body: [
      { type: 'h2', text: 'Understand the limit' },
      {
        type: 'p',
        text: 'See [what an HWID spoofer is for Siege](/articles/what-is-an-hwid-spoofer-for-r6/) for terminology. The checkout listing decides exact coverage — we do not invent chipset lists here.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['rainbow-six-siege-spoofer'] ?? [],
  },
  {
    slug: 'ugc-account-recovery',
    kind: 'utility',
    badge: 'Account',
    category: 'Account recovery',
    name: 'UGC',
    title: 'UGC Account Recovery',
    subtitle: 'Account recovery and appeal workflow tooling — organize evidence and follow structured steps instead of scattering files across chats.',
    desc: 'UGC tool for Rainbow Six Siege account recovery: document trails, forms, and status tracking as offered on the product listing.',
    features: [
      'Case or ticket organization when the product provides it',
      'Templates or checklists if included with purchase',
      'Export or history views when listed',
    ],
    more: 0,
    variant: 'essential',
    buyUrl: buyUrlForSlug('ugc-account-recovery'),
    images: slides([
      {
        src: IMG.zadeyoMisc,
        alt: 'Account documentation and recovery workflow (illustrative)',
        caption: 'Recovery workspace',
        captionDesc: 'Illustrative — UGC features follow the listing.',
      },
      {
        src: EXTRA_WEBP.r8,
        alt: 'Case files and evidence layout (illustrative)',
        caption: 'Evidence layout',
        captionDesc: 'Organize exports as your listing recommends.',
      },
    ]),
    overview: {
      title: 'What “recovery” means here',
      paragraphs: [
        'UGC-style tools help you assemble timelines, evidence, and responses. They do not guarantee reinstatement — publishers make final calls.',
        'Use this when you need structured paperwork more than in-round overlays.',
      ],
    },
    acquisition: acquisitionDefault('UGC'),
    goodToKnow:
      'UGC on this site is a documentation workflow. Keep originals of screenshots and do not expect the tool to decide the appeal.',
    limitations:
      'UGC Account Recovery on r6-cheats.com organizes a case. Ubisoft or the platform decides the outcome. This product is not a cheat overlay and not a hardware spoofer.',
    fullFeatures: [
      'Document attachments or notes if supported',
      'Status visibility when the product includes it',
    ],
    systemRequirements: siegeSystemRequirements,
    body: [
      { type: 'h2', text: 'Related reading' },
      {
        type: 'p',
        text: 'See [UGC account recovery explained](/articles/ugc-account-recovery-explained/). For purchases across categories, [buying checklist](/articles/buying-r6-cheats-checklist/) covers questions to ask first.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['ugc-account-recovery'] ?? [],
  },
  {
    slug: 'cloud-dma',
    kind: 'utility',
    badge: 'Hardware path',
    category: 'DMA',
    name: 'Cloud DMA',
    title: 'Cloud DMA',
    subtitle: 'Cloud DMA for Rainbow Six Siege — memory read at distance with separate host gear, when the listing matches that architecture.',
    desc: 'Cloud DMA for Rainbow Six Siege: a hardware read path, separate from the on-PC cheats loader.',
    features: [
      'DMA-style read path when listed',
      'Cloud-hosted or off-box processing if included',
      'Setup expectations separate from standard loaders',
    ],
    more: 0,
    variant: 'limited',
    buyUrl: buyUrlForSlug('cloud-dma'),
    images: slides([
      {
        src: IMG.levoVisuals,
        alt: 'Cloud DMA or external read path context (illustrative)',
        caption: 'Hardware path',
        captionDesc: 'Illustrative — bridge and cabling details are on the listing.',
      },
      {
        src: EXTRA_WEBP.r7,
        alt: 'Separate machine / bridge routing concept (illustrative)',
        caption: 'Off-PC read path',
        captionDesc: 'Confirm gear list and firmware on the checkout page.',
      },
    ]),
    overview: {
      title: 'Why DMA is a different conversation',
      paragraphs: [
        'Software overlays run alongside or inject into your game session in ways players often recognize first. DMA setups read memory through separate hardware paths — the tradeoff is cost, cabling, and learning curve.',
        'Read [what Cloud DMA is for Siege](/articles/what-is-cloud-dma-for-rainbow-six-siege/) and compare [software vs DMA tradeoffs](/articles/software-cheats-vs-cloud-dma-tradeoffs/) before buying.',
      ],
    },
    acquisition: acquisitionDefault('Cloud DMA'),
    goodToKnow:
      'Cloud DMA is the only hardware-path offer here. Read the bridge and second-PC notes on its listing before comparing it to the software cheats card.',
    limitations:
      'Cloud DMA on r6-cheats.com needs the gear the listing names. It is a different buy from the on-PC cheats loader. Account risk and patch breakage still exist; we do not claim a detection status.',
    fullFeatures: [
      'Hardware bridge requirements as listed',
      'Cloud or remote processing notes from documentation',
      'Installation sequence for firmware or devices if applicable',
    ],
    systemRequirements: siegeSystemRequirements,
    body: [
      { type: 'h2', text: 'Cross-check' },
      {
        type: 'p',
        text: 'If you only need overlays, the [main cheats product](/products/rainbow-six-siege-cheats/) may fit better. DMA is for buyers who already understand the hardware story.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['cloud-dma'] ?? [],
  },
];

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: t.products.subtitle,
  buyUrl: buyUrlForSlug('rainbow-six-siege-cheats'),
};

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}
