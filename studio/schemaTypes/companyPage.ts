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

    // --- Hero Section (Simplified for Astro Mapping) ---
    defineField({
      name: 'heroTitle',
      type: 'string',
      title: 'Hero Main Heading',
      group: 'content',
    }),
    defineField({
      name: 'heroSubtitle',
      type: 'text',
      rows: 2,
      title: 'Hero Subtext/Description',
      group: 'content',
    }),

    // --- Main Body Content ---
    defineField({
      name: 'content',
      type: 'blockContent',
      title: 'Main Page Text/Body',
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

    // --- Contact Specific: Additional Phones ---
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

    // --- Contact Specific: Locations/Offices ---
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
            {name: 'title', type: 'string', title: 'Location Title (e.g. Jebel Ali Hub)'},
            {name: 'address', type: 'text', rows: 3, title: 'Full Address'},
            {name: 'mapUrl', type: 'url', title: 'Google Maps Link'},
          ],
        },
      ],
    }),

    // --- FAQs (Now available for ALL pages) ---
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
