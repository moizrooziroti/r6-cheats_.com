/**
 * External SEO media (Supabase). Assign in data (products, articles, forums) — avoid repeating the same URL when a unique editorial image is desired.
 */
export const HERO_VIDEO_URL =
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/02ab714e-de37-423b-81f2-afd7f7fd8d28/1793904035913-gxyi24-day-7-of-rage-cheating-in-rainbow-six-with-5-r6-cheats.mp4';

export const SITE_WEBP = {
  zadeyoMisc:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793620112306-22l10v-zadeyo-rainbowsixsiege-3-misc.webp',
  zadeyoAimbot:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793620110113-75q5qt-zadeyo-rainbowsixsiege-2-aimbot.webp',
  zadeyoVisuals:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793620108922-wtnaya-zadeyo-rainbowsixsiege-1-visuals.webp',
  levoMisc:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619886044-jg3qvh-levo-rainbowsixsiege-3-misc.webp',
  levoAimbot:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619885145-90a2wo-levo-rainbowsixsiege-2-aimbot.webp',
  levoVisuals:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619884081-hhf4k2-levo-rainbowsixsiege-1-visuals.webp',
} as const;

/** Extra Supabase WebPs for articles, product galleries, forum cards, etc. */
export const EXTRA_WEBP = {
  r9:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793467164902-dhd3cn-9.webp',
  r3:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793467060001-uk5739-3.webp',
  r8:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793467030413-2xvj89-8.webp',
  r7:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793467017920-wcqjc4-7.webp',
  r6:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793467013518-uws7ga-6.webp',
  r5:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793467008010-7f5ql2-5.webp',
  r4:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793467002165-gga9sg-4.webp',
} as const;

/** All hosted WebPs (13) — cycle for list thumbnails where you need one image per row without hand-maintaining dozens of URLs. */
export const EDITORIAL_WEBP_POOL = [
  SITE_WEBP.zadeyoMisc,
  SITE_WEBP.zadeyoAimbot,
  SITE_WEBP.zadeyoVisuals,
  SITE_WEBP.levoMisc,
  SITE_WEBP.levoAimbot,
  SITE_WEBP.levoVisuals,
  EXTRA_WEBP.r9,
  EXTRA_WEBP.r3,
  EXTRA_WEBP.r8,
  EXTRA_WEBP.r7,
  EXTRA_WEBP.r6,
  EXTRA_WEBP.r5,
  EXTRA_WEBP.r4,
] as const;
