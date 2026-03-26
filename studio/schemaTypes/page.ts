import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Service Landing Pages',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO & Meta Tags'},
    {name: 'technical', title: 'Technical Details'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Name (Internal)',
      type: 'string',
      group: 'content',
      description: 'e.g., Dubai to Pakistan Professional Cargo',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      options: {source: 'title'},
      description: 'The URL path (e.g., dubai-to-pakistan)',
    }),

    // --- HERO SECTION FOR LANDING PAGES ---
    defineField({
      name: 'heroTitle',
      title: 'Hero Heading (H1)',
      type: 'string',
      group: 'content',
      description: 'The main professional headline for this specific route.',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtext',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Focus on Jebel Ali warehouse and 100% safety here.',
    }),

    // --- MAIN BODY CONTENT ---
    defineField({
      name: 'content',
      title: 'Main Professional Body Copy',
      type: 'array',
      group: 'content',
      description: 'Use the Professional Leader tone here.',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
    }),

    // --- CITY HIGHLIGHTS (For SEO) ---
    defineField({
      name: 'cityHighlights',
      title: 'Major City Connections',
      type: 'array',
      group: 'content',
      description: 'List cities like Karachi, Lahore, Islamabad for this route.',
      of: [{type: 'string'}],
    }),

    // --- SEO GROUP ---
    defineField({
      name: 'seoTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      group: 'seo',
    }),
  ],
})
