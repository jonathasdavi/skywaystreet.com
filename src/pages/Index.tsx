import { useCallback, useEffect, useRef, useState } from "react";

import Header from "@/components/Header";
import SideDots from "@/components/SideDots";
import HeroSection from "@/components/HeroSection";
import FilmsSection from "@/components/FilmsSection";
import AboutSection from "@/components/AboutSection";

const TOTAL_SECTIONS = 3;

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set([0]));
  const containerRef = useRef<HTMLDivElement>(null);

  const navigateTo = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const target = container.children[index] as HTMLElement;
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Array.from(container.children).indexOf(entry.target as HTMLElement);
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(index);
            setVisibleSections((prev) => new Set(prev).add(index));
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    Array.from(container.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="/bg-video.mp4"
        />
        <div className="absolute inset-0 bg-[hsl(200,60%,8%)]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />
      </div>

      <Header activeSection={activeSection} onNavigate={navigateTo} />
      <SideDots
        activeSection={activeSection}
        totalSections={TOTAL_SECTIONS}
        onNavigate={navigateTo}
      />

      <div ref={containerRef} className="snap-container">
        <HeroSection onExplore={() => navigateTo(1)} isVisible={visibleSections.has(0)} />
        <FilmsSection isVisible={visibleSections.has(1)} />
        <AboutSection isVisible={visibleSections.has(2)} />
      </div>
    </div>
  );
};

export default Index;
