<script lang="ts">
	import Code from "$lib/components/code.svelte";
	import Slide from "$lib/components/slide.svelte";

  import Cover from "./slides/cover.svelte";
</script>

<Cover />

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
