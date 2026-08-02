<script lang="ts">
  import { page } from "$app/state";
  import { ArrowLeft, Home } from "lucide-svelte";
</script>

<svelte:head>
  <title>404 — Halaman Tidak Ditemukan</title>
</svelte:head>

<section class="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-12 relative z-10">
  <!-- Glowing Effect Backdrop -->
  <div class="absolute -z-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

  <!-- Giant 404 Display -->
  <div class="relative">
    <h1 class="text-8xl sm:text-[11rem] font-extrabold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-600 select-none">
      404
    </h1>
    <div class="absolute inset-0 flex items-center justify-center">
      <span class="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shadow-sm backdrop-blur-sm">
        PAGE NOT FOUND
      </span>
    </div>
  </div>

  <!-- Main Information -->
  <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mt-6 mb-3">
    Waduh, Halaman Tidak Ditemukan!
  </h2>

  <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed mb-8">
    Halaman <code class="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">{page.url.pathname}</code> yang kamu cari tidak ada, telah dihapus, atau jalurnya salah.
  </p>

  <!-- Navigation Action Buttons -->
  <div class="flex flex-wrap items-center justify-center gap-3">
    <a
      href="/about"
      class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
    >
      <Home class="w-4 h-4" />
      <span>Kembali ke Beranda</span>
    </a>

    <button
      type="button"
      onclick={() => history.back()}
      class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
    >
      <ArrowLeft class="w-4 h-4" />
      <span>Halaman Sebelumnya</span>
    </button>
  </div>
</section>
