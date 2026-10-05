import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.baseUrl.toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
