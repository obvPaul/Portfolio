import { useEffect, useRef } from 'react';

const SPACING = 28;
const RADIUS   = 0.9;

export default function DotGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');

    let W, H, cols, rows;
    let raf;
    let mx = 0.5, my = 0.5; // current lerped mouse (normalised 0–1)
    let tmx = 0.5, tmy = 0.5;
    let t = 0;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      cols = Math.ceil(W / SPACING) + 2;
      rows = Math.ceil(H / SPACING) + 2;
    };

    const onMove = (e) => {
      tmx = e.clientX / window.innerWidth;
      tmy = e.clientY / window.innerHeight;
    };

    const tick = () => {
      // Smooth-lerp mouse
      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#ffffff';

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const px = c * SPACING;
          const py = r * SPACING;

          // Three traveling waves in different directions → interference pattern
          const w1 = Math.sin(c * 0.32 + r * 0.20 + t * 0.55);
          const w2 = Math.sin(c * 0.20 - r * 0.32 + t * 0.44);
          const w3 = Math.sin((c + r) * 0.18   - t * 0.35);
          const wave = (w1 + w2 + w3) / 3; // –1 … 1

          // Gaussian glow around the mouse cursor
          const dx = px / W - mx;
          const dy = py / H - my;
          const glow = Math.exp(-(dx * dx + dy * dy) * 14) * 0.09;

          // base opacity + wave crest boost + mouse glow
          const alpha = 0.032 + Math.max(0, wave) * 0.062 + glow;

          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(px, py, RADIUS, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      t += 0.007;
      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}
    />
  );
}
