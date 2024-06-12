<script lang="ts">
  import Code from '$lib/components/code.svelte';
  import Slide from '$lib/components/slide.svelte';

  import monoColor from '$assets/sketches/noise/mono-color.png';
  import fbmTemporal from '$assets/sketches/noise/noise-fbm-temporal.mp4';
  import perlin from '$assets/sketches/noise/noise-perlin.png';
  import uniform from '$assets/sketches/noise/noise-uniform.png';

  import cbBillow from '$assets/sketches/noise/cb/billow-temporal-cb.mp4';
  import cbFbm from '$assets/sketches/noise/cb/fbm-temporal-cb.mp4';
  import cbRigid from '$assets/sketches/noise/cb/rigid-temporal-cb.mp4';
  import cbSimplex from '$assets/sketches/noise/cb/simplex-temporal-cb.mp4';
</script>

<Slide>
  <div class="mb-8 text-8xl">Noise</div>
  <div>ノイズ</div>
</Slide>

<!-- Tidy grid -->
<Slide transition="fade">
  <div>二次元格子を描いて…</div>
  <div class="grid grid-cols-[1.5fr_1fr]">
    <div class="text-2xl">
      <Code language="kotlin"
        >{`
      fun main() = application {
        program {
          val cells = drawer.bounds.grid(
            cellWidth = 20.0,
            cellHeight = 20.0
          )
          extend {
            drawer.rectangles(cells.flatten())
          }
        }
      }
      `}
      </Code>
    </div>

    <div class="h-[480px] max-h-full pt-5">
      <img src={monoColor} alt="Mono color" class="h-auto w-[480px]" />
    </div>
  </div>
</Slide>

<!-- Uniform -->
<Slide transition="fade">
  <div>一様乱数</div>
  <div class="grid grid-cols-[1.5fr_1fr]">
    <div class="text-2xl">
      <Code language="kotlin"
        >{`
      fun main() = application {
        program {
          val cells = drawer.bounds.grid(
            cellWidth = 20.0,
            cellHeight = 20.0
          )
          extend {
            Random.resetState()
            drawer.rectangles {
              cells.flatten().forEach {
                val hue = Double.uniform(0.0, 360.0, Random.rnd)
                drawer.fill = hsl(hue, 0.8, 0.6).toRGBa()
                drawer.rectangle(it)
              }
            }
          }
        }
      }
      `}
      </Code>
    </div>

    <div class="h-[480px] max-h-full pt-5">
      <img src={uniform} alt="Uniform noise" class="h-auto w-[480px]" />
    </div>
  </div>
</Slide>

<!-- Perlin -->
<Slide transition="fade">
  <div>パーリンノイズ</div>
  <div class="grid grid-cols-[1.5fr_1fr]">
    <div class="text-2xl">
      <Code language="kotlin"
        >{`
      fun main() = application {
        program {
          val cells = drawer.bounds.grid(
            cellWidth = 20.0,
            cellHeight = 20.0
          )
          extend {
            drawer.rectangles {
              cells.flatten().forEach {
                val p = it.center * 0.01
                val n = perlin(42, p) * 0.5 + 0.5
                val hue = 360.0 * n
                println(hue)
                drawer.fill = hsl(hue, 0.8, 0.6).toRGBa()
                drawer.rectangle(it)
              }
            }
          }
        }
      }
      `}
      </Code>
    </div>

    <div class="h-[480px] max-h-full pt-5">
      <img src={perlin} alt="Uniform noise" class="h-auto w-[480px]" />
    </div>
  </div>
</Slide>

