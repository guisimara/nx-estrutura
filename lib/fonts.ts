import { Poppins } from "next/font/google";

// Família provisória (Poppins). Pesos reduzidos ao mínimo necessário para não penalizar performance;
// a tipografia definitiva será fechada em etapa de identidade visual.
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
