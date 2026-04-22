# CLA - Backgrounds

## Estado actual

- Proyecto base en SvelteKit + TypeScript con pnpm.
- App funcional: catálogo de fondos con preview, modo claro/oscuro y drawer de código.
- Datos actuales: 12 fondos definidos en `src/lib/backgrounds.ts`.
- Salud técnica: `pnpm check` sin errores (0), con 15 warnings de a11y/eventos (Svelte 5) en componentes.

## Estructura del proyecto

```text
.
|-- package.json
|-- pnpm-lock.yaml
|-- pnpm-workspace.yaml
|-- README.md
|-- svelte.config.js
|-- tsconfig.json
|-- vite.config.ts
|-- src/
|   |-- app.d.ts
|   |-- app.html
|   |-- lib/
|   |   |-- backgrounds.ts
|   |   |-- index.ts
|   |   |-- assets/
|   |   `-- components/
|   |       |-- BgCard.svelte
|   |       |-- CodeDrawer.svelte
|   |       `-- header.svelte
|   `-- routes/
|       |-- +layout.svelte
|       |-- +page.svelte
|       `-- layout.css
`-- static/
	`-- robots.txt
```