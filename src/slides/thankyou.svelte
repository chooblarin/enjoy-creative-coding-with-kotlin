<script lang="ts">
  import { resolveRoute } from '$app/paths';
  import anim from '$assets/animations/chooblarin_bye_bye.riv?url';
  import Rive from '$lib/components/rive.svelte';
  import Slide from '$lib/components/slide.svelte';

  const background = resolveRoute('/html/thankyou.html', {});
</script>

<Slide id="rive-thankyou" backgroundIframe={background}>
  <div class="grid place-content-center items-center">
    <div>ありがとうございました！</div>
    <Rive
      src={anim}
      id="rive-thankyou"
      width="500"
      height="500"
      classes="mx-auto h-[320px] w-[320px]"
    />
    <div class="text-2xl text-neutral-500">
      <code class="pr-8">@chooblarin</code>
    </div>
  </div>
</Slide>
