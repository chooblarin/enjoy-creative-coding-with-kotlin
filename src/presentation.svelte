<script lang="ts">
  import Code from '$lib/components/code.svelte';
  import Slide from '$lib/components/slide.svelte';

  import Cover from './slides/cover.svelte';
</script>

<Cover />

<Slide>Hello</Slide>

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
