<script lang="ts">
  import { Carousel, Controls } from "flowbite-svelte";

  const images = [
    {
      title: "Sponsor A",
      alt: "Sponsor A",
      src: "https://placehold.co/600x400",
    },
    {
      title: "Sponsor B",
      alt: "Sponsor B",
      src: "https://placehold.co/600x400",
    },
    {
      title: "Sponsor C",
      alt: "Sponsor C",
      src: "https://placehold.co/600x400",
    },
    {
      title: "Sponsor D",
      alt: "Sponsor D",
      src: "https://placehold.co/600x400",
    },
  ];
</script>

<main class="max-w-3xl m-auto px-4">
  <section class="mt-12">
    <div class="flex items-center gap-20 max-md:flex-col">
      <img src="/logo.webp" alt="Logo caisse a savon" class="max-h-60" />
      <div class="w-full">
        <Carousel {images} duration={4000}>
          <Controls />
        </Carousel>
      </div>
    </div>
  </section>
</main>
