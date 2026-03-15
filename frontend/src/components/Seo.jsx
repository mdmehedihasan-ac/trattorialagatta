import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { siteData } from '../data/siteData';

export default function Seo({ title, description, path }) {
  const canonical = `${siteData.brand.canonicalBase}${path}`;

  useEffect(() => {
    document.title = title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', description);
    }

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonical);
  }, [canonical, description, title]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={siteData.images.hero} />
    </Helmet>
  );
}
