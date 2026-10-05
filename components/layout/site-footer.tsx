import { siteConfig } from "@/lib/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        &copy; {year} {siteConfig.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
