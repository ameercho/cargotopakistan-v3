export default {
    name: 'service',
    title: 'Our Services',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Service Name',
        type: 'string',
        description: 'e.g., Sea Cargo to Pakistan'
      },
      {
        name: 'slug',
        title: 'URL Slug',
        type: 'slug',
        description: 'Click "Generate" to create a Google-friendly URL',
        options: { 
          source: 'title', // This pulls from the title field
          maxLength: 96,
          // Optional: This function removes "to" and "from" for even cleaner SEO
          slugify: input => input
                           .toLowerCase()
                           .replace(/\s+/g, '-')
                           .replace(/[^\w-]+/g, '')
                           .replace(/--+/g, '-')
                           .replace(/^-+/, '')
                           .replace(/-+$/, '')
        }
      },
      {
        name: 'description',
        title: 'Short Description',
        type: 'text',
        description: 'The brief summary that appears on the homepage cards.'
      },
      {
        name: 'icon',
        title: 'Icon Name',
        type: 'string',
        description: 'Use names like: ship, plane, truck, box, file-text'
      },
      {
        name: 'details',
        title: 'Full Service Details',
        type: 'array', 
        of: [{type: 'block'}],
      }
    ]
  }