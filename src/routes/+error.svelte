<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="grid place-content-center p-4" style="height: calc(100vh - 352px);">
  <div class="border shadow px-12 py-8 text-center rounded-xl bg-base-200">
    <h2 class="text-2xl">Error {$page.status}</h2>
    <p>{$page.error?.message}</p>
    <a href="/" class="btn btn-outline mt-6">Retour à l'accueil</a>
  </div>
</div>
