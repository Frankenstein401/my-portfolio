<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import { page } from "$app/state";

  import DynamicGridBg from "$lib/components/DynamicGridBg.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let { children } = $props();

  const isAdmin = $derived(page.url.pathname.startsWith("/admin"));
  const isError = $derived(page.status >= 400);
  const hideLayout = $derived(isAdmin || isError);
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="description" content="Portfolio personal Abdul Gani Hadiansyah — Backend Developer & Siswa RPL SMKN 12 Jakarta. Temukan proyek, artikel blog, dan catatan belajar terbaru." />
  <meta name="keywords" content="Abdul Gani Hadiansyah, Backend Developer, SMKN 12 Jakarta, Web Technologies, Portfolio, SvelteKit" />
  <meta name="author" content="Abdul Gani Hadiansyah" />
  <meta property="og:title" content="Abdul Gani Hadiansyah — Backend Developer Portfolio" />
  <meta property="og:description" content="Portfolio personal Abdul Gani Hadiansyah — Backend Developer & Siswa RPL SMKN 12 Jakarta." />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <DynamicGridBg />
  {#if !hideLayout}
    <Navbar />
  {/if}
  <main class="flex-1 flex flex-col justify-center">
    {@render children()}
  </main>
  {#if !hideLayout}
    <Footer />
  {/if}
</div>
