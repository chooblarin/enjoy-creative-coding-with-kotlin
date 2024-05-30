<script>
	import { resolveRoute } from '$app/paths';
	import logo from "$assets/images/kotlin-fest-2024/Logo_Landscape_Mono.svg";
	import Slide from "$lib/components/slide.svelte";

  const background = resolveRoute("/html/cover-lifegame.html", {});
</script>

<Slide backgroundColor="black" backgroundIframe={background}>
  <div class="text-5xl font-bold">Kotlinで<ruby>愉<rp>(</rp><rt>たの</rt><rp>)</rp></ruby>しむクリエイティブコーディング</div>
  <p class="text-3xl">2024.06.22</p>
  <p class="text-3xl">畠山 創太</p>
  <img src={logo} alt="Kotlin Fest 2024" width="399" height="79" class="absolute bottom-0 right-0" />
</Slide>
