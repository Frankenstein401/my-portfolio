<script lang="ts">
  import { ArrowRight, ArrowUpRight, FolderGit2 } from "lucide-svelte";

  interface Project {
    id: string;
    title: string;
    description: string;
    tags?: string[];
    github?: string;
    demo?: string;
    image?: string;
  }

  import rawProjects from "$lib/data/projects.json";
  const projects = rawProjects as Project[];
  const featured = projects.slice(0, 3);

  const stats = [
    { value: "8+", label: "Proyek & eksperimen tercatat" },
    { value: "17+", label: "Teknologi pernah dipakai" },
    { value: "4", label: "Kategori: pribadi, sekolah, Dicoding, eksperimen" },
    { value: "2", label: "Tahun aktif belajar & membangun" }
  ];

  const techChips = [
    { label: "BUN", top: "10%", left: "12%", delay: 0, duration: 6 },
    { label: "ELYSIAJS", top: "4%", left: "56%", delay: 0.6, duration: 7 },
    { label: "TYPESCRIPT", top: "16%", left: "82%", delay: 1.2, duration: 6.5 },
    { label: "EXPO", top: "38%", left: "90%", delay: 0.3, duration: 7.5 },
    { label: "SQLITE", top: "60%", left: "86%", delay: 1.5, duration: 6 },
    { label: "NESTJS", top: "76%", left: "66%", delay: 0.9, duration: 7 },
    { label: "HAPI", top: "72%", left: "16%", delay: 0.4, duration: 6.5 },
    { label: "THREE.JS", top: "48%", left: "3%", delay: 1.8, duration: 7 },
    { label: "REACT", top: "22%", left: "5%", delay: 0.7, duration: 6.8 },
    { label: "VITE", top: "86%", left: "40%", delay: 1.1, duration: 7.2 }
  ];
</script>

<svelte:head>
  <title>Abdul Gani Hadiansyah — Backend Developer</title>
</svelte:head>

