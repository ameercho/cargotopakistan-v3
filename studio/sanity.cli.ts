import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'vx91r8qj',
    dataset: 'production',
  },
  // We leave this empty. Sanity will fill it in automatically
  // the very first time you run 'npx sanity deploy' later.
  deployment: {
    autoUpdates: true,
  },
})
