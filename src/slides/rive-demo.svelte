<script lang="ts">
  import Slide from "$lib/components/slide.svelte";
  import { Rive } from "@rive-app/canvas";
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const r = new Rive({
        src: "https://cdn.rive.app/animations/vehicles.riv",
        canvas,
        autoplay: true,
        stateMachines: "bumpy",
        onLoad: () => {
          r.resizeDrawingSurfaceToCanvas();
        },
    });
    return () => r.cleanup();
  });

</script>

<Slide>
  <canvas bind:this={canvas} width="500" height="500" class="w-full h-auto max-w-[640px] max-h-[640px] mx-auto"></canvas>
</Slide>
