import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

// Title e description abaixo são PROVISÓRIOS (placeholder técnico de SEO), conforme definido
// na etapa de fundação técnica. Serão revisados na etapa de SEO estratégico de conteúdo.
//
// Nota técnica: a homepage está no MESMO segmento de rota que o root layout, então o
// title.template definido em app/layout.tsx não se aplica aqui (só a segmentos filhos,
// ex: /sobre) — por isso o título completo é escrito à mão, já com o sufixo da marca.
export const metadata: Metadata = buildMetadata({
  title: "Assessoria de Crescimento para Food Service | Nexo Company",
  description:
    "Assessoria de crescimento e performance digital para restaurantes e operações de food service que buscam aquisição, recorrência e escala.",
  path: "/",
});

export default function HomePage() {
  return (
    <article>
      <h1>Assessoria de crescimento e performance digital para food service</h1>
      <p>
        A Nexo Company é uma assessoria de crescimento e performance digital
        especializada em operações de food service: restaurantes, pizzarias,
        operações de delivery e outros negócios de alimentação que já possuem
        vendas e querem estruturar aquisição, recorrência e escala.
      </p>
    </article>
  );
}
