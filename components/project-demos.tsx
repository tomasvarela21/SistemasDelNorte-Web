"use client"

import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  DollarSign,
  Download,
  FileText,
  Minus,
  Package,
  Plus,
  RefreshCw,
  Search,
  Send,
  ShoppingCart,
  Signal,
  SignalZero,
  Truck,
  UserCheck,
  X,
} from "lucide-react"

export type DemoType = "sales" | "ecommerce" | "catalog" | "workflow" | "reports" | "field"

export type ProjectCase = {
  id: number
  name: string
  client: string
  industry: string
  tagline: string
  category: string
  problem: string
  solution: string
  techs: string[]
  demoType: DemoType
  metrics: string[]
  previewStats: { label: string; value: string }[]
  palette: {
    primary: string
    secondary: string
    surface: string
    text: string
  }
  whatsappMessage: string
}

const whatsappNumber = "543812165087"

function MetricTile({ label, value, tone = "default" }: { label: string; value: string; tone?: "default" | "accent" | "warning" }) {
  const color = tone === "accent" ? "text-accent" : tone === "warning" ? "text-amber-500" : "text-foreground"

  return (
    <div className="rounded-lg border border-border/70 bg-card/75 p-4 dark:border-white/10 dark:bg-zinc-950/40">
      <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</span>
      <span className={`font-display block text-2xl font-extrabold tabular-nums ${color}`}>{value}</span>
    </div>
  )
}

