import siteSettings from './siteSettings'
import rateCard from './rateCard'
import service from './service'
import trustPoints from './trustPoints'
import partner from './partner'
import author from './author'
import post from './post'
import faqItem from './objects/faqItem'
import homepage from './homepage'
import contactChannel from './contactChannel'
import blockContent from './blockContent'
import location from './location' // Updated from 'page' to 'location'
import route from './route'

export const schemaTypes = [
  // Settings & Global
  siteSettings,
  homepage,
  contactChannel,

  // Core Business
  service,
  rateCard,

  // Logistics & SEO (New Category)
  location,
  route,

  // Blog & Content
  post,
  author,

  // Social Proof & Trust
  partner,
  trustPoints,

  // Reusable Objects
  faqItem,
  blockContent,
]
