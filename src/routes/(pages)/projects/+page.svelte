<script lang="ts">
  import { ArrowUpRight, FolderGit2 } from "lucide-svelte";

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
</script>

<svelte:head>
  <title>Proyek — Abdul Gani Hadiansyah</title>
</svelte:head>

<section class="max-w-3xl mx-auto py-8 px-4 sm:px-6 relative z-10">
  <h1 class="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
    Proyek
  </h1>
  <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
    Daftar proyek, karya open-source, dan eksperimen yang pernah saya buat.
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {#each projects as item}
      <div
        class="group relative p-4 rounded-lg border border-transparent bg-transparent transition-all duration-200 hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-white/40 dark:hover:bg-zinc-900/40 flex flex-col justify-between"
      >
        <div>
          <!-- Judul Project & Links -->
          <div class="flex items-start justify-between gap-3 mb-2">
            <h2
              class="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors flex items-center gap-2"
            >
              <FolderGit2
                class="w-4 h-4 text-zinc-400 dark:text-zinc-500 shrink-0"
              />
              <span>{item.title}</span>
            </h2>

            <div class="flex items-center gap-2 text-zinc-400 shrink-0">
              {#if item.github}
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-0.5"
                  aria-label="Repositori GitHub"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </a>
              {/if}
              {#if item.demo}
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-blue-500 transition-colors p-0.5"
                  aria-label="Tautan Demo"
                >
                  <ArrowUpRight class="w-4 h-4" />
                </a>
              {/if}
            </div>
          </div>

          <!-- Deskripsi Ringkas (Dipertahankan Kecil di Dalam Container) -->
          <p
            class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3"
          >
            {item.description}
          </p>

          <!-- Preview Foto Dokumentasi Jika Ada -->
          {#if item.image && item.image !== ""}
            <div
              class="rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800 mb-3"
            >
              <img
                src={item.image}
                alt={item.title}
                class="w-full h-auto object-cover max-h-36"
              />
            </div>
          {/if}
        </div>

        <!-- Tech Stack Tags -->
        {#if item.tags && item.tags.length > 0}
          <div class="flex flex-wrap gap-1.5 pt-2">
            {#each item.tags as tag}
              <span
                class="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100/80 dark:bg-zinc-800/80 px-2 py-0.5 rounded border border-zinc-200/50 dark:border-zinc-700/50"
              >
                {tag}
              </span>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>
