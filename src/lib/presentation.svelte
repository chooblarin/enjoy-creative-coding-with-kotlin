<script lang="ts">
	import Code from "./slides/code.svelte";
	import Slide from "./slides/slide.svelte";
</script>

<Slide>
  Hello
</Slide>

<Slide>
  World

  <Code>{`
  fun main() = application {
    configure {
      width = 800
      height = 800
    }
    program {}
  }
  `}</Code>
</Slide>
