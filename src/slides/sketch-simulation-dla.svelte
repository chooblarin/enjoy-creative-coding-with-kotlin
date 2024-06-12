<script lang="ts">
  import Code from '$lib/components/code.svelte';
  import Slide from '$lib/components/slide.svelte';

  import brownianMotion from '$assets/sketches/simulation/dla/brownian-motion.mp4';
  import dla from '$assets/sketches/simulation/dla/dla.mp4';
  import scattered from '$assets/sketches/simulation/dla/scattered-particles.png';
</script>

<Slide>
  <div>
    <ruby>拡散律速凝集<rp>(</rp><rt>かくさんりっそくぎょうしゅう</rt><rp>)</rp></ruby>（DLA）
  </div>
</Slide>

<Slide>
  <div class="mb-8">コンセプト</div>
  <ol class="text-2xl">
    <li>フィールド上をランダムに動き回るたくさんの粒子がある</li>
    <li>フィールドにはあるスポットがあり、粒子はそこにぶつかると停止する</li>
    <li>停止した粒子にぶつかった粒子も停止</li>
    <li>このようにして、十分に時間が経過するとすべての粒子が停止状態になる</li>
  </ol>
  <div class="mt-8 text-2xl">連結した粒子たちはどのような形になるかをシミュレーション</div>
</Slide>

<Slide transition="fade">
  <div>粒子を描く</div>
  <div class="grid grid-cols-[1.5fr_1fr]">
    <div class="text-2xl">
      <Code language="kotlin"
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
      <Code language="kotlin"
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