<!-- Perlin (Temporal) -->
<Slide transition="fade">
  <div>パーリンノイズ（時間発展）</div>
  <div class="grid grid-cols-[1.5fr_1fr]">
    <div class="text-2xl">
      <Code language="kotlin"
        >{`
      fun main() = application {
        program {
          val cells = drawer.bounds.grid(
            cellWidth = 20.0,
            cellHeight = 20.0
          )
          extend {
            drawer.rectangles {
              cells.flatten().forEach {
                val p = it.center * 0.01
                val time = seconds * 0.8
                val n = perlin(42, p.x, p.y, time) * 0.5 + 0.5
                val hue = 360.0 * n
                drawer.fill = hsl(hue, 0.8, 0.6).toRGBa()
                drawer.rectangle(it)
              }
            }
          }
        }
      }
      `}
      </Code>
    </div>

    <div class="h-[480px] max-h-full pt-5">
      <video width="1280" height="960" autoplay loop muted playsinline class="h-auto w-[480px]">
        <source type="video/mp4" src={fbmTemporal} />
      </video>
    </div>
  </div>
</Slide>

<!-- Simplex (Temporal) -->
<!--
<Slide transition="fade">
  <div>シンプレックスノイズ（時間発展）</div>
  <div class="grid grid-cols-[1.5fr_1fr]">
    <div class="text-2xl">
      <Code language="kotlin">{`
      fun main() = application {
        program {
          val cells = drawer.bounds.grid(
            cellWidth = 20.0,
            cellHeight = 20.0
          )
          extend {
            drawer.rectangles {
              cells.flatten().forEach {
                val p = it.center * 0.01
                val time = seconds * 0.8
                val n = simplex(42, p.x, p.y, time) * 0.5 + 0.5
                val hue = 360.0 * n
                drawer.fill = hsl(hue, 0.8, 0.6).toRGBa()
                drawer.rectangle(it)
              }
            }
          }
        }
      }
      `}
      </Code>
    </div>

    <div class="h-[480px] max-h-full pt-5">
      <video width="1280" height="960" autoplay loop muted playsinline class="w-[480px] h-auto">
        <source type="video/mp4" src={simplexTemporal} />
      </video>
    </div>
  </div>
</Slide>
-->

<!-- Fbm (Temporal) -->
<!--
<Slide transition="fade">
  <div>FBM（時間発展）</div>
  <div class="grid grid-cols-[1.5fr_1fr]">
    <div class="text-2xl">
      <Code language="kotlin">{`
      fun main() = application {
        program {
          val cells = drawer.bounds.grid(
            cellWidth = 20.0,
            cellHeight = 20.0
          )
          extend {
            drawer.rectangles {
              cells.flatten().forEach {
                val p = it.center * 0.01
                val time = seconds * 0.8
                val v = fbm(42, p.x, p.y, time, ::perlinLinear, 8, 0.7, 1.0)
                val hue = 360.0 * (v * 0.5 + 0.5)
                drawer.fill = hsl(hue, 0.8, 0.6).toRGBa()
                drawer.rectangle(it)
              }
            }
          }
        }
      }
      `}
      </Code>
    </div>

    <div class="h-[480px] max-h-full pt-5">
      <video width="1280" height="960" autoplay loop muted playsinline class="w-[480px] h-auto">
        <source type="video/mp4" src={fbmTemporal} />
      </video>
    </div>
  </div>
</Slide>
-->

<Slide transition="fade">
  <div class="grid max-h-full grid-cols-4 text-3xl">
    <div>
      <div class="mb-4"><code>simplex()</code></div>
      <video width="1280" height="960" autoplay loop muted playsinline class="h-auto">
        <source type="video/mp4" src={cbSimplex} />
      </video>
    </div>

    <div>
      <div class="mb-4"><code>fbm()</code></div>
      <video width="1280" height="960" autoplay loop muted playsinline class="h-auto">
        <source type="video/mp4" src={cbFbm} />
      </video>
    </div>

    <div>
      <div class="mb-4"><code>rigid()</code></div>
      <video width="1280" height="960" autoplay loop muted playsinline class="h-auto">
        <source type="video/mp4" src={cbRigid} />
      </video>
    </div>

    <div>
      <div class="mb-4"><code>billow()</code></div>
      <video width="1280" height="960" autoplay loop muted playsinline class="h-auto">
        <source type="video/mp4" src={cbBillow} />
      </video>
    </div>
  </div>
</Slide>
