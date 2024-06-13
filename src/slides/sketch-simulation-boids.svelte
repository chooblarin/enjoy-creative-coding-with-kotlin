<script lang="ts">
  import Slide from '$lib/components/slide.svelte';

  import boidsModel from '$assets/images/boids-model.png';
  import boidsSimulationQt from '$assets/sketches/simulation/boids/boids-simulation-qt.mp4';
  import boidsSimulation from '$assets/sketches/simulation/boids/boids-simulation.mp4';
</script>

<Slide>
  <div>Boids</div>
</Slide>

<Slide>
  <div class="mb-8">鳥の群れをモデル化する</div>
  <img src={boidsModel} alt="Boids Model" width="2400" height="1120" class="m-auto" />
</Slide>

<Slide transition="fade">
  <div class="h-[480px] max-h-full place-content-center">
    <div class="mb-4 text-2xl">Boidsのシミュレーション</div>
    <video width="1920" height="1280" autoplay loop muted playsinline class="mx-auto">
      <source type="video/mp4" src={boidsSimulation} />
    </video>
  </div>
</Slide>

<Slide transition="fade">
  <div class="mb-4 text-2xl">
    <code>orx-quadtree</code>🌲
  </div>
  <div class="h-[480px] max-h-full place-content-center">
    <video width="1920" height="1280" autoplay loop muted playsinline class="mx-auto">
      <source type="video/mp4" src={boidsSimulationQt} />
    </video>
  </div>
</Slide>
