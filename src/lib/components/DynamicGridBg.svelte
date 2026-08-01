<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '$lib/theme.svelte';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const gridSize = 40;
    let time = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Grid dots/nodes
    interface Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speed: number;
      char: string;
      color: string;
    }

    const chars = '01{}[]</>#;$=+*';
    const particles: Particle[] = [];
    const numCols = Math.ceil(width / gridSize) + 2;
    const numRows = Math.ceil(height / gridSize) + 2;

    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        const x = c * gridSize;
        const y = r * gridSize;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 1.5 + 1,
          speed: Math.random() * 0.02 + 0.005,
          char: chars[Math.floor(Math.random() * chars.length)],
          color: Math.random() > 0.8 ? '#3b82f6' : '#10b981'
        });
      }
    }

    const render = () => {
      time += 0.015;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const gridLineColor = isDark ? 'rgba(255, 255, 255, 0.025)' : 'rgba(0, 0, 0, 0.025)';
      const accentColor = isDark ? 'rgba(59, 130, 246, ' : 'rgba(37, 99, 235, ';
      const nodeColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';

      // Draw Grid Lines
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = gridLineColor;

      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Draw Nodes & Interactive Mouse Reactivity
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Distance to mouse
        const dx = mouseX - p.baseX;
        const dy = mouseY - p.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        // Wave effect
        const wave = Math.sin(time + p.baseX * 0.01 + p.baseY * 0.01) * 3;
        p.x = p.baseX;
        p.y = p.baseY + wave;

        if (dist < maxDist) {
          const factor = (1 - dist / maxDist);
          
          // Draw dynamic connection line to mouse
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `${accentColor}${factor * 0.15})`;
          ctx.lineWidth = factor * 1.2;
          ctx.stroke();

          // Draw Matrix Glowing Character near mouse
          ctx.font = `${10 + factor * 4}px monospace`;
          ctx.fillStyle = isDark ? `rgba(52, 211, 153, ${factor * 0.45})` : `rgba(16, 185, 129, ${factor * 0.45})`;
          ctx.fillText(p.char, p.x - 4, p.y + 4);
        } else {
          // Draw subtle grid intersection dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = nodeColor;
          ctx.fill();
        }
      }

      // Draw subtle mouse cursor glow aura
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 200);
      if (isDark) {
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.04)');
        gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.015)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.03)');
        gradient.addColorStop(0.5, 'rgba(147, 197, 253, 0.01)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="fixed inset-0 pointer-events-none z-0 opacity-50 filter blur-[0.5px] transition-opacity duration-500"
></canvas>

