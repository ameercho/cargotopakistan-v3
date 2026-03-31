import {FileText, Settings, Home, Truck, MapPin, BadgeDollarSign} from 'lucide-react'

export const structure = (S: any) =>
  S.list()
    .title('CargotoPakistan Control Panel')
    .items([
      // 1. Global Settings
      S.listItem()
        .title('Site Settings')
        .icon(Settings)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

      // 2. Homepage Editor
      S.listItem()
        .title('Homepage Content')
        .icon(Home)
        .child(S.document().schemaType('homepage').documentId('homepage')),

      S.divider(),

      // 3. Google Ads & Pricing (New Section)
      S.listItem()
        .title('Master Rate Cards')
        .icon(BadgeDollarSign)
        .child(S.documentTypeList('rateCard').title('Pricing per KG')),

      S.divider(),

      // 4. Static & Legal Pages
      S.listItem()
        .title('Company Pages')
        .icon(FileText)
        .child(S.documentTypeList('companyPage').title('Static & Legal Pages')),

      S.divider(),

      // 5. Logistics Operations
      S.listItem().title('Our Services').icon(Truck).child(S.documentTypeList('service')),
      S.listItem().title('Routes').icon(MapPin).child(S.documentTypeList('route')),

      // Filter out all handled types to keep sidebar clean
      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          !['siteSettings', 'homepage', 'companyPage', 'service', 'route', 'rateCard'].includes(
            listItem.getId(),
          ),
      ),
    ])
