# VareLab · Sistema de diseño de la web

Documento de referencia para mantener la web coherente. Los valores viven en `app/globals.css`; esto explica cómo usarlos.

## Mundo visual
"Tinta y papel con resaltador". Fondo cálido de papel, texto en tinta y un único acento ámbar que funciona como resaltador: marca lo importante, nunca decora. Las secciones oscuras (`.superficie-tinta`) invierten los tokens semánticos solas.

## Color
| Token | Valor | Uso |
|---|---|---|
| `--marca-color-tinta` | #14181B | Texto, fondos oscuros |
| `--marca-color-tinta-2` | #232A2F | Superficies elevadas sobre tinta, campos de formulario |
| `--marca-color-papel` | #F6F3EC | Fondo principal |
| `--marca-color-papel-2` | #ECE6D8 | Bandas y tarjetas sobre papel |
| `--marca-color-resaltador` | #FFB81C | Único acento: botones, renglón del logo, resaltado, foco sobre tinta |
| `--marca-color-resaltador-suave` | #FFE6A6 | Fondos suaves, blobs |
| `--marca-color-gris` | #5B6670 | Texto secundario sobre papel |
| `--marca-color-gris-claro` | #A7B0B8 | Texto secundario sobre tinta |

Reglas (tabla completa en `docs/contraste.md`): el resaltador nunca es color de texto sobre papel (1,6:1); sobre papel va detrás de texto en tinta (`.resaltado`). En componentes se usan los semánticos (`--marca-color-fondo`, `-texto`, `-texto-secundario`, `-borde`, `-foco`), no los primitivos.

## Tipografía por voces
- **Display** · Bricolage Grotesque (opsz + wght): titulares, stickers, nombres de servicios. Tracking −0,03em, `text-wrap: balance`.
- **Información** · Inter (wght): todo el texto de lectura. 16–17 px, interlineado 1,6, medida máx. 65ch.
- **Cifras** · Martian Mono angosta (`.cifra`, wdth 78, `tabular-nums`): horarios y números reales. Nunca como disfraz "técnico".
- Escala fluida con `clamp()` de 390 a 1440 px: `--marca-fs-display`, `-h2`, `-h3`, `-lead`, `-texto`, `-cifra`.

## Recursos gráficos
- `Wordmark` / `Isotipo` (`components/brand/marca.tsx`): SVG exportados de Figma, sin redibujar. El renglón siempre ámbar; no apoyarlos sobre ámbar.
- `BotonPildora`: un solo CTA principal por sección. Variantes tinta, resaltador, papel. Alto mínimo 52 px.
- `Sticker` (texto curvo), `Sello` (gira con el scroll), `Blob`, `Icono` (8 íconos de línea, trazo 1,75).
- `Resaltador` (mascota): cruza con el scroll y deja el renglón.

## Movimiento
- Solo `transform` y `opacity`. Curvas: `--marca-ease-out` (UI), `--marca-ease-in-out` (desplazamientos en pantalla), `--marca-ease-drawer` (bottom sheet).
- UI < 300 ms; salidas más rápidas que entradas (sheet: 260 / 160 ms). Presión `scale(0.97)`. Hover solo con `(hover: hover) and (pointer: fine)`.
- GSAP + ScrollTrigger + SplitText + Lenis se cargan diferido (`components/landing/movimiento.tsx`); `gsap.matchMedia()` separa desktop (≥ 900 px) y mobile.
- Nada se mueve solo más de 5 s: la franja de rubros y el sello avanzan con el scroll.
- `prefers-reduced-motion`: sin pin, sin Lenis, sin desplazamientos; el hero muestra el cuadro final.

## Hero
Secuencia de cuadros generada desde `scripts/escena-hero/escena.html` (ilustración propia, datos de ejemplo). Para regenerar: `node scripts/escena-hero/render.mjs <carpeta-con-playwright>`.

## Contenido
Sin reseñas, precios, cifras ni fotos inventadas. Los casos van por rubro hasta tener permiso del cliente. Lo ilustrativo se rotula.

## Verificación (23/10/2026)
Lighthouse mobile 91–93 (accesibilidad, buenas prácticas y SEO 100), desktop 100. axe: 0 violaciones en 1440×900 y 390×844, con y sin movimiento.
