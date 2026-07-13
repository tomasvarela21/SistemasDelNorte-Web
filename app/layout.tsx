import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans" 
})

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-display" 
})

export const metadata: Metadata = {
  title: "Sistemas del Norte - Soluciones Digitales",
  description:
    "Sistemas personalizados, e-commerce y plataformas web que escalan tu negocio. Soluciones digitales para PyMEs y comercios en Argentina.",
  generator: "v0.app",
  keywords: "sistemas, desarrollo web, e-commerce, PyMEs, Argentina, software",
  authors: [{ name: "Sistemas del Norte" }],
  openGraph: {
    title: "Sistemas del Norte - Soluciones Digitales",
    description: "Sistemas que ordenan y escalan tu negocio",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "128x128",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
