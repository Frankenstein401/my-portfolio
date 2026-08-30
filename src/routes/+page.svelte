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

    <!-- Visual: kartu status API (flat, ala ilustrasi IBM) -->
    <div class="relative hidden sm:block" aria-hidden="true">
      <div class="relative border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-5 shadow-lg shadow-zinc-200/50 dark:shadow-black/40">
        <div class="flex items-center gap-1.5 mb-5">
          <span class="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-500"></span>
          <span class="ml-auto font-mono text-[11px] text-zinc-500 dark:text-zinc-400">abdulgani.dev · api</span>
        </div>

        <div class="space-y-2.5 font-mono text-[13px] mb-5">
          <div class="flex items-center gap-2">
            <span class="text-zinc-400 dark:text-zinc-500">GET</span>
            <span class="text-zinc-950 dark:text-zinc-100">/api/projects</span>
            <span class="ml-auto text-emerald-600 dark:text-emerald-400">200 OK</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-zinc-400 dark:text-zinc-500">POST</span>
            <span class="text-zinc-950 dark:text-zinc-100">/api/contact</span>
            <span class="ml-auto text-emerald-600 dark:text-emerald-400">202 ACCEPTED</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-zinc-400 dark:text-zinc-500">GET</span>
            <span class="text-zinc-950 dark:text-zinc-100">/api/notes</span>
            <span class="ml-auto text-emerald-600 dark:text-emerald-400">200 OK</span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2.5">
          <div class="border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950/50 p-2.5">
            <div class="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 mb-1">RUNTIME</div>
            <div class="font-mono text-[11px] text-zinc-950 dark:text-zinc-100 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>BUN
            </div>
          </div>
          <div class="border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950/50 p-2.5">
            <div class="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 mb-1">FRAMEWORK</div>
            <div class="font-mono text-[11px] text-zinc-950 dark:text-zinc-100 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>ELYSIAJS
            </div>
          </div>
          <div class="border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950/50 p-2.5">
            <div class="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 mb-1">DATABASE</div>
            <div class="font-mono text-[11px] text-zinc-950 dark:text-zinc-100 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>SQLITE
            </div>
          </div>
        </div>
      </div>

      <!-- Chip floating -->
      <div class="absolute -top-4 -right-2 sm:-right-4 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 shadow-md">
        <div class="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 mb-0.5">STATUS</div>
        <div class="font-mono text-xs font-medium text-blue-500 flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          ALL SYSTEMS OPERATIONAL
        </div>
      </div>
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
