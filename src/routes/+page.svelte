<script lang="ts">
  import { onMount } from "svelte";
  import { ArrowRight, ArrowUpRight, FolderGit2 } from "lucide-svelte";

  interface Project {
    id: string;
    title: string;
    description: string;
    tags?: string[];
    github?: string;
    demo?: string;
    image?: string;
  }

  import rawProjects from "$lib/data/projects.json";
  const projects = rawProjects as Project[];
  const featured = projects.slice(0, 3);

  const stats = [
    { value: "8+", label: "Projects & experiments recorded" },
    { value: "17+", label: "Technologies used" },
    { value: "4", label: "Categories: personal, school, Dicoding, experiments" },
    { value: "2", label: "Years active learning & building" }
  ];

  const techChips = [
    { label: "Laravel", icon: "/icons/laravel.svg", top: "6%", left: "58%", delay: 0, duration: 6, invert: false },
    { label: "NestJS", icon: "/icons/nestjs.svg", top: "24%", left: "90%", delay: 0.7, duration: 6.5, invert: false },
    { label: "Elysia", icon: "/icons/elysiajs.svg", top: "54%", left: "93%", delay: 1.3, duration: 7, invert: false },
    { label: "Drizzle", icon: "/icons/drizzle.svg", top: "76%", left: "60%", delay: 0.4, duration: 6.8, invert: false },
    { label: "Flask", icon: "/icons/flask.svg", top: "56%", left: "2%", delay: 1.6, duration: 6.2, invert: true },
    { label: "Prisma", icon: "/icons/prisma.svg", top: "26%", left: "4%", delay: 0.9, duration: 7.2, invert: true }
  ];

  /* Reveal halus saat scroll */
  let revealNodes: HTMLElement[] = [];
  function reveal(node: HTMLElement) {
    revealNodes.push(node);
  }

  onMount(() => {
    if (!("IntersectionObserver" in window)) {
      revealNodes.forEach((n) => n.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );
    revealNodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  });
</script>

<svelte:head>
  <title>Abdul Gani Hadiansyah — Backend Developer</title>
</svelte:head>

<!-- ============ LEADSPACE ============ -->
<section class="border-b border-zinc-200 dark:border-zinc-800">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <p class="eyebrow mb-4 fade-up">Abdul Gani Hadiansyah — Backend Developer</p>
      <h1 class="fade-up text-4xl sm:text-5xl font-light leading-[1.15] tracking-tight text-zinc-950 dark:text-zinc-100 mb-6" style="animation-delay: 0.08s">
        Building reliable backends, from APIs to automation.
      </h1>
      <p class="fade-up text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-lg mb-8" style="animation-delay: 0.16s">
        Software Engineering student at SMKN 12 Jakarta focused on backend development —
        designing REST APIs, full-stack applications, and honest technical experiments.
      </p>
      <div class="fade-up flex flex-wrap gap-4" style="animation-delay: 0.24s">
        <a href="/projects" class="btn btn-primary btn-arrow">
          View projects
          <ArrowRight class="w-4 h-4" />
        </a>
        <a href="/contact" class="btn btn-tertiary">Contact me</a>
      </div>
    </div>

    <!-- Visual: foto + tech stack mengambang -->
    <div class="fade-up relative hidden sm:block h-[26rem] lg:h-[28rem]" style="animation-delay: 0.15s" aria-hidden="true">
      <!-- Ring muter -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="ring-spin w-[23rem] h-[23rem] lg:w-[25rem] lg:h-[25rem] rounded-full border-2 border-dashed border-zinc-300 dark:border-zinc-700"></div>
      </div>

      <!-- Core: foto -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="relative chip-float" style="animation-duration: 7s">
          <div class="w-40 h-40 lg:w-44 lg:h-44 rounded-2xl border-4 border-white dark:border-zinc-900 shadow-xl overflow-hidden">
            <img src="/profile.webp" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-zinc-950 dark:bg-black text-white font-mono text-[10px] tracking-wider px-3 py-1">
            BACKEND DEVELOPER
          </div>
        </div>
      </div>

      <!-- Chip tech stack mengambang (icon brand asli) -->
      {#each techChips as chip}
        <div
          class="absolute chip-float"
          style="top: {chip.top}; left: {chip.left}; animation-delay: {chip.delay}s; animation-duration: {chip.duration}s"
        >
          <span
            title={chip.label}
            class="flex items-center justify-center w-12 h-12 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-sm cursor-default transition-all duration-150 hover:border-blue-500 hover:shadow-md hover:scale-110"
          >
            <img
              src={chip.icon}
              alt={chip.label}
              loading="lazy"
              class="w-6 h-6 {chip.invert ? "invert dark:invert-0" : ""}"
            />
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ============ STATS ============ -->
<section class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
    {#each stats as stat}
      <div class="reveal border-t-2 border-zinc-400 dark:border-zinc-600 pt-4" use:reveal>
        <div class="text-4xl font-light text-zinc-950 dark:text-zinc-100 mb-2">{stat.value}</div>
        <div class="text-sm text-zinc-600 dark:text-zinc-400 leading-snug">{stat.label}</div>
      </div>
    {/each}
  </div>
</section>

<!-- ============ FEATURED PROJECTS ============ -->
<section class="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
  <div class="flex items-end justify-between mb-8">
    <div>
      <p class="eyebrow mb-2">Projects</p>
      <h2 class="text-3xl font-light text-zinc-950 dark:text-zinc-100">Featured work &amp; projects</h2>
    </div>
    <a href="/projects" class="ibm-link shrink-0 mb-1">
      View all
      <ArrowRight class="w-4 h-4" />
    </a>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each featured as item}
      <article class="reveal ibm-card p-6 flex flex-col" use:reveal>
        <div class="flex items-center gap-2 mb-3">
          <FolderGit2 class="w-4 h-4 text-blue-500" />
          <span class="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {item.tags?.[0] ?? "Project"}
          </span>
        </div>
        <h3 class="text-lg font-semibold text-zinc-950 dark:text-zinc-100 mb-2">{item.title}</h3>
        <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">{item.description}</p>
        {#if item.tags && item.tags.length > 0}
          <div class="flex flex-wrap gap-1.5 mb-5">
            {#each item.tags as tag}
              <span class="font-mono text-[10px] text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 border border-zinc-200 dark:border-zinc-700">
                {tag}
              </span>
            {/each}
          </div>
        {/if}
        <a
          href={item.github || "/projects"}
          target={item.github ? "_blank" : undefined}
          rel={item.github ? "noopener noreferrer" : undefined}
          class="ibm-link mt-auto pt-2"
        >
          Details
          <ArrowUpRight class="w-4 h-4" />
        </a>
      </article>
    {/each}
  </div>
</section>

<!-- ============ CTA BANNER ============ -->
<section class="bg-purple-10 dark:bg-purple-70/20">
  <div class="reveal max-w-6xl mx-auto px-4 sm:px-6 py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8" use:reveal>
    <div>
      <p class="eyebrow mb-2 !text-purple-70 dark:!text-purple-10">Collaboration</p>
      <h2 class="text-3xl font-light text-zinc-950 dark:text-zinc-100 mb-2">
        Have a project or need a backend built?
      </h2>
      <p class="text-zinc-600 dark:text-zinc-300 max-w-xl">
        Open for discussions, collaborations, or questions about web and backend development.
      </p>
    </div>
    <a href="/contact" class="btn btn-primary shrink-0">
      Get in touch
      <ArrowRight class="w-4 h-4" />
    </a>
  </div>
</section>

<style>
  @keyframes floaty {
    0%, 100% {
      transform: translateY(0) rotate(-1deg);
    }
    50% {
      transform: translateY(-14px) rotate(1.5deg);
    }
  }
  @keyframes spin-slow {
    to {
      transform: rotate(360deg);
    }
  }
  .chip-float {
    animation: floaty 6s ease-in-out infinite;
  }
  .ring-spin {
    animation: spin-slow 45s linear infinite;
  }
  @media (prefers-reduced-motion: reduce) {
    .chip-float,
    .ring-spin {
      animation: none;
    }
  }
</style>
