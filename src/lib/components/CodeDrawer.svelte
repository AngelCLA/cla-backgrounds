<script lang="ts">
  import { onMount } from "svelte";

  let {
    open = false,
    title = "",
    code = "",
    onClose,
  }: {
    open?: boolean;
    title?: string;
    code?: string;
    onClose: () => void;
  } = $props();

  type CopyState = "idle" | "copied" | "error";
  let copyState = $state<CopyState>("idle");

  async function copyCode() {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(code);
        copyState = "copied";
        setTimeout(() => (copyState = "idle"), 1800);
      } catch {
        fallbackCopy();
      }
    } else {
      fallbackCopy();
    }
  }

  function fallbackCopy() {
    try {
      const ta = document.createElement("textarea");
      ta.value = code;
      ta.style.cssText =
        "position:fixed;top:0;left:0;opacity:0;pointer-events:none";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      copyState = ok ? "copied" : "error";
      setTimeout(() => (copyState = "idle"), ok ? 1800 : 2000);
    } catch {
      copyState = "error";
      setTimeout(() => (copyState = "idle"), 2000);
    }
  }

  function handleOutside(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains("drawer-overlay")) {
      onClose();
    }
  }

  function handleOverlayKeydown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClose();
    }
  }

  onMount(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });
</script>

{#if open}
  <div
    class="drawer-overlay"
    role="button"
    tabindex="0"
    aria-label="Close code drawer"
    onclick={handleOutside}
    onkeydown={handleOverlayKeydown}
  >
    <div class="drawer-box">
      <div class="drawer-header">
        <span class="drawer-title">{title}</span>
        <div class="drawer-actions">
          <button class="dbtn" onclick={copyCode}>
            {#if copyState === "copied"}
              <i class="fa-solid fa-check fa-fw" aria-hidden="true"></i>
              <span>copiado</span>
            {:else if copyState === "error"}
              <i
                class="fa-solid fa-triangle-exclamation fa-fw"
                aria-hidden="true"
              ></i>
              <span>error</span>
            {:else}
              <i class="fa-solid fa-copy fa-fw" aria-hidden="true"></i>
              <span>copiar</span>
            {/if}
          </button>
          <button class="dbtn" onclick={onClose}>
            <i class="fa-solid fa-xmark fa-fw" aria-hidden="true"></i>
            <span>cerrar</span>
          </button>
        </div>
      </div>
      <pre class="drawer-code">{code}</pre>
    </div>
  </div>
{/if}

<style>
  .drawer-overlay {
    position: fixed;
    inset: 0;
    z-index: 200;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }

  .drawer-box {
    width: min(720px, 100%);
    background: #0e0e0e;
    border: 1px solid #2a2a2a;
    border-radius: 16px;
    overflow: hidden;
    font-family: var(--mono);
    animation: slideUp 0.2s ease;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  }

  @keyframes slideUp {
    from {
      transform: translateY(16px);
      opacity: 0;
    }
    to {
      transform: none;
      opacity: 1;
    }
  }

  .drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    border-bottom: 1px solid #2a2a2a;
  }

  .drawer-title {
    font-size: 11px;
    color: #666;
    letter-spacing: 0.06em;
  }

  .drawer-actions {
    display: flex;
    gap: 6px;
  }

  .drawer-code {
    overflow: auto;
    padding: 18px 20px;
    font-size: 12px;
    line-height: 1.7;
    color: #c9d1d9;
    max-height: 55vh;
    white-space: pre;
  }

  .dbtn {
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 400;
    padding: 7px 11px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #333;
    background: #1a1a1a;
    color: #aaa;
    letter-spacing: 0.03em;
    transition: background 0.15s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
  }
  .dbtn:hover {
    background: #252525;
    color: #eee;
  }
</style>
