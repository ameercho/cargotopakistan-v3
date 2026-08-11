import type {SlugValidationContext} from 'sanity'

/**
 * Cross-type slug uniqueness check.
 *
 * Sanity's default `isUnique` behavior only checks for slug collisions
 * within the SAME document type. Now that `location`, `service`, and
 * `companyPage` all resolve to flat root URLs (e.g. /dubai-to-pakistan,
 * /sea-freight, /privacy-policy all live at the same level), two documents
 * of DIFFERENT types could silently claim the same slug and one would
 * shadow the other in routing. This function checks uniqueness across
 * every document in the dataset, not just within one type.
 *
 * Use on any schema whose documents are routed via the root
 * `src/pages/[slug].astro` catch-all: location, service, companyPage.
 * Do NOT use on `post` (blog) — blog lives under /blog/[slug] and is a
 * separate URL namespace, so it doesn't need to be cross-checked here.
 */
export async function isSlugUniqueAcrossTypes(slug: string, context: SlugValidationContext) {
  const {document, getClient} = context
  const client = getClient({apiVersion: '2024-01-01'})
  const id = document._id.replace(/^drafts\./, '')
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  }
  const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`
  const result = await client.fetch(query, params)
  return result
}
