<script lang="ts">
  import Slide from '$lib/components/slide.svelte';

  import explain1 from '$assets/images/explain-physarum/physarum model 1.png';
  import explain2 from '$assets/images/explain-physarum/physarum model 2.png';
  import explain3 from '$assets/images/explain-physarum/physarum model 3.png';
  import explain5 from '$assets/images/explain-physarum/physarum model 5.png';
  import sensor1 from '$assets/images/explain-physarum/sensor 1.png';
  import sensor2 from '$assets/images/explain-physarum/sensor 2.png';

  import sensorBehavior3 from '$assets/images/explain-physarum/behavior/physarum-sensor-left.png';
  import sensorBehavior1 from '$assets/images/explain-physarum/behavior/physarum-sensor-no-change.png';
  import sensorBehavior2 from '$assets/images/explain-physarum/behavior/physarum-sensor-random.png';
  import sensorBehavior4 from '$assets/images/explain-physarum/behavior/physarum-sensor-right.png';

  import physarumSimulation from '$assets/sketches/simulation/physarum/physarum-simulation.mp4';
</script>

<Slide>
  <div>Physarum</div>
</Slide>

<Slide transition="fade">
  <div class="h-[480px] max-h-full place-content-center">
    <div class="mb-4 text-2xl">Physarumのシミュレーション</div>
    <video width="1920" height="1280" autoplay loop muted playsinline class="mx-auto">
      <source type="video/mp4" src={physarumSimulation} />
    </video>
  </div>
</Slide>

<Slide transition="fade">
  <div class="grid grid-cols-[1fr_1.5fr] px-8">
    <img src={explain1} alt="" width="640" height="640" class="border" />
    <div class="text-2xl">
      <ul>
        <li>粒子は「位置」と「向き」を持っている</li>
      </ul>
    </div>
  </div>
</Slide>

<Slide transition="fade">
  <div class="grid grid-cols-[1fr_1.5fr] px-8">
    <img src={explain2} alt="" width="640" height="640" class="border" />
    <div class="text-2xl">
      <ul>
        <li>粒子は「位置」と「向き」を持っている</li>
        <li>正面には3つの「<span class="text-purple-700">センサー</span>」がある</li>
      </ul>
    </div>
  </div>
</Slide>

<Slide transition="fade">
  <div class="grid grid-cols-[1fr_1.5fr] px-8">
    <img src={explain3} alt="" width="640" height="640" class="border" />
    <div class="text-2xl">
      <ul>
        <li>粒子は「位置」と「向き」を持っている</li>
        <li>正面には3つの「<span class="text-purple-700">センサー</span>」がある</li>
        <li>センサー距離、</li>
      </ul>
    </div>
  </div>
</Slide>

<Slide transition="fade">
  <div class="grid grid-cols-[1fr_1.5fr] px-8">
    <img src={explain5} alt="" width="640" height="640" class="border" />
    <div class="text-2xl">
      <ul>
        <li>粒子は「位置」と「向き」を持っている</li>
        <li>正面には3つの「<span class="text-purple-700">センサー</span>」がある</li>
        <li>センサー距離、センサー角はパラメータ</li>
      </ul>
    </div>
  </div>
</Slide>

<Slide transition="fade">
  <div class="mb-4 text-4xl">センサーはフィールドを検知</div>
  <div>
    <img src={sensor1} alt="" width="1432" height="716" class="h-[320px] object-contain" />
  </div>
</Slide>

<Slide transition="fade">
  <div class="mb-4 text-4xl">センサーはフィールドを検知</div>
  <div>
    <img src={sensor2} alt="" width="1432" height="716" class="h-[320px] object-contain" />
  </div>
</Slide>

<Slide transition="fade">
  <div class="grid grid-cols-[320px_1fr] px-8">
    <div class="flex place-content-center">
      <img src={sensorBehavior1} alt="" width="200" height="200" />
    </div>
    <div class="text-left text-3xl">
      <div>「前 &gt; 左」 且つ 「前 &gt; 右」の場合</div>
      <div class="mt-4 pl-8 font-bold">→ 方向を変えない</div>
    </div>
  </div>
</Slide>

<Slide transition="fade">
  <div class="grid grid-cols-[320px_1fr] px-8">
    <div class="flex place-content-center">
      <img src={sensorBehavior2} alt="" width="200" height="200" />
    </div>
    <div class="text-left text-3xl">
      <div>「前 &lt; 左」 且つ 「前 &lt; 右」の場合</div>
      <div class="mt-4 pl-8 font-bold">→ 右か左をランダムに向く</div>
    </div>
  </div>
</Slide>

<Slide transition="fade">
  <div class="grid grid-cols-[320px_1fr] px-8">
    <div class="flex place-content-center">
      <img src={sensorBehavior3} alt="" width="200" height="200" />
    </div>
    <div class="text-left text-3xl">
      <div>「左 &gt; 前 &gt; 右」の場合</div>
      <div class="mt-4 pl-8 font-bold">→ 左を向く</div>
    </div>
  </div>
</Slide>

<Slide transition="fade">
  <div class="grid grid-cols-[320px_1fr] px-8">
    <div class="flex place-content-center">
      <img src={sensorBehavior4} alt="" width="200" height="200" />
    </div>
    <div class="text-left text-3xl">
      <div>「左 &lt; 前 &lt; 右」の場合</div>
      <div class="mt-4 pl-8 font-bold">→ 右を向く</div>
    </div>
  </div>
</Slide>

<Slide transition="fade">
  <div class="grid grid-cols-[320px_1fr] px-8">
    <div class="flex place-content-center">
      <img src={sensorBehavior4} alt="" width="200" height="200" />
    </div>
    <div class="text-left text-3xl">
      <div>「左 &lt; 前 &lt; 右」の場合</div>
      <div class="mt-4 pl-8 font-bold">→ 右を向く</div>
    </div>
  </div>
</Slide>

<Slide transition="fade">デモ</Slide>
