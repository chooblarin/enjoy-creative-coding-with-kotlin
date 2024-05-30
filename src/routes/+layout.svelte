<script>
  import openSansWoff2 from '@fontsource-variable/noto-serif-jp/files/noto-serif-jp-latin-wght-normal.woff2?url';

  import 'reveal.js/dist/reveal.css';
  import 'reveal.js/dist/theme/white.css';

  import '$assets/styles/app.css';
  import '$assets/styles/noto-serif-jp.css';
  import '$assets/styles/reveal-custom.css';

  import '$assets/styles/noto-emoji.css';
</script>

<svelte:head>
  <link rel="preload" as="font" type="font/woff2" href={openSansWoff2} />
</svelte:head>

<slot></slot>

<style></style>
