<script lang="ts">
  import { onMount } from 'svelte';
  import Presentation from './presentation.svelte';
  import getReveal from './reveal';

  onMount(() => {
    const deck = getReveal();
    return () => deck.destroy();
  });
</script>

<div class="reveal">
  <div class="slides">
    <Presentation />
  </div>
</div>
