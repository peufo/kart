<script lang="ts">
  import { onMount } from "svelte";

  const eventTime = new Date(2026, 8, 5, 10, 0, 0).getTime();
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let days = 0;

  function updateCountdown() {
    const timeRemaining = Math.max(0, eventTime - new Date().getTime());
    seconds = Math.floor(timeRemaining / 1000);
    minutes = Math.floor(timeRemaining / (1000 * 60)) % 60;
    hours = Math.floor(timeRemaining / (1000 * 60 * 60)) % 24;
    days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    seconds %= 60;
  }

  onMount(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  });
</script>

<div class="flex flex-col items-center gap-4">
  <h2 class="text-2xl">Départ dans</h2>

  <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
    <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
      <span class="font-mono text-5xl">
        <span>
          {days}
        </span>
      </span>
      Jours
    </div>
    <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
      <span class="countdown font-mono text-5xl">
        <span
          style="--value: {hours};"
          aria-live="polite"
          aria-label={hours.toString()}
        >
          {hours}
        </span>
      </span>
      heures
    </div>
    <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
      <span class="countdown font-mono text-5xl">
        <span
          style="--value: {minutes};"
          aria-live="polite"
          aria-label={minutes.toString()}
        >
          {minutes}
        </span>
      </span>
      Min.
    </div>
    <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
      <span class="countdown font-mono text-5xl">
        <span
          style="--value: {seconds};"
          aria-live="polite"
          aria-label={seconds.toString()}
        >
          {seconds}
        </span>
      </span>
      Sec.
    </div>
  </div>
</div>
