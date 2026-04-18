import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import { Play, Pause, ChevronDown, Clock, Activity, Zap } from 'lucide-react';

/**
 * CONFIGURATION OPTIONS
 */
const CONFIG = {
  scrollDistance: 3500, // Pixels to complete video
  smoothness: 0.1,      // Lerp factor for scroll (0-1)
  enableSnap: true,     // Snap to start/end
  preloadVideo: true,
  mobileBreakpoint: 768,
  videoUrl: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FCyxsNSpMu1anUS4UmoThcBAEH0a2%2FFINALVIDEOHOMEstep1__92b5459e.mp4?alt=media&token=8471ae9b-304a-451c-adf6-74b7751ba7d1'
};

gsap.registerPlugin(ScrollTrigger);

export const ScrollVideoHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const [progress, setProgress] = useState(0);
  const [timecode, setTimecode] = useState('00:00 / 00:00');
  const [isLoading, setIsLoading] = useState(true);
  const [isLowPower, setIsLowPower] = useState(false);

  useGSAP(() => {
    if (!containerRef.current || !videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d', { alpha: false });
    
    // Smooth Scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Canvas sizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      renderFrame();
    };

    const renderFrame = () => {
      if (context && video) {
        const videoRatio = video.videoWidth / video.videoHeight;
        const canvasRatio = canvas.width / canvas.height;
        
        let drawWidth, drawHeight, offsetX, offsetY;

        if (videoRatio > canvasRatio) {
          drawHeight = canvas.height;
          drawWidth = canvas.height * videoRatio;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = canvas.width;
          drawHeight = canvas.width / videoRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        }

        context.drawImage(video, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    video.addEventListener('loadedmetadata', () => {
      resizeCanvas();
      setIsLoading(false);
      updateTimecode(0);
    });

    window.addEventListener('resize', resizeCanvas);

    // Scrubbing Logic
    const scrollObj = { currentProgress: 0 };
    
    const tl = gsap.to(scrollObj, {
      currentProgress: 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${CONFIG.scrollDistance}`,
        scrub: 1, // Add slight delay to the scrub for "buttery" feel
        pin: true,
        snap: CONFIG.enableSnap ? {
          snapTo: [0, 1],
          duration: 0.5,
          delay: 0.2,
          ease: "power2.inOut"
        } : undefined,
        onUpdate: (self) => {
          const p = self.progress;
          setProgress(p);
          
          if (video.duration) {
            // Using frame accuracy technique
            const targetTime = p * video.duration;
            video.currentTime = targetTime;
            updateTimecode(targetTime);
          }
        }
      }
    });

    // Parallax text effect
    gsap.fromTo(textRef.current, 
      { y: 50, opacity: 0 },
      { 
        y: -50, 
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }
    );

    // High performance render loop
    const updateCanvas = () => {
      renderFrame();
      requestAnimationFrame(updateCanvas);
    };
    const animId = requestAnimationFrame(updateCanvas);

    return () => {
      lenis.destroy();
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animId);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  const updateTimecode = (current: number) => {
    if (!videoRef.current) return;
    const format = (s: number) => {
      const mins = Math.floor(s / 60);
      const secs = Math.floor(s % 60);
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    setTimecode(`${format(current)} / ${format(videoRef.current.duration || 0)}`);
  };

  // Accessibility: Handle keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        window.scrollBy({ top: 100, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        window.scrollBy({ top: -100, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-black overflow-hidden select-none">
      {/* Hidden Video Source */}
      <video
        ref={videoRef}
        src={CONFIG.videoUrl}
        className="hidden"
        preload="auto"
        muted
        playsInline
        webkit-playsinline="true"
      />

      {/* Rendering Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-screen block object-cover will-change-transform"
      />

      {/* Parallax Content Overlay */}
      <div 
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-20 px-4"
      >
        <div className="space-y-4">
          <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tighter drop-shadow-2xl">
            CUBIC <span className="text-accent italic">EVOLUTION</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/60 font-sans tracking-widest uppercase">
            Architectural Mastery in Motion
          </p>
        </div>
      </div>

      {/* UI Elements */}
      <div className="absolute bottom-10 left-0 w-full z-30 px-6 md:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex flex-col space-y-6">
          
          {/* Progress Bar Container */}
          <div className="flex items-center space-x-4">
            <div className="flex-1 h-[2px] bg-white/10 overflow-hidden relative backdrop-blur-sm">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent"
                style={{ width: `${progress * 100}%` }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              />
            </div>
            <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest flex items-center space-x-2">
               <Clock size={10} className="mr-1" />
               {timecode}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-between items-end">
            <div className="flex space-x-8 text-white/30 text-[10px] uppercase font-bold tracking-[0.3em]">
              <div className="flex flex-col space-y-1">
                <span className="text-white/10">Velocity</span>
                <span className="text-white flex items-center"><Activity size={10} className="mr-2 text-accent" /> Normal</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-white/10">Rendering</span>
                <span className="text-white flex items-center"><Zap size={10} className="mr-2 text-accent" /> 60FPS</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-white/10">Status</span>
                <span className="text-white">Active</span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="text-6xl md:text-8xl font-serif text-white/5 tracking-tighter leading-none">
                {Math.round(progress * 100)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-50 bg-black flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
             <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" />
             <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Initializing Vision</p>
          </div>
        </div>
      )}

      {/* Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 animate-bounce transition-opacity duration-500 z-30" style={{ opacity: progress > 0.1 ? 0 : 1 }}>
        <ChevronDown size={32} />
      </div>
    </div>
  );
};
