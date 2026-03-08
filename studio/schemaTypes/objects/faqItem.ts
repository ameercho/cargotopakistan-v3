import { defineField, defineType } from 'sanity'

const PROHIBITED_WORDS = ['best', 'cheapest', 'amazing', 'number one', 'unbeatable'];

export default defineType({
  name: 'faqItem',
  title: 'GEO-Optimized FAQ Item',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question (PAA Target)',
      type: 'string',
      description: 'Must be a high-intent query. Example: "What are the customs charges for electronics from Dubai to Pakistan?"',
      validation: (Rule) => Rule.required().custom((value) => {
        if (!value) return true;
        return value.trim().endsWith('?') ? true : 'Question must end with a "?" to match PAA search patterns.';
      }),
    }),
    defineField({
      name: 'atomicAnswer',
      title: 'Atomic Answer (AI Overview Citation)',
      type: 'text',
      rows: 3,
      description: 'Keep it under 60 words/300 chars. Fact-heavy, objective, and direct. This is what Gemini/AI Overviews will scrape.',
      validation: (Rule) => Rule.required().max(300).custom((value) => {
        if (!value) return true;
        const containsFluff = PROHIBITED_WORDS.some(word => value.toLowerCase().includes(word));
        return containsFluff ? `Avoid promotional fluff like 'best' or 'cheapest'. Stick to objective facts for GEO ranking.` : true;
      }),
    }),
    defineField({
      name: 'detailedAnswer',
      title: 'Detailed Answer (Human View)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich content for the website visitor. Include lists, links, and specific UAE/Pakistan port details.',
    }),
    defineField({
      name: 'targetEntity',
      title: 'Target Entity / Knowledge Tag',
      type: 'string',
      options: {
        list: [
          { title: 'Customs & Duties', value: 'Customs' },
          { title: 'Shipping Rates', value: 'Rates' },
          { title: 'Transit Timings', value: 'Timings' },
          { title: 'Restricted Items', value: 'Legal' },
          { title: 'Service Areas (UAE/PK)', value: 'Geography' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastReviewed',
      title: 'Last Reviewed Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
      description: 'Signals freshness to search engines. Essential for logistics where rates/laws change.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
