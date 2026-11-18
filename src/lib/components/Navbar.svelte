<script lang="ts">
  import { page } from "$app/state";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import { Menu, X } from "lucide-svelte";

  const navItems = [
    { href: "/about", label: "About", exact: true },
    { href: "/achievement", label: "Achievements", exact: true },
    { href: "/projects", label: "Projects", exact: false },
    { href: "/blog", label: "Blog", exact: false },
    { href: "/my-notes", label: "Notes", exact: false }
  ];

  let isOpen = $state(false);

  function isActive(href: string, exact: boolean) {
    const currentPath = page.url.pathname;
    if (currentPath === "/") return false;
    if (exact) return currentPath === href;
    return currentPath.startsWith(href);
  }

  function closeMenu() {
    isOpen = false;
  }
</script>

<header
  class="sticky top-0 z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur border-b border-zinc-200 dark:border-zinc-800"
>
  <div class="max-w-6xl mx-auto h-12 px-4 sm:px-6 flex items-center gap-4">
    <!-- Brand: logo 8-bar + nama -->
    <a
      href="/"
      onclick={closeMenu}
      class="flex items-center gap-2.5 text-zinc-950 dark:text-zinc-100 shrink-0"
      aria-label="Home — Abdul Gani Hadiansyah"
    >
      <svg class="shrink-0 text-zinc-950 dark:text-white" viewBox="0 0 40 20" width="30" height="15" aria-hidden="true">
        <rect x="0" y="0" width="11" height="1.6" fill="currentColor" />
        <rect x="0" y="2.7" width="16" height="1.6" fill="currentColor" />
        <rect x="0" y="5.4" width="21" height="1.6" fill="currentColor" />
        <rect x="0" y="8.1" width="40" height="1.6" fill="currentColor" />
        <rect x="0" y="10.8" width="40" height="1.6" fill="currentColor" />
        <rect x="0" y="13.5" width="40" height="1.6" fill="currentColor" />
        <rect x="0" y="16.2" width="40" height="1.6" fill="currentColor" />
        <rect x="0" y="18.4" width="40" height="1.6" fill="currentColor" />
      </svg>
      <span class="text-[15px] font-semibold tracking-tight truncate">Abdul Gani Hadiansyah</span>
    </a>

    <!-- Nav desktop -->
    <nav class="hidden md:flex items-center gap-0.5 ml-auto" aria-label="Main navigation">
      {#each navItems as item}
        <a
          href={item.href}
          class={isActive(item.href, item.exact)
            ? "px-3 py-1 text-sm text-blue-500 border-b-2 border-blue-500"
            : "px-3 py-1 text-sm text-zinc-700 dark:text-zinc-300 hover:text-blue-500 transition-colors border-b-2 border-transparent"}
        >
          {item.label}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-1 ml-auto md:ml-2">
      <ThemeToggle />
      <a href="/contact" class="btn btn-secondary hidden sm:inline-flex !min-h-8 !px-3 text-xs">
        Contact
      </a>
      <button
        type="button"
        onclick={() => (isOpen = !isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        class="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
      >
        {#if isOpen}
          <X class="w-5 h-5" />
        {:else}
          <Menu class="w-5 h-5" />
        {/if}
      </button>
    </div>
  </div>

  <!-- Drawer mobile -->
  {#if isOpen}
    <div class="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xl">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 py-4" aria-label="Mobile navigation">
        <ul class="flex flex-col">
          {#each navItems as item}
            <li>
              <a
                href={item.href}
                onclick={closeMenu}
                class={isActive(item.href, item.exact)
                  ? "block py-3 text-sm font-semibold text-blue-500 border-b border-zinc-200 dark:border-zinc-800"
                  : "block py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:text-blue-500 border-b border-zinc-200 dark:border-zinc-800 transition-colors"}
              >
                {item.label}
              </a>
            </li>
          {/each}
          <li>
            <a
              href="/contact"
              onclick={closeMenu}
              class="block py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:text-blue-500 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  {/if}
</header>
