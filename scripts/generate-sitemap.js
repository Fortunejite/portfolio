import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream }           from 'fs';
import { resolve, dirname }            from 'path';
import { fileURLToPath }               from 'url';
import { db } from '../src/firebase';

async function buildSitemap() {
  // 1. Grab project IDs
  const snapshot = await db.collection('projects').get();
  const projectData = snapshot.docs.map(doc => ({ id: doc.id }));

  // 2. Build pages array, static + dynamic
  const pages = [
    { url: '/', changefreq: 'daily',    priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    ...projectData.map(p => ({
      url: `/project/${p.id}`,
      changefreq: 'weekly',
      priority: 0.8,
    })),
  ];

  // 3. Create sitemap stream + write out once
  const sitemap = new SitemapStream({
    hostname: 'https://portfolio-seven-rho-75.vercel.app',
  });

  const __filename = fileURLToPath(import.meta.url);
  const __dirname  = dirname(__filename);
  const writeStream = createWriteStream(
    resolve(__dirname, '../public/sitemap.xml'),
  );
  sitemap.pipe(writeStream);

  // 4. Write all pages
  for (const page of pages) sitemap.write(page);
  sitemap.end();

  // 5. Wait for both XML generation and file flush
  await streamToPromise(sitemap);
  await new Promise((res, rej) => {
    writeStream.on('finish', res);
    writeStream.on('error', rej);
  });

  console.log('✅ sitemap.xml generated and saved to public/');
}

buildSitemap().catch(console.error);
