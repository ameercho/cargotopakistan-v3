import {defineField} from 'sanity'
import {MousePointerClick} from 'lucide-react'

export const cta = {
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  icon: MousePointerClick,
  fields: [
    defineField({
      name: 'title',
      title: 'CTA Heading',
      type: 'string',
      initialValue: 'Ready to move your Cargo?',
    }),
    defineField({
      name: 'subtitle',
      title: 'CTA Subtitle (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'Blue (Primary)', value: 'bg-blue-600'},
          {title: 'Green (WhatsApp)', value: 'bg-green-600'},
          {title: 'Dark Slate', value: 'bg-slate-900'},
          {title: 'Red (Urgent)', value: 'bg-red-600'},
        ],
      },
      initialValue: 'bg-blue-600',
    }),
    defineField({
      name: 'links',
      title: 'CTA Buttons/Channels',
      type: 'array',
      description: 'Add one or more buttons (WhatsApp, Call, or Link).',
      of: [
        {
          type: 'object',
          name: 'ctaLink',
          fields: [
            {
              name: 'buttonText',
              title: 'Button Label',
              type: 'string',
              initialValue: 'Contact Us',
            },
            {
              name: 'type',
              title: 'Action Type',
              type: 'string',
              options: {
                list: [
                  {title: 'WhatsApp', value: 'whatsapp'},
                  {title: 'Phone Call', value: 'phone'},
                  {title: 'Internal Page Link', value: 'link'},
                ],
              },
              initialValue: 'whatsapp',
            },
            {
              name: 'source',
              title: 'Data Source',
              type: 'string',
              options: {
                list: [
                  {title: 'Reference Contact Channel', value: 'reference'},
                  {title: 'Manual Entry', value: 'manual'},
                ],
              },
              initialValue: 'reference',
              hidden: ({parent}) => parent?.type === 'link',
            },
            {
              name: 'channelRef',
              title: 'Select Contact Channel',
              type: 'reference',
              to: [{type: 'contactChannel'}],
              hidden: ({parent}) => parent?.source !== 'reference' || parent?.type === 'link',
            },
            {
              name: 'manualValue',
              title: 'Manual Number or URL',
              type: 'string',
              description: 'Enter phone number (971...) or URL path (/contact)',
              hidden: ({parent}) => parent?.source === 'reference' && parent?.type !== 'link',
            },
            {
              name: 'isPrimary',
              title: 'Is Primary Button?',
              type: 'boolean',
              initialValue: false,
              description:
                'Primary buttons usually have a different style (e.g., white background).',
            },
          ],
          preview: {
            select: {
              title: 'buttonText',
              subtitle: 'type',
            },
          },
        },
      ],
    }),
  ],
}
