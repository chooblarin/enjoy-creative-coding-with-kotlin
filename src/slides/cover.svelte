<script lang="ts">
  import { resolveRoute } from '$app/paths';
  import Slide from '$lib/components/slide.svelte';

  const background = resolveRoute('/html/cover-shader.html', {});
</script>

<Slide backgroundColor="black" backgroundIframe={background}>
  <div class="font-bold r-fit-text text-start">
    <div>
      Kotlinで<ruby>愉<rp>(</rp><rt>たの</rt><rp>)</rp></ruby>しむ
    </div>
    <div>
      クリエイティブコーディング
    </div>
  </div>
  <div class="text-3xl mt-20">畠山 創太</div>
</Slide>
