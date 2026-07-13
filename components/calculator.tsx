"use client"

import { useEffect } from "react"
import { useState } from "react"
import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowRight, Calculator, CheckCircle2 } from "lucide-react"

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const motionValue = useMotionValue(value)
  const displayValue = useTransform(motionValue, (latest) => {
    return `${prefix}${Math.round(latest).toLocaleString("es-AR")}${suffix}`
  })

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.55,
      ease: "easeOut",
    })

    return () => controls.stop()
  }, [motionValue, value])

  return <motion.span className={className}>{displayValue}</motion.span>
}

export function CalculatorSection() {
  const [hours, setHours] = useState(15)
  const [teamSize, setTeamSize] = useState(3)
  const [hourlyRate, setHourlyRate] = useState(12)

  // Fórmulas
  // 52 semanas en el año, estimamos automatizar el 75% de las tareas repetitivas
  const annualHoursSaved = Math.round(hours * teamSize * 52 * 0.75)
  const annualMoneySaved = annualHoursSaved * hourlyRate

  // Estimación dinámica del rango de inversión del sistema
  const basePrice = 1200
  const estimatedInvestmentMin = Math.round((basePrice + hours * 40 + teamSize * 120) * 0.9)
  const estimatedInvestmentMax = Math.round((basePrice + hours * 45 + teamSize * 140) * 1.1)

  const handleSendSimulation = () => {
    const text = [
      `Hola Sistemas del Norte, realicé una simulación de ROI en su calculadora interactiva:`,
      `⏱️ Horas manuales/sem por persona: ${hours} hrs`,
      `👥 Equipo administrativo: ${teamSize} personas`,
      `💸 Valor estimado hora: $${hourlyRate} USD`,
      `---`,
      `🚀 Ahorro estimado anual: ${annualHoursSaved} horas de trabajo`,
      `💰 Dinero recuperado anual: $${annualMoneySaved.toLocaleString("es-AR")} USD`,
      `🔧 Inversión de sistema estimada: $${estimatedInvestmentMin.toLocaleString("es-AR")} - $${estimatedInvestmentMax.toLocaleString("es-AR")} USD`,
      `---`,
      `Me gustaría recibir asesoría personalizada para automatizar y ordenar mi negocio.`
    ].join("\n")

    window.open(`https://wa.me/543812165087?text=${encodeURIComponent(text)}`, "_blank")
  }

  return (
    <section id="calculator" className="py-20 bg-background relative overflow-hidden">
      {/* Luces de fondo */}
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-primary rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-accent rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-sm font-semibold text-accent tracking-wider font-display">Calculadora de Impacto de Negocio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 font-display">
            Calcula el Retorno de tu Inversión
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simula cuántas horas y dinero puedes recuperar automatizando tus procesos administrativos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Sliders de Configuración */}
          <div className="lg:col-span-6 glass border border-border/70 p-8 rounded-2xl flex flex-col justify-between space-y-8 dark:border-white/5">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-4 font-display">Configura tu Operación Actual</h3>

              {/* Slider 1: Horas */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground font-medium">Horas semanales manuales (por persona)</span>
                  <span className="text-accent font-bold">{hours} hrs</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent dark:bg-zinc-800"
                />
                <span className="text-[10px] text-muted-foreground/80 block">Facturación manual, control de stock en papel/excel, tareas repetitivas.</span>
              </div>

              {/* Slider 2: Equipo */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground font-medium">Personal dedicado a administración/operaciones</span>
                  <span className="text-accent font-bold">{teamSize} {teamSize === 1 ? "persona" : "personas"}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent dark:bg-zinc-800"
                />
                <span className="text-[10px] text-muted-foreground/80 block">Empleados, socios o tú mismo dedicando tiempo a la administración.</span>
              </div>

              {/* Slider 3: Costo de Hora */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground font-medium">Costo estimado por hora de trabajo (USD)</span>
                  <span className="text-accent font-bold">${hourlyRate} USD/hr</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent dark:bg-zinc-800"
                />
                <span className="text-[10px] text-muted-foreground/80 block">Salario base estimado dividido por las horas laborables.</span>
              </div>
            </div>

            <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-xs text-secondary-foreground leading-relaxed">
                Nuestros desarrollos automatizan en promedio el <strong className="text-accent">75%</strong> de las actividades administrativas repetitivas, permitiendo a tu equipo enfocarse en vender y hacer crecer el negocio.
              </p>
            </div>
          </div>

          {/* Gráfico y Resultados Proyectados */}
          <div className="lg:col-span-6 glass border border-border/70 p-8 rounded-2xl flex flex-col justify-between space-y-8 relative overflow-hidden dark:border-white/5">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-4 font-display">Ahorro y Retorno Estimado</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/75 p-4 rounded-xl border border-border/70 dark:bg-zinc-950/40 dark:border-white/5">
                  <span className="text-[10px] text-muted-foreground/80 font-bold uppercase block mb-1">Horas Recuperadas / Año</span>
                  <AnimatedNumber
                    value={annualHoursSaved}
                    suffix=" hrs"
                    className="block text-2xl sm:text-3xl font-extrabold text-foreground font-display tabular-nums"
                  />
                  <span className="text-[10px] text-accent mt-1 block">Liberadas para tu PyME</span>
                </div>

                <div className="bg-card/75 p-4 rounded-xl border border-border/70 dark:bg-zinc-950/40 dark:border-white/5">
                  <span className="text-[10px] text-muted-foreground/80 font-bold uppercase block mb-1">Dinero Recuperado / Año</span>
                  <AnimatedNumber
                    value={annualMoneySaved}
                    prefix="$"
                    suffix=" USD"
                    className="block text-2xl sm:text-3xl font-extrabold text-accent font-display tabular-nums"
                  />
                  <span className="text-[10px] text-muted-foreground mt-1 block">Retorno de inversión directo</span>
                </div>
              </div>

              {/* Gráfico comparativo de Tiempo */}
              <div className="bg-card/75 p-4 rounded-xl border border-border/70 space-y-3 dark:bg-zinc-950/40 dark:border-white/5">
                <span className="text-[10px] text-muted-foreground/80 font-bold uppercase block">Reducción de Tiempo de Trabajo Manual</span>
                <div className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Procesos Manuales (Actual)</span>
                      <span className="font-bold text-secondary-foreground">100%</span>
                    </div>
                    <div className="w-full h-3 bg-secondary rounded-full overflow-hidden border border-border/70 dark:bg-zinc-900 dark:border-white/5">
                      <div className="h-full bg-red-500/80 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Con Sistema Sistemas del Norte</span>
                      <span className="font-bold text-accent">25% (Ahorro del 75%)</span>
                    </div>
                    <div className="w-full h-3 bg-secondary rounded-full overflow-hidden border border-border/70 dark:bg-zinc-900 dark:border-white/5">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "25%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rango de Inversión Sugerido */}
              <div className="flex justify-between items-center bg-secondary/60 p-4 rounded-xl border border-border/70 dark:bg-white/5 dark:border-white/5">
                <div>
                  <span className="text-[10px] text-muted-foreground/80 font-bold uppercase block">Inversión Estimada</span>
                  <span className="text-sm font-semibold text-secondary-foreground mt-0.5 block">Software a Medida</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-foreground font-display tabular-nums">
                    <AnimatedNumber value={estimatedInvestmentMin} prefix="$" />
                    {" - "}
                    <AnimatedNumber value={estimatedInvestmentMax} prefix="$" suffix=" USD" />
                  </span>
                  <span className="text-[9px] text-muted-foreground/80 block mt-0.5">*Valor orientativo de desarrollo</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSendSimulation}
              type="button"
              className="w-full py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground dark:text-background rounded-lg font-bold text-sm hover:shadow-xl hover:shadow-primary/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group shadow-lg"
            >
              Consultar Proyecto con esta Simulación
              <ArrowRight size={18} className="text-primary-foreground dark:text-background group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
