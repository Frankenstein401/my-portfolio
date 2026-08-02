<script lang="ts">
  import { page } from "$app/state";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import { Menu, X } from "lucide-svelte";

  const navItems = [
    { href: "/about", label: "Tentang", exact: true },
    { href: "/achievement", label: "Prestasi", exact: true },
    { href: "/projects", label: "Proyek", exact: false },
    { href: "/blog", label: "Blog", exact: false },
    { href: "/my-notes", label: "Catatan", exact: false },
    { href: "/contact", label: "Kontak", exact: true }
  ];

  let isOpen = $state(false);

  function isActive(href: string, exact: boolean) {
    const currentPath = page.url.pathname;
    if (exact) {
      return currentPath === href;
    }
    return currentPath.startsWith(href);
  }

  function closeMenu() {
    isOpen = false;
  }
</script>

<header class="relative z-50 py-6 px-4 max-w-3xl mx-auto w-full">
  <!-- Tampilan Desktop (md+) — Persis Kembali ke Layout Asli Terpusat -->
  <div class="hidden md:flex flex-col items-center justify-center">
    <a
      href="/about"
      class="text-center font-bold mb-4 text-[22px] text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity"
    >
      Abdul Gani Hadiansyah
    </a>

    <nav>
      <ul class="flex gap-[2.5rem] items-center justify-center">
        {#each navItems as item}
          <li>
            <a
              href={item.href}
              class={isActive(item.href, item.exact)
                ? "underline underline-offset-4 font-semibold text-zinc-900 dark:text-zinc-100"
                : "hover:underline text-zinc-600 dark:text-zinc-400 transition-colors"}
            >
              {item.label}
            </a>
          </li>
        {/each}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  </div>

  <!-- Tampilan Mobile (< md) — Khusus Layar HP Menggunakan Hamburger Menu -->
  <div class="flex md:hidden items-center justify-between gap-4">
    <a
      href="/about"
      onclick={closeMenu}
      class="font-bold text-lg text-zinc-900 dark:text-zinc-100 shrink-0"
    >
      Abdul Gani Hadiansyah
    </a>

    <div class="flex items-center gap-3">
      <ThemeToggle />
      <button
        type="button"
        onclick={() => (isOpen = !isOpen)}
        aria-label="Toggle Menu Navigasi"
        class="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors"
      >
        {#if isOpen}
          <X class="w-6 h-6" />
        {:else}
          <Menu class="w-6 h-6" />
        {/if}
      </button>
    </div>
  </div>

  <!-- Menu Drawer Overlay Mobile (Hanya Tampil di HP saat Hamburger Diklik) -->
  {#if isOpen}
    <div
      class="md:hidden fixed inset-x-0 top-[60px] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 transition-all duration-200 z-50"
    >
      <nav>
        <ul class="flex flex-col gap-4 text-center font-medium text-base">
          {#each navItems as item}
            <li>
              <a
                href={item.href}
                onclick={closeMenu}
                class={isActive(item.href, item.exact)
                  ? "block py-2 font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 rounded-lg"
                  : "block py-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"}
              >
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  {/if}
</header>
