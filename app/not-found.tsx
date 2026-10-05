import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

// Next.js retorna status HTTP 404 automaticamente para este arquivo de convenção.
export default function NotFound() {
  return (
    <section>
      <h1>Página não encontrada</h1>
      <p>A página que você procura não existe ou foi movida.</p>
      <Link href="/">Voltar para a página inicial</Link>
    </section>
  );
}