function DemoButton({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: {
  children: ReactNode
  onClick: () => void
  variant?: "primary" | "secondary"
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
        variant === "primary"
          ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md hover:shadow-lg hover:shadow-primary/25 dark:text-background"
          : "border border-border bg-secondary/70 text-secondary-foreground hover:border-accent hover:text-accent dark:border-white/10 dark:bg-white/5"
      }`}
    >
      {children}
    </button>
  )
}

function MiniLog({ items }: { items: string[] }) {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={`${item}-${index}`} className="flex items-center gap-2 rounded-md border border-border/60 bg-background/60 px-3 py-2 text-xs text-secondary-foreground dark:border-white/10 dark:bg-white/5">
          <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

function SalesDemo() {
  const [sales, setSales] = useState(128)
  const [revenue, setRevenue] = useState(1842000)
  const [stock, setStock] = useState(24)
  const [reserved, setReserved] = useState(7)
  const [logs, setLogs] = useState(["Sucursal Yerba Buena confirmó pedido #1042", "Stock de bulonería sincronizado", "Caja mostrador conciliada"])

  const registerSale = () => {
    const amounts = [24500, 31800, 45200, 63900]
    const amount = amounts[sales % amounts.length]
    setSales((value) => value + 1)
    setRevenue((value) => value + amount)
    setStock((value) => Math.max(0, value - 2))
    setReserved((value) => value + 1)
    setLogs((value) => [`Pedido mayorista por $${amount.toLocaleString("es-AR")} registrado`, ...value.slice(0, 3)])
  }

  const restock = () => {
    setStock((value) => value + 18)
    setReserved((value) => Math.max(0, value - 2))
    setLogs((value) => ["Ingreso de proveedor: +18 cajas al depósito", ...value.slice(0, 3)])
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <MetricTile label="Pedidos" value={String(sales)} />
          <MetricTile label="Ingresos" value={`$${revenue.toLocaleString("es-AR")}`} tone="accent" />
          <MetricTile label="Stock crítico" value={String(stock)} tone={stock <= 18 ? "warning" : "default"} />
        </div>
        <div className="rounded-lg border border-border/70 bg-secondary/50 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="font-display font-bold text-foreground">Depósito central · Bulonería zincada</span>
            <span className={`rounded-full px-3 py-1 text-xs font-bold ${stock <= 18 ? "bg-amber-500/15 text-amber-500" : "bg-accent/15 text-accent"}`}>
              {stock <= 18 ? "Reponer hoy" : "Stock estable"}
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-background dark:bg-zinc-900">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" animate={{ width: `${Math.min(100, stock * 3)}%` }} />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
            <span>Reservado: <strong className="text-foreground">{reserved} pedidos</strong></span>
            <span>Próxima compra: <strong className="text-foreground">jueves 10:00</strong></span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <DemoButton onClick={registerSale}>
            <DollarSign className="h-4 w-4" />
            Registrar venta
          </DemoButton>
          <DemoButton onClick={restock} variant="secondary">
            <Package className="h-4 w-4" />
            Reponer stock
          </DemoButton>
        </div>
      </div>
      <div className="rounded-lg border border-border/70 bg-card/70 p-4 dark:border-white/10 dark:bg-zinc-950/40">
        <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-muted-foreground">Actividad reciente</span>
        <MiniLog items={logs} />
      </div>
    </div>
  )
}

function EcommerceDemo() {
  const products = [
    { id: 1, name: "Blazer Aura lino", price: 68000 },
    { id: 2, name: "Set urbano premium", price: 92500 },
    { id: 3, name: "Cartera mini cuero", price: 41500 },
  ]
  const [cart, setCart] = useState<Record<number, number>>({ 1: 1 })
  const [discount, setDiscount] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const subtotal = products.reduce((sum, product) => sum + product.price * (cart[product.id] ?? 0), 0)
  const total = Math.round(subtotal * (discount ? 0.9 : 1))
  const items = Object.values(cart).reduce((sum, qty) => sum + qty, 0)

  const add = (id: number) => {
    setConfirmed(false)
    setCart((value) => ({ ...value, [id]: (value[id] ?? 0) + 1 }))
  }

  const subtract = (id: number) => {
    setConfirmed(false)
    setCart((value) => ({ ...value, [id]: Math.max(0, (value[id] ?? 0) - 1) }))
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <div className="space-y-3">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between gap-3 rounded-lg border border-border/70 bg-card/70 p-4 dark:border-white/10 dark:bg-zinc-950/40">
            <div>
              <span className="font-display block font-bold text-foreground">{product.name}</span>
              <span className="text-sm text-muted-foreground">${product.price.toLocaleString("es-AR")}</span>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => subtract(product.id)} className="rounded-md border border-border p-2 text-muted-foreground hover:text-accent dark:border-white/10">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-6 text-center font-bold tabular-nums">{cart[product.id] ?? 0}</span>
              <button type="button" onClick={() => add(product.id)} className="rounded-md border border-border p-2 text-muted-foreground hover:text-accent dark:border-white/10">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4 rounded-lg border border-border/70 bg-secondary/50 p-4 dark:border-white/10 dark:bg-white/5">
        <div className="grid grid-cols-2 gap-3">
          <MetricTile label="Items" value={String(items)} />
          <MetricTile label="Total" value={`$${total.toLocaleString("es-AR")}`} tone="accent" />
        </div>
        <DemoButton onClick={() => setDiscount((value) => !value)} variant="secondary">
          <ShoppingCart className="h-4 w-4" />
          {discount ? "Quitar descuento" : "Aplicar 10% off"}
        </DemoButton>
        <DemoButton onClick={() => setConfirmed(true)} disabled={items === 0}>
          <CheckCircle2 className="h-4 w-4" />
          Confirmar pedido
        </DemoButton>
        <MiniLog
          items={[
            discount ? "Cupón AURA10 aplicado al carrito" : "Carrito listo para campaña de temporada",
            confirmed ? "Pedido #A-2031 confirmado y listo para cobrar" : "Checkout pendiente de confirmación",
            "Talles y stock reservados automáticamente",
          ]}
        />
      </div>
    </div>
  )
}

function CatalogDemo() {
  const products = [
    { id: 1, name: "Lámpara arcilla norteña", category: "Iluminación" },
    { id: 2, name: "Mesa ratona quebracho", category: "Muebles" },
    { id: 3, name: "Set textil llama", category: "Textiles" },
    { id: 4, name: "Organizador cerámico", category: "Deco" },
  ]
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("Todos")
  const [selected, setSelected] = useState<number[]>([])

  const filtered = products.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = category === "Todos" || product.category === category
    return matchesQuery && matchesCategory
  })

  const toggleSelected = (id: number) => {
    setSelected((value) => (value.includes(id) ? value.filter((item) => item !== id) : [...value, id]))
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar producto"
              className="w-full rounded-lg border border-border bg-card px-10 py-3 text-sm outline-none focus:border-accent dark:border-white/10 dark:bg-zinc-950/60"
            />
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-lg border border-border bg-card px-3 py-3 text-sm outline-none focus:border-accent dark:border-white/10 dark:bg-zinc-950/60"
          >
            {["Todos", "Iluminación", "Muebles", "Textiles", "Deco"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => toggleSelected(product.id)}
              className={`rounded-lg border p-4 text-left transition-all ${
                selected.includes(product.id)
                  ? "border-accent bg-accent/10"
                  : "border-border bg-card/70 hover:border-accent dark:border-white/10 dark:bg-zinc-950/40"
              }`}
            >
              <span className="font-display block font-bold text-foreground">{product.name}</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{product.category}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-border/70 bg-secondary/50 p-4 dark:border-white/10 dark:bg-white/5">
        <div className="mb-4 grid grid-cols-2 gap-3">
          <MetricTile label="Resultados" value={String(filtered.length)} />
          <MetricTile label="Consulta" value={String(selected.length)} tone="accent" />
        </div>
        <MiniLog
          items={[
            `${selected.length} producto${selected.length === 1 ? "" : "s"} seleccionado${selected.length === 1 ? "" : "s"}`,
            "Consulta lista para enviar al asesor comercial",
            "Catálogo navegable sin PDF pesado",
          ]}
        />
      </div>
    </div>
  )
}

function WorkflowDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Autorizar práctica traumatología", status: "Pendiente", owner: "Admisión" },
    { id: 2, title: "Confirmar turno cardiología", status: "En proceso", owner: "Mesa" },
    { id: 3, title: "Enviar documentación a obra social", status: "Pendiente", owner: "Admin" },
    { id: 4, title: "Cerrar caja consultorios", status: "Listo", owner: "Tesorería" },
  ])
  const statuses = ["Pendiente", "En proceso", "Listo"]
  const progress = Math.round((tasks.filter((task) => task.status === "Listo").length / tasks.length) * 100)

  const advance = (id: number) => {
    setTasks((value) =>
      value.map((task) => {
        if (task.id !== id) return task
        const next = statuses[Math.min(statuses.length - 1, statuses.indexOf(task.status) + 1)]
        return { ...task, status: next }
      }),
    )
  }

  const rotateOwner = (id: number) => {
    const owners = ["Admisión", "Mesa", "Admin", "Tesorería"]
    setTasks((value) =>
      value.map((task) => {
        if (task.id !== id) return task
        return { ...task, owner: owners[(owners.indexOf(task.owner) + 1) % owners.length] }
      }),
    )
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="rounded-lg border border-border/70 bg-card/70 p-4 dark:border-white/10 dark:bg-zinc-950/40">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <span className="font-display block font-bold text-foreground">{task.title}</span>
                <span className="text-sm text-muted-foreground">Responsable: {task.owner}</span>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-accent">{task.status}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <DemoButton onClick={() => advance(task.id)} variant="secondary" disabled={task.status === "Listo"}>
                <ArrowRight className="h-4 w-4" />
                Avanzar
              </DemoButton>
              <DemoButton onClick={() => rotateOwner(task.id)} variant="secondary">
                <UserCheck className="h-4 w-4" />
                Asignar
              </DemoButton>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4 rounded-lg border border-border/70 bg-secondary/50 p-4 dark:border-white/10 dark:bg-white/5">
        <MetricTile label="Avance" value={`${progress}%`} tone="accent" />
        <div className="h-3 overflow-hidden rounded-full bg-background dark:bg-zinc-900">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" animate={{ width: `${progress}%` }} />
        </div>
        <MiniLog items={["Responsables visibles por sector", "Estados centralizados", "Solicitudes sin perderse en chats"]} />
      </div>
    </div>
  )
}

function ReportsDemo() {
  const [period, setPeriod] = useState("Semanal")
  const [generated, setGenerated] = useState(false)
  const [sent, setSent] = useState(false)
  const multiplier = period === "Diario" ? 1 : period === "Semanal" ? 7 : 30
  const sales = 38 * multiplier
  const hours = Math.round(1.8 * multiplier)
  const accuracy = generated ? "99%" : "Pendiente"

  const generate = () => {
    setGenerated(true)
    setSent(false)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1fr]">
      <div className="space-y-4 rounded-lg border border-border/70 bg-secondary/50 p-4 dark:border-white/10 dark:bg-white/5">
        <select
          value={period}
          onChange={(event) => {
            setPeriod(event.target.value)
            setGenerated(false)
            setSent(false)
          }}
          className="w-full rounded-lg border border-border bg-card px-3 py-3 text-sm outline-none focus:border-accent dark:border-white/10 dark:bg-zinc-950/60"
        >
          {["Diario", "Semanal", "Mensual"].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <DemoButton onClick={generate}>
          <FileText className="h-4 w-4" />
          Generar reporte
        </DemoButton>
        <DemoButton onClick={() => setSent(true)} variant="secondary" disabled={!generated}>
          <Send className="h-4 w-4" />
          Enviar resumen
        </DemoButton>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <MetricTile label="Entregas" value={generated ? String(sales) : "--"} />
          <MetricTile label="Horas ahorradas" value={generated ? `${hours}h` : "--"} tone="accent" />
          <MetricTile label="Precisión" value={accuracy} />
        </div>
        <div className="rounded-lg border border-border/70 bg-card/70 p-4 dark:border-white/10 dark:bg-zinc-950/40">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-muted-foreground">Resumen automático</span>
          <div className="flex h-28 items-end gap-3">
            {[48, 72, generated ? 94 : 30, generated ? 64 : 20].map((height, index) => (
              <motion.div
                key={index}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-primary to-accent"
                animate={{ height: `${height}%`, opacity: generated ? 1 : 0.35 }}
              />
            ))}
          </div>
        </div>
        <MiniLog items={[generated ? `Reporte ${period.toLowerCase()} generado para dirección` : "Esperando generación", sent ? "Resumen enviado a operaciones y gerencia" : "Envío pendiente", "Datos de rutas consolidados sin carga manual"]} />
      </div>
    </div>
  )
}

function FieldDemo() {
  const [online, setOnline] = useState(false)
  const [visits, setVisits] = useState(3)
  const [queue, setQueue] = useState(2)
  const [synced, setSynced] = useState(8)

  const addVisit = () => {
    setVisits((value) => value + 1)
    if (online) {
      setSynced((value) => value + 1)
    } else {
      setQueue((value) => value + 1)
    }
  }

  const sync = () => {
    if (!online) return
    setSynced((value) => value + queue)
    setQueue(0)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <div className="rounded-[2rem] border border-border/70 bg-zinc-950 p-4 text-white shadow-2xl dark:border-white/10">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-display text-sm font-bold">TecnoCampo · Ruta 4</span>
          <span className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${online ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"}`}>
            {online ? <Signal className="h-3.5 w-3.5" /> : <SignalZero className="h-3.5 w-3.5" />}
            {online ? "Online" : "Offline"}
          </span>
        </div>
        <div className="space-y-3 rounded-2xl bg-white/10 p-4">
          <MetricTile label="Visitas" value={String(visits)} />
          <MetricTile label="En cola" value={String(queue)} tone={queue > 0 ? "warning" : "default"} />
          <MetricTile label="Sync" value={String(synced)} tone="accent" />
        </div>
      </div>
      <div className="space-y-4 rounded-lg border border-border/70 bg-secondary/50 p-4 dark:border-white/10 dark:bg-white/5">
        <DemoButton onClick={() => setOnline((value) => !value)} variant="secondary">
          <Cloud className="h-4 w-4" />
          {online ? "Pasar a offline" : "Volver online"}
        </DemoButton>
        <DemoButton onClick={addVisit}>
          <Truck className="h-4 w-4" />
          Cargar visita
        </DemoButton>
        <DemoButton onClick={sync} variant="secondary" disabled={!online || queue === 0}>
          <Download className="h-4 w-4" />
          Sincronizar
        </DemoButton>
        <MiniLog items={[online ? "Conexión disponible en base" : "Visitas guardadas en el dispositivo", `${queue} registro${queue === 1 ? "" : "s"} esperando sincronización`, "El técnico puede trabajar sin señal"]} />
      </div>
    </div>
  )
}

