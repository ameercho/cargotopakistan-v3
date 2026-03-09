import {defineField, defineType} from 'sanity'
import {Phone} from 'lucide-react'

export default defineType({
  name: 'contactChannel',
  title: 'Contact Channels',
  type: 'document',
  icon: Phone,
  fields: [
    defineField({
      name: 'title',
      title: 'Channel Label',
      type: 'string',
      description: 'e.g., "Dubai Sales WhatsApp" or "Live Chat"',
    }),
    defineField({
      name: 'platform',
      title: 'Platform Type',
      type: 'string',
      options: {
        list: [
          {title: 'WhatsApp', value: 'whatsapp'},
          {title: 'Direct Call (GSM)', value: 'phone'},
          {title: 'Yeastar Live Chat (Snippet)', value: 'livechat'},
          {title: 'Yeastar WebRTC Link', value: 'webrtc'},
          {title: 'Office Landline', value: 'landline'},
          {title: 'Custom Script', value: 'custom'},
        ],
      },
    }),
    defineField({
      name: 'value',
      title: 'Number or URL',
      type: 'string',
      description: 'Phone number (971...) or URL',
      // Hide this field if we are using an embed code instead
      hidden: ({parent}) => parent?.platform === 'livechat' || parent?.platform === 'custom',
    }),
    defineField({
      name: 'embedCode',
      title: 'JS Snippet / HTML Code',
      type: 'text',
      description: 'Paste your Yeastar Live Chat or custom HTML code here.',
      // Only show this for snippets
      hidden: ({parent}) => parent?.platform !== 'livechat' && parent?.platform !== 'custom',
    }),
    defineField({
      name: 'priority',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers show up first',
    }),
    defineField({
      name: 'isActive',
      title: 'Active Status',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
