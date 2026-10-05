import type { Metadata, Viewport } from "next";
import { poppins } from "@/lib/fonts";
import { siteConfig } from "@/lib/config/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/json-ld";
import { JsonLd } from "@/components/seo/json-ld";
import { SkipLink } from "@/components/layout/skip-link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteConfig.baseUrl,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots: {
    index: siteConfig.isIndexingEnabled,
    follow: siteConfig.isIndexingEnabled,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <SkipLink />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <SiteHeader />
        <main id="conteudo-principal" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
