<script lang="ts">
  import Slide from "$lib/components/slide.svelte";

  import photo1 from "$assets/images/bootcamp-photos/bootcamp1.jpg";
  import photo2 from "$assets/images/bootcamp-photos/bootcamp2.jpg";
</script>

<Slide backgroundColor="white">
  <div>学生にプログラミングの授業</div>
  <div class="flex flex-wrap gap-4 mt-8">
    <img src={photo1} alt="" width="1024" height="720" class="w-[468px] max-w-96 max-h-96 block" />
    <img src={photo2} alt="" width="1024" height="720" class="w-[468px] max-w-96 max-h-96 block" />
  </div>
  <a href="https://prtimes.jp/main/html/rd/p/000000237.000005362.html" class="text-sm">https://prtimes.jp/main/html/rd/p/000000237.000005362.html</a>
</Slide>

<Slide>
  <div class="text-5xl">
    <div class="my-4">プログラミングの学習は</div>
    <div class="my-4">楽しくなければならない</div>
  </div>
</Slide>