import {defineField, defineType} from 'sanity'
import {MapPin} from 'lucide-react'

export default defineType({
  name: 'location',
  title: 'Locations & Routes',
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
      options: {source: 'title'},
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
