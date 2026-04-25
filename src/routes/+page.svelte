<script lang="ts">
  import { BG } from "$lib/backgrounds";
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import BgCard from "$lib/components/BgCard.svelte";
  import CodeDrawer from "$lib/components/CodeDrawer.svelte";
  import { browser } from "$app/environment";

  // Detectar preferencia del sistema: oscuro o claro
  const getSystemPreference = () => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  };

  // Obtener preferencia guardada del usuario o usar la del sistema
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme-preference");
      if (saved === "dark" || saved === "light") {
        return saved === "dark";
      }
      // Si no hay preferencia guardada, usar la del sistema
      return getSystemPreference();
    }
    // En SSR, no establecer por defecto
    return false;
  };

  let isDark = $state<boolean>(false);
  let isInitialized = $state(false);

  // Inicializar correctamente en el cliente con la preferencia del sistema
  $effect(() => {
    if (typeof window === "undefined" || isInitialized) return;

    const saved = localStorage.getItem("theme-preference");
    if (saved === "dark" || saved === "light") {
      isDark = saved === "dark";
    } else {
      // Si no hay preferencia guardada, usar la del sistema
      const systemIsDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      isDark = systemIsDark;
    }
    isInitialized = true;
  });
  $effect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme-preference", isDark ? "dark" : "light");
    }
  });

  // Escuchar cambios en la preferencia del sistema operativo y sincronizar
  $effect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const savedPreference = localStorage.getItem("theme-preference");
      // Solo cambiar automáticamente si el usuario no ha establecido una preferencia
      if (!savedPreference) {
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
<Hero />

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
