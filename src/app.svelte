<script lang="ts">
  import { onMount } from 'svelte';

  import Reveal from 'reveal.js';
  import Highlight from 'reveal.js/plugin/highlight/highlight';
  import Notes from 'reveal.js/plugin/notes/notes';

  import Presentation from './presentation.svelte';

  onMount(() => {
    const deck = new Reveal({
      plugins: [Highlight, Notes],
      autoAnimateEasing: 'ease',
      autoAnimateDuration: 1,
      hash: true,
      controls: true,
      progress: true
    });

    deck.initialize();
  });
</script>

<div class="reveal">
  <div class="slides">
    <Presentation />
  </div>
</div>
