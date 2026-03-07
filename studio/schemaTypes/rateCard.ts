export default {
  name: 'rateCard',
  title: 'Master Rate Card',
  type: 'document',
  fields: [
    {
      name: 'cargoType',
      title: 'Type of Items (e.g., General Cargo)',
      type: 'string',
    },
    {
      name: 'pricePerKg',
      title: 'Price per KG (AED)',
      type: 'number',
    },
    {
      name: 'minWeight',
      title: 'Minimum Weight/Quantity',
      type: 'string',
      description: 'e.g., "Min 20KG" or "Per Box"'
    },
    {
      name: 'notes',
      title: 'Service Details',
      type: 'text',
      description: 'e.g., "Door-to-door, includes customs"'
    }
  ],
}