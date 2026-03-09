import { sanityClient } from 'sanity:client';
// UPDATED: Using the named export to resolve deprecation warning
import { createImageUrlBuilder } from '@sanity/image-url';

// Use the new builder method
const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  // Ensure we return a valid builder object
  return builder.image(source);
}
