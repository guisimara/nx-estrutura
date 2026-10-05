import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

// Bloqueia rastreamento inteiro quando NEXT_PUBLIC_ENABLE_INDEXING não for "true",
// evitando indexação acidental de ambientes de preview/staging.
export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.isIndexingEnabled) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteConfig.baseUrl).toString(),
  };
}
