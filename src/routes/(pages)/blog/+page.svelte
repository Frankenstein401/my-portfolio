<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<main class="mx-auto max-w-2xl px-4 py-12">
  <h1 class="text-3xl font-bold tracking-tight mb-8">blog</h1>

  <div class="space-y-6">
    {#each data.posts as post}
      <article class="group">
        <a href={`/blog/${post.slug}`} aria-label={post.title} class="block">
          <time datetime="" class="text-xs text-zinc-500">{post.date}</time>
          <h2
            class="text-xl font-semibold text-zinc-100 group-hover:text-blue-400 transition"
          >
            {post.title}
          </h2>
          <p class="text-sm text-zinc-400">{post.description}</p>
        </a>
      </article>
    {/each}
  </div>
</main>
