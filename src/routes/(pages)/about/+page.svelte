<script lang="ts">
  // About Page
</script>

<svelte:head>
  <title>About — Abdul Gani Hadiansyah</title>
</svelte:head>

<section class="max-w-3xl mx-auto py-8 px-4 sm:px-6 relative z-10">
  <h1 class="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
    About Me
  </h1>

  <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
    <!-- Left Column: Content Text -->
    <div
      class="md:col-span-7 space-y-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-[14px]"
    >
      <p>
        Hello! I am Abdul Gani Hadiansyah, a software engineering student from SMKN 12
        Jakarta. My primary focus is <strong>backend development</strong>.
      </p>

      <p>
        My interest in programming sparked when I chose to major in computer science
        at vocational school. Driven by an eagerness to learn, I continuously stay
        curious about modern technology trends.
      </p>

      <p class="border-l-2 border-zinc-400 dark:border-zinc-600 pl-4 italic">
        "Talk is cheap. Show me the code." — Linus Torvalds
      </p>

      <p>
        That quote by Linux's creator taught me that in software development, hard work
        and practical execution matter the most. That is why I love discussing ideas,
        collaborating on projects, and learning with peers—to achieve results that go
        beyond talk and deliver real working code.
      </p>

      <p>
        Outside programming, I enjoy gaming, sports (running and volleyball),
        and reading.
      </p>
      <hr class="w-[50%] text-center mx-auto text-zinc-400 my-6" />
      <p>
        If you're interested in discussing, chatting, or collaborating on software projects,
        feel free to visit my <strong><a
            href="https://github.com/abdulganihadiansyah"
            target="_blank"
            rel="noopener noreferrer">GitHub</a
          ></strong>!
      </p>
    </div>

    <!-- Right Column: Profile Photo -->
    <div class="md:col-span-5 flex justify-center md:justify-end pt-4">
      <div class="relative max-w-xs w-full group">
        <!-- Frame Foto Utama -->
        <div
          class="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/90 shadow-xl bg-white dark:bg-zinc-900"
        >
          <img
            src="/profile.webp"
            alt="Abdul Gani Hadiansyah"
            class="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
</section>
