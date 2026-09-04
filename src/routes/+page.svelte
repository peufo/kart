<script lang="ts">
  import Contdown from "$lib/Contdown.svelte";
  import { Carousel, Controls } from "flowbite-svelte";

  import slide0 from "$lib/assets/slide-0.jpeg?w=700";
  import slide1 from "$lib/assets/slide-1.png?w=700";
  import slide2 from "$lib/assets/slide-2.png?w=700";
  import slide3 from "$lib/assets/slide-3.png?w=700";
  import slide4 from "$lib/assets/slide-4.png?w=700";
  import slide5 from "$lib/assets/slide-5.png?w=700";
  import slide6 from "$lib/assets/slide-6.png?w=700";

  const images = [slide0, slide1, slide2, slide3, slide4, slide5, slide6].map(
    (src, index) => ({
      title: `Slide ${index}`,
      alt: `Slide ${index}`,
      src,
    }),
  );
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
    <p>Première édition le 12 septembre 2026</p>
    <p>
      Soif d’adrénaline?
      <a href="/register" class="btn ml-3"> Inscris-toi dès maintenant!! </a>
    </p>
    <h2>Programme du week-end</h2>
    <div class="flex gap-4 flex-wrap">
      <ul class="shrink">
        <li>Vendredi 19h ouverture du camping</li>
        <li>Samedi 8h-9h Contrôles techniques des véhicules</li>
        <li>Samedi 9h-11h Tours de chauffes</li>
        <li>Samedi 11h-12h Courses chronométrées (Dossard 1 à 42)</li>
        <li>Samedi 12h-13h Pause</li>
        <li>
          Samedi 13h-14h Courses chronométrées (Dossard 21 à 1 puis 42 à 22)
        </li>
        <li>Samedi 14h-14h45 Rattrapage</li>
        <li>Samedi 14h45-15h30 Final (Top 10)</li>
        <li>Samedi 15h30-16h45 Descente libre</li>
        <li>Samedi 16h45-17h interruption</li>
        <li>Samedi 17h-17h30 Descente de parade</li>
        <li>Samedi 17h30h Cérémonie officiel et remise des prix</li>
        <li>Samedi soir soirée festive et camping</li>
      </ul>

      <img
        src="/logo-beer.webp"
        alt="Logo du chat qui tiens une bière"
        class="w-52 mx-auto"
      />
    </div>

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
