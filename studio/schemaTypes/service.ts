export default {
  name: 'service',
  title: 'Our Services',
  type: 'document',
  groups: [
    { name: 'content', title: 'Main Content' },
    { name: 'seo', title: 'SEO & Search' },
  ],
  fields: [
    {
      name: 'title',
      title: 'Service Display Name',
      type: 'string',
      group: 'content',
      description: 'The name shown on the website (e.g., Sea Cargo)',
    },
    {
      name: 'seoTitle',
      title: 'SEO Optimized Title',
      type: 'string',
      group: 'seo',
      description: 'CRITICAL: Use high-volume keywords here (e.g., Best Pak Cargo Service - Sea Freight to Pakistan)',
      validation: (Rule: any) => Rule.max(60).warning('Keep under 60 characters for Google.'),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      description: 'The URL for this service page. Click "Generate" after typing the title.',
      options: { 
        source: 'title',
        maxLength: 96,
      }
    },
    {
      name: 'icon',
      title: 'Icon Type',
      type: 'string',
      group: 'content',
      description: 'Use: ship, plane, truck, package, file-text',
    },
    {
      name: 'description',
      title: 'Homepage Summary',
      type: 'text',
      group: 'content',
      description: 'The brief summary that appears on the homepage cards. Use keywords like "pakistan cargo".'
    },
    {
      name: 'keyFeatures',
      title: 'Key Features (SEO Bullets)',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      description: 'List 3-4 features (e.g., "Door to door delivery", "Customs clearance included")',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      description: 'The snippet that appears in Google search results.',
      validation: (Rule: any) => Rule.min(120).max(160),
    },
    {
      name: 'details',
      title: 'Full Service Details',
      type: 'array', 
      group: 'content',
      of: [{type: 'block'}],
      description: 'Long-form content for the dedicated service page.',
    },
    // --- NEW FAQ SECTION ADDED BELOW ---
    {
      name: 'faqs',
      title: 'GEO-Optimized FAQs',
      type: 'array',
      group: 'seo',
      description: 'Add specific questions to capture Google AI Overviews and People Also Ask boxes.',
      of: [{ type: 'faqItem' }], // This refers to the faqItem object you created
    }
  ]
}