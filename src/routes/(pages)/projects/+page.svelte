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
    year?: string;
    agency?: string;
  }

  import rawProjects from "$lib/data/projects.json";
  const projects = rawProjects as Project[];
</script>

<svelte:head>
  <title>Proyek — Abdul Gani Hadiansyah</title>
</svelte:head>

<section class="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
  <p class="eyebrow mb-3">Proyek</p>
  <h1 class="text-3xl sm:text-4xl font-light text-zinc-950 dark:text-zinc-100 mb-3">
    Proyek &amp; eksperimen
  </h1>
  <p class="text-zinc-600 dark:text-zinc-400 max-w-xl mb-10">
    Daftar proyek, karya open-source, dan eksperimen yang pernah saya buat —
    dari aplikasi produksi hingga eksplorasi teknologi baru.
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each projects as item}
      <article class="ibm-card p-5 flex flex-col">
        <div class="flex items-start justify-between gap-3 mb-3">
          <div class="flex items-center gap-2">
            <FolderGit2 class="w-4 h-4 text-blue-500 shrink-0" />
            <h2 class="text-base font-semibold text-zinc-950 dark:text-zinc-100">
              {item.title}
            </h2>
          </div>

          <div class="flex items-center gap-2 text-zinc-400 shrink-0">
            {#if item.github}
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-blue-500 transition-colors p-0.5"
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

        <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
          {item.description}
        </p>

        {#if item.image && item.image !== ""}
          <div class="border border-zinc-200 dark:border-zinc-800 mb-4 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              class="w-full h-auto object-cover max-h-36"
            />
          </div>
        {/if}

        <div class="flex items-center justify-between gap-3 mt-auto pt-2">
          {#if item.tags && item.tags.length > 0}
            <div class="flex flex-wrap gap-1.5">
              {#each item.tags as tag}
                <span class="font-mono text-[10px] text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 border border-zinc-200 dark:border-zinc-700">
                  {tag}
                </span>
              {/each}
            </div>
          {/if}
          {#if item.year}
            <span class="font-mono text-[10px] text-zinc-500 dark:text-zinc-500 shrink-0">{item.year}</span>
          {/if}
        </div>
      </article>
    {/each}
  </div>
</section>
