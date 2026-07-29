"use client";

import { useEffect, useRef, useState } from "react";

interface LoopVideoProps {
  frameCount: number;
  framePrefix: string;
  className?: string;
  fps?: number;
  pingPong?: boolean;
  loopStart?: number;
  loopEnd?: number;
}

export function LoopVideo({ 
  frameCount, 
  framePrefix, 
  className, 
  fps = 30, 
  pingPong = false,
  loopStart,
  loopEnd
}: LoopVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const animationRef = useRef<number | null>(null);
  const currentFrameRef = useRef(0);
  const lastDrawTimeRef = useRef(0);
  const directionRef = useRef(1);

  // Preload all frames into RAM
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(4, "0");
      img.src = `${framePrefix}${frameNumber}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount >= frameCount * 0.8) {
          setImagesLoaded(true);
        }
      };
      imgs.push(img);
    }
    
    imagesRef.current = imgs;

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [frameCount, framePrefix]);

  // Animation Loop
  useEffect(() => {
    if (!imagesLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const firstValidImg = imagesRef.current.find(img => img && img.complete && img.naturalWidth > 0);
    if (!firstValidImg) return;
    
    canvas.width = firstValidImg.naturalWidth || 1280;
    canvas.height = firstValidImg.naturalHeight || 720;
    
    const draw = (timestamp: number) => {
      if (!lastDrawTimeRef.current) {
        lastDrawTimeRef.current = timestamp;
      }
      
      const elapsed = timestamp - lastDrawTimeRef.current;
      const frameInterval = 1000 / fps;

      if (elapsed > frameInterval) {
        lastDrawTimeRef.current = timestamp - (elapsed % frameInterval);
        
        if (pingPong) {
          if (directionRef.current === 1) {
            currentFrameRef.current++;
            if (currentFrameRef.current >= frameCount - 1) {
              directionRef.current = -1;
            }
          } else {
            currentFrameRef.current--;
            if (currentFrameRef.current <= 0) {
              directionRef.current = 1;
            }
          }
          
          const img = imagesRef.current[currentFrameRef.current];
          if (img && img.complete && img.naturalWidth > 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          }
        } else {
          const actualLoopEnd = loopEnd || frameCount;
          const actualLoopStart = loopStart !== undefined ? loopStart : Math.floor(frameCount / 2);
          const crossfade = 15; // 15 frames for seamless transition
          
          currentFrameRef.current = currentFrameRef.current + 1;
          
          let drawCrossfade = false;
          let crossfadeAlpha = 0;
          let crossfadeFrame = 0;

          if (currentFrameRef.current >= actualLoopEnd - crossfade) {
            drawCrossfade = true;
            const progress = (currentFrameRef.current - (actualLoopEnd - crossfade)) / crossfade;
            crossfadeAlpha = Math.min(progress, 1);
            crossfadeFrame = actualLoopStart + (currentFrameRef.current - (actualLoopEnd - crossfade));
          }

          if (currentFrameRef.current >= actualLoopEnd) {
            currentFrameRef.current = actualLoopStart + crossfade;
            drawCrossfade = false;
          }

          const img = imagesRef.current[currentFrameRef.current];
          if (img && img.complete && img.naturalWidth > 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          }

          if (drawCrossfade) {
            const overImg = imagesRef.current[crossfadeFrame];
            if (overImg && overImg.complete && overImg.naturalWidth > 0) {
              ctx.globalAlpha = crossfadeAlpha;
              ctx.drawImage(overImg, 0, 0, canvas.width, canvas.height);
              ctx.globalAlpha = 1.0;
            }
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [imagesLoaded, frameCount, fps, pingPong]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
    />
  );
}
