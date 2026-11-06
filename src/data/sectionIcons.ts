import type { IconName } from '../components/icons/types';

export const featureIcons: Record<string, IconName> = {
  Scripts: 'stepCrosshair',
  'Map Hack / ESP': 'featureEsp',
  'Minimap & Runes': 'featureRadar',
  'Auto Combo': 'featureAimbot',
  'Utility Suite': 'featureUtilitySuite',
  'Auto Farm Bot': 'compareAutoFarm',
  'Stream Proof': 'streamProof',
  'Zoom Hack': 'compareZoomHack',
  'Cloud Config & Updates': 'compareCloudBackup',
};

export const whyUsIcons: IconName[] = ['whyShield', 'whyUsers', 'whyMonitor', 'whyHeadphones'];

export const setupStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqCheck'];

export const toolkitIcons: Record<string, IconName> = {
  Combat: 'toolkitCombat',
  Vision: 'toolkitVision',
  Radar: 'toolkitRadar',
  Weapons: 'toolkitWeapons',
  Movement: 'toolkitMovement',
  Profiles: 'toolkitProfiles',
};

export const workflowIcons: IconName[] = [
  'workflowAlert',
  'workflowPackage',
  'workflowSettings',
  'workflowCheck',
];

export const fieldNoteIcons: IconName[] = ['fieldCalendar', 'fieldShield', 'fieldHeadphones'];

export const blogTagIcons: Record<string, IconName> = {
  Guides: 'navBlog',
  Setup: 'settings',
  Features: 'layers',
  Updates: 'refresh',
  Troubleshooting: 'alert',
};

export const heroStatusPills: { icon: IconName; label: string }[] = [
  { icon: 'espActive', label: 'ESP focus' },
  { icon: 'softAim', label: 'Aim assist' },
  { icon: 'mapHack', label: 'Wallhack-style' },
  { icon: 'shieldCheck', label: 'HWID spoofer' },
  { icon: 'users', label: 'UGC recovery' },
  { icon: 'layers', label: 'Cloud DMA' },
  { icon: 'radarOnline', label: 'PC Siege' },
  { icon: 'seasonBuild', label: 'Season patches' },
  { icon: 'streamProof', label: 'Read first' },
  { icon: 'lootEsp', label: 'Articles' },
  { icon: 'uavRadar', label: 'Forums' },
  { icon: 'support247', label: 'FAQ' },
  { icon: 'instantDelivery', label: 'Affiliate checkout' },
  { icon: 'triggerBot', label: 'Four offers' },
  { icon: 'boneSelect', label: 'Compare cards' },
  { icon: 'liveStatus', label: 'No hype claims' },
  { icon: 'autoUpdates', label: 'Patch awareness' },
];

export const heroStatIcons: IconName[] = [
  'heroStatStream',
  'heroStatClock',
  'heroStatUsers',
  'heroStatHeadphones',
];

export const cheatTierIcons: Record<string, IconName> = {
  Lite: 'tierLite',
  Pro: 'tierPro',
  Elite: 'tierElite',
};

export const productCategoryIcons: Record<string, IconName> = {
  'Core product': 'coreProduct',
  'External suite': 'externalSuite',
  'DMA hardware': 'dmaHardware',
  'System utility': 'systemUtility',
  'Account recovery': 'accountRecovery',
  Cosmetic: 'cosmetic',
};

export const acquisitionStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqZap', 'acqCheck'];

/** After-purchase timeline on product detail — one distinct icon per step */
export const productAcquisitionStepIcons: IconName[] = [
  'liveStatus',
  'acqPackage',
  'headphones',
  'acqCheck',
];

/** Product detail requirement tiles — prefer compat-style icons where mapped */
export const productRequirementIcons: Partial<Record<IconName, IconName>> = {
  reqWindows: 'compatWindows',
  reqSteam: 'compatSteam',
  reqSettings: 'compatPackage',
  reqWifi: 'compatWifi',
  reqCpu: 'compatMonitor',
  reqRestorePoint: 'compatRefresh',
  reqShieldGuide: 'compatShield',
  reqMailOrder: 'mail',
  reqShieldAccount: 'compatShield',
  reqWifiPortal: 'compatWifi',
};

export function requirementDisplayIcon(icon: IconName): IconName {
  return productRequirementIcons[icon] ?? icon;
}

export const compatibilityIcons: IconName[] = [
  'compatWindows',
  'compatPackage',
  'compatSteam',
  'compatMonitor',
  'compatRefresh',
  'compatWifi',
  'compatDiscord',
  'compatShield',
];
