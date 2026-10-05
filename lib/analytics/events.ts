type AnalyticsEventName =
  | "cta_click"
  | "diagnostic_request"
  | "form_submit"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "case_view"
  | "strategic_navigation";

type AnalyticsEventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Empurra eventos para window.dataLayer (padrão GTM/GA4). Nenhum script de tracking
 * é carregado nesta etapa — a conexão real com GA4/GTM/Meta Pixel acontece quando os
 * IDs forem definidos via variáveis de ambiente, em etapa futura.
 */
export function trackEvent(name: AnalyticsEventName, props?: AnalyticsEventProps): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, ...props });
}
