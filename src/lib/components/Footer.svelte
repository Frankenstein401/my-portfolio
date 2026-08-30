<script lang="ts">
  const links = [
    { href: "/about", label: "Tentang" },
    { href: "/achievement", label: "Prestasi" },
    { href: "/projects", label: "Proyek" },
    { href: "/blog", label: "Blog" },
    { href: "/my-notes", label: "Catatan" },
    { href: "/contact", label: "Kontak" },
    { href: "https://github.com/abdulganihadiansyah", label: "GitHub", external: true }
  ];
</script>

<footer class="mt-auto bg-zinc-950 dark:bg-black text-zinc-100">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-7">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-4">
      <a href="/" class="flex items-center gap-2.5 text-sm font-semibold shrink-0" aria-label="Beranda">
        <svg class="text-white shrink-0" viewBox="0 0 40 20" width="26" height="13" aria-hidden="true">
          <rect x="0" y="0" width="11" height="1.6" fill="currentColor" />
          <rect x="0" y="2.7" width="16" height="1.6" fill="currentColor" />
          <rect x="0" y="5.4" width="21" height="1.6" fill="currentColor" />
          <rect x="0" y="8.1" width="40" height="1.6" fill="currentColor" />
          <rect x="0" y="10.8" width="40" height="1.6" fill="currentColor" />
          <rect x="0" y="13.5" width="40" height="1.6" fill="currentColor" />
          <rect x="0" y="16.2" width="40" height="1.6" fill="currentColor" />
          <rect x="0" y="18.4" width="40" height="1.6" fill="currentColor" />
        </svg>
        <span>Abdul Gani Hadiansyah</span>
      </a>

      <nav class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Footer">
        {#each links as link}
          {#if link.external}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs text-zinc-400 hover:text-white hover:underline transition-colors"
            >
              {link.label}
            </a>
          {:else}
            <a href={link.href} class="text-xs text-zinc-400 hover:text-white hover:underline transition-colors">
              {link.label}
            </a>
          {/if}
        {/each}
      </nav>
    </div>

    <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-center sm:justify-between text-[11px] text-zinc-500">
      <span>© 2026 Abdul Gani Hadiansyah</span>
    </div>
  </div>
</footer>
