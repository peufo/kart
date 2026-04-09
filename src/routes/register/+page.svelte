<script lang="ts">
  import { env } from "$env/dynamic/public";
</script>

<div class="relative h-screen no-footer" style="height: calc(100vh - 4rem);">
  <iframe
    title="Formulaire d'inscription"
    height="100%"
    width="100%"
    src={env.PUBLIC_GOOGLE_FORM_REGISTER}
    frameborder="0"
    marginheight="0"
    marginwidth="0"
  >
    Chargement…
  </iframe>
</div>
