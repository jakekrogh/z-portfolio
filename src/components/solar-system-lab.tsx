"use client";

import { useEffect, useRef, useState } from "react";

type Planet = {
  name: string;
  color: string;
  radius: number;
  orbit: number;
  speed: number;
  angle: number;
};

const BASE_PLANETS: Planet[] = [
  { name: "Mercury", color: "#cbd5e1", radius: 3, orbit: 48, speed: 0.02, angle: Math.random() * Math.PI * 2 },
  { name: "Venus", color: "#fde68a", radius: 4.5, orbit: 70, speed: 0.016, angle: Math.random() * Math.PI * 2 },
  { name: "Earth", color: "#60a5fa", radius: 5, orbit: 96, speed: 0.012, angle: Math.random() * Math.PI * 2 },
  { name: "Mars", color: "#fb7185", radius: 4, orbit: 122, speed: 0.01, angle: Math.random() * Math.PI * 2 },
  { name: "Jupiter", color: "#f59e0b", radius: 9, orbit: 162, speed: 0.006, angle: Math.random() * Math.PI * 2 },
  { name: "Saturn", color: "#fef08a", radius: 8, orbit: 202, speed: 0.004, angle: Math.random() * Math.PI * 2 },
];

export default function SolarSystemLab() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const planetsRef = useRef<Planet[]>(BASE_PLANETS.map((p) => ({ ...p })));
  const rafRef = useRef<number | null>(null);

  const [speedScale, setSpeedScale] = useState(1);
  const [showOrbits, setShowOrbits] = useState(true);
  const [running, setRunning] = useState(true);

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

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const cx = w / 2;
      const cy = h / 2;

      ctx.fillStyle = "rgba(5, 8, 22, 0.34)";
      ctx.fillRect(0, 0, w, h);

      // stars
      for (let i = 0; i < 30; i++) {
        const x = ((i * 97) % w) + (i % 3);
        const y = ((i * 53) % h) + (i % 5);
        ctx.fillStyle = "rgba(255,255,255,0.18)";
        ctx.fillRect(x, y, 1.2, 1.2);
      }

      if (showOrbits) {
        ctx.strokeStyle = "rgba(255,255,255,0.14)";
        for (const p of planetsRef.current) {
          ctx.beginPath();
          ctx.arc(cx, cy, p.orbit, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // sun
      const sunGrad = ctx.createRadialGradient(cx, cy, 4, cx, cy, 26);
      sunGrad.addColorStop(0, "#fff7cc");
      sunGrad.addColorStop(1, "#f59e0b");
      ctx.fillStyle = sunGrad;
      ctx.shadowColor = "#f59e0b";
      ctx.shadowBlur = 26;
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      for (const p of planetsRef.current) {
        if (running) p.angle += p.speed * speedScale;
        const x = cx + Math.cos(p.angle) * p.orbit;
        const y = cy + Math.sin(p.angle) * p.orbit;

        if (p.name === "Saturn") {
          ctx.strokeStyle = "rgba(255,255,200,0.35)";
          ctx.beginPath();
          ctx.ellipse(x, y, p.radius + 5, p.radius + 1.8, 0.35, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [running, showOrbits, speedScale]);

  return (
    <div className="space-y-4">
      <div className="glass-card p-4">
        <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-zinc-100">
          <label className="flex items-center gap-2">
            Orbit speed
            <input
              type="range"
              min={0.3}
              max={3}
              step={0.1}
              value={speedScale}
              onChange={(e) => setSpeedScale(Number(e.target.value))}
            />
            <span>{speedScale.toFixed(1)}x</span>
          </label>

          <button type="button" className="glass-pill px-3 py-1" onClick={() => setRunning((v) => !v)}>
            {running ? "Pause" : "Resume"}
          </button>

          <button type="button" className="glass-pill px-3 py-1" onClick={() => setShowOrbits((v) => !v)}>
            {showOrbits ? "Hide orbits" : "Show orbits"}
          </button>
        </div>

        <canvas ref={canvasRef} className="h-[420px] w-full rounded-xl border border-white/15 bg-[#050816]" />
      </div>
    </div>
  );
}
