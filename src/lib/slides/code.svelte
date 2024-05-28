<script lang="ts">
  export let id: string | null = null;
  export let lineNumbers: string | boolean | null = null
  export let lineStartFrom: number | null = null
  export let noescape = false
</script>

<pre data-id={id || null}>
  <code data-trim data-line-numbers={lineNumbers || null} data-ln-start-from={lineStartFrom} data-noescape={noescape}>
    <slot />
  </code>
</pre>
