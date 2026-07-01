"use client";

import { useEffect, useRef } from "react";

type Thread = {
  y: number;
  speed: number;
  amplitude: number;
  phase: number;
  color: string;
};

export function CommunityField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let frame = 0;
    let animation = 0;

    const threads: Thread[] = [
      { y: 0.18, speed: 0.006, amplitude: 42, phase: 0.2, color: "56,224,204" },
      { y: 0.31, speed: 0.005, amplitude: 58, phase: 1.7, color: "255,207,90" },
      { y: 0.48, speed: 0.004, amplitude: 36, phase: 2.9, color: "255,111,97" },
      { y: 0.67, speed: 0.005, amplitude: 52, phase: 4.1, color: "139,102,255" },
      { y: 0.81, speed: 0.003, amplitude: 30, phase: 5.5, color: "243,245,234" },
    ];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawThread = (thread: Thread, index: number) => {
      context.beginPath();
      for (let x = -30; x <= width + 30; x += 24) {
        const wave =
          Math.sin(x * 0.012 + frame * thread.speed + thread.phase) *
          thread.amplitude;
        const y =
          height * thread.y +
          wave +
          Math.cos(x * 0.006 + index + frame * 0.002) * 18;
        if (x === -30) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.strokeStyle = `rgba(${thread.color}, 0.28)`;
      context.lineWidth = index === 1 ? 2 : 1;
      context.stroke();

      for (let x = 48 + index * 41; x < width; x += 220) {
        const wave =
          Math.sin(x * 0.012 + frame * thread.speed + thread.phase) *
          thread.amplitude;
        const y =
          height * thread.y +
          wave +
          Math.cos(x * 0.006 + index + frame * 0.002) * 18;
        context.fillStyle = `rgba(${thread.color}, 0.72)`;
        context.fillRect(x - 2, y - 2, 4, 4);
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(10, 11, 15, 0.82)";
      context.fillRect(0, 0, width, height);

      for (let x = 0; x < width; x += 72) {
        context.strokeStyle = "rgba(243,245,234,0.035)";
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      threads.forEach(drawThread);

      if (!reduceMotion.matches) frame += 1;
      animation = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-95"
    />
  );
}
