import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Logistics Expert (Author)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Title/Role',
      type: 'string',
      description: 'e.g., Head of Operations at PakCargo.ae',
    }),
    defineField({
      name: 'image',
      title: 'Author Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Professional Bio',
      type: 'text',
      description: 'Highlight years of experience in UAE-Pakistan logistics to build trust.',
    }),
  ],
})