import {defineField, defineType} from 'sanity'
import {FileText} from 'lucide-react'

export default defineType({
  name: 'companyPage',
  title: 'Company Pages',
  type: 'document',
  icon: FileText,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Internal Admin Title',
      description: 'e.g., "About Us Page" - only visible in Sanity',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          {title: 'About Us', value: 'about'},
          {title: 'Contact Us', value: 'contact'},
          {title: 'Privacy Policy', value: 'privacy'},
          {title: 'Terms of Service', value: 'terms'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // --- SLUG FIELD ADDED HERE ---
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    // ----------------------------

    // SEO Group
    defineField({name: 'seoTitle', type: 'string', title: 'SEO Browser Title', group: 'seo'}),
    defineField({name: 'metaDescription', type: 'text', title: 'Meta Description', group: 'seo'}),

    // Hero Section
    defineField({
      name: 'heroTitlePart1',
      type: 'string',
      title: 'Hero Title (Main)',
      group: 'content',
    }),
    defineField({
      name: 'heroTitlePart2',
      type: 'string',
      title: 'Hero Title (Accent/Blue)',
      group: 'content',
    }),
    defineField({
      name: 'heroSubtitle',
      type: 'string',
      title: 'Small Label Above Title',
      group: 'content',
    }),
    defineField({name: 'heroDescription', type: 'text', title: 'Hero Paragraph', group: 'content'}),

    // Stats Section (Visible only for About page)
    defineField({
      name: 'stats',
      title: 'Company Statistics',
      type: 'array',
      group: 'content',
      hidden: ({document}) => document?.pageType !== 'about',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label (e.g. Years Experience)'},
            {name: 'value', type: 'string', title: 'Value (e.g. 15+)'},
          ],
        },
      ],
    }),

    // Content Section
    defineField({name: 'bodyTitle', type: 'string', title: 'Body Section Title', group: 'content'}),
    defineField({
      name: 'bodyTitleAccent',
      type: 'string',
      title: 'Body Section Title (Accent)',
      group: 'content',
    }),
    defineField({
      name: 'content',
      type: 'blockContent',
      title: 'Main Page Text/Body',
      group: 'content',
    }),
    defineField({name: 'mainImage', type: 'image', options: {hotspot: true}, group: 'content'}),

    // Contact Specific Section (Visible only for Contact page)
    defineField({
      name: 'additionalContacts',
      title: 'Additional Phone Numbers',
      type: 'array',
      group: 'content',
      hidden: ({document}) => document?.pageType !== 'contact',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Location/Dept (e.g. Abu Dhabi)'},
            {name: 'number', type: 'string', title: 'Phone Number'},
          ],
        },
      ],
    }),

    // Quote Section
    defineField({name: 'quoteText', type: 'text', title: 'Leadership Quote', group: 'content'}),
    defineField({name: 'quoteAuthor', type: 'string', title: 'Quote Author', group: 'content'}),
  ],
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pageType',
    },
  },
})
