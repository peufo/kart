<script lang="ts">
  import '../app.css'
  let { children } = $props()
</script>

<header class="h-16 flex gap-1 shrink-0 px-4 items-center">
  <a href="/">
    <h1 class="text-lg">Fontenais savon</h1>
  </a>

  <div class="grow"></div>
  <a class="btn btn-sm btn-ghost" href="/rules">Règlement</a>
  <a class="btn btn-sm btn-ghost" href="/register">Inscription</a>
  <a class="btn btn-sm btn-ghost" href="/ranking">Classement</a>
</header>

<main class="grow">
  {@render children()}
</main>
