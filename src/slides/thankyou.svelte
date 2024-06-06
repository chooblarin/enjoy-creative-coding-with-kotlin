<script lang="ts">
  import { resolveRoute } from "$app/paths";
  import anim from "$assets/animations/chooblarin_bye_bye.riv?url";
  import Slide from "$lib/components/slide.svelte";
  import { Rive } from "@rive-app/canvas";
  import { onMount } from "svelte";
  import getReveal from "../reveal";

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const reveal = getReveal();
    const r = new Rive({
      src: anim,
      canvas,
      autoplay: true,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      },
    });

    const handleSlideChanged = (event: any) => {
      const el = event.currentSlide as HTMLElement;
      const idAttr = el.attributes.getNamedItem("data-auto-animate-id")
      if (idAttr?.value === "rive-thankyou") {
        r.resizeDrawingSurfaceToCanvas();
      }
    };

    reveal.on("slidechanged", handleSlideChanged);

    return () => {
      r.cleanup();
      reveal.off("slidechanged", handleSlideChanged);
    }
  });

  const background = resolveRoute('/html/thankyou.html', {});
</script>

<Slide id="rive-thankyou" backgroundIframe={background}>
  <div class="grid items-center place-content-center">
    <div>ありがとうございました！</div>
    <canvas bind:this={canvas} width="500" height="500" class="w-[320px] h-[320px] mx-auto"></canvas>
    <div class="text-2xl text-neutral-500">
      <code class="pr-8">@chooblarin</code>
    </div>
  </div>
</Slide>
