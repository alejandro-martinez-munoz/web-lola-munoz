# Centro De Estética Lola Muñoz

Página web corporativa del Centro De Estética Lola Muñoz.

## Stack

- **Framework:** [Astro](https://astro.build/) v7
- **Lenguaje:** TypeScript (strict)
- **Estilos:** Vanilla CSS con Custom Properties
- **Animaciones:** CSS @keyframes + IntersectionObserver

## Estructura del proyecto

```
src/
├── assets/          # Imágenes, vídeos y recursos estáticos
├── components/      # Componentes reutilizables (.astro)
├── layouts/         # Layouts de página
├── pages/           # Páginas (file-based routing)
└── styles/          # CSS global y design tokens
public/              # Archivos estáticos servidos tal cual
```

## Comandos

| Comando         | Acción                                      |
|:----------------|:--------------------------------------------|
| `npm run dev`   | Inicia el servidor de desarrollo             |
| `npm run build` | Genera el build de producción en `./dist/`   |
| `npm run preview`| Vista previa del build de producción        |