import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage Content',
  type: 'document',
  groups: [
    {name: 'seo', title: 'SEO & Meta Data'}, // Moved to top for priority
    {name: 'hero', title: 'Hero Section (Top)'},
    {name: 'content', title: 'Main Sections'},
  ],
  fields: [
    // --- SEO & META DATA OVERRIDES ---
    defineField({
      name: 'seoTitle',
      title: 'Homepage SEO Title',
      type: 'string',
      group: 'seo',
      description:
        'Overrides the global title. Best for: "Cargo to Pakistan from Dubai & Abu Dhabi | PakCargo.ae"',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Homepage Meta Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      description: 'Overrides the global description for the homepage.',
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
      description:
        'The first thing users see. Example: "Reliable Door-to-Door Cargo from UAE to Pakistan".',
      initialValue: 'Professional Cargo Services from UAE to Pakistan',
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
      description: 'Select the services to show on the homepage (e.g., Sea Cargo, Air Cargo).',
      of: [{type: 'reference', to: [{type: 'service'}]}],
    }),

    // --- TRUST & PERFORMANCE ---
    defineField({
      name: 'featuredTrustPoints',
      title: 'Trust & Performance Data',
      type: 'reference',
      to: [{type: 'trustPoints'}],
      group: 'content',
      description: 'Links the warehouse stats and safety rates to the homepage.',
    }),

    // --- PARTNERS / NETWORK ---
    defineField({
      name: 'featuredPartners',
      title: 'Network Partners',
      type: 'array',
      group: 'content',
      description: 'Select logos of DHL, Pakistan Post, etc. to show for authority.',
      of: [{type: 'reference', to: [{type: 'partner'}]}],
    }),

    // --- GEO-OPTIMIZED CONTENT ---
    defineField({
      name: 'faqs',
      title: 'Homepage FAQs (GEO-Optimized)',
      type: 'array',
      group: 'content', // Moved to content for better visual flow in Studio
      description: 'General questions to rank for broad UAE-Pakistan search terms.',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'question', type: 'string'},
            {name: 'answer', type: 'text'},
          ],
        },
      ],
    }),
    defineField({
      name: 'footerText',
      title: 'Footer SEO Text',
      type: 'text',
      group: 'content',
      description: 'A small paragraph at the bottom of the page containing your main keywords.',
    }),
  ],
})
