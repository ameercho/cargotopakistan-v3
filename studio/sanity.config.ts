import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  // Updated Title for your new domain
  title: 'CargoToPakistan Admin',
  projectId: 'vx91r8qj',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website Content')
          .items([
            // PINNED: About Us Page
            S.listItem()
              .title('About Us Page')
              .id('aboutPage')
              .child(
                S.document().schemaType('service').documentId('about-us')
              ),
            // PINNED: Contact Page
            S.listItem()
              .title('Contact Page')
              .id('contactPage')
              .child(
                S.document().schemaType('service').documentId('contact')
              ),
            S.divider(),
            // Automatically list everything else (Services, Rate Cards, Partners)
            ...S.documentTypeListItems(),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})