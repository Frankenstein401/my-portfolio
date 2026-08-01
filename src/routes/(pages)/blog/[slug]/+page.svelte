<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
  const Content = $derived(data.content);
</script>

<svelte:head>
  <title>{data.meta.title}</title>
</svelte:head>

<main class="mx-auto max-w-2xl px-4 py-12">
  <!-- Header Artikel -->
  <header class="mb-8">
    <a href="/blog" class="text-sm text-zinc-500 hover:text-zinc-300"
      >← Kembali ke Blog</a
    >
    <h1 class="text-3xl font-bold tracking-tight mt-4 mb-2">
      {data.meta.title}
    </h1>
    <p class="text-sm text-zinc-500">{data.meta.date}</p>
  </header>

  <!-- Konten Markdown di-render di sini -->
  <article class="prose prose-invert max-w-none">
    <Content />
  </article>
</main>
