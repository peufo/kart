<script lang="ts">
  import Member from "./Member.svelte";
</script>

<div class="max-w-2xl m-auto p-4 py-32 space-y-16">
  <section>
    <h2 class="text-4xl font-bold mb-4">L'équipe</h2>
    <enhanced:img src="$lib/assets/board.jpg" alt="Photo du comité" />
  </section>

  <Member name="Jonas" src="https://api.dicebear.com/9.x/big-smile/svg" />
  <Member
    name="Jonas"
    src="https://api.dicebear.com/9.x/big-smile/svg"
    reverse
  />
  <Member name="Jonas" src="https://api.dicebear.com/9.x/big-smile/svg" />
</div>
