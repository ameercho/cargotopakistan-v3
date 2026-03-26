import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// 1. Define the client directly here instead of importing it
export const sanityClient = createClient({
  projectId: 'vx91r8qj', // <--- REPLACE THIS with your actual Project ID from sanity.config.ts
  dataset: 'production',
  apiVersion: '2024-03-19',
  useCdn: false, // Set to false for the most up-to-date content
});

// 2. Setup the image builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
