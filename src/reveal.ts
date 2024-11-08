import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight';

let reveal: Reveal.Api;

export default function getReveal() {
  if (!reveal) {
    reveal = new Reveal({
      plugins: [Highlight],
      autoAnimateEasing: 'ease',
      autoAnimateDuration: 1,
      hash: true,
      controls: false,
      progress: true
    });

    reveal.initialize({
      width: 960,
      height: 540,
      margin: 0.04,
      minScale: 0.1,
      maxScale: 2.0
    });
  }

  return reveal;
}
