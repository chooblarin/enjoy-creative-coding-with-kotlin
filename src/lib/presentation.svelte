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
  function hello() {
    console.log('Hello, World!');
  }
  `}</Code>
</Slide>
