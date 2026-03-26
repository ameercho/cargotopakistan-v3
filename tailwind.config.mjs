/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // You can add custom brand colors for the UAE/Pakistan corridor here later
    },
  },
  plugins: [
    // 1. TYPOGRAPHY: Required for rendering Sanity Rich Text/PortableText
    require('@tailwindcss/typography'),
  ],
};
