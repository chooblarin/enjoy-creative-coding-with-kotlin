<script lang="ts">
  import Code from '$lib/components/code.svelte';
  import Slide from '$lib/components/slide.svelte';

  import openrndrLogo from '$assets/images/openrndr.svg';
  import helloOpenrndr from '$assets/videos/hello-openrndr.mp4';
</script>

<Slide backgroundColor="pink" transition="fade-out">
  <a href="https://openrndr.org/" target="_blank" rel="noopener noreferrer">
    <img src={openrndrLogo} width="303" height="47" alt="OPENRNDR" />
  </a>
</Slide>

<Slide>
  <div class="mb-8">OPENRNDRのはじめ方</div>

  <div class="text-start">
    <ol class="p-4 text-3xl">
      <li class="mb-2">IntelliJ IDEAをインストール</li>
      <li class="mb-2">OPENRNDR IntelliJプラグインをインストール</li>
      <li class="mb-2"><code>openrndr/openrndr-template</code> でプロジェクト作成</li>
      <li class="mb-2">実行 🚀</li>
    </ol>
  </div>

  <a href="https://guide.openrndr.org/setUpYourFirstProgram.html" class="text-sm"
    >https://guide.openrndr.org/setUpYourFirstProgram.html</a
  >
</Slide>

<Slide transition="fade">
  <Code language="kotlin"
    >{`
  fun main() = application {
    program {
      extend {
        drawer.clear(ColorRGBa.PINK)
        drawer.fill = ColorRGBa.WHITE

        val center = drawer.bounds.center
        val radius = abs(cos(seconds)) * height * 0.51
        drawer.circle(center, radius)
      }
    }
  }`}
  </Code>
</Slide>

<Slide transition="fade">
  <div class="grid grid-cols-[1fr_1.5fr]">
    <div class="h-[480px] max-h-full pt-5">
      <video
        width="1280"
        height="960"
        autoplay
        loop
        muted
        playsinline
        class="mx-auto h-auto w-[480px]"
      >
        <source type="video/mp4" src={helloOpenrndr} />
      </video>
    </div>

    <div class="text-2xl">
      <Code language="kotlin" lineNumbers="4-9"
        >{`
  fun main() = application {
    program {
      extend {
        drawer.clear(ColorRGBa.PINK)
        drawer.fill = ColorRGBa.WHITE

        val center = drawer.bounds.center
        val radius = abs(cos(seconds)) * height * 0.51
        drawer.circle(center, radius)
      }
    }
  }`}
      </Code>
    </div>
  </div>
</Slide>

<Slide>
  <Code language="kotlin"
    >{`
  fun main() = application {
    configure {
      // -- アプリケーションの設定を記述
    }

    program {
      // -- ここは一度だけ実行される
      extend {
        // -- ここは繰り返し実行される
      }
    }
  }
  `}
  </Code>
</Slide>

<Slide>
  <div class="mb-4 text-5xl">ORX (OPENRNDR Extras)</div>
  <div class="mb-8 text-3xl">
    <a href="https://github.com/openrndr/orx"><code>https://github.com/openrndr/orx</code></a>
  </div>
  <div class="text-2xl">OPENRNDRをさらに豊かにする拡張ライブラリ群</div>
</Slide>

<!--
<Slide>
  <ul class="text-2xl">
    <li><code>orx-color</code></li>
    <li><code>orx-compositor</code></li>
    <li><code>orx-gui</code></li>
    <li><code>orx-noise</code></li>
    <li><code>orx-fft</code></li>
    <li><code>orx-fx</code></li>
    <li><code>orx-svg</code></li>
    <li><code>orx-midi</code></li>
    <li><code>orx-olive</code></li>
    <li><code>orx-video-profiles</code></li>
    etc...
  </ul>
</Slide>
 -->
