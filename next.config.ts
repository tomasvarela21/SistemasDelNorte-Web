import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // CSS en línea: evita la hoja que bloquea el render en el primer viewport
  experimental: { inlineCss: true },
}

export default nextConfig
