/** "Mascota" de la marca: un resaltador que cruza la pantalla con el scroll y deja el renglón ámbar.
 *  Sin JS o con movimiento reducido se ve el renglón completo y el resaltador queda oculto. */
export function Resaltador() {
  return (
    <div className="mascota relative h-14 w-full" aria-hidden="true">
      <span className="mascota-linea absolute left-0 top-1/2 h-3 w-full -translate-y-1/2 rounded-full bg-resaltador" />
      <svg className="mascota-marcador absolute left-0 top-1/2 h-14 w-auto -translate-y-[78%]" viewBox="0 0 150 56" fill="none">
        {/* cuerpo */}
        <rect x="34" y="12" width="104" height="30" rx="9" fill="var(--marca-color-tinta)" />
        <rect x="120" y="12" width="18" height="30" rx="6" fill="var(--marca-color-tinta-2)" />
        <path d="M34 15 14 22v10l20 7Z" fill="var(--marca-color-tinta)" />
        {/* punta biselada */}
        <path d="M14 22 2 33l3 6 9-7Z" fill="var(--marca-color-resaltador)" />
        <rect x="50" y="22" width="56" height="10" rx="5" fill="var(--marca-color-resaltador)" />
      </svg>
    </div>
  )
}
