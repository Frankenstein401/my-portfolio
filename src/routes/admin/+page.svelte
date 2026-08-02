<script lang="ts">
  import { enhance } from "$app/forms";
  import { FolderGit2, FileText, BookOpen, PlusCircle, CheckCircle2, AlertCircle, Trash2 } from "lucide-svelte";
  import type { ActionData, PageData } from "./$types";

  let { data, form }: { data: PageData; form: ActionData } = $props();

  let activeTab = $state<"project" | "note" | "post">("post");
</script>

<svelte:head>
  <title>Panel Admin — Abdul Gani Hadiansyah</title>
</svelte:head>

<section class="max-w-3xl mx-auto py-8 px-4 sm:px-6 relative z-10">
  <a
    href="/about"
    class="text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors inline-flex items-center gap-1.5 mb-6"
  >
    ← Kembali ke Portfolio
  </a>

  <div class="mb-2">
    <h1 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
      Panel Admin
    </h1>
  </div>
  <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
    Kelola & tambah konten baru untuk website personal kamu.
  </p>

  <!-- Notifikasi Pesan Sukses / Error -->
  {#if form?.success}
    <div class="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center gap-3 text-sm">
      <CheckCircle2 class="w-5 h-5 text-emerald-500 shrink-0" />
      <span>{form.message}</span>
    </div>
  {:else if form?.error}
    <div class="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-300 flex items-center gap-3 text-sm">
      <AlertCircle class="w-5 h-5 text-red-500 shrink-0" />
      <span>{form.error}</span>
    </div>
  {/if}

  <!-- Tab Navigasi Form -->
  <div class="flex flex-wrap border-b border-zinc-200 dark:border-zinc-800 mb-6 gap-1 sm:gap-2">
    <button
      type="button"
      onclick={() => (activeTab = "post")}
      class={activeTab === "post"
        ? "px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 flex items-center gap-1.5"
        : "px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1.5"}
    >
      <BookOpen class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      <span>Artikel ({data.posts.length})</span>
    </button>

    <button
      type="button"
      onclick={() => (activeTab = "project")}
      class={activeTab === "project"
        ? "px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 flex items-center gap-1.5"
        : "px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1.5"}
    >
      <FolderGit2 class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      <span>Proyek ({data.projects.length})</span>
    </button>

    <button
      type="button"
      onclick={() => (activeTab = "note")}
      class={activeTab === "note"
        ? "px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 flex items-center gap-1.5"
        : "px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1.5"}
    >
      <FileText class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      <span>Catatan TIL ({data.notes.length})</span>
    </button>
  </div>

  <!-- TAB 1: Artikel Blog -->
  {#if activeTab === "post"}
    <div class="space-y-8">
      <!-- Form Tambah Blog -->
      <form method="POST" action="?/addPost" use:enhance class="space-y-4">
        <h2 class="text-base font-semibold text-zinc-900 dark:text-zinc-100">Tambah Artikel Blog</h2>
        <div>
          <label for="post-title" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
            Judul Artikel *
          </label>
          <input
            id="post-title"
            type="text"
            name="title"
            required
            placeholder="contoh: Belajar Svelte 5 Runes untuk Pemula"
            class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label for="post-desc" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
            Deskripsi Ringkas
          </label>
          <input
            id="post-desc"
            type="text"
            name="description"
            placeholder="Ringkasan singkat artikel..."
            class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="post-date" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
              Tanggal Publikasi
            </label>
            <input
              id="post-date"
              type="date"
              name="date"
              value={new Date().toISOString().split("T")[0]}
              class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="post-lang" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
              Bahasa
            </label>
            <select
              id="post-lang"
              name="lang"
              class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ID">Bahasa Indonesia (ID)</option>
              <option value="EN">English (EN)</option>
            </select>
          </div>
        </div>

        <div>
          <label for="post-content" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
            Isi Artikel (Format Markdown) *
          </label>
          <textarea
            id="post-content"
            name="content"
            rows="8"
            required
            placeholder="Tulis artikel kamu dalam format Markdown di sini..."
            class="w-full px-3 py-2 text-sm font-mono rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow transition-colors"
        >
          <PlusCircle class="w-4 h-4" />
          <span>Simpan Artikel Blog</span>
        </button>
      </form>

      <!-- Daftar Artikel Blog Terpasang -->
      <div class="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
        <h2 class="text-base font-semibold text-zinc-900 dark:text-zinc-100">Daftar Artikel ({data.posts.length})</h2>
        <div class="divide-y divide-zinc-200/60 dark:divide-zinc-800/60">
          {#each data.posts as post}
            <div class="py-3 flex items-center justify-between gap-4">
              <div>
                <h3 class="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {post.title}
                </h3>
                <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  {post.date} • {post.lang}
                </span>
              </div>
              <form method="POST" action="?/deletePost" use:enhance>
                <input type="hidden" name="slug" value={post.slug} />
                <button
                  type="submit"
                  class="p-1.5 text-zinc-400 hover:text-red-500 transition-colors"
                  title="Hapus Artikel"
                  onclick={(e) => {
                    if (!confirm(`Hapus artikel "${post.title}"?`)) e.preventDefault();
                  }}
                >
                  <Trash2 class="w-4 h-4" />
                </button>
              </form>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- TAB 2: Proyek -->
  {#if activeTab === "project"}
    <div class="space-y-8">
      <!-- Form Tambah Proyek -->
      <form method="POST" action="?/addProject" enctype="multipart/form-data" use:enhance class="space-y-4">
        <h2 class="text-base font-semibold text-zinc-900 dark:text-zinc-100">Tambah Proyek Baru</h2>
        <div>
          <label for="proj-title" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
            Judul Proyek *
          </label>
          <input
            id="proj-title"
            type="text"
            name="title"
            required
            placeholder="contoh: Kasir POS App"
            class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label for="proj-desc" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
            Deskripsi Proyek *
          </label>
          <textarea
            id="proj-desc"
            name="description"
            rows="3"
            required
            placeholder="Penjelasan singkat proyek..."
            class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label for="proj-tags" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
            Tags Teknologi (pisahkan dengan koma)
          </label>
          <input
            id="proj-tags"
            type="text"
            name="tags"
            placeholder="SvelteKit, Tailwind CSS, PostgreSQL"
            class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="proj-github" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
              GitHub Repository
            </label>
            <input
              id="proj-github"
              type="url"
              name="github"
              placeholder="https://github.com/username/repo"
              class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="proj-demo" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
              Live Demo
            </label>
            <input
              id="proj-demo"
              type="url"
              name="demo"
              placeholder="https://demo-aplikasi.com"
              class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label for="proj-image-file" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
            Upload Foto Preview Proyek (PNG / JPG / WebP)
          </label>
          <input
            id="proj-image-file"
            type="file"
            name="imageFile"
            accept="image/*"
            class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 dark:file:bg-blue-950 dark:file:text-blue-300 hover:file:bg-blue-100"
          />
        </div>

        <div>
          <label for="proj-image" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
            Atau Gunakan Path/URL Gambar Manual (Opsional)
          </label>
          <input
            id="proj-image"
            type="text"
            name="image"
            placeholder="/project_preview.jpg"
            class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow transition-colors"
        >
          <PlusCircle class="w-4 h-4" />
          <span>Simpan Proyek</span>
        </button>
      </form>

      <!-- Daftar Proyek Terpasang -->
      <div class="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
        <h2 class="text-base font-semibold text-zinc-900 dark:text-zinc-100">Daftar Proyek ({data.projects.length})</h2>
        <div class="divide-y divide-zinc-200/60 dark:divide-zinc-800/60">
          {#each data.projects as proj}
            <div class="py-3 flex items-center justify-between gap-4">
              <div>
                <h3 class="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {proj.title}
                </h3>
                <p class="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1">
                  {proj.description}
                </p>
              </div>
              <form method="POST" action="?/deleteProject" use:enhance>
                <input type="hidden" name="id" value={proj.id} />
                <button
                  type="submit"
                  class="p-1.5 text-zinc-400 hover:text-red-500 transition-colors"
                  title="Hapus Proyek"
                  onclick={(e) => {
                    if (!confirm(`Hapus proyek "${proj.title}"?`)) e.preventDefault();
                  }}
                >
                  <Trash2 class="w-4 h-4" />
                </button>
              </form>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- TAB 3: Catatan TIL -->
  {#if activeTab === "note"}
    <div class="space-y-8">
      <!-- Form Tambah Catatan TIL -->
      <form method="POST" action="?/addNote" use:enhance class="space-y-4">
        <h2 class="text-base font-semibold text-zinc-900 dark:text-zinc-100">Tambah Catatan TIL</h2>
        <div>
          <label for="note-title" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
            Judul Catatan TIL *
          </label>
          <input
            id="note-title"
            type="text"
            name="title"
            required
            placeholder="contoh: Svelte 5 Runes: Reaktivitas Baru"
            class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="note-date" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
              Tanggal
            </label>
            <input
              id="note-date"
              type="date"
              name="date"
              value={new Date().toISOString().split("T")[0]}
              class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="note-lang" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
              Bahasa
            </label>
            <select
              id="note-lang"
              name="lang"
              class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ID">ID</option>
              <option value="EN">EN</option>
            </select>
          </div>
        </div>

        <div>
          <label for="note-tags" class="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
            Tags Topic (pisahkan dengan koma)
          </label>
          <input
            id="note-tags"
            type="text"
            name="tags"
            placeholder="SvelteKit, Frontend"
            class="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow transition-colors"
        >
          <PlusCircle class="w-4 h-4" />
          <span>Simpan Catatan TIL</span>
        </button>
      </form>

      <!-- Daftar Catatan TIL Terpasang -->
      <div class="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
        <h2 class="text-base font-semibold text-zinc-900 dark:text-zinc-100">Daftar Catatan ({data.notes.length})</h2>
        <div class="divide-y divide-zinc-200/60 dark:divide-zinc-800/60">
          {#each data.notes as note}
            <div class="py-3 flex items-center justify-between gap-4">
              <div>
                <h3 class="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {note.title}
                </h3>
                <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  {note.date} • {note.lang}
                </span>
              </div>
              <form method="POST" action="?/deleteNote" use:enhance>
                <input type="hidden" name="id" value={note.id} />
                <button
                  type="submit"
                  class="p-1.5 text-zinc-400 hover:text-red-500 transition-colors"
                  title="Hapus Catatan"
                  onclick={(e) => {
                    if (!confirm(`Hapus catatan "${note.title}"?`)) e.preventDefault();
                  }}
                >
                  <Trash2 class="w-4 h-4" />
                </button>
              </form>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</section>
