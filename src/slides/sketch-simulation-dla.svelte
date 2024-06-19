<script lang="ts">
  import Code from '$lib/components/code.svelte';
  import Slide from '$lib/components/slide.svelte';

  import explain1 from '$assets/images/explain-dla/dla-explained-1.png';
  import explain2 from '$assets/images/explain-dla/dla-explained-2.png';
  import explain3 from '$assets/images/explain-dla/dla-explained-3.png';
  import explain4 from '$assets/images/explain-dla/dla-explained-4.png';

  import brownianMotion from '$assets/sketches/simulation/dla/brownian-motion.mp4';
  import scattered from '$assets/sketches/simulation/dla/scattered-particles.png';

  import dla from '$assets/sketches/simulation/dla/dla.mp4';
  import kotlinFestGrowth from '$assets/sketches/simulation/dla/kotlin-fest-growth.png';
</script>

<Slide>
  <div>
    <ruby>拡散律速凝集<rp>(</rp><rt>かくさんりっそくぎょうしゅう</rt><rp>)</rp></ruby>（DLA）
  </div>
</Slide>

<Slide id="explain-dla" animate={true}>
  <div class="grid grid-cols-4 px-8">
    <img src={explain1} alt="" width="200" height="200" />
  </div>
  <div class="mt-8 text-center text-3xl">フィールド上をランダムに動き回るたくさんの粒子がある</div>
</Slide>

<Slide id="explain-dla" animate={true}>
  <div class="grid grid-cols-4 px-8">
    <img src={explain1} alt="" width="200" height="200" />
    <img src={explain2} alt="" width="200" height="200" />
  </div>
  <div class="mt-8 text-center text-3xl">真ん中に核を配置する。</div>
</Slide>

<Slide id="explain-dla" animate={true}>
  <div class="grid grid-cols-4 px-8">
    <img src={explain1} alt="" width="200" height="200" />
    <img src={explain2} alt="" width="200" height="200" />
    <img src={explain3} alt="" width="200" height="200" />
  </div>
  <div class="mt-8 text-center text-3xl">粒子は核にぶつかると吸着して核を拡張する。</div>
</Slide>

<Slide id="explain-dla" animate={true}>
  <div class="grid grid-cols-4 px-8">
    <img src={explain1} alt="" width="200" height="200" />
    <img src={explain2} alt="" width="200" height="200" />
    <img src={explain3} alt="" width="200" height="200" />
    <img src={explain4} alt="" width="200" height="200" />
  </div>
  <div class="mt-8 text-center text-3xl">時間経過とともに核が成長していく。</div>
</Slide>

<Slide transition="fade">
  <div>粒子を描く</div>
  <div class="grid grid-cols-[1.5fr_1fr]">
    <div class="text-2xl">
      <Code language="kotlin" lineNumbers={true}
        >{`
      fun main() = application {
        program {
          val points = drawer.bounds.scatter(5.0)
          extend {
            drawer.clear(ColorRGBa.WHITE)
            drawer.stroke = null
            drawer.fill = ColorRGBa.BLACK.opacify(0.2)
            drawer.circles(points, 3.0)
          }
        }
      }
      `}
      </Code>
    </div>

    <div class="h-[480px] max-h-full pt-5">
      <img
        src={scattered}
        alt="Scattered particles"
        class="h-auto w-[480px] border"
        width="1280"
        height="1280"
      />
    </div>
  </div>
</Slide>

<Slide transition="fade">
  <div>ランダムに動かす（ブラウン運動）</div>
  <div class="grid grid-cols-[1.5fr_1fr]">
    <div class="text-2xl">
      <Code language="kotlin" lineNumbers="4,11-15"
        >{`
      fun main() = application {
        program {
          var points = drawer.bounds.scatter(5.0)
          val step = 1.0
          extend {
            drawer.clear(ColorRGBa.WHITE)
            drawer.stroke = null
            drawer.fill = ColorRGBa.BLACK.opacify(0.2)
            drawer.circles(points, 3.0)

            points = points.map {
              val u = Vector2.uniform(-1.0, 1.0)
              val velocity = u.normalized * step
              it + velocity
            }
          }
        }
      }
      `}
      </Code>
    </div>

    <div class="h-[480px] max-h-full pt-5">
      <video
        width="1280"
        height="1280"
        autoplay
        loop
        muted
        playsinline
        class="h-auto w-[480px] border"
      >
        <source type="video/mp4" src={brownianMotion} />
      </video>
    </div>
  </div>
</Slide>

<Slide transition="fade">
  <div class="h-[480px] max-h-full place-content-center">
    <div class="mb-4 text-2xl">真ん中にスポットを配置してシミュレーション（20倍速）</div>
    <video
      width="1280"
      height="1280"
      autoplay
      loop
      muted
      playsinline
      class="mx-auto h-auto w-[480px]"
    >
      <source type="video/mp4" src={dla} />
    </video>
  </div>
</Slide>

<Slide transition="fade">
  <div class="flex place-content-center">
    <img
      src={kotlinFestGrowth}
      alt="Kotlin Fest Growth"
      class="mx-auto max-h-full w-[400px]"
      width="1280"
      height="1280"
    />
  </div>
</Slide>
