<script>
	import { resolveRoute } from '$app/paths';
	import Slide from "$lib/components/slide.svelte";

  const background = resolveRoute("/html/cover-lifegame.html", {});
</script>

<Slide backgroundColor="black" backgroundIframe={background}>
  <div class="text-5xl font-bold">Kotlinで<ruby>愉<rp>(</rp><rt>たの</rt><rp>)</rp></ruby>しむクリエイティブコーディング</div>
  <p class="text-3xl">2024.06.22</p>
  <p class="text-3xl">畠山 創太</p>
</Slide>
