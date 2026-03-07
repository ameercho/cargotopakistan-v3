import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO & Meta Data' },
    { name: 'contact', title: 'Global Contact & CTA' },
    { name: 'business', title: 'Business Identity' },
  ],
  fields: [
    // --- SEO GROUP ---
    defineField({
      name: 'title',
      title: 'Global Site Title',
      type: 'string',
      group: 'seo',
      description: 'The main title for Google (e.g., Best Cargo to Pakistan | PakCargo.ae)',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'description',
      title: 'Global Meta Description',
      type: 'text',
      group: 'seo',
      description: 'The summary that appears in search results.',
      validation: (Rule) => Rule.required().min(120).max(160),
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Sharing Image',
      type: 'image',
      group: 'seo',
      description: 'Image shown on WhatsApp/Facebook (1200x630px recommended).',
    }),

    // --- BUSINESS IDENTITY GROUP (For Schema.org) ---
    defineField({
      name: 'address',
      title: 'Dubai Office Address',
      type: 'string',
      group: 'business',
      description: 'Physical address for Local SEO ranking.',
    }),
    defineField({
      name: 'phone',
      title: 'Business Phone',
      type: 'string',
      group: 'business',
      description: 'Format: +971 5X XXX XXXX',
    }),

    // --- EXISTING CONTACT & CTA GROUP ---
    defineField({
      name: 'announcementBar',
      title: 'Announcement Bar (Global)',
      type: 'string',
      group: 'contact',
      description: 'Alerts for delays or holiday schedules.'
    }),
    defineField({
      name: 'ctaType',
      title: 'Global CTA Type',
      type: 'string',
      group: 'contact',
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
      group: 'contact',
      description: 'Enter phone number or link.'
    }),
  ],
})