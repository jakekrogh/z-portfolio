"use client";

import { useEffect, useRef, useState } from "react";

type Body = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  m: number;
  color: string;
};

const COLORS = ["#60a5fa", "#22d3ee", "#a78bfa", "#34d399", "#f472b6", "#f59e0b"];

function randomBody(width: number, height: number): Body {
  const angle = Math.random() * Math.PI * 2;
  const r = Math.min(width, height) * (0.14 + Math.random() * 0.24);
  const cx = width / 2;
  const cy = height / 2;

  return {
    x: cx + Math.cos(angle) * r,
    y: cy + Math.sin(angle) * r,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    m: 6 + Math.random() * 10,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
}

function seedBodies(count: number, width: number, height: number): Body[] {
  const bodies = Array.from({ length: count }, () => randomBody(width, height));
  bodies.push({
    x: width / 2,
    y: height / 2,
    vx: 0,
    vy: 0,
    m: 24,
    color: "#f8fafc",
  });
  return bodies;
}

export default function NBodyLab() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bodiesRef = useRef<Body[]>([]);
  const rafRef = useRef<number | null>(null);

  const [bodyCount, setBodyCount] = useState(14);
  const [running, setRunning] = useState(true);
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const resetBodies = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      bodiesRef.current = seedBodies(bodyCount, width, height);
    };

    resetBodies();

    const G = 32;
    const dt = 0.65;
    const damping = 0.999;

    const step = () => {
      if (!running) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const bodies = bodiesRef.current;

      for (let i = 0; i < bodies.length; i++) {
        let ax = 0;
        let ay = 0;

        for (let j = 0; j < bodies.length; j++) {
          if (i === j) continue;
          const dx = bodies[j].x - bodies[i].x;
          const dy = bodies[j].y - bodies[i].y;
          const distSq = dx * dx + dy * dy + 65;
          const dist = Math.sqrt(distSq);
          const force = (G * bodies[j].m) / distSq;
          ax += (dx / dist) * force;
          ay += (dy / dist) * force;
        }

        bodies[i].vx = (bodies[i].vx + ax * dt) * damping;
        bodies[i].vy = (bodies[i].vy + ay * dt) * damping;
      }

      for (const b of bodies) {
        b.x += b.vx * dt;
        b.y += b.vy * dt;

        if (b.x < 0 || b.x > width) b.vx *= -0.92;
        if (b.y < 0 || b.y > height) b.vy *= -0.92;

        b.x = Math.max(0, Math.min(width, b.x));
        b.y = Math.max(0, Math.min(height, b.y));
      }

      ctx.fillStyle = "rgba(6, 8, 22, 0.25)";
      ctx.fillRect(0, 0, width, height);

      for (const b of bodies) {
        ctx.beginPath();
        ctx.fillStyle = b.color;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 12;
        ctx.arc(b.x, b.y, Math.max(2.5, b.m * 0.35), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [bodyCount, running, seed]);

  return (
    <div className="space-y-4">
      <div className="glass-card p-4">
        <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-zinc-100">
          <label className="flex items-center gap-2">
            Bodies
            <input
              type="range"
              min={6}
              max={28}
              value={bodyCount}
              onChange={(e) => setBodyCount(Number(e.target.value))}
            />
            <span>{bodyCount}</span>
          </label>

          <button
            className="glass-pill px-3 py-1"
            onClick={() => setRunning((v) => !v)}
            type="button"
          >
            {running ? "Pause" : "Resume"}
          </button>

          <button
            className="glass-pill px-3 py-1"
            onClick={() => setSeed((s) => s + 1)}
            type="button"
          >
            Reseed
          </button>
        </div>

        <canvas ref={canvasRef} className="h-[360px] w-full rounded-xl border border-white/15 bg-[#050816]" />
      </div>
    </div>
  );
}
