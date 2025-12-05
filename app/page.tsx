"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Projects } from "@/components/projects"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Projects />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