function DemoChrome({ project, children }: { project: ProjectCase; children: ReactNode }) {
  const chromeStyle = {
    background: `linear-gradient(135deg, ${project.palette.primary}, ${project.palette.secondary})`,
    color: project.palette.text,
  } satisfies CSSProperties

  return (
    <div className="overflow-hidden rounded-xl border border-border/70 bg-card shadow-2xl dark:border-white/10 dark:bg-zinc-950/60">
      <div style={chromeStyle} className="p-4 sm:p-5">
        <div className="mb-5 flex items-center justify-between gap-3 border-b border-white/20 pb-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-white/45" />
            <span className="h-3 w-3 rounded-full bg-white/30" />
            <span className="h-3 w-3 rounded-full bg-white/20" />
          </div>
          <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Demo cliente</span>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-75">{project.industry}</span>
            <h4 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">{project.client}</h4>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed opacity-85">{project.tagline}</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {project.previewStats.map((stat) => (
              <div key={stat.label} className="min-w-20 rounded-lg border border-white/20 bg-white/15 px-3 py-2 backdrop-blur">
                <span className="block text-[9px] font-bold uppercase tracking-widest opacity-70">{stat.label}</span>
                <span className="font-display block text-lg font-extrabold tabular-nums">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-background/95 p-4 sm:p-5 dark:bg-zinc-950/80">{children}</div>
    </div>
  )
}

function ProjectDemoRenderer({ project }: { project: ProjectCase }) {
  return (
    <DemoChrome project={project}>
      {project.demoType === "sales" && <SalesDemo />}
      {project.demoType === "ecommerce" && <EcommerceDemo />}
      {project.demoType === "catalog" && <CatalogDemo />}
      {project.demoType === "workflow" && <WorkflowDemo />}
      {project.demoType === "reports" && <ReportsDemo />}
      {project.demoType === "field" && <FieldDemo />}
    </DemoChrome>
  )
}

export function ProjectDemoModal({ project, onClose }: { project: ProjectCase | null; onClose: () => void }) {
  const [resetKey, setResetKey] = useState(0)

  useEffect(() => {
    if (!project) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [project, onClose])

  const whatsappHref = useMemo(() => {
    if (!project) return "#"
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(project.whatsappMessage)}`
  }, [project])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/80 p-3 backdrop-blur-xl sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-demo-title"
            className="glass-dark relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-border/80 p-4 shadow-2xl dark:border-white/10 sm:p-6"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex flex-col gap-4 border-b border-border/70 pb-5 dark:border-white/10 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                  <ClipboardCheck className="h-3.5 w-3.5" />
                  Demo funcional
                </span>
                <h3 id="project-demo-title" className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {project.client} · {project.problem}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setResetKey((value) => value + 1)}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/70 px-3 py-2 text-sm font-bold text-secondary-foreground transition-colors hover:border-accent hover:text-accent dark:border-white/10 dark:bg-white/5"
                >
                  <RefreshCw className="h-4 w-4" />
                  Reiniciar
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar demo"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/70 text-secondary-foreground transition-colors hover:border-accent hover:text-accent dark:border-white/10 dark:bg-white/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mb-6">
              <ProjectDemoRenderer key={`${project.id}-${resetKey}`} project={project} />
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-border/70 bg-card/70 p-4 dark:border-white/10 dark:bg-zinc-950/40 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-relaxed text-secondary-foreground">{project.solution}</p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-bold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:shadow-primary/25 dark:text-background"
              >
                Consultar esta solución
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
