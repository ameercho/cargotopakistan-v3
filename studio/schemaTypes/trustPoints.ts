export default {
    name: 'trustPoints',
    title: 'Why Choose Us',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Section Headline',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Section Subtitle',
        type: 'text'
      },
      {
        name: 'points',
        title: 'Trust Points',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'icon', title: 'Icon', type: 'string' },
              { name: 'heading', title: 'Heading', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' }
            ]
          }
        ]
      },
      // --- ADD THESE NEW FIELDS HERE ---
      {
        name: 'shipmentsCount',
        title: 'Monthly Shipments',
        type: 'string',
        initialValue: '450+'
      },
      {
        name: 'satisfactionRate',
        title: 'Customer Satisfaction',
        type: 'string',
        initialValue: '98%'
      },
      {
        name: 'deliveryTime',
        title: 'Average Delivery',
        type: 'string',
        initialValue: '25 Days'
      }
    ]
  }