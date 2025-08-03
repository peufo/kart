<script lang="ts">
  import "../app.css";
  import { page } from "$app/state";
  
  let { children } = $props();
  
  const links = [
    { href: "/rules", label: "Règlement" },
    { href: "/register", label: "Inscription" },
    { href: "/ranking", label: "Classement" }
  ];
</script>

<header class="h-16 flex gap-1 shrink-0 px-4 items-center">
  <a href="/">
    <h1 class="text-lg">Fontenais savon</h1>
  </a>

  <div class="grow"></div>

  {#each links as { href, label }}
    <a
      class="btn btn-sm btn-ghost"
      class:btn-active={page.route.id === href}
      {href}
    >
      {label}
    </a>
  {/each}
</header>

<main class="grow">
  {@render children()}
</main>
