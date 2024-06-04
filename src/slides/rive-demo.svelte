<script lang="ts">
  import Slide from "$lib/components/slide.svelte";
  import { Rive } from "@rive-app/canvas";
  import { onMount } from "svelte";
  import getReveal from "../reveal";

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const reveal = getReveal();
    const r = new Rive({
      src: "https://cdn.rive.app/animations/vehicles.riv",
      canvas,
      autoplay: true,
      stateMachines: "bumpy",
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      },
    });

    const handleSlideChanged = (event: any) => {
      const el = event.currentSlide as HTMLElement;
      const idAttr = el.attributes.getNamedItem("data-auto-animate-id")
      if (idAttr?.value === "rive-demo") {
        r.resizeDrawingSurfaceToCanvas();
      }
    };

    reveal.on("slidechanged", handleSlideChanged);

    return () => {
      r.cleanup();
      reveal.off("slidechanged", handleSlideChanged);
    }
  });

</script>

<Slide id="rive-demo">
  <div class="grid items-center place-content-center">
    <canvas bind:this={canvas} width="500" height="500" class="w-[640px] h-[480px] mx-auto"></canvas>
  </div>
</Slide>
