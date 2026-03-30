import {FileText, Settings, Home, Truck, MapPin} from 'lucide-react'

export const structure = (S: any) =>
  S.list()
    .title('CargotoPakistan Control Panel')
    .items([
      // 1. Global Settings - Locked to ID
      S.listItem()
        .title('Site Settings')
        .icon(Settings)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

      // 2. Homepage Editor - Locked to ID
      S.listItem()
        .title('Homepage Content')
        .icon(Home)
        .child(S.document().schemaType('homepage').documentId('homepage')),

      S.divider(),

      // 3. Static & Legal Pages
      S.listItem()
        .title('Company Pages')
        .icon(FileText)
        .child(S.documentTypeList('companyPage').title('Static & Legal Pages')),

      S.divider(),

      // 4. Logistics Operations
      S.listItem().title('Our Services').icon(Truck).child(S.documentTypeList('service')),

      S.listItem().title('Routes').icon(MapPin).child(S.documentTypeList('route')),

      // Filter out singletons and the companyPage type to keep it organized
      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          !['siteSettings', 'homepage', 'companyPage', 'service', 'route'].includes(
            listItem.getId(),
          ),
      ),
    ])
