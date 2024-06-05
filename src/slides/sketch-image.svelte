<script lang="ts">
  import Slide from "$lib/components/slide.svelte";

  import original from "$assets/sketches/image/Kotlin Monochrome Logo Black Mark RGB.svg";
  import demo1 from "$assets/sketches/image/demo-1.gif";
  import demo2 from "$assets/sketches/image/demo-2.gif";
  import demo3 from "$assets/sketches/image/demo-3.gif";
  import demo4 from "$assets/sketches/image/demo-4.gif";
</script>

<Slide>
  <div class="text-8xl mb-8">Image</div>
  <div>画像</div>
</Slide>

<Slide>
  <div class="grid items-center justify-center">
    <img loading="lazy" width="500" height="500" src={original} alt="" />
  </div>
</Slide>

<Slide transition="fade">
  <div class="grid grid-cols-4 h-full items-center">
    <img loading="lazy" width="1600" height="1600" src={demo1} alt="">
    <img loading="lazy" width="1600" height="1600" src={demo2} alt="">
    <img loading="lazy" width="1600" height="1600" src={demo3} alt="">
    <img loading="lazy" width="640" height="640" src={demo4} alt="">
  </div>
</Slide>
