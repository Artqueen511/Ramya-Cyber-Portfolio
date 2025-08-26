"use client";
import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cols = Math.floor(canvas.width / 14);
    const yPos = Array(cols).fill(0);
    const chars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ0123456789";
    const draw = () => {
      ctx.fillStyle = "rgba(10, 15, 30, 0.2)";
      ctx.fillRect(0,0,canvas.width, canvas.height);
      ctx.fillStyle = "#00f0ff";
      ctx.font = "14px monospace";
      for (let i = 0; i < yPos.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i*14, yPos[i]*14);
        if (yPos[i]*14 > canvas.height && Math.random() > 0.975) {
          yPos[i] = 0;
        } else {
          yPos[i]++;
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-30" aria-hidden="true" />;
}