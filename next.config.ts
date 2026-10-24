import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Sitio 100% estático: se publica la carpeta `out` (Cloudflare Pages u otro hosting estático)
  output: "export",
  // CSS en línea: evita la hoja que bloquea el render en el primer viewport
  experimental: { inlineCss: true },
}

export default nextConfig
