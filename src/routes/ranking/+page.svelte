<script lang="ts">
  import { MessageCircleQuestionMark, Timer } from "lucide-svelte";

  const { data } = $props();

  const topRanking = [
    { src: "/gold.png", alt: "Trophé or", color: "#f5c12d" },
    { src: "/silver.png", alt: "Trophé argent", color: "#c2c2c2" },
    { src: "/bronze.png", alt: "Trophé bronze", color: "#d37e65" },
  ];

  const ranked = data.teams.filter((t) => t.time);
  const unranked = data.teams.filter((t) => !t.time);
</script>

<div class="m-auto my-6 max-w-md p-4 flex flex-col gap-2">
  <p class="my-8 text-center">
    Tu pourras consulter les chronos ici dés que la course aurra eu lieu !
  </p>

  {#each topRanking as { src, alt, color }, index}
    {@const team = ranked[index]}
    <div
      class="flex gap-4 items-center border p-4 rounded"
      style="border-color: {color};"
    >
      <img {src} {alt} class="h-8" />
      <span>{team ? team.name : "Ton équipe ?"}</span>
      <div class="grow"></div>
      {#if team}
        <div class="badge badge-lg">
          <Timer />
          <span class="font-mono">{team.time}</span>
        </div>
      {/if}
    </div>
  {/each}

  {#each ranked.slice(3) as team, index}
    <div class="flex gap-4 items-center px-4 py-1 rounded">
      <div class="h-8 w-8 grid place-content-center text-xl">
        {index + 4}
      </div>
      <span>{team.name}</span>
      <div class="grow"></div>
      <div class="badge badge-lg">
        <Timer />
        <span class="font-mono">{team.time}</span>
      </div>
    </div>
  {/each}

  {#each unranked as team}
    <div class="flex gap-4 items-center px-4 py-1 rounded opacity-60">
      <div class="h-8 w-8 grid place-content-center text-xl">
        <MessageCircleQuestionMark />
      </div>
      <span>{team.name}</span>
    </div>
  {/each}

  <div class="text-center text-xs mt-10 opacity-70">
    <a
      class="link link-hover"
      href="https://www.flaticon.com/fr/icones-gratuites/trophee"
      title="trophée icônes">Trophée icônes créées par Slidicon - Flaticon</a
    >
  </div>
</div>
