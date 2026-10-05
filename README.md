# Nexo Company

Site institucional da Nexo Company — assessoria de crescimento e performance digital para
operações de food service (restaurantes, pizzarias, delivery).

Stack: [Next.js 16](https://nextjs.org) (App Router), TypeScript, Tailwind CSS v4.

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Veja [`.env.example`](.env.example). Resumo:

- `NEXT_PUBLIC_SITE_URL` — domínio oficial, usado para canonical, Open Graph, sitemap e robots.
- `NEXT_PUBLIC_ENABLE_INDEXING` — só deve ser `"true"` em produção, para evitar indexação acidental de preview/staging.
- `NEXT_PUBLIC_CONTACT_*`, `NEXT_PUBLIC_SOCIAL_*`, `NEXT_PUBLIC_LOGO_URL` — dados institucionais usados no JSON-LD de `Organization`; preencher apenas com informações oficiais confirmadas.
- `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_META_PIXEL_ID` — reservados para a etapa de Analytics e Tracking.

## Arquitetura

- `lib/config/site.ts` — configuração central (nome, descrição, baseUrl, contato, redes, tracking).
- `lib/seo/metadata.ts` — helper `buildMetadata()` para metadata por página (title, description, canonical, OG, Twitter).
- `lib/seo/json-ld.ts` — helpers de dados estruturados (`Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `Article`).
- `lib/analytics/events.ts` — camada de eventos desacoplada da UI, empurra para `window.dataLayer` (sem scripts de tracking carregados ainda).
- `app/sitemap.ts`, `app/robots.ts` — gerados nativamente pelo Next.js.
- `components/layout/` — esqueleto semântico (`header`, `nav`, `footer`, skip link), sem identidade visual definitiva.

## Scripts

```bash
npm run dev     # ambiente de desenvolvimento
npm run build   # build de produção
npm run start   # servidor de produção
npm run lint    # eslint
```
