import type React from "react"
import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Fuentes OFL autohospedadas (fontsource 5.3.0, subset latin con ñ y tildes)
const bricolage = localFont({
  src: "./fonts/bricolage-grotesque-latin-standard-normal.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "75% 100%" }],
  preload: true,
})
const inter = localFont({
  src: "./fonts/inter-latin-standard-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
  preload: true,
})
const martian = localFont({
  src: "./fonts/martian-mono-latin-standard-normal.woff2",
  variable: "--font-martian",
  weight: "100 800",
  display: "swap",
  preload: false,
  declarations: [{ prop: "font-stretch", value: "75% 112.5%" }],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://varelab.com"),
  title: "VareLab · Sistemas a medida para ordenar ventas, stock y cobranzas",
  description:
    "Sistemas de gestión a medida para negocios de Tucumán que hoy llevan las ventas, el stock y las cobranzas en cuadernos o planillas.",
  openGraph: {
    title: "VareLab",
    description: "Sistemas a medida para ordenar ventas, stock y cobranzas.",
    type: "website",
    locale: "es_AR",
  },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
}

export const viewport: Viewport = {
  themeColor: "#f6f3ec",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${bricolage.variable} ${inter.variable} ${martian.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
