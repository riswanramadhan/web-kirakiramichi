import { MetadataRoute } from 'next'
import { siteConfig } from './seo-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-25')
  
  return [
    {
      url: siteConfig.homeUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
