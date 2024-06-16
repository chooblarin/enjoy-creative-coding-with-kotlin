<script lang="ts">
  import { resolveRoute } from '$app/paths';
  import Slide from '$lib/components/slide.svelte';

  const background = resolveRoute('/html/cover-shader.html', {});
</script>

<Slide backgroundColor="black" backgroundIframe={background}>
  <div class="r-fit-text text-start font-semibold [text-shadow:_0_2px_0_rgb(0_0_0_/_90%)]">
    <div>
      Kotlinで<ruby>愉<rp>(</rp><rt>たの</rt><rp>)</rp></ruby>しむ
    </div>
    <div>クリエイティブコーディング</div>
  </div>
  <div class="mt-20 text-3xl">畠山 創太</div>
</Slide>
