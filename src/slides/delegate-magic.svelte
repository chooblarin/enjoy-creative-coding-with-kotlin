<script lang="ts">
  import Code from '$lib/components/code.svelte';
  import Slide from '$lib/components/slide.svelte';

  import demo1 from '$assets/videos/delegate-magic/demo-1.mp4';
  import demo2 from '$assets/videos/delegate-magic/demo-2.mp4';
  import demo3 from '$assets/videos/delegate-magic/demo-3.mp4';
</script>

<Slide>
  <div>
    <code>orx-delegate-magic</code>🪄🦄
  </div>
</Slide>

<!-- Demo 1 -->
<Slide transition="fade">
  <div class="text-3xl">マウスの位置に円を描画</div>
  <div class="grid grid-cols-[1fr_320px]">
    <div class="text-3xl">
      <Code language="kotlin" lineNumbers="|5"
        >{`
      program {
        extend(NoClear()) // 描画ごとにクリアしない
        extend {
          drawer.fill = ColorRGBa.PINK
          drawer.circle(mouse.position, radius = 20.0)
        }
      }
      `}
      </Code>
    </div>

    <div class="h-[480px] max-h-full">
      <video
        width="1600"
        height="1600"
        autoplay
        controls
        loop
        muted
        playsinline
        class="mt-5 h-auto w-[480px]"
      >
        <source type="video/mp4" src={demo1} />
      </video>
    </div>
  </div>
</Slide>

<!-- Demo 2 -->
<Slide transition="fade">
  <div class="text-3xl"><code>following</code></div>
  <div class="grid grid-cols-[1fr_320px]">
    <div class="text-3xl">
      <Code language="kotlin" lineNumbers="|2-4,5-6,10,12"
        >{`
      program {
        val target = object {
            var posision = Vector2.ZERO
        }
        // ↓ Delegate Magic!
        val p by following(target::posision)

        extend(NoClear())
        extend {
          target.posision = mouse.position
          drawer.fill = ColorRGBa.PINK
          drawer.circle(p, radius = 20.0)
        }
      }
      `}
      </Code>
    </div>

    <div class="h-[480px] max-h-full">
      <video
        width="1600"
        height="1600"
        autoplay
        controls
        loop
        muted
        playsinline
        class="mt-5 h-auto w-[480px]"
      >
        <source type="video/mp4" src={demo2} />
      </video>
    </div>
  </div>
</Slide>

<!-- Demo 3 -->
<Slide transition="fade">
  <div class="text-3xl"><code>springForcing</code></div>
  <div class="grid grid-cols-[1fr_320px]">
    <div class="text-3xl">
      <Code language="kotlin" lineNumbers="5-8"
        >{`
      program {
        val target = object {
            var posision = Vector2.ZERO
        }
        // ↓ Delegate Magic!
        val p by springForcing(
          target::posision, k = 5.0, decay = 0.9
        )

        extend {
          target.posision = mouse.position
          drawer.fill = ColorRGBa.PINK
          drawer.circle(p, radius = 20.0)
        }
      }
      `}
      </Code>
    </div>

    <div class="h-[480px] max-h-full">
      <video
        width="1600"
        height="1600"
        autoplay
        controls
        loop
        muted
        playsinline
        class="mt-5 h-auto w-[480px]"
      >
        <source type="video/mp4" src={demo3} />
      </video>
    </div>
  </div>
</Slide>
