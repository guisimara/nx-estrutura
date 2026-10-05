import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Caminho da página, ex: "/" ou "/sobre". Resolvido em URL absoluta via metadataBase do layout raiz. */
  path: string;
  ogImage?: string;
  /** Força noindex independentemente do estado global de indexação (ex: página de erro). */
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex,
}: PageMetadataInput): Metadata {
  const indexable = siteConfig.isIndexingEnabled && !noIndex;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: {
      index: indexable,
      follow: indexable,
    },
    openGraph: {
      title,
      description,
      url: path,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}
