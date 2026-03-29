import {defineField, defineType} from 'sanity'
import {ArrowRightLeft} from 'lucide-react'

export default defineType({
  name: 'route',
  title: 'Shipping Routes',
  type: 'document',
  icon: ArrowRightLeft,
  fields: [
    defineField({
      name: 'origin',
      title: 'Origin (UAE City)',
      type: 'reference',
      to: [{type: 'location'}],
      options: {
        filter: 'type == "origin"', // Only show UAE cities
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'destination',
      title: 'Destination (Pakistan City)',
      type: 'reference',
      to: [{type: 'location'}],
      options: {
        filter: 'type == "destination"', // Only show Pakistan cities
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc: any, context) => {
          // This logic isn't perfect in Sanity UI without a custom component,
          // so for now, you can manually click "generate" or type it.
          return `cargo-from-origin-to-destination`
        },
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'transitTime',
      title: 'Estimated Transit Time',
      type: 'string',
      description: 'e.g., 10-15 Days for Sea, 3-5 Days for Air',
    }),
    defineField({
      name: 'baseRate',
      title: 'Starting Rate (AED)',
      type: 'number',
      description: 'Starting price per kg for this specific route',
    }),
  ],
  preview: {
    select: {
      origin: 'origin.title',
      destination: 'destination.title',
    },
    prepare({origin, destination}) {
      return {
        title: `${origin} to ${destination}`,
        subtitle: 'Shipping Route',
      }
    },
  },
})
