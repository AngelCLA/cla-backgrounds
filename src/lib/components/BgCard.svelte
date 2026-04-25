<script lang="ts">
  import type { Background } from "$lib/backgrounds";
  import Code from "$lib/assets/icons/Code.svelte";
  import { browser } from "$app/environment";

  let {
    bg,
    index,
    isDark,
    selected,
    onApply,
    onOpenCode,
  }: {
    bg: Background;
    index: number;
    isDark: boolean;
    selected: boolean;
    onApply: (index: number) => void;
    onOpenCode: (index: number) => void;
  } = $props();

  // Detectar preferencia del sistema como fallback
  let systemIsDark = $state(false);

  $effect(() => {
    if (!browser) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    systemIsDark = mediaQuery.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      systemIsDark = e.matches;
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  });

  // Usar isDark prop, pero con fallback a systemIsDark si cambia la preferencia del sistema
  const currentTheme = $derived(isDark);
  const html = $derived(currentTheme ? bg.dark : bg.light);
</script>

<div class="card" class:selected style="animation-delay: {index * 30}ms">
  <!-- Thumbnail -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="thumb" on:click={() => onApply(index)} title="Aplicar fondo">
    <button
      class="thumb-icon"
      type="button"
      on:click|stopPropagation={() => onOpenCode(index)}
      aria-label="Ver código"
    >
      <Code />
    </button>

    <div class="thumb-bg">
      {@html html}
    </div>

    <div class="thumb-hint">
      <span>aplicar</span>
    </div>
  </div>
</div>

<style>
  .card {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
    overflow: hidden;
    transition:
      border-color 0.2s,
      box-shadow 0.2s,
      transform 0.2s;
    cursor: default;
    opacity: 0;
    animation: fadeIn 0.3s ease forwards;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
  }
  .card.selected {
    border-color: var(--active);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--active) 15%, transparent);
  }
  .card:hover {
    border-color: color-mix(in srgb, var(--border) 60%, var(--muted));
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .thumb {
    position: relative;
    height: 200px;
    overflow: hidden;
    cursor: pointer;
  }

  .thumb-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 7;
    font-family: var(--mono);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.05em;
    width: 32px;
    height: 32px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    background: rgba(0, 0, 0, 0.38);
    color: #fff;
    cursor: pointer;
    backdrop-filter: blur(8px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .thumb-icon:hover {
    background: rgba(0, 0, 0, 0.55);
  }
  .thumb-icon i {
    font-size: 12px;
  }

  .thumb-bg {
    position: absolute;
    inset: 0;
  }
  .thumb-bg :global(> *) {
    position: absolute;
    inset: 0;
  }

  .thumb-hint {
    position: absolute;
    inset: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s;
    background: rgba(0, 0, 0, 0.25);
  }
  .thumb-hint span {
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 500;
    color: #fff;
    letter-spacing: 0.08em;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px 12px;
    border-radius: 4px;
  }
  .thumb:hover .thumb-hint {
    opacity: 1;
  }

  .card-body {
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .card-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
    letter-spacing: -0.01em;
  }
  .card-desc {
    font-size: 12px;
    color: var(--muted);
    line-height: 1.6;
  }

  .card-actions {
    display: flex;
    gap: 8px;
    padding-top: 4px;
  }

  .btn {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 500;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid var(--border);
    cursor: pointer;
    transition:
      background 0.15s,
      color 0.15s,
      border-color 0.15s;
    letter-spacing: 0.02em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  .btn-outline {
    background: transparent;
    color: var(--muted);
  }
  .btn-outline:hover {
    background: var(--border);
    color: var(--text);
    border-color: var(--muted);
  }
  .btn-solid {
    background: var(--accent);
    color: var(--accent-fg);
    border-color: var(--accent);
    flex: 1;
  }
  .btn-solid:hover {
    opacity: 0.85;
  }
</style>
