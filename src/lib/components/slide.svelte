<script lang="ts">
  export let id: string | null = null;
  export let backgroundColor: string | null = null;
  export let backgroundIframe: string | null = null;
  export let transition: "none" | "fade" | "fade-in" | "fade-out" | "slide" | "convex" | "concave" | "zoom" | null = null;
  export let animate = false;
  export let restart = false;
</script>

<section
  data-auto-animate-id={id}
  data-background-color={backgroundColor}
  data-background-iframe={backgroundIframe || null}
  data-transition={transition || null}
  data-auto-animate={animate || null}
  data-auto-animate-restart={restart || null}
>
  <slot />
</section>
