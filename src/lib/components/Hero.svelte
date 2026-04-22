<script lang="ts">
  import GitHub from "$lib/assets/icons/GitHub.svelte";
</script>

<section class="hero">
  <div class="inner">
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
        href="https://github.com/AngelCLA/cla-backgrounds"
        target="_blank"
        rel="noopener noreferrer"
        class="github-btn"
      >
        <GitHub />
        GitHub
      </a>
    </div>
  </div>
</section>

<style>
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

  .github-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text);
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    transition:
      background 0.15s,
      border-color 0.15s,
      color 0.15s;
    cursor: pointer;
  }
  .github-btn:hover {
    background: var(--border);
    border-color: var(--muted);
  }
</style>
