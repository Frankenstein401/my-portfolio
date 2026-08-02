<script lang="ts">
  import { Calendar, MapPin, ExternalLink } from "lucide-svelte";
  import achievements from "$lib/data/achievements.json";
</script>

<svelte:head>
  <title>Prestasi — Abdul Gani Hadiansyah</title>
</svelte:head>

<section class="max-w-3xl mx-auto py-8 px-4 sm:px-6 relative z-10">
  <h1 class="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Prestasi</h1>
  <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
    Daftar pencapaian, kejuaraan, dan penghargaan yang pernah saya raih.
  </p>

  <!-- Container Utama Timeline -->
  <div class="relative ml-3 sm:ml-4 space-y-10">
    <!-- Garis Vertikal Timeline (Posisi X = 0) -->
    <div class="absolute left-0 top-2 bottom-2 w-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2"></div>

    {#each achievements as item}
      <!-- Item Content -->
      <div class="relative pl-6 sm:pl-8 group">
        <!-- Bulatan Timeline -->
        <div
          class="absolute left-0 top-1.5 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white dark:ring-zinc-950 group-hover:bg-blue-500 transition-colors"
        ></div>

        <!-- Metadata Baris Ikon -->
        <div class="flex items-center gap-4 text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-2">
          <span class="inline-flex items-center gap-1.5">
            <Calendar class="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
            {item.year}
          </span>
          <span class="inline-flex items-center gap-1.5">
            <MapPin class="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
            {item.location}
          </span>
        </div>

        <!-- Judul & External Link -->
        <h2 class="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2 flex items-center gap-2">
          <span>{item.title}</span>
          {#if item.link && item.link !== "#"}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              class="text-zinc-400 hover:text-blue-500 transition-colors"
              aria-label="Tautan Eksternal"
            >
              <ExternalLink class="w-3.5 h-3.5" />
            </a>
          {/if}
        </h2>

        <!-- Deskripsi -->
        <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
          {item.desc}
        </p>

        <!-- Preview Foto Dokumentasi -->
        {#if item.image}
          <div class="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 max-w-md">
            <img
              src={item.image}
              alt={item.title}
              class="w-full h-auto object-cover max-h-48"
            />
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>
