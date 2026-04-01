import siteSettings from './siteSettings'
import rateCard from './rateCard'
import service from './service'
import trustPoints from './trustPoints'
import partner from './partner'
import author from './author'
import post from './post'
import faqItem from './objects/faqItem'
import {cta} from './objects/cta' // New Import
import homepage from './homepage'
import contactChannel from './contactChannel'
import blockContent from './blockContent'
import location from './location'
import route from './route'
import companyPage from './companyPage'

export const schemaTypes = [
  // Settings & Global
  siteSettings,
  homepage,
  contactChannel,
  companyPage,

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
  cta, // Registered here
  blockContent,
]
