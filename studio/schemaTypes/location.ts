import {defineField, defineType} from 'sanity'
import {MapPin} from 'lucide-react'
import {isSlugUniqueAcrossTypes} from './lib/slugUnique'

export default defineType({
  name: 'location',
  title: 'Locations',
  type: 'document',
  icon: MapPin,
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO & Meta'},
    {name: 'logistics', title: 'Logistics Details'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Location Name',
      type: 'string',
      group: 'content',
      description: 'e.g., Karachi or Abu Dhabi',
    }),
    defineField({
      name: 'type',
      title: 'Location Type',
      type: 'string',
      group: 'content',
      options: {
        list: [
          {title: 'Origin (UAE City)', value: 'origin'},
          {title: 'Destination (Pakistan City)', value: 'destination'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      options: {source: 'title', isUnique: isSlugUniqueAcrossTypes},
      description:
        'This is the full page path, e.g. "dubai-to-pakistan" → /dubai-to-pakistan. Must be unique across all pages on the site, not just other locations.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'H1 Heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtext',
      type: 'text',
      rows: 3,
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Main Body Content',
      type: 'array',
      group: 'content',
      of: [{type: 'block'}, {type: 'image'}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt Text'}],
    }),
    // LOGISTICS GROUP (For Schema.org data)
    defineField({
      name: 'province',
      title: 'State / Province',
      type: 'string',
      group: 'logistics',
      description: 'e.g., Punjab, Sindh, or Abu Dhabi Emirate',
    }),
    defineField({
      name: 'deliveryTimeline',
      title: 'Standard Delivery Time',
      type: 'string',
      group: 'logistics',
      description: 'e.g., 5-7 Days Air / 25-30 Days Sea',
    }),
    defineField({
      name: 'subAreas',
      title: 'Areas Covered',
      type: 'array',
      group: 'logistics',
      description: 'List of neighborhoods or smaller towns covered from this hub.',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    // SEO GROUP
    defineField({
      name: 'seoTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines?',
      type: 'boolean',
      group: 'seo',
      initialValue: false,
      description: 'Enable to exclude this page from Google indexing (adds a noindex tag).',
    }),
  ],
  preview: {
    select: {title: 'title', type: 'type'},
    prepare({title, type}) {
      return {
        title: title,
        subtitle: type === 'origin' ? '📍 UAE Origin' : '🇵🇰 PK Destination',
      }
    },
  },
})
