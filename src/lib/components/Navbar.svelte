<script lang="ts">
  import { page } from "$app/state";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";

  const navItems = [
    { href: "/about", label: "About", exact: true },
    { href: "/achievement", label: "Achievement", exact: true },
    { href: "/projects", label: "Projects", exact: false },
    { href: "/blog", label: "Blog", exact: false },
    { href: "/my-notes", label: "TIL", exact: false },
    { href: "/contact", label: "Reach me!", exact: true }
  ];

  function isActive(href: string, exact: boolean) {
    const currentPath = page.url.pathname;
    if (exact) {
      return currentPath === href;
    }
    return currentPath.startsWith(href);
  }
</script>


<header class="flex flex-col items-center justify-center py-6">
  <div class="text-center font-bold mb-4 text-[22px]">
    Abdul Gani Hadiansyah
  </div>
  <nav>
    <ul class="flex gap-[2.5rem] items-center">
      {#each navItems as item}
        <li>
          <a
            href={item.href}
            class={isActive(item.href, item.exact)
              ? "underline underline-offset-4 font-semibold"
              : "hover:underline text-zinc-600 dark:text-zinc-400"}
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
</header>

