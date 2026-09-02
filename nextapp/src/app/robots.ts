import { MetadataRoute } from 'next';
import { personalInfo } from '@/lib/data/personal';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = personalInfo.contact.website;
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
