import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {assist} from '@sanity/assist'
import {schemaTypes} from './schemaTypes'
import {structure} from './src/structure' // Ensure this path matches your file location

export default defineConfig({
  name: 'default',
  title: 'CargoToPakistan Admin',
  projectId: 'vx91r8qj',
  dataset: 'production',

  plugins: [
    structureTool({
      // We point directly to the structure function from your new file
      structure: structure,
    }),
    visionTool(),
    assist(),
  ],

  schema: {
    types: schemaTypes,
  },
})
