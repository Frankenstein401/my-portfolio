<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
  const Content = $derived(data.content);

  function formatDate(dateStr: string) {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("id-ID", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  }
</script>

<svelte:head>
  <title>{data.meta.title} — Abdul Gani Hadiansyah</title>
</svelte:head>

<section class="max-w-2xl mx-auto py-8 px-4 sm:px-6 relative z-10">
  <!-- Navigasi Kembali -->
  <a
    href="/blog"
    class="text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors inline-flex items-center gap-1.5 mb-6"
  >
    ← Kembali ke Blog
  </a>

  <!-- Header Artikel -->
  <header class="mb-8 pb-6 border-b border-zinc-200/60 dark:border-zinc-800/60">
    <time datetime={data.meta.date} class="text-xs font-mono text-zinc-400 dark:text-zinc-500 block mb-2">
      Dipublikasikan pada {formatDate(data.meta.date)}
    </time>
    <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
      {data.meta.title}
    </h1>
    {#if data.meta.description}
      <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed font-sans">
        {data.meta.description}
      </p>
    {/if}
  </header>

  <!-- Tipografi Artikel yang Sangat Nyaman Dibaca (Sans-serif & Spacing Paragraf Jelas) -->
  <article
    class="font-sans text-base leading-relaxed tracking-normal text-zinc-800 dark:text-zinc-200 max-w-none 
           [&_p]:mb-6 [&_p]:leading-7 [&_p]:tracking-normal [&_p]:text-zinc-700 [&_p]:dark:text-zinc-300
           [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight [&_h2]:text-zinc-900 [&_h2]:dark:text-zinc-100
           [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:tracking-tight [&_h3]:text-zinc-900 [&_h3]:dark:text-zinc-100
           [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2
           [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2
           [&_li]:text-zinc-700 [&_li]:dark:text-zinc-300 [&_li]:leading-relaxed
           [&_blockquote]:border-l-2 [&_blockquote]:border-blue-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:text-zinc-600 [&_blockquote]:dark:text-zinc-400
           [&_a]:text-blue-500 hover:[&_a]:underline
           [&_img]:rounded-lg [&_img]:border [&_img]:border-zinc-200 [&_img]:dark:border-zinc-800 [&_img]:my-6
           [&_code]:font-mono [&_code]:text-xs [&_code]:bg-zinc-100 [&_code]:dark:bg-zinc-800/80 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-zinc-800 [&_code]:dark:text-zinc-200"
  >
    <Content />
  </article>
</section>
