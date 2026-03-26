import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Our Services',
  type: 'document',
  groups: [
    {name: 'content', title: 'Main Content'},
    {name: 'seo', title: 'SEO & Search'},
    {name: 'local', title: 'Local Targeting'},
  ],
  fields: [
    defineField({
      name: 'order',
      title: 'Display Priority',
      type: 'number',
      group: 'content',
      initialValue: 10,
    }),
    defineField({
      name: 'title',
      title: 'Service Display Name',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Landing Page Main Heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Landing Page Subheading',
      type: 'text',
      rows: 2,
      group: 'content',
    }),
    // RESTORED: Starting Price field
    defineField({
      name: 'startingPrice',
      title: 'Starting Price (AED)',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Optimized Title',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      validation: (Rule) => Rule.min(120).max(160),
    }),
    defineField({
      name: 'keywords',
      title: 'Service Specific Keywords',
      type: 'array',
      group: 'seo',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    // RESTORED: Service Type for Schema.org
    defineField({
      name: 'serviceType',
      title: 'Schema Service Category',
      type: 'string',
      group: 'seo',
      options: {
        list: [
          {title: 'Sea Freight', value: 'SeaFreight'},
          {title: 'Air Freight', value: 'AirFreight'},
          {title: 'Moving & Relocation', value: 'MovingCompany'},
          {title: 'General Cargo', value: 'DeliveryService'},
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Service Cover Image',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt Text'}],
    }),
    defineField({
      name: 'icon',
      title: 'Icon Type',
      type: 'string',
      group: 'content',
      description: 'Lucide names: ship, plane, truck, package, home',
    }),
    defineField({
      name: 'description',
      title: 'Homepage Summary',
      type: 'text',
      group: 'content',
      rows: 3,
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Key Features (SEO Bullets)',
      type: 'array',
      group: 'content',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'details',
      title: 'Full Service Details',
      type: 'array',
      group: 'content',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'faqs',
      title: 'Service-Specific FAQs',
      type: 'array',
      group: 'seo',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'question', title: 'Question (PAA Target)', type: 'string'},
            {
              name: 'atomicAnswer',
              title: 'Atomic Answer (AI Overview)',
              type: 'text',
              rows: 3,
              description: 'Fact-heavy, under 60 words for AI scraping.',
            },
            {
              name: 'detailedAnswer',
              title: 'Detailed Answer (Human View)',
              type: 'array',
              of: [{type: 'block'}],
              description: 'Rich content with lists/links for users.',
            },
            {name: 'answer', title: 'Legacy Answer (Old)', type: 'text'},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'order', media: 'mainImage'},
    prepare({title, subtitle, media}) {
      return {
        title: title,
        subtitle: subtitle ? `Priority: ${subtitle}` : 'No priority set',
        media: media,
      }
    },
  },
})
