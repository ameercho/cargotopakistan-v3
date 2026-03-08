import siteSettings from './siteSettings'
import rateCard from './rateCard' // Updated the variable name to match the file
import service from './service'
import trustPoints from './trustPoints'
import partner from './partner'
import author from './author'
import post from './post'
import faqItem from './objects/faqItem'
import homepage from './homepage';

export const schemaTypes = [
  siteSettings,
  rateCard, // Updated to match the import above
  service,
  trustPoints,
  partner,
  author,
  post,
  faqItem,
  homepage,
]