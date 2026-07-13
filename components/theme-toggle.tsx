"use client"

import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

const themeOptions = [
  { value: "system", label: "Sistema", icon: Monitor },
  { value: "light", label: "Claro", icon: Sun },
  { value: "dark", label: "Oscuro", icon: Moon },
]

const subscribe = () => () => {}

function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false)
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()

  const activeTheme = mounted ? theme ?? "system" : "system"

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-border/80 bg-card/75 p-1 shadow-lg shadow-primary/10 backdrop-blur-xl"
      aria-label="Selector de tema"
    >
      {themeOptions.map(({ value, label, icon: Icon }) => {
        const isActive = activeTheme === value

        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            title={label}
            aria-label={`Usar modo ${label.toLowerCase()}`}
            aria-pressed={isActive}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${
              isActive
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md shadow-primary/20"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <Icon size={16} />
          </button>
        )
      })}
    </div>
  )
}
