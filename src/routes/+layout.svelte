<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";

  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen flex flex-col">
  <Navbar />
  <main class="flex-1 m-5">
    {@render children()}
  </main>
  <Footer />
</div>