<!-- ============ LEADSPACE ============ -->
<section class="border-b border-zinc-200 dark:border-zinc-800">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <p class="eyebrow mb-4">Abdul Gani Hadiansyah — Backend Developer</p>
      <h1 class="text-4xl sm:text-5xl font-light leading-[1.15] tracking-tight text-zinc-950 dark:text-zinc-100 mb-6">
        Membangun backend yang andal, dari API hingga otomasi.
      </h1>
      <p class="text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-lg mb-8">
        Siswa RPL SMKN 12 Jakarta yang fokus di pengembangan backend —
        merancang REST API, aplikasi full-stack, dan eksperimen teknologi
        yang dicatat dan dievaluasi dengan jujur.
      </p>
      <div class="flex flex-wrap gap-4">
        <a href="/projects" class="btn btn-primary btn-arrow">
          Lihat proyek
          <ArrowRight class="w-4 h-4" />
        </a>
        <a href="/contact" class="btn btn-tertiary">Hubungi saya</a>
      </div>
    </div>

    <!-- Visual: foto + tech stack mengambang -->
    <div class="relative hidden sm:block h-[26rem] lg:h-[28rem]" aria-hidden="true">
      <!-- Ring muter -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="ring-spin w-[23rem] h-[23rem] lg:w-[25rem] lg:h-[25rem] rounded-full border-2 border-dashed border-zinc-300 dark:border-zinc-700"></div>
      </div>

      <!-- Core: foto -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="relative chip-float" style="animation-duration: 7s">
          <div class="w-40 h-40 lg:w-44 lg:h-44 rounded-2xl border-4 border-white dark:border-zinc-900 shadow-xl overflow-hidden">
            <img src="/profile.webp" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-zinc-950 dark:bg-black text-white font-mono text-[10px] tracking-wider px-3 py-1">
            BACKEND DEVELOPER
          </div>
        </div>
      </div>

      <!-- Chip tech stack mengambang -->
      {#each techChips as chip}
        <div
          class="absolute chip-float"
          style="top: {chip.top}; left: {chip.left}; animation-delay: {chip.delay}s; animation-duration: {chip.duration}s"
        >
          <span
            class="inline-block font-mono text-[11px] px-3 py-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 shadow-sm cursor-default transition-all duration-150 hover:border-blue-500 hover:text-blue-500 hover:shadow-md"
          >
            {chip.label}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ============ STATS ============ -->
<section class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
    {#each stats as stat}
      <div class="border-t-2 border-zinc-400 dark:border-zinc-600 pt-4">
        <div class="text-4xl font-light text-zinc-950 dark:text-zinc-100 mb-2">{stat.value}</div>
        <div class="text-sm text-zinc-600 dark:text-zinc-400 leading-snug">{stat.label}</div>
      </div>
    {/each}
  </div>
</section>

<!-- ============ PROYEK PILIHAN ============ -->
<section class="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
  <div class="flex items-end justify-between mb-8">
    <div>
      <p class="eyebrow mb-2">Proyek</p>
      <h2 class="text-3xl font-light text-zinc-950 dark:text-zinc-100">Yang sedang saya kerjakan</h2>
    </div>
    <a href="/projects" class="ibm-link shrink-0 mb-1">
      Lihat semua
      <ArrowRight class="w-4 h-4" />
    </a>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each featured as item}
      <article class="ibm-card p-6 flex flex-col">
        <div class="flex items-center gap-2 mb-3">
          <FolderGit2 class="w-4 h-4 text-blue-500" />
          <span class="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {item.tags?.[0] ?? "Proyek"}
          </span>
        </div>
        <h3 class="text-lg font-semibold text-zinc-950 dark:text-zinc-100 mb-2">{item.title}</h3>
        <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">{item.description}</p>
        {#if item.tags && item.tags.length > 0}
          <div class="flex flex-wrap gap-1.5 mb-5">
            {#each item.tags as tag}
              <span class="font-mono text-[10px] text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 border border-zinc-200 dark:border-zinc-700">
                {tag}
              </span>
            {/each}
          </div>
        {/if}
        <a
          href={item.github || "/projects"}
          target={item.github ? "_blank" : undefined}
          rel={item.github ? "noopener noreferrer" : undefined}
          class="ibm-link mt-auto pt-2"
        >
          Detail
          <ArrowUpRight class="w-4 h-4" />
        </a>
      </article>
    {/each}
  </div>
</section>

<!-- ============ CTA BANNER ============ -->
<section class="bg-purple-10 dark:bg-purple-70/20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
    <div>
      <p class="eyebrow mb-2 !text-purple-70 dark:!text-purple-10">Kolaborasi</p>
      <h2 class="text-3xl font-light text-zinc-950 dark:text-zinc-100 mb-2">
        Punya proyek atau butuh backend dibangun?
      </h2>
      <p class="text-zinc-600 dark:text-zinc-300 max-w-xl">
        Diskusi, kolaborasi, atau sekadar bertanya seputar pengembangan web
        dan backend — saya terbuka.
      </p>
    </div>
    <a href="/contact" class="btn btn-primary shrink-0">
      Mulai diskusi
      <ArrowRight class="w-4 h-4" />
    </a>
  </div>
</section>

<style>
  @keyframes floaty {
    0%, 100% {
      transform: translateY(0) rotate(-1deg);
    }
    50% {
      transform: translateY(-14px) rotate(1.5deg);
    }
  }
  @keyframes spin-slow {
    to {
      transform: rotate(360deg);
    }
  }
  .chip-float {
    animation: floaty 6s ease-in-out infinite;
  }
  .ring-spin {
    animation: spin-slow 45s linear infinite;
  }
  @media (prefers-reduced-motion: reduce) {
    .chip-float,
    .ring-spin {
      animation: none;
    }
  }
</style>
