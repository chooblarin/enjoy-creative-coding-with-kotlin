<script lang="ts">
  import Code from '$lib/components/code.svelte';
  import Slide from '$lib/components/slide.svelte';

  import Cover from './slides/cover.svelte';
  import KotlinXCreativeCoding from './slides/kotlin-x-creative-coding.svelte';
  import RiveDemo from './slides/rive-demo.svelte';
  import TeachCodingToStudents from './slides/teach-coding-to-students.svelte';
  import WhatIsCreativeCoding from './slides/what-is-creative-coding.svelte';
  import WhatIsOpenrndr from './slides/what-is-openrndr.svelte';
  import WhatIsProcessing from './slides/what-is-processing.svelte';
</script>

<Cover />

<TeachCodingToStudents />

<WhatIsProcessing />

<WhatIsCreativeCoding />

<KotlinXCreativeCoding />

<WhatIsOpenrndr />

<Slide>
  <Code language="kotlin" lineNumbers={true}>{`
  fun main() = application {
    // Configure the window
    configure {
      width = 800
      height = 800
    }
    program {
      val cellSize = 100.0
      val cells = drawer.bounds.grid(cellSize, cellSize)

      extend {
        drawer.stroke = ColorRGBa.BLACK
      }
    }
  }
  `}</Code>
</Slide>

<RiveDemo />
