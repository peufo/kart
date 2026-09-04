<script lang="ts">
  import {
    ChevronLeft,
    ChevronRight,
    HardDriveDownloadIcon,
    X,
  } from "lucide-svelte";

  let { data } = $props();

  let dialog: HTMLDialogElement;
  let current = $state(0);

  const images = $derived(data.images);
  const label = (name: string) => name.replace(/\.[^.]+$/, "");

  function open(index: number) {
    current = index;
    dialog.showModal();
  }

  function move(delta: number) {
    current = (current + delta + images.length) % images.length;
  }

  function onkeydown(event: KeyboardEvent) {
    if (!dialog?.open || images.length < 2) return;
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  }
</script>

<svelte:window {onkeydown} />

<div class="max-w-4xl mx-auto p-2 pb-32 pt-20 flex flex-col gap-4">
  <h1 class="text-2xl">Photos</h1>

  {#if images.length === 0}
    <p class="opacity-60">Les photos arrivent bientôt.</p>
  {:else}
    <div class="columns-2 md:columns-3 gap-3">
      {#each images as image, index (image.id)}
        <button
          type="button"
          class="block w-full mb-3 break-inside-avoid cursor-zoom-in"
          onclick={() => open(index)}
        >
          <img
            src="/gallery/{image.id}?w=800"
            srcset="/gallery/{image.id}?w=400 400w, /gallery/{image.id}?w=800 800w"
            sizes="(max-width: 768px) 50vw, 33vw"
            alt={label(image.name)}
            loading="lazy"
            style:aspect-ratio={image.width && image.height
              ? `${image.width}/${image.height}`
              : null}
            class="w-full rounded-lg shadow hover:shadow-xl transition"
          />
        </button>
      {/each}
    </div>
  {/if}
</div>

<dialog bind:this={dialog} class="modal">
  <div class="modal-box max-w-5xl w-11/12 p-3 flex flex-col gap-3">
    {#if images[current]}
      <div class="flex items-center gap-2">
        <h2 class="truncate text-xl">{label(images[current].name)}</h2>
        <form method="dialog" class="ml-auto">
          <button class="btn btn-sm btn-ghost btn-circle" aria-label="Fermer">
            <X />
          </button>
        </form>
      </div>

      <img
        src="/gallery/{images[current].id}?w=1600"
        alt={label(images[current].name)}
        class="w-full max-h-[70vh] object-contain rounded-lg"
      />

      <div class="flex items-center gap-2">
        {#if images.length > 1}
          <button
            class="btn btn-sm btn-ghost btn-circle"
            aria-label="Photo précédente"
            onclick={() => move(-1)}
          >
            <ChevronLeft />
          </button>
          <span class="text-sm opacity-60">
            {current + 1} / {images.length}
          </span>
          <button
            class="btn btn-sm btn-ghost btn-circle"
            aria-label="Photo suivante"
            onclick={() => move(1)}
          >
            <ChevronRight />
          </button>
        {/if}

        <a
          href="/gallery/{images[current].id}"
          download={images[current].name}
          class="btn btn-sm ml-auto"
        >
          <HardDriveDownloadIcon class="h-4" />
          Télécharger
        </a>
      </div>
    {/if}
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>Fermer</button>
  </form>
</dialog>
