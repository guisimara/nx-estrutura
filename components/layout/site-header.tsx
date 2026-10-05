import Link from "next/link";
import { siteConfig } from "@/lib/config/site";

// Esqueleto semântico mínimo: a navegação real só entra quando a arquitetura de páginas
// for definida (ver etapa de arquitetura de informação). Nenhum item de menu fictício aqui.
export function SiteHeader() {
  return (
    <header>
      <nav aria-label="Principal">
        <Link href="/">{siteConfig.name}</Link>
      </nav>
    </header>
  );
}
