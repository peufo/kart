<script lang="ts">
  import '../app.css'
  let { children } = $props()
</script>

<header class="h-12 flex gap-4 shrink-0 px-4 items-center">
  <a href="/"><h1>Fontenais savon</h1></a>

  <div class="grow"></div>
  <a class="block" href="/register">Inscription</a>
  <a href="/ranking">Classement</a>
</header>

<main class="grow">
  {@render children()}
</main>
