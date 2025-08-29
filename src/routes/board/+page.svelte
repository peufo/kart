<script lang="ts">
  import Member from "./Member.svelte";
  import imageBoard from "$lib/assets/board.jpg?w=640&h=480";
  import imageNatou from "$lib/assets/natou.jpg?w=240";
  import imageLucien from "$lib/assets/lucien.jpg?w=240";
  import imageRomain from "$lib/assets/romain.jpg?w=240";
  import imageCelien from "$lib/assets/celien.jpg?w=240";
  import imagePablo from "$lib/assets/pablo.jpg?w=240";
  import imageMaxime from "$lib/assets/maxime.jpg?w=240";
  import imageJohan from "$lib/assets/johan.jpg?w=240";
  const imageNoa = "/logo.webp";
  const imageJimmy = "/logo.webp";

  const members: {
    name: string;
    title: string;
    image: string;
    description: string;
  }[] = [
    {
      name: "Natou",
      title: "Président de la cours",
      image: imageNatou,
      description:
        "Chef d’orchestre de cette joyeuse équipe, il veille à ce que tout fonctionne dans la bonne humeur et avec efficacité.",
    },
    {
      name: "Lucien",
      title: "Président de jeunesse + infrastructure",
      image: imageLucien,
      description:
        "Pilier du groupe, il jongle entre la gestion du groupe jeunesse et la construction des infrastructures.",
    },
    {
      name: "Romain",
      title: "Secrétaire",
      image: imageRomain,
      description:
        "A l’organisation, il gère tout ce qui est administratif. Il s’occupe également de la comptabilité et du financement.",
    },
    {
      name: "Célien",
      title: "Technicien",
      image: imageCelien,
      description:
        "La tête dans les fils électriques, il est responsable de tout ce qui touche au web, aux systèmes informatiques et au chronométrage.",
    },
    {
      name: "Pablo",
      title: "Communication",
      image: imagePablo,
      description:
        "Véritable porte-parole du groupe, il place les mots et les images pour mettre en avant l’équipe sur tous les supports.",
    },
    {
      name: "Noa",
      title: "Financement",
      image: imageNoa,
      description:
        "Trouver des financements, négocier des partenariats et dénicher les meilleures opportunités, c’est son domaine.",
    },
    {
      name: "Jimmy",
      title: "Chalengeur",
      image: imageJimmy,
      description:
        "Toujours prêt à repousser les limites et à relever de nouveaux défis, casse-cou de la bande, il est celui qui respire l’adrénaline de la course.",
    },
    {
      name: "Maxime",
      title: "Constructeur",
      image: imageMaxime,
      description:
        "Ingénieux et créatif, il imagine, conçoit et construit tout ce dont l’équipe a besoin.  Les véhicules, les rampes, tout ou presque passe sous son poste à souder.",
    },
    {
      name: "Johan",
      title: "Mécano",
      image: imageJohan,
      description:
        "Passionné, il connaît chaque boulon et sur le bout des doigts. Réparer, optimiser, crée, il est toujours prêt à mettre les mains dans le cambouis.",
    },
  ];
</script>

<div class="max-w-2xl m-auto p-4 pb-32 pt-20 prose">
  <h1>L'équipe</h1>
  <img src={imageBoard} alt="Comité de la Tchaiscente" />

  {#each members as member, index}
    <Member {...member} reverse={!(index % 2)} />
  {/each}
</div>
