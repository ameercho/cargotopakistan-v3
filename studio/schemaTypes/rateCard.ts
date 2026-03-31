import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'rateCard',
  title: 'Master Rate Card',
  type: 'document',
  fields: [
    defineField({
      name: 'isLive',
      title: 'Active on Site',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle off to hide this rate without deleting it.',
    }),
    defineField({
      name: 'order',
      title: 'Display Priority',
      type: 'number',
      description: '1 for Sea Cargo (Top), 2 for Air Cargo, etc.',
      initialValue: 10,
    }),
    defineField({
      name: 'cargoType',
      title: 'Cargo Category',
      type: 'string',
      placeholder: 'e.g., Sea Cargo (Door to Door)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'promoBadge',
      title: 'Promotional Badge',
      type: 'string',
      description: 'e.g., "Cheapest", "Fastest", or "Most Popular".',
    }),
    defineField({
      name: 'pricePerKg',
      title: 'Price Value (AED)',
      type: 'number',
      description: 'Value only (e.g., 5). Use 0 if "Contact for Price".',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'unitType',
      title: 'Pricing Unit',
      type: 'string',
      options: {
        list: [
          {title: 'Per KG', value: 'KGM'},
          {title: 'Per CBM', value: 'MTQ'},
          {title: 'Flat Rate / Box', value: 'C62'},
        ],
      },
      initialValue: 'KGM',
    }),
    defineField({
      name: 'transitTime',
      title: 'Transit Time',
      type: 'string',
      placeholder: 'e.g., 25-35 Days',
    }),
    defineField({
      name: 'minWeight',
      title: 'Min. Weight/Qty',
      type: 'string',
      initialValue: '30 KG',
    }),
    defineField({
      name: 'notes',
      title: 'Service Highlights',
      type: 'text',
      rows: 2,
      description: 'Briefly mention items included (e.g., Electronics, Clothes).',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Rate Last Verified',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
  ],
  preview: {
    select: {
      title: 'cargoType',
      price: 'pricePerKg',
      unit: 'unitType',
      live: 'isLive',
    },
    prepare({title, price, unit, live}) {
      const unitLabel = unit === 'KGM' ? '/kg' : unit === 'MTQ' ? '/CBM' : '/pc'
      return {
        title: `${live ? '✅' : '❌'} ${title} - AED ${price}${unitLabel}`,
        subtitle: `UAE to Pakistan | Last Updated: ${new Date().toLocaleDateString()}`,
      }
    },
  },
})
