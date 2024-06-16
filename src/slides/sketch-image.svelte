<script lang="ts">
  import Slide from '$lib/components/slide.svelte';

  import original from '$assets/sketches/image/Kotlin Monochrome Logo Black Mark RGB.svg';
  import demo1 from '$assets/sketches/image/demo-1.gif';
  import demo2 from '$assets/sketches/image/demo-2.gif';
  import demo3 from '$assets/sketches/image/demo-3.gif';
  import demo4 from '$assets/sketches/image/demo-4.gif';
  import demo5 from '$assets/sketches/image/demo-5.png';
  import demo6 from '$assets/sketches/image/demo-6.png';
  import demo7 from '$assets/sketches/image/demo-7.png';
  import demo8 from '$assets/sketches/image/demo-8.png';
</script>

<Slide>
  <div class="mb-8 text-8xl">Image</div>
  <div>画像</div>
</Slide>

<Slide>
  <div class="grid items-center justify-center">
    <img loading="lazy" width="500" height="500" src={original} alt="" />
  </div>
</Slide>

<Slide transition="fade">
  <div class="grid h-full grid-cols-4 items-center">
    <img loading="lazy" width="1600" height="1600" src={demo8} alt="" />
    <img loading="lazy" width="1600" height="1600" src={demo5} alt="" />
    <img loading="lazy" width="1600" height="1600" src={demo6} alt="" />
    <img loading="lazy" width="1600" height="1600" src={demo7} alt="" />
    <img loading="lazy" width="1600" height="1600" src={demo1} alt="" />
    <img loading="lazy" width="1600" height="1600" src={demo2} alt="" />
    <img loading="lazy" width="1600" height="1600" src={demo3} alt="" />
    <img loading="lazy" width="640" height="640" src={demo4} alt="" />
  </div>
</Slide>
