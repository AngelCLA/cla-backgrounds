<script lang="ts">
  import { BG } from "$lib/backgrounds";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import BgCard from "$lib/components/BgCard.svelte";
  import CodeDrawer from "$lib/components/CodeDrawer.svelte";
  import { browser } from "$app/environment";

  // Detectar preferencia del sistema: oscuro o claro
  const getSystemPreference = () => {
    if (browser && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  };

  // Obtener preferencia guardada del usuario o usar la del sistema
  const getInitialTheme = () => {
    if (browser) {
      const saved = localStorage.getItem("theme-preference");
      if (saved === "dark" || saved === "light") {
        return saved === "dark";
      }
    }
    return getSystemPreference();
  };

  let isDark = $state(getInitialTheme());

  // Aplicar el tema cuando isDark cambia
  $effect(() => {
    if (browser) {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme-preference", isDark ? "dark" : "light");
    }
  });

  // Escuchar cambios en la preferencia del sistema operativo (solo si el usuario no ha guardado una preferencia)
  $effect(() => {
    if (!browser) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem("theme-preference");
      if (!saved) {
        isDark = e.matches;
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  });

  let activeBg = $state<number | null>(null);
  let drawerOpen = $state(false);
  let drawerTitle = $state("");
  let drawerCode = $state("");

  let pageBgHtml = $derived(
    activeBg !== null ? (isDark ? BG[activeBg].dark : BG[activeBg].light) : "",
  );

  function applyBg(index: number) {
    activeBg = index;
  }
  function resetBg() {
    activeBg = null;
  }

  function openCode(index: number) {
    drawerTitle = BG[index].title + " — código";
    drawerCode = BG[index].codeLight + "\n\n" + BG[index].codeDark;
    drawerOpen = true;
  }
</script>

<svelte:head>
  <title>CLABackGrounds</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  />
</svelte:head>

<!-- Fondo de página (fixed, detrás de todo) -->
<div id="page-bg" aria-hidden="true">
  {@html pageBgHtml}
</div>

<!-- Header -->
<Header
  {isDark}
  activeBgTitle={activeBg !== null ? BG[activeBg].title : null}
  onToggleDark={() => (isDark = !isDark)}
  onReset={resetBg}
/>

<!-- Hero -->
<section class="hero">
  <div class="inner">
    <div class="hero-tag">
      <div class="hero-tag-dot"></div>
      fondos para tus proyectos
    </div>

    <h1 class="hero-title">
      Fondos listos<br />
      <em>para copiar y usar.</em>
    </h1>

    <div class="hero-bottom">
      <p class="hero-desc">
        Cada fondo funciona en <b>modo claro y oscuro</b>.<br />
        Haz clic en cualquier tarjeta para <b>aplicarlo</b> aquí mismo, o copia
        el código <b>Tailwind</b> directo a tu proyecto.
      </p>
      <a
        href="https://github.com/cla-bg"
        target="_blank"
        rel="noopener noreferrer"
        class="github-btn"
      >
        <i class="fa-brands fa-github" aria-hidden="true"></i>
        GitHub
      </a>
    </div>
  </div>
</section>

<!-- Grid -->
<main>
  <div class="grid">
    {#each BG as bg, i}
      <BgCard
        {bg}
        index={i}
        {isDark}
        selected={activeBg === i}
        onApply={applyBg}
        onOpenCode={openCode}
      />
    {/each}
  </div>
</main>
<Footer />

<!-- Code Drawer -->
<CodeDrawer
  open={drawerOpen}
  title={drawerTitle}
  code={drawerCode}
  onClose={() => (drawerOpen = false)}
/>

<style>
  /* ── Fondo de página ── */
  #page-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }
  #page-bg :global(> *) {
    position: absolute;
    inset: 0;
  }

  /* ── Hero ── */
  .hero {
    padding: 120px 24px 100px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    min-height: 55vh;
  }
  .inner {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 48px;
    text-align: center;
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    margin: 0 auto;
  }
  .hero-tag-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--active);
    flex-shrink: 0;
    box-shadow: 0 0 8px var(--active);
    animation: pulse 2.4s ease-in-out infinite;
  }
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.75);
    }
  }

  .hero-title {
    font-size: clamp(48px, 8vw, 72px);
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: var(--text);
  }
  .hero-title em {
    font-style: normal;
    color: var(--muted);
    font-weight: 400;
  }

  .hero-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 36px;
    width: 100%;
  }
  .hero-desc {
    font-size: 13px;
    line-height: 1.9;
    color: var(--muted);
    max-width: 520px;
  }
  .hero-desc b {
    color: var(--text);
    font-weight: 500;
  }

  .github-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    font-size: 13px;
    font-weight: 500;
    color: var(--text);
    background: var(--accent);
    color: var(--accent-fg);
    border: 1px solid var(--accent);
    border-radius: 8px;
    text-decoration: none;
    transition:
      opacity 0.2s,
      transform 0.2s;
    cursor: pointer;
    letter-spacing: 0.02em;
  }
  .github-btn:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
  .github-btn i {
    font-size: 14px;
  }

  /* ── Grid ── */
  main {
    max-width: 1000px;
    margin: 0 auto;
    padding: 80px 24px 120px;
    position: relative;
    z-index: 1;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 32px;
  }
</style>
