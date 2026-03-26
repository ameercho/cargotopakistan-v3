import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage Content',
  type: 'document',
  groups: [
    {name: 'seo', title: 'SEO & Meta Data'},
    {name: 'hero', title: 'Hero Section (Top)'},
    {name: 'content', title: 'Main Sections'},
    {name: 'footer', title: 'Footer Customization'}, // Added for better organization
  ],
  fields: [
    // --- SEO & META DATA OVERRIDES ---
    defineField({
      name: 'seoTitle',
      title: 'Homepage SEO Title',
      type: 'string',
      group: 'seo',
      description: 'Overrides global title. Max 60 chars.',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Homepage Meta Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      description: 'Overrides global description. 120-160 chars.',
      validation: (Rule) => Rule.min(120).max(160),
    }),
    defineField({
      name: 'seoKeywords',
      title: 'Homepage Specific Keywords',
      type: 'array',
      group: 'seo',
      description: 'Add keywords specifically for the homepage ranking.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),

    // --- HERO SECTION ---
    defineField({
      name: 'heroTitle',
      title: 'Main Hero Heading',
      type: 'string',
      group: 'hero',
      description: 'Main headline for Google Ads landing.',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtext',
      type: 'text',
      rows: 2,
      group: 'hero',
      description: 'Briefly mention Jebel Ali warehouse and 100% safety.',
    }),

    // --- FEATURED SERVICES ---
    defineField({
      name: 'featuredServices',
      title: 'Featured Services',
      type: 'array',
      group: 'content',
      of: [{type: 'reference', to: [{type: 'service'}]}],
    }),

    // --- TRUST & PERFORMANCE ---
    defineField({
      name: 'featuredTrustPoints',
      title: 'Trust & Performance Data',
      type: 'reference',
      to: [{type: 'trustPoints'}],
      group: 'content',
    }),

    // --- PARTNERS / NETWORK ---
    defineField({
      name: 'featuredPartners',
      title: 'Network Partners',
      type: 'array',
      group: 'content',
      of: [{type: 'reference', to: [{type: 'partner'}]}],
    }),

    // --- GEO-OPTIMIZED CONTENT ---
    defineField({
      name: 'faqs',
      title: 'Homepage FAQs (GEO-Optimized)',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'question', title: 'High-Intent Query', type: 'string'},
            {
              name: 'atomicAnswer',
              title: 'Atomic Answer (AI)',
              type: 'text',
              rows: 3,
            },
            {
              name: 'detailedAnswer',
              title: 'Detailed Answer (Visitor View)',
              type: 'array',
              of: [{type: 'block'}],
            },
            {name: 'answer', title: 'Legacy Answer', type: 'text'},
          ],
        },
      ],
    }),

    // --- FOOTER SECTION (FIXED NAME) ---
    defineField({
      name: 'footerSeoText', // CHANGED from footerText to match Astro code
      title: 'Footer SEO Text Block',
      type: 'text',
      group: 'footer',
      description:
        'Detailed paragraph for Google ranking. Shows at the very bottom of the homepage.',
    }),
  ],
})
