import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

/**
 * ASTRO CONFIGURATION: PakCargo.ae
 * ---------------------------------------------------------
 * site: Required for Sitemap generation and SEO.
 * integrations: React, Tailwind, Sanity, and Sitemap.
 * adapter: Netlify for server-side rendering/deployment.
 */

export default defineConfig({
  // 1. SITE URL: Required for @astrojs/sitemap to work
  site: 'https://cargotopakistan.ae',

  integrations: [
    // 2. SANITY: Connects to your project 9volnp47
    sanity({
      projectId: 'vx91r8qj',
      dataset: 'production',
      useCdn: false, // Set to true for faster production reads in the UAE
    }),

    // 3. REACT: Required for any interactive UI components
    react(),

    // 4. TAILWIND: Main styling engine with explicit config link
    tailwind({
      configFile: 'tailwind.config.mjs',
    }),

    // 5. SITEMAP: Automatically builds your Google-friendly index
    sitemap(),
  ],

  // 6. DEPLOYMENT ADAPTER: Configuration for Netlify hosting
  adapter: netlify(),
});
