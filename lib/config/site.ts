const isIndexingEnabled = process.env.NEXT_PUBLIC_ENABLE_INDEXING === "true";

export const siteConfig = {
  name: "Nexo Company",
  description:
    "Assessoria de crescimento e performance digital para operações de food service.",
  baseUrl: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  locale: "pt_BR",
  // Indexação fica desligada por padrão para nunca indexar preview/staging por acidente.
  // Só vira "true" via env var no ambiente de produção oficial, quando o domínio estiver definido.
  isIndexingEnabled,
  // Os campos abaixo ficam indefinidos até que a informação oficial seja confirmada pelo cliente.
  // Nunca preencher com dados fictícios (logo, telefone, e-mail, redes sociais, endereço, CNPJ).
  logoUrl: process.env.NEXT_PUBLIC_LOGO_URL,
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
  },
  tracking: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID,
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  },
};
