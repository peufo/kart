<script lang="ts">
  import { PUBLIC_GOOGLE_FORM_URL } from '$env/static/public'
</script>

<div class="relative h-screen" style="height: calc(100vh - 3rem);">
  <iframe
    title="Formulaire d'inscription"
    height="100%"
    width="100%"
    src={PUBLIC_GOOGLE_FORM_URL}
    frameborder="0"
    marginheight="0"
    marginwidth="0"
  >
    Chargement…
  </iframe>
</div>
