<script lang="ts">
  import Contdown from "$lib/Contdown.svelte";
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

<div class="max-w-2xl m-auto p-4 pb-32 space-y-16">
  <section class="mt-12">
    <div class="flex items-center gap-20 max-md:flex-col">
      <img src="/logo.webp" alt="Logo groupe des jeunes" class="max-h-60" />
      <div class="w-full">
        <Carousel {images} duration={4000}>
          <Controls />
        </Carousel>
      </div>
    </div>
  </section>

  <section class="prose">
    <h2>Course de caisse à savon La Tchaiscente</h2>
    <p>Première édition le 05 septembre 2026</p>
    <p>
      Soif d’adrénaline?
      <a href="/register" class="btn ml-3"> Inscris-toi dès maintenant!! </a>
    </p>
    <h2>Programme du week-end</h2>
    <ul>
      <li>Vendredi 19h ouverture du camping</li>
      <li>
        Samedi 8h30 Accueil des coureurs et début des contrôles techniques des
        véhicules
      </li>
      <li>Samedi 10h Début des courses</li>
      <li>Samedi midi pause</li>
      <li>Samedi 16h remise des prix</li>
      <li>Samedi soir soirée festive et camping</li>
    </ul>

    <h2>Accessibilité</h2>
    <p>
      Un dépose minute pour les équipes et le matériel est situé à la zone de
      contrôle des véhicules. Le parking principal quant à lui se situe derrière
      l’entreprise Lang à l’entrée de Fontenais direction Porrentruy.
    </p>

    <a href="/register" class="btn"> Alors es-tu prêt à t’inscrire ? </a>
  </section>

  <Contdown />
</div>
