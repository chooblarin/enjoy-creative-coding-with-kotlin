<script>
  import { resolveRoute } from '$app/paths';
  import Slide from '$lib/components/slide.svelte';

  const background = resolveRoute('/html/cover-shader.html', {});
</script>

<Slide backgroundColor="black" backgroundIframe={background}>
  <div class="text-7xl font-bold r-fit-text">
    Kotlinで<ruby>愉<rp>(</rp><rt>たの</rt><rp>)</rp></ruby>しむクリエイティブコーディング
  </div>
  <p class="text-3xl mt-16">畠山 創太</p>
</Slide>
