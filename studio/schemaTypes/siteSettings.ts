import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'seo', title: 'SEO & Meta Data'},
    {name: 'navigation', title: 'Navigation (Menus)'},
    {name: 'business', title: 'Business Identity'},
    {name: 'contact', title: 'Global Contact & CTA'},
    {name: 'tracking', title: 'Tracking & Analytics'},
    {name: 'verification', title: 'Trust & Verification'},
  ],
  fields: [
    // --- SEO GROUP ---
    defineField({
      name: 'siteUrl',
      title: 'Production Site URL',
      type: 'url',
      group: 'seo',
      description: 'The live URL (e.g., https://pakcargo.ae). Used for canonical links.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Global Site Title',
      type: 'string',
      group: 'seo',
      description: 'The main title for Google search results.',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'description',
      title: 'Global Meta Description',
      type: 'text',
      group: 'seo',
      description: 'The snippet for search results (150-160 chars).',
      validation: (Rule) => Rule.required().min(120).max(160),
    }),
    defineField({
      name: 'keywords',
      title: 'Core Business Keywords',
      type: 'array',
      group: 'seo',
      description: 'Add keywords and press Enter (e.g., Cargo to Pakistan, Door to door cargo).',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Sharing Image',
      type: 'image',
      group: 'seo',
      options: {hotspot: true},
    }),

    // --- NAVIGATION GROUP ---
    defineField({
      name: 'headerMenu',
      title: 'Header Navigation',
      type: 'array',
      group: 'navigation',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            {name: 'label', title: 'Link Label', type: 'string'},
            {
              name: 'link',
              title: 'URL Path',
              type: 'string',
              description: 'e.g., /about or /services',
            },
            {name: 'isButton', title: 'Show as Button?', type: 'boolean', initialValue: false},
          ],
        },
      ],
    }),
    defineField({
      name: 'footerMenu',
      title: 'Footer Quick Links',
      type: 'array',
      group: 'navigation',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string'},
            {name: 'link', type: 'string'},
          ],
        },
      ],
    }),

    // --- TRACKING & ANALYTICS ---
    defineField({
      name: 'gtmId',
      title: 'Google Tag Manager ID',
      type: 'string',
      group: 'tracking',
      placeholder: 'GTM-XXXXXXX',
    }),
    defineField({
      name: 'gaId',
      title: 'Google Analytics 4 ID',
      type: 'string',
      group: 'tracking',
      placeholder: 'G-XXXXXXX',
    }),
    defineField({
      name: 'siteVerificationCode',
      title: 'Google Search Console Verification',
      type: 'string',
      group: 'tracking',
    }),
    defineField({
      name: 'semrushCode',
      title: 'Semrush Verification Code',
      type: 'string',
      group: 'tracking',
    }),

    // --- BUSINESS IDENTITY GROUP ---
    defineField({
      name: 'businessName',
      title: 'Official Business Name',
      type: 'string',
      group: 'business',
    }),
    defineField({
      name: 'address',
      title: 'Warehouse/Office Address',
      type: 'string',
      group: 'business',
    }),
    defineField({
      name: 'mainServiceAreas',
      title: 'Main Service Regions',
      type: 'array',
      group: 'business',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Dubai', value: 'Dubai'},
          {title: 'Abu Dhabi', value: 'Abu Dhabi'},
          {title: 'Sharjah', value: 'Sharjah'},
          {title: 'Ajman', value: 'Ajman'},
          {title: 'Al Ain', value: 'Al Ain'},
          {title: 'Ras Al Khaimah', value: 'Ras Al Khaimah'},
          {title: 'Fujairah', value: 'Fujairah'},
          {title: 'Umm Al Quwain', value: 'Umm Al Quwain'},
        ],
      },
    }),

    // --- TRUST & VERIFICATION ---
    defineField({
      name: 'tradeLicense',
      title: 'UAE Trade License Number',
      type: 'string',
      group: 'verification',
    }),
    defineField({
      name: 'openingHours',
      title: 'Business Hours',
      type: 'string',
      group: 'verification',
      initialValue: 'Mo-Su 00:00-24:00',
    }),

    // --- GLOBAL CONTACT & CTA ---
    defineField({
      name: 'phone',
      title: 'Primary Phone',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      group: 'contact',
      description: 'Example: 971501234567 (No plus sign).',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      group: 'contact',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              type: 'string',
              options: {list: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter']},
            },
            {name: 'url', type: 'url'},
          ],
        },
      ],
    }),
  ],
})
