<script lang="ts">
  let {
    name,
    src,
    reverse = false,
  }: { name: string; src: string; reverse?: boolean } = $props();
</script>

<section class="flex gap-6 p-4 items-center" class:flex-row-reverse={reverse}>
  <img {src} alt="Portrait de {name}" class="w-1/3" />
  <div>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore dolorum
      natus alias rem perspiciatis praesentium eaque sit repudiandae nam!
      Quisquam odio exercitationem ullam animi vel, autem laudantium aliquam
      eius saepe.
    </p>
  </div>
</section>
