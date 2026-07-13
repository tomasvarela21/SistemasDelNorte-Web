"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Sparkles, Plus, RotateCw, DollarSign, Package, BarChart3 } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  // Estados para el Dashboard interactivo
  const [activeTab, setActiveTab] = useState<"sales" | "stock" | "metrics">("sales")
  const [salesCount, setSalesCount] = useState(42)
  const [revenue, setRevenue] = useState(1420)
  const [stockCount, setStockCount] = useState(178)
  const [recentSales, setRecentSales] = useState([
    { id: 1, name: "María L.", amount: 120, time: "Hace 2 min" },
    { id: 2, name: "Juan G.", amount: 80, time: "Hace 5 min" },
    { id: 3, name: "Carlos M.", amount: 150, time: "Hace 15 min" },
  ])

  const handleRegisterSale = () => {
    const names = ["Andrés P.", "Sofía R.", "Lucas M.", "Patricia T.", "Roberto V.", "Gisela S."]
    const amounts = [45, 60, 95, 110, 130, 200, 350]
    const randomName = names[Math.floor(Math.random() * names.length)]
    const randomAmount = amounts[Math.floor(Math.random() * amounts.length)]
    
    setSalesCount(prev => prev + 1)
    setRevenue(prev => prev + randomAmount)
    setStockCount(prev => Math.max(0, prev - 1))
    
    const newSale = {
      id: Date.now(),
      name: randomName,
      amount: randomAmount,
      time: "Justo ahora"
    }
    setRecentSales(prev => [newSale, ...prev.slice(0, 2)])
  }

  const handleRestock = () => {
    setStockCount(prev => prev + 50)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-background bg-grid-pattern text-foreground pt-32 pb-20 overflow-hidden"
    >
      {/* Luces de fondo ambientadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-0 w-[450px] h-[450px] bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-float"></div>
        <div className="absolute bottom-10 -left-20 w-[400px] h-[400px] bg-accent rounded-full mix-blend-screen filter blur-[100px] opacity-15 animate-glow"></div>
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
              <span className="text-sm font-semibold text-accent tracking-wider font-display">Transformación Digital para tu Negocio</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-balance bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent font-display dark:from-white dark:via-zinc-100 dark:to-accent"
            >
              Soluciones digitales que ordenan y escalan tu negocio
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
              Sistemas personalizados, plataformas web y automatización administrativa para PyMEs y comercios que
              quieren crecer sin complicaciones.
            </motion.p>

            {/* Beneficios rápidos */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4 mb-10">
              {[
                "Sistemas a medida para tu PyME",
                "Plataformas web y catálogos digitales",
                "Automatización y reportes en tiempo real",
              ].map((benefit, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-secondary-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/543812165087?text=Hola%20Sistemas%20del%20Norte%2C%20quiero%20información%20sobre%20un%20sistema%20para%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground dark:text-background rounded-lg font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105 flex items-center justify-center gap-2 group shadow-lg"
              >
                Hablamos por WhatsApp
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-primary-foreground dark:text-background" />
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-border hover:border-accent text-secondary-foreground hover:text-accent rounded-lg font-bold hover:bg-accent/5 transition-all hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm group dark:border-zinc-700 dark:text-zinc-300"
              >
                Ver Proyectos
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Visual - Mockup interactivo del Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl opacity-60 blur-3xl pointer-events-none"></div>

              {/* Mockup dashboard interactivo */}
              <div className="relative glass-dark rounded-2xl p-5 shadow-2xl border border-border/80 overflow-hidden dark:border-white/10">
                {/* Cabecera del simulador */}
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-border/70 dark:border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/80">Live Demo - Sistema PyME</span>
                </div>

                {/* Pestañas del Dashboard */}
                <div className="flex gap-2 mb-4 bg-secondary/70 p-1 rounded-lg border border-border/70 dark:bg-zinc-950/60 dark:border-white/5">
                  <button
                    onClick={() => setActiveTab("sales")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-xs font-semibold transition-all ${
                      activeTab === "sales" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <DollarSign size={14} /> Ventas
                  </button>
                  <button
                    onClick={() => setActiveTab("stock")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-xs font-semibold transition-all ${
                      activeTab === "stock" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Package size={14} /> Inventario
                  </button>
                  <button
                    onClick={() => setActiveTab("metrics")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-xs font-semibold transition-all ${
                      activeTab === "metrics" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <BarChart3 size={14} /> Métricas
                  </button>
                </div>

                {/* Contenido de Pestañas */}
                <div className="min-h-[160px]">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="space-y-4"
                  >
                    {activeTab === "sales" && (
                      <>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-card/75 p-3 rounded-lg border border-border/70 dark:bg-zinc-950/40 dark:border-white/5">
                            <span className="text-[10px] text-muted-foreground/80 font-bold uppercase block mb-1">Total Ingresos</span>
                            <motion.span className="text-xl font-bold text-accent">
                              ${revenue.toLocaleString("es-AR")} USD
                            </motion.span>
                          </div>
                          <div className="bg-card/75 p-3 rounded-lg border border-border/70 dark:bg-zinc-950/40 dark:border-white/5">
                            <span className="text-[10px] text-muted-foreground/80 font-bold uppercase block mb-1">Ventas Totales</span>
                            <motion.span className="text-xl font-bold text-foreground">
                              {salesCount}
                            </motion.span>
                          </div>
                        </div>

                        {/* Recent Transactions List */}
                        <div className="space-y-2">
                          <span className="text-[10px] text-muted-foreground/80 font-bold uppercase block">Últimos Pedidos</span>
                          <div className="space-y-1.5 max-h-[85px] overflow-hidden">
                            {recentSales.map((sale) => (
                              <motion.div
                                key={sale.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex justify-between items-center text-xs bg-secondary/60 p-2 rounded border border-border/70 dark:bg-white/5 dark:border-white/5"
                              >
                                <span className="text-secondary-foreground font-medium">{sale.name}</span>
                                <div className="flex items-center gap-3">
                                  <span className="text-muted-foreground/80 text-[10px]">{sale.time}</span>
                                  <span className="text-accent font-bold">+${sale.amount}</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={handleRegisterSale}
                          type="button"
                          className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground dark:text-background rounded-lg font-bold text-xs shadow-lg shadow-primary/10 hover:scale-[1.01] active:scale-[0.99] transition-all"
                        >
                          <Plus size={14} className="text-primary-foreground dark:text-background" /> Simular Registro de Venta
                        </button>
                      </>
                    )}

                    {activeTab === "stock" && (
                      <>
                        <div className="bg-card/75 p-4 rounded-lg border border-border/70 dark:bg-zinc-950/40 dark:border-white/5">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] text-muted-foreground/80 font-bold uppercase">Nivel de Stock</span>
                            <span className={`text-xs font-bold ${stockCount < 100 ? "text-red-400" : "text-emerald-400"}`}>
                              {stockCount} Unidades
                            </span>
                          </div>
                          <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden border border-border/70 dark:bg-zinc-900 dark:border-white/5">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-accent"
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min(100, (stockCount / 300) * 100)}%` }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                          <span className="text-[9px] text-muted-foreground/80 mt-2 block">Capacidad máxima: 300 unidades.</span>
                        </div>

                        {stockCount < 150 && (
                          <div className="p-2.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-center text-[10px] font-semibold">
                            ⚠️ Alerta: El stock de productos está disminuyendo.
                          </div>
                        )}

                        <button
                          onClick={handleRestock}
                          type="button"
                          className="w-full flex items-center justify-center gap-2 py-2.5 border border-accent hover:bg-accent/5 text-accent rounded-lg font-bold text-xs transition-all"
                        >
                          <RotateCw size={14} /> Abastecer Almacén (+50 uds)
                        </button>
                      </>
                    )}

                    {activeTab === "metrics" && (
                      <>
                        <div className="bg-card/75 p-4 rounded-lg border border-border/70 space-y-3 dark:bg-zinc-950/40 dark:border-white/5">
                          <span className="text-[10px] text-muted-foreground/80 font-bold uppercase block">Rendimiento Semanal</span>
                          {/* Mini gráfico de barras CSS */}
                          <div className="flex items-end justify-between h-20 pt-2 px-1">
                            {[45, 60, 50, 75, 90, 80, 95].map((val, i) => (
                              <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                                <motion.div
                                  className="w-4 bg-gradient-to-t from-primary/40 to-accent rounded-t-sm"
                                  initial={{ height: 0 }}
                                  animate={{ height: `${val}%` }}
                                  transition={{ duration: 0.8, delay: i * 0.05 }}
                                />
                                <span className="text-[8px] text-muted-foreground/80">
                                  {["L", "M", "M", "J", "V", "S", "D"][i]}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-muted-foreground/80 bg-secondary/60 p-2 rounded dark:bg-white/5">
                          <span className="font-semibold text-muted-foreground">Eficiencia Administrativa</span>
                          <span className="text-accent font-bold">+124%</span>
                        </div>
                      </>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
