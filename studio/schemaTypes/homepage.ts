import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage Content',
  type: 'document',
  groups: [
    { name: 'content', title: 'Main Content' },
    { name: 'seo', title: 'SEO & Search' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Page Title',
      type: 'string',
      group: 'content',
      initialValue: 'Main Homepage',
      description: 'Internal reference name for this document.',
    }),
    defineField({
      name: 'faqs',
      title: 'Homepage FAQs (GEO-Optimized)',
      type: 'array',
      group: 'seo',
      description: 'General questions to rank for broad UAE-Pakistan search terms.',
      of: [{ type: 'faqItem' }],
    }),
  ],
})