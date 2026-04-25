# CLABackgrounds

Un catálogo de **fondos CSS listos para copiar y usar**, con soporte completo para modo claro y oscuro. Construido con **SvelteKit** y **Tailwind CSS**.

## Características

- 🎨 **Fondos personalizados** — Catálogo de fondos CSS modernos y animados
- 🌓 **Modo claro y oscuro** — Cada fondo se adapta automáticamente según la preferencia del sistema
- 📋 **Copy-paste ready** — Copia el código Tailwind directamente a tu proyecto
- 🚀 **Performance** — Componentes optimizados y fondos renderizados como HTML/CSS
- ♿ **Accesible** — Diseño pensado en WCAG

## Tecnología

- **SvelteKit 2** — Framework reactivo moderno
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Estilos y fondos
- **pnpm** — Package manager eficiente
- **Iconos SVG** — Componentes personalizados (sin Font Awesome)

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/cla-bg/cla-bg.git
cd cla-bg

# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Build producción
pnpm build
```

## Estructura del proyecto

```
src/
├── lib/
│   ├── backgrounds.ts          # Definición de todos los fondos
│   ├── assets/
│   │   ├── backgrounds.css
│   │   └── icons/              # Componentes SVG
│   │       ├── Sun.svelte
│   │       ├── Moon.svelte
│   │       ├── Refresh.svelte
│   │       ├── Code.svelte
│   │       ├── Copy.svelte
│   │       ├── GitHub.svelte
│   │       └── ...
│   └── components/
│       ├── Header.svelte       # Navegación con theme toggle
│       ├── Hero.svelte         # Sección principal
│       ├── BgCard.svelte       # Tarjeta individual de fondo
│       ├── CodeDrawer.svelte   # Drawer con código Tailwind
│       └── Footer.svelte
├── routes/
│   ├── +layout.svelte
│   ├── +page.svelte            # Página principal
│   └── layout.css
└── app.html
```

## Componentes principales

### Header
- Logo con ícono personalizado (Code.svelte)
- Botón para cambiar entre modo claro/oscuro
- Botón para reiniciar el fondo activo
- Sticky positioning

### Hero
- Título principal atractivo
- Descripción de funcionalidades
- Botón link a GitHub

### BgCard
- Preview del fondo en modo claro/oscuro
- Botón para aplicar como fondo de página
- Botón para ver/copiar código Tailwind

### CodeDrawer
- Drawer lateral con código completo
- Modo claro + oscuro en un bloque
- Botón copy-to-clipboard

## Agregar un nuevo fondo

1. Abre `src/lib/backgrounds.ts`
2. Agrega un objeto con:
   - `title`: nombre del fondo
   - `light`: HTML para modo claro
   - `dark`: HTML para modo oscuro
   - `codeLight`: código Tailwind para modo claro
   - `codeDark`: código Tailwind para modo oscuro

Ejemplo:
```typescript
{
  title: "Gradient Sunset",
  light: `<div class="absolute inset-0 bg-linear-to-br from-yellow-100 via-orange-50 to-pink-100"></div>`,
  dark: `<div class="absolute inset-0 bg-linear-to-br from-slate-900 via-red-900 to-purple-900"></div>`,
  codeLight: `background: linear-gradient(to bottom right, rgb(254 243 199) 0%, rgb(255 245 238) 50%, rgb(252 228 236) 100%);`,
  codeDark: `background: linear-gradient(to bottom right, rgb(15 23 42) 0%, rgb(55 15 15) 50%, rgb(38 35 41) 100%);`,
}
```

## Scripts disponibles

```bash
pnpm dev       # Iniciar servidor de desarrollo (puerto 5173)
pnpm build     # Build para producción
pnpm preview   # Preview del build
pnpm check     # Validación con SvelteKit
```

## Estado actual

- ✅ 12+ fondos definidos
- ✅ Tema claro/oscuro funcional
- ✅ Componentes refactorizados (Hero como componente independiente)
- ✅ Sin dependencias de Font Awesome (iconos SVG custom)
- ✅ Responsive design
- ⚠️ 15 warnings de a11y/eventos en Svelte 5 (en progreso)

## Licencia

MIT
