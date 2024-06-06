<script lang="ts">
  import { Rive } from '@rive-app/canvas';
  import clsx from 'clsx';
  import { onMount } from 'svelte';
  import getReveal from '../../reveal';

  export let src: string;
  export let id: string;
  export let width: string;
  export let height: string;
  export let classes: string;

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const reveal = getReveal();
    const r = new Rive({
      src,
      canvas,
      autoplay: true,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      }
    });

    const handleSlideChanged = (event: any) => {
      const el = event.currentSlide as HTMLElement;
      const idAttr = el.attributes.getNamedItem('data-auto-animate-id');
      if (idAttr?.value === id) {
        r.resizeDrawingSurfaceToCanvas();
      }
    };

    reveal.on('slidechanged', handleSlideChanged);

    return () => {
      r.cleanup();
      reveal.off('slidechanged', handleSlideChanged);
    };
  });
</script>

<canvas bind:this={canvas} {width} {height} class={clsx(classes)}></canvas>
