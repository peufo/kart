<script lang="ts">
  import "../app.css";
  import { page } from "$app/state";
  import { MetaTags, JsonLd } from "svelte-meta-tags";

  let { children } = $props();

  const links = [
    { href: "/rules", label: "Règlement" },
    { href: "/register", label: "Inscription" },
    { href: "/ranking", label: "Classement" },
  ];
</script>

<MetaTags
  title="La Tchaiscente"
  description="Course de caisse à savon à Fontenais le 05 septembre 2026"
/>

<JsonLd
  output="head"
  schema={{
    "@context": "https://schema.org",
    "@type": "Event",
    name: "La Tchaiscente",
    startDate: "2026-09-04T19:00:00",
    endDate: "2025-09-05T23:00:00",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Fontenais",
      address: {
        "@type": "PostalAddress",
        streetAddress: "245 Route de Porrentruy",
        addressLocality: "Fontenais",
        postalCode: "2902",
        addressRegion: "JU",
        addressCountry: "CH",
      },
    },
    image: ["https://latchaisente.ch/logo.webp"],
    description: "Course de caisse à savon.",
    organizer: {
      "@type": "Organization",
      name: "Le groupe des jeunes de Fontenais",
    },
  }}
/>

<header class="h-16 flex gap-1 shrink-0 px-4 items-center">
  <a href="/">
    <h1 class="text-lg">Fontenais savon</h1>
  </a>

  <div class="grow"></div>

  {#each links as { href, label }}
    <a
      class="btn btn-sm btn-ghost"
      class:btn-active={page.route.id === href}
      {href}
    >
      {label}
    </a>
  {/each}
</header>

<main class="grow">
  {@render children()}
</main>
