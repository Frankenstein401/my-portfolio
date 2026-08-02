<script lang="ts">
  interface Note {
    id: string;
    title: string;
    date: string;
    lang: string;
    tags: string[];
  }

  import rawNotes from "$lib/data/notes.json";
  const notes = rawNotes as Note[];

  function formatDate(dateStr: string) {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }
</script>

<svelte:head>
  <title>Catatan (TIL) — Abdul Gani Hadiansyah</title>
</svelte:head>

<section class="max-w-3xl mx-auto py-8 px-4 sm:px-6 relative z-10">
  <h1 class="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
    Catatan Harian (TIL)
  </h1>
  <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
    Today I Learned — Catatan singkat tentang hal-hal baru yang saya pelajari setiap hari.
  </p>

  <!-- Daftar Catatan ala Saugi's TIL (til.saugi.me) -->
  <div class="divide-y divide-zinc-200/60 dark:divide-zinc-800/60">
    {#each notes as item}
      <div class="py-3.5 flex items-start gap-3.5 group">
        <!-- Badge Bahasa (ID/EN) -->
        <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500 w-6 text-right shrink-0 mt-0.5">
          {item.lang}
        </span>

        <!-- Informasi Catatan & Tag -->
        <div class="flex-1">
          <h2 class="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors mb-1">
            {item.title}
          </h2>

          <div class="flex items-center gap-2 text-xs font-mono text-zinc-400 dark:text-zinc-500">
            <span>{formatDate(item.date)}</span>
            <span>—</span>
            <div class="flex items-center gap-1.5">
              {#each item.tags as tag, i}
                <span>{tag}</span>
                {#if i < item.tags.length - 1}
                  <span>•</span>
                {/if}
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
