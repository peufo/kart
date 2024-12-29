<script lang="ts">
  const { data } = $props()
</script>

<ul>
  {#each data.teams as team}
    <li>{team.name} : {team.time}</li>
  {/each}
</ul>
