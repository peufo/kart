<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    name,
    title,
    description,
    image,
    reverse = false,
  }: {
    name: string;
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
  } = $props();
</script>

<section class="flex gap-6 items-center" class:flex-row-reverse={reverse}>
  <img src={image} alt="Portrait de {name}" class="w-1/3" />
  <div>
    <h3 class="text-xl">{title}</h3>
    <p class="py-3">{description}</p>
  </div>
</section>
