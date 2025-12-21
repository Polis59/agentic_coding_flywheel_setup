/**
 * Service Catalog for ACFS
 *
 * Defines all services that ACFS recommends or installs.
 * Used by the Accounts wizard step and other components.
 */

export type ServiceCategory = 'access' | 'agent' | 'cloud' | 'devtools';
export type ServicePriority = 'strongly-recommended' | 'recommended' | 'optional';

export interface Service {
  /** Unique identifier, matches manifest module id where applicable */
  id: string;

  /** Display name */
  name: string;

  /** Company/provider name */
  provider: string;

  /** Path to logo (relative to /public) or inline SVG */
  logo: string;

  /** Service category for grouping */
  category: ServiceCategory;

  /** Priority tier for ordering */
  priority: ServicePriority;

  /** One-line description */
  shortDescription: string;

  /** Why this service matters for vibe coding */
  whyNeeded: string;

  /** Primary signup URL */
  signupUrl: string;

  /** Does this service support Google SSO? */
  supportsGoogleSso: boolean;

  /** Direct URL to Google SSO signup flow (if different from signupUrl) */
  googleSsoUrl?: string;

  /** Alternative auth methods available */
  alternativeAuth?: ('github' | 'email' | 'apple')[];

  /** Command to run after install for authentication */
  postInstallCommand?: string;

  /** Whether this service is installed by ACFS */
  installedByAcfs: boolean;

  /** External documentation URL */
  docsUrl: string;
}

export const SERVICES: Service[] = [
  // Access Layer
  {
    id: 'tailscale',
    name: 'Tailscale',
    provider: 'Tailscale',
    logo: '/logos/tailscale.svg',
    category: 'access',
    priority: 'strongly-recommended',
    shortDescription: 'Zero-config VPN for secure remote access',
    whyNeeded: 'Access your VPS from anywhere without exposing ports. SSH over private network, no firewall needed.',
    signupUrl: 'https://login.tailscale.com/start',
    supportsGoogleSso: true,
    googleSsoUrl: 'https://login.tailscale.com/start',
    alternativeAuth: ['github', 'apple'],
    postInstallCommand: 'sudo tailscale up',
    installedByAcfs: true,
    docsUrl: 'https://tailscale.com/kb/',
  },

  // Coding Agents
  {
    id: 'claude-code',
    name: 'Claude Code',
    provider: 'Anthropic',
    logo: '/logos/anthropic.svg',
    category: 'agent',
    priority: 'strongly-recommended',
    shortDescription: 'Primary AI coding agent',
    whyNeeded: 'Claude Code is your main AI pair programmer. Understands context, writes code, explains concepts.',
    signupUrl: 'https://claude.ai/',
    supportsGoogleSso: true,
    googleSsoUrl: 'https://claude.ai/login',
    postInstallCommand: 'claude',
    installedByAcfs: true,
    docsUrl: 'https://docs.anthropic.com/',
  },
  {
    id: 'codex-cli',
    name: 'Codex CLI',
    provider: 'OpenAI',
    logo: '/logos/openai.svg',
    category: 'agent',
    priority: 'recommended',
    shortDescription: 'OpenAI coding agent (requires ChatGPT Pro)',
    whyNeeded: 'Secondary AI agent. Different model = different perspectives. Requires ChatGPT Pro subscription.',
    signupUrl: 'https://chat.openai.com/',
    supportsGoogleSso: true,
    googleSsoUrl: 'https://chat.openai.com/auth/login',
    alternativeAuth: ['apple', 'email'],
    postInstallCommand: 'codex login',
    installedByAcfs: true,
    docsUrl: 'https://platform.openai.com/docs/',
  },
  {
    id: 'gemini-cli',
    name: 'Gemini CLI',
    provider: 'Google',
    logo: '/logos/google.svg',
    category: 'agent',
    priority: 'optional',
    shortDescription: 'Google AI coding agent',
    whyNeeded: 'Third AI option. Native Google integration. Good for Google Cloud projects.',
    signupUrl: 'https://accounts.google.com/',
    supportsGoogleSso: true, // It IS Google
    postInstallCommand: 'gemini',
    installedByAcfs: true,
    docsUrl: 'https://ai.google.dev/',
  },

  // Developer Tools
  {
    id: 'github',
    name: 'GitHub',
    provider: 'Microsoft',
    logo: '/logos/github.svg',
    category: 'devtools',
    priority: 'strongly-recommended',
    shortDescription: 'Code hosting and version control',
    whyNeeded: 'Store your code, collaborate, use GitHub Actions for CI/CD. Essential for any developer.',
    signupUrl: 'https://github.com/signup',
    supportsGoogleSso: false, // Email-based, but can link Google email
    alternativeAuth: ['email'],
    installedByAcfs: false, // Just needs git config
    docsUrl: 'https://docs.github.com/',
  },

  // Cloud Platforms
  {
    id: 'vercel',
    name: 'Vercel',
    provider: 'Vercel',
    logo: '/logos/vercel.svg',
    category: 'cloud',
    priority: 'recommended',
    shortDescription: 'Frontend deployment platform',
    whyNeeded: 'Deploy Next.js, React, and static sites with zero config. Git push = live site.',
    signupUrl: 'https://vercel.com/signup',
    supportsGoogleSso: true,
    alternativeAuth: ['github', 'email'],
    postInstallCommand: 'vercel login',
    installedByAcfs: true,
    docsUrl: 'https://vercel.com/docs',
  },
  {
    id: 'supabase',
    name: 'Supabase',
    provider: 'Supabase',
    logo: '/logos/supabase.svg',
    category: 'cloud',
    priority: 'optional',
    shortDescription: 'Postgres database + auth + realtime',
    whyNeeded: 'Firebase alternative with real Postgres. Great for MVPs and full apps alike.',
    signupUrl: 'https://supabase.com/dashboard',
    supportsGoogleSso: true,
    alternativeAuth: ['github'],
    postInstallCommand: 'supabase login',
    installedByAcfs: true,
    docsUrl: 'https://supabase.com/docs',
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    provider: 'Cloudflare',
    logo: '/logos/cloudflare.svg',
    category: 'cloud',
    priority: 'optional',
    shortDescription: 'CDN, DNS, Workers, and more',
    whyNeeded: 'Free CDN, DNS management, edge computing. Great for performance and DDoS protection.',
    signupUrl: 'https://dash.cloudflare.com/sign-up',
    supportsGoogleSso: false, // Email-based only
    alternativeAuth: ['email'],
    postInstallCommand: 'wrangler login',
    installedByAcfs: true,
    docsUrl: 'https://developers.cloudflare.com/',
  },
];

// Helper functions
export function getServicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter((s) => s.category === category);
}

export function getServicesByPriority(priority: ServicePriority): Service[] {
  return SERVICES.filter((s) => s.priority === priority);
}

export function getGoogleSsoServices(): Service[] {
  return SERVICES.filter((s) => s.supportsGoogleSso);
}

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}

/** Category display names */
export const CATEGORY_NAMES: Record<ServiceCategory, string> = {
  access: 'Access & Security',
  agent: 'AI Coding Agents',
  cloud: 'Cloud Platforms',
  devtools: 'Developer Tools',
};

/** Priority display names */
export const PRIORITY_NAMES: Record<ServicePriority, string> = {
  'strongly-recommended': 'Strongly Recommended',
  recommended: 'Recommended',
  optional: 'Optional',
};
