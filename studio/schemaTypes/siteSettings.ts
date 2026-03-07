import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'announcementBar',
      title: 'Announcement Bar (Global)',
      type: 'string',
      description: 'Alerts for delays or holiday schedules.'
    }),
    defineField({
      name: 'ctaType',
      title: 'Global CTA Type',
      type: 'string',
      options: {
        list: [
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Telegram', value: 'telegram' },
          { title: 'Phone', value: 'phone' }
        ],
      },
    }),
    defineField({
      name: 'ctaValue',
      title: 'CTA Contact Value',
      type: 'string',
      description: 'Enter phone number or link.'
    }),
  ],
})