# VareLab · Tabla de contraste WCAG 2.2

Ratios calculados con la fórmula de luminancia relativa de WCAG sobre los hex de `app/globals.css`.

- **texto ✓**: ≥ 4.5:1, sirve para cualquier texto.
- **solo texto grande / íconos**: entre 3:1 y 4.5:1. Solo titulares ≥ 24 px (o ≥ 18,7 px en negrita), íconos y bordes.
- **NUNCA**: < 3:1. No se usa para texto ni para íconos con significado.

| Texto \ Fondo | papel | papel-2 | resaltador-suave | resaltador | tinta | tinta-2 |
|---|---|---|---|---|---|---|
| tinta | 16.1:1 · texto ✓ | 14.3:1 · texto ✓ | 14.6:1 · texto ✓ | 10.3:1 · texto ✓ | — | 1.2:1 · NUNCA |
| papel | — | 1.1:1 · NUNCA | 1.1:1 · NUNCA | 1.6:1 · NUNCA | 16.1:1 · texto ✓ | 13.1:1 · texto ✓ |
| resaltador | 1.6:1 · NUNCA | 1.4:1 · NUNCA | 1.4:1 · NUNCA | — | 10.3:1 · texto ✓ | 8.4:1 · texto ✓ |
| gris | 5.3:1 · texto ✓ | 4.7:1 · texto ✓ | 4.8:1 · texto ✓ | 3.4:1 · solo texto grande / íconos | 3.0:1 · solo texto grande / íconos | 2.5:1 · NUNCA |
| gris-claro | 2.0:1 · NUNCA | 1.8:1 · NUNCA | 1.8:1 · NUNCA | 1.3:1 · NUNCA | 8.1:1 · texto ✓ | 6.6:1 · texto ✓ |
## Reglas que salen de la tabla

1. El resaltador (#FFB81C) **nunca** va como color de texto sobre papel (1.6:1). Sobre papel se usa como fondo detrás de texto en tinta (`.resaltado`, botones `resaltador`).
2. Sobre tinta, el resaltador sí funciona como texto (10.3:1) y como color de foco.
3. El gris (#5B6670) es texto secundario solo sobre superficies claras. Sobre tinta se usa `gris-claro` (#A7B0B8).
4. Papel sobre papel-2 o sobre resaltador-suave no tiene contraste: esos fondos siempre llevan texto en tinta.
5. Foco visible: contorno tinta sobre papel (16.1:1) y resaltador sobre tinta (10.3:1).
