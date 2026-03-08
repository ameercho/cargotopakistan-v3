import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'seo', title: 'SEO & Meta' },
    { name: 'richSnippets', title: 'Rich Snippets (FAQ)' },
  ],
  fields: [
    // --- CONTENT GROUP ---
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      group: 'content',
      description: 'Use keywords like "Pakistan Cargo" or "Dubai Shipping Guide".',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      group: 'content',
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Vital for SEO. Describe the image for Google (e.g., "Cargo truck loading in Dubai").',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Post Body',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({ type: 'block' }), // Standard Text
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'caption', type: 'string', title: 'Caption' },
            { name: 'alt', type: 'string', title: 'Alt Text' },
          ],
        }),
        defineArrayMember({
          name: 'youtube',
          type: 'object',
          title: 'YouTube Embed',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'YouTube Video URL',
              description: 'Increases "Time on Page" – a vital 2026 ranking factor.',
            },
          ],
        }),
      ],
    }),

    // --- SEO GROUP ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Meta Title',
      type: 'string',
      group: 'seo',
      description: 'Ideal: 50-60 characters. Mention Dubai/UAE.',
      validation: (Rule) => Rule.max(60).warning('Longer titles may be cut off in search.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      description: 'Ideal: 150-160 characters. Target "cargo services dubai to pakistan".',
      validation: (Rule) => Rule.max(160).warning('Keep descriptions under 160 characters.'),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      group: 'seo',
      description: 'Use if this post was originally published elsewhere.',
    }),
    defineField({
      name: 'keywords',
      title: 'Target Keywords',
      type: 'array',
      group: 'seo',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),

    // --- RICH SNIPPETS (FAQ) GROUP ---
    defineField({
      name: 'faqs',
      title: 'FAQ Section',
      type: 'array',
      group: 'richSnippets',
      description: 'These will appear as FAQ Rich Snippets in Google Search results.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faqItem',
          fields: [
            { name: 'question', type: 'string', title: 'Question' },
            { name: 'answer', type: 'text', title: 'Answer' },
          ],
        }),
      ],
    }),
  ],
})