<script lang="ts">
  import File from "$lib/File.svelte";
  let { data } = $props();
</script>

<div class="max-w-lg mx-auto p-2 pb-32 pt-20 flex flex-col gap-4">
  <h1 class="text-2xl">Documents</h1>

  {#each data.files as file}
    <File {file} />
  {/each}
</div>
