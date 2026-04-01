import {defineField, defineType} from 'sanity'
import {FileText} from 'lucide-react'

export default defineType({
  name: 'companyPage',
  title: 'Company Pages',
  type: 'document',
  icon: FileText,
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
    {name: 'contactInfo', title: 'Contact Details'},
  ],
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

    // --- SEO Group ---
    defineField({name: 'seoTitle', type: 'string', title: 'SEO Browser Title', group: 'seo'}),
    defineField({name: 'metaDescription', type: 'text', title: 'Meta Description', group: 'seo'}),

    // --- Hero Section ---
    defineField({
      name: 'heroSubtitle',
      type: 'string',
      title: 'Small Label Above Title (e.g. "Our Legacy")',
      group: 'content',
    }),
    defineField({
      name: 'heroTitle',
      type: 'string',
      title: 'Hero Main Heading',
      description: 'Main heading for the page',
      group: 'content',
    }),
    defineField({
      name: 'heroDescription',
      type: 'text',
      rows: 3,
      title: 'Hero Paragraph/Description',
      group: 'content',
    }),

    // --- Stats Section (About Page Only) ---
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

    // --- Body Content Section ---
    defineField({
      name: 'bodyTitle',
      type: 'string',
      title: 'Body Section Title',
      group: 'content',
    }),
    defineField({
      name: 'bodyTitleAccent',
      type: 'string',
      title: 'Body Section Title (Accent/Blue)',
      group: 'content',
    }),
    defineField({
      name: 'content',
      type: 'blockContent',
      title: 'Main Page Text/Body',
      group: 'content',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {hotspot: true},
      group: 'content',
    }),

    // --- Leadership / Quote Section ---
    defineField({
      name: 'quoteText',
      type: 'text',
      title: 'Leadership Quote',
      group: 'content',
    }),
    defineField({
      name: 'quoteAuthor',
      type: 'string',
      title: 'Quote Author',
      group: 'content',
    }),

    // --- NEW CTA SECTION ---
    defineField({
      name: 'pageCTA',
      title: 'Page Call to Action',
      type: 'cta', // Using the object we created
      group: 'content',
      description: 'Customize the CTA banner for this specific page.',
    }),

    // --- Contact Specific Details ---
    defineField({
      name: 'additionalContacts',
      title: 'Additional Phone Numbers',
      type: 'array',
      group: 'contactInfo',
      hidden: ({document}) => document?.pageType !== 'contact',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Location/Dept'},
            {name: 'number', type: 'string', title: 'Phone Number'},
          ],
        },
      ],
    }),
    defineField({
      name: 'locations',
      title: 'Office/Warehouse Locations',
      type: 'array',
      group: 'contactInfo',
      hidden: ({document}) => document?.pageType !== 'contact',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Location Title'},
            {name: 'address', type: 'text', rows: 3, title: 'Full Address'},
            {name: 'mapUrl', type: 'url', title: 'Google Maps Link'},
          ],
        },
      ],
    }),

    // --- Global Page FAQs ---
    defineField({
      name: 'faqs',
      title: 'Page Specific FAQs',
      type: 'array',
      group: 'content',
      of: [{type: 'faqItem'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pageType',
    },
  },
})
