<script lang="ts">
  import { MoveHorizontal, MoveVertical, TriangleRight } from "lucide-svelte";
</script>

<div class="max-w-lg mx-auto p-2 pb-32 pt-20 prose">
  <h1>Plan de la piste</h1>

  <p>
    Le départ de la course est situé dans le haut du village au cartier des
    rochets en direction de Villars. Elle traverse une grande partie du village
    pour finir sa course à la place de la fontaine.
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

  <img src="/track.png" alt="Plan de la piste" />
</div>
