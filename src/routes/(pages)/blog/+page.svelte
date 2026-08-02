<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

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
  <title>Blog — Abdul Gani Hadiansyah</title>
</svelte:head>

<section class="max-w-3xl mx-auto py-8 px-4 sm:px-6 relative z-10">
  <h1 class="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
    Blog
  </h1>
  <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
    Tulisan, pemikiran, tutorial, dan dokumentasi perjalanan saya.
  </p>

  <!-- Daftar Artikel -->
  <div class="divide-y divide-zinc-200/60 dark:divide-zinc-800/60">
    {#each data.posts as post}
      <div class="py-3.5 flex items-baseline gap-3.5 group">
        <!-- Badge Bahasa (ID/EN) -->
        <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500 w-6 text-right shrink-0">
          {post.lang}
        </span>

        <!-- Judul & Tanggal -->
        <div class="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h2 class="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors">
            <a href={`/blog/${post.slug}`}>
              {post.title}
            </a>
          </h2>

          <time datetime={post.date} class="text-xs font-mono text-zinc-400 dark:text-zinc-500 shrink-0">
            {formatDate(post.date)}
          </time>
        </div>
      </div>
    {/each}
  </div>
</section>
