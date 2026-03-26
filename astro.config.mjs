import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 1. SITE URL: Primary domain for UAE-Pakistan logistics
  site: 'https://cargotopakistan.ae',

  integrations: [
    // 2. SANITY: Connecting to your logistics database
    sanity({
      projectId: 'vx91r8qj',
      dataset: 'production',
      useCdn: true, // Optimized for faster performance in the UAE
    }),

    react(),

    tailwind({
      configFile: 'tailwind.config.mjs',
    }),

    // 3. SEO: Ensuring Google can index your new FAQ system
    sitemap(),
  ],

  // 4. DEPLOYMENT: Netlify adapter for server-side operations
  adapter: netlify(),
});
