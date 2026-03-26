/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
  readonly SANITY_PROJECT_ID: string;
  readonly SANITY_DATASET: string;
  readonly SANITY_API_TOKEN: string;
  // Add other variables here as you add them to your .env file
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
