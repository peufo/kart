<script lang="ts">
  import "../app.css";
  import { page } from "$app/state";
  import { MetaTags, JsonLd } from "svelte-meta-tags";
  import { Mail, Menu, Phone } from "lucide-svelte";

  let { children } = $props();

  const links = [
    { href: "/track", label: "La course" },
    { href: "/board", label: "L'équipe" },
    { href: "/register", label: "Inscription" },
    { href: "/ranking", label: "Classement" },
  ];
</script>

<MetaTags
  title="La Tchaiscente"
  description="Course de caisse à savon à Fontenais le 12 septembre 2026"
/>

<JsonLd
  output="head"
  schema={{
    "@context": "https://schema.org",
    "@type": "Event",
    name: "La Tchaiscente",
    startDate: "2026-09-12T19:00:00",
    endDate: "2025-09-13T23:00:00",
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
    image: ["https://latchaiscente.ch/logo.webp"],
    description: "Course de caisse à savon à Fontenais.",
    organizer: {
      "@type": "Organization",
      name: "Le groupe des jeunes de Fontenais",
    },
  }}
/>

<header class="h-16 flex gap-1 shrink-0 px-4 items-center bg-base-200">
  <a href="/" class="flex items-center gap-4">
    <img src="/logo.webp" alt="Logo groupe des jeunes" class="max-h-14" />
    <h1 class="text-xl">La Tchaiscente</h1>
  </a>

  <div class="grow"></div>
  <div class="hidden min-sm:flex items-center gap-1">
    {#each links as { href, label }}
      <a
        class="btn btn-sm btn-ghost"
        class:btn-active={page.route.id === href}
        {href}
      >
        {label}
      </a>
    {/each}
  </div>
  <div class="hidden max-sm:dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn m-1">
      <Menu></Menu>
    </div>
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <ul
      tabindex="0"
      class="dropdown-content menu bg-base-100 rounded-box z-1 w-42 p-2 shadow-sm"
    >
      {#each links as { href, label }}
        <li>
          <a class:bg-base-200={page.route.id === href} {href}>
            {label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</header>

<main class="grow">
  {@render children()}
</main>

<footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
    <img src="/logo.webp" alt="Logo groupe des jeunes" class="max-h-40" />
    <p>
      La Tchaiscente 2026
      <br />
      Groupe des jeunes de Fontenais
    </p>
  </aside>

  <nav>
    <h6 class="footer-title">Contact</h6>
    <span>
      <Mail class="inline-block h-4" />
      <a
        class="link link-hover"
        href="mailto:groupejeunessefontenaisgjf@gmail.com"
      >
        groupejeunessefontenaisgjf@gmail.com
      </a>
    </span>
    <span>
      <Phone class="inline-block h-4" />
      <a class="link link-hover" href="tel:0041798403933"> +41 79 840 39 33 </a>
    </span>
  </nav>
  <nav>
    <h6 class="footer-title">Liens</h6>
    <a class="link link-hover" href="/"> Accueil </a>
    {#each links as { href, label }}
      <a class="link link-hover" {href}>
        {label}
      </a>
    {/each}
  </nav>
</footer>
