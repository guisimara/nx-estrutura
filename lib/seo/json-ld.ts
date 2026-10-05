import { siteConfig } from "@/lib/config/site";

type JsonLdObject = Record<string, unknown>;

export function organizationJsonLd(): JsonLdObject {
  const sameAs = Object.values(siteConfig.social).filter(
    (value): value is string => Boolean(value)
  );

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.baseUrl.toString(),
    description: siteConfig.description,
    ...(siteConfig.logoUrl && { logo: siteConfig.logoUrl }),
    ...((siteConfig.contact.email || siteConfig.contact.phone) && {
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        ...(siteConfig.contact.email && { email: siteConfig.contact.email }),
        ...(siteConfig.contact.phone && { telephone: siteConfig.contact.phone }),
      },
    }),
    ...(sameAs.length > 0 && { sameAs }),
  };
}

export function websiteJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.baseUrl.toString(),
  };
}

export function webPageJsonLd(options: {
  name: string;
  path: string;
  description?: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: options.name,
    url: new URL(options.path, siteConfig.baseUrl).toString(),
    ...(options.description && { description: options.description }),
  };
}

export function breadcrumbListJsonLd(
  items: Array<{ name: string; path: string }>
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.baseUrl).toString(),
    })),
  };
}

export function articleJsonLd(options: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  image?: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.headline,
    description: options.description,
    url: new URL(options.path, siteConfig.baseUrl).toString(),
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    author: { "@type": "Person", name: options.authorName },
    ...(options.image && { image: options.image }),
  };
}
