<script lang="ts">
  import Code from "$lib/components/code.svelte";
  import Slide from "$lib/components/slide.svelte";

  import openrndrLogo from "$assets/images/openrndr.svg";
  import helloOpenrndr from "$assets/videos/hello-openrndr.mp4";
</script>

<Slide backgroundColor="pink" transition="fade-out">
  <img src={openrndrLogo} width="303" height="47" alt="OPENRNDR">
</Slide>

<Slide backgroundColor="pink" backgroundIframe="https://openrndr.org/" transition="fade-in">
</Slide>

<Slide>
  <div class="mb-8">OPENRNDRのはじめ方</div>

  <div class="text-start">
    <ol class="p-4 text-3xl">
      <li>IntelliJ IDEAをインストール</li>
      <li>OPENRNDR IntelliJプラグインをインストール</li>
      <li><code>openrndr/openrndr-template</code> でプロジェクト作成</li>
      <li>実行 🚀</li>
    </ol>
  </div>

  <a href="https://guide.openrndr.org/setUpYourFirstProgram.html" class="text-sm">https://guide.openrndr.org/setUpYourFirstProgram.html</a>
</Slide>

<Slide>
  <Code language="kotlin">{`
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

<Slide>
  <div class="place-content-center h-[480px] max-h-full">
    <video width="1280" height="960" autoplay loop muted playsinline class="w-[480px] h-auto mx-auto">
      <source type="video/mp4" src={helloOpenrndr} />
    </video>
  </div>
</Slide>