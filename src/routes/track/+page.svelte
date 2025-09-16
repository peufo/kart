<script lang="ts">
  import imageTrack from "$lib/assets/track.png?w=500";
  import { MoveHorizontal, MoveVertical, TriangleRight } from "lucide-svelte";
</script>

<div class="max-w-lg mx-auto p-2 pb-32 pt-20 prose">
  <h1>La course</h1>
  <section>
    <p>
      Le départ de la course est situé dans le haut du village au quartier des
      rochets en direction de Villars. Elle traverse une grande partie du
      village pour finir sa course à la place de la fontaine.
    </p>

    <div class="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
      <div
        class="flex gap-4 items-center border rounded-md p-2 px-4 border-base-300"
      >
        <MoveVertical />
        <div>
          <span>Dénivelé</span>
          <br />
          <b>35m</b>
        </div>
      </div>
      <div
        class="flex gap-4 items-center border rounded-md p-2 px-4 border-base-300"
      >
        <MoveHorizontal />
        <div>
          <span>Longueur</span>
          <br />
          <b>670m</b>
        </div>
      </div>
      <div
        class="flex gap-4 items-center border rounded-md p-2 px-4 border-base-300"
      >
        <TriangleRight />
        <div>
          <span>Pente max</span>
          <br />
          <b>15%</b>
        </div>
      </div>
    </div>

    <img src={imageTrack} width="495" height="290" alt="Plan de la piste" />
  </section>

  <h2>Règlement</h2>

  <section>
    <h3>Premier prix</h3>
    <p>
      Dès que tu te seras inscrit, tu prétendras au titre de champion de la
      course. Le premier prix sera desservi à la personne qui accumule le plus
      de points toutes catégories confondues.
    </p>
    <ul>
      <li>Chronomètre</li>
      <li>
        Le nombre de points accumulés le long du parcourt retirent du temps au
        chrono: <b>3s / pts</b>
      </li>
    </ul>
  </section>

  <section>
    <h3>Chalenge « GJF »</h3>
    <p>
      Si tu t’inscris sous le nom d’une association ou d’un club, tu participes
      automatiquement au Chalenge GJF en plus du premier prix. Ce chalenge est
      dédié aux compétiteurs d’association. Mais attention, n’est pas vainqueur
      du challenge qui veut. En tant qu’association, tu devras respecter
      quelques règles supplémentaires. Tu as l’obligation de construire,
      assembler et décorer ta caisse aux couleurs de ton assos. La location de
      véhicule n’est donc pas disponible pour toi.
    </p>

    <ul>
      <li>Chronomètre</li>
      <li>
        Le nombre de points accumulés le long du parcourt retirent du temps au
        chrono: <b>3s / pts</b>
      </li>
      <li>Le show sera élu par un jury populaire</li>
    </ul>
  </section>

  <section>
    <h3>Fusée en herbe</h3>
    <p>
      Si tu as moins de 16ans, tu participes au classement des fusées en herbe.
      Les critères sont les même que celui des adultes à la différence que
      points accumulés ont plus d’importances.
    </p>
    <ul>
      <li>Chronomètre</li>
      <li>
        Le nombre de points accumulés le long du parcourt retirent du temps au
        chrono: <b>5s / pts</b>
      </li>
    </ul>
  </section>

  <section>
    <h3>Critères</h3>

    <h4>Le chronomètre</h4>
    <p>Temps total de la descente fait par le coureur</p>

    <h4>Les points</h4>
    <p>
      Les points sont des lieux de passage techniques, des radars de vitesse ou
      encore des objets à taper. Tu ne les connaitras qu’au matin de la course
    </p>

    <h4>Le show</h4>
    <p>
      Le show doit être garanti tout le long de la course. Profite de la zone de
      départ et d’arriver pour séduire le jury. Un bon show se distingue aussi
      par son fairplay et son sens de l’amusement. N’hésite pas à dissimuler tes
      amis dans le publique pour te garantir un maximum de point.
    </p>
  </section>
</div>

<div class="relative h-screen" style="height: calc(100vh - 4rem);">
  <object
    title="Règlement"
    data="/rules.pdf"
    type="application/pdf"
    width="100%"
    height="100%"
  >
  </object>
</div>
