<script lang="ts">
  import Code from "$lib/assets/icons/Code.svelte";
  import Sun from "$lib/assets/icons/Sun.svelte";
  import Moon from "$lib/assets/icons/Moon.svelte";
  import Refresh from "$lib/assets/icons/Refresh.svelte";

  let {
    isDark,
    activeBgTitle,
    onToggleDark,
    onReset,
  }: {
    isDark: boolean;
    activeBgTitle: string | null;
    onToggleDark: () => void;
    onReset: () => void;
  } = $props();
</script>

<header>
  <div class="inner">
    <div class="logo">
      <Code />
      CLA<span>Backgrounds</span>
    </div>

    <div class="right">
      {#if activeBgTitle}
        <button
          class="chip"
          onclick={onReset}
          aria-label="Reiniciar fondo"
          title="Reiniciar fondo"
        >
          <Refresh />
        </button>
      {/if}

      <button
        class="chip"
        onclick={onToggleDark}
        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      >
        {#if isDark}
          <Sun />
        {:else}
          <Moon />
        {/if}
      </button>
    </div>
  </div>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 50;
    border-bottom: 1px solid var(--border);
    background: color-mix(in srgb, var(--bg) 85%, transparent);
    backdrop-filter: blur(10px);
  }

  .inner {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--text);
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .logo span {
    color: var(--muted);
    font-weight: 400;
  }
  .logo i {
    font-size: 12px;
    color: var(--muted);
  }

  .right {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .active-name {
    font-size: 12px;
    color: var(--muted);
    font-family: var(--mono);
  }

  .chip {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 400;
    padding: 7px 8px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text);
    cursor: pointer;
    transition:
      background 0.15s,
      border-color 0.15s,
      color 0.15s;
    letter-spacing: 0.02em;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .chip:hover {
    background: var(--border);
    border-color: var(--muted);
  }
</style>
