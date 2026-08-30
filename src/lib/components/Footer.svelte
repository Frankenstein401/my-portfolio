<script lang="ts">
  const columns = [
    {
      title: "Temukan",
      links: [
        { href: "/about", label: "Tentang" },
        { href: "/projects", label: "Proyek" },
        { href: "/achievement", label: "Prestasi" },
        { href: "/blog", label: "Blog" }
      ]
    },
    {
      title: "Hubungkan",
      links: [
        { href: "/contact", label: "Kontak" },
        { href: "/my-notes", label: "Catatan" },
        { href: "https://github.com/abdulganihadiansyah", label: "GitHub", external: true },
        { href: "mailto:abdulganihadiansyah@gmail.com", label: "Email", external: true }
      ]
    },
    {
      title: "Sistem",
      links: [
        { href: "/projects", label: "Proyek & eksperimen" },
        { href: "/blog", label: "Tulisan" },
        { href: "/my-notes", label: "Catatan belajar" },
        { href: "/admin", label: "Admin" }
      ]
    }
  ];
</script>

<footer class="mt-auto bg-zinc-950 dark:bg-black text-zinc-100">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-14">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <!-- Brand -->
      <div class="lg:col-span-1">
        <svg class="text-white" viewBox="0 0 40 20" width="40" height="20" aria-hidden="true">
          <rect x="0" y="0" width="11" height="1.6" fill="currentColor" />
          <rect x="0" y="2.7" width="16" height="1.6" fill="currentColor" />
          <rect x="0" y="5.4" width="21" height="1.6" fill="currentColor" />
          <rect x="0" y="8.1" width="40" height="1.6" fill="currentColor" />
          <rect x="0" y="10.8" width="40" height="1.6" fill="currentColor" />
          <rect x="0" y="13.5" width="40" height="1.6" fill="currentColor" />
          <rect x="0" y="16.2" width="40" height="1.6" fill="currentColor" />
          <rect x="0" y="18.4" width="40" height="1.6" fill="currentColor" />
        </svg>
        <p class="mt-4 text-sm text-zinc-400 max-w-[16rem] leading-relaxed">
          Backend developer & siswa RPL SMKN 12 Jakarta. Membangun API, aplikasi, dan eksperimen yang dicatat rapi.
        </p>
      </div>

      <!-- Kolom link -->
      {#each columns as col}
        <nav aria-label={col.title}>
          <h4 class="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">{col.title}</h4>
          <ul class="space-y-2.5">
            {#each col.links as link}
              <li>
                {#if link.external}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-zinc-200 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                {:else}
                  <a href={link.href} class="text-sm text-zinc-200 hover:text-white hover:underline transition-colors">
                    {link.label}
                  </a>
                {/if}
              </li>
            {/each}
          </ul>
        </nav>
      {/each}
    </div>

    <!-- Bottom bar -->
    <div class="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <span class="text-xs text-zinc-400">© 2026 Abdul Gani Hadiansyah. Terinspirasi IBM Carbon Design.</span>
      <nav class="flex flex-wrap gap-5" aria-label="Legal">
        <a href="/contact" class="text-xs text-zinc-400 hover:text-white transition-colors">Kontak</a>
        <a href="/about" class="text-xs text-zinc-400 hover:text-white transition-colors">Tentang</a>
        <a href="https://github.com/abdulganihadiansyah" target="_blank" rel="noopener noreferrer" class="text-xs text-zinc-400 hover:text-white transition-colors">GitHub</a>
      </nav>
    </div>
  </div>
</footer>
