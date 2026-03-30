import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url'; // Updated import

// 1. Define the client directly
export const sanityClient = createClient({
  projectId: 'vx91r8qj',
  dataset: 'production',
  apiVersion: '2024-03-19',
  useCdn: false,
});

// 2. Setup the image builder using the new named function
const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
