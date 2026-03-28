import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import poster28e from "@/assets/poster-28e.png";
import posterTaxonomy from "@/assets/poster-taxonomy.png";
import posterDelivery from "@/assets/poster-delivery.png";
import FilmCard from "./FilmCard";
import { useIsMobile } from "@/hooks/use-mobile";

const films = [
  {
    title: "28E: LAST STOP",
    logline:
      "DRAMA, SHORT FILM",
    poster: poster28e,
    url: "http://skywaystreet.com/28e", // troque pela URL real
  },
  {
    title: "TAXONOMY",
    logline:
      "COMEDY DRAMA, SHORT FILM",
    poster: posterTaxonomy,
    url: "http://skywaystreet.com/taxonomy", // troque pela URL real
  },
  {
    title: "SIERRA NEVADA",
    logline:
      "DRAMA, SHORT FILM",
    poster: posterDelivery,
    url: "https://seu-site.com/delivery", // troque pela URL real
  },
];

interface FilmsSectionProps {
  isVisible: boolean;
}

const FilmsSection = ({ isVisible }: FilmsSectionProps) => {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.offsetWidth;
    const index = Math.round(el.scrollLeft / slideWidth);
    setActiveSlide(index);
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(index, films.length - 1));
    el.scrollTo({ left: clamped * el.offsetWidth, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isMobile) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [isMobile, handleScroll]);

  if (isMobile) {
    return (
      <section className="snap-section relative flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-background/80" />

        <div className="relative z-10 flex flex-col h-full pt-20 pb-12">
          <div className="px-6 mb-4">
            <p
              className={`text-[10px] tracking-[0.3em] text-muted-foreground/60 uppercase mb-1 opacity-0 ${
                isVisible ? "animate-fade-up" : ""
              }`}
            >
              OUR WORK
            </p>
            <h2
              className={`text-4xl font-black text-foreground opacity-0 ${
                isVisible ? "animate-fade-up animate-delay-100" : ""
              }`}
            >
              SCREENPLAYS
            </h2>
          </div>

          {/* Carousel with side arrows */}
          <div className="flex-1 relative flex items-center">
            {/* Left arrow */}
            <button
              onClick={() => scrollToSlide(activeSlide - 1)}
              className={`absolute left-1 z-20 p-1 transition-opacity ${activeSlide === 0 ? "opacity-0 pointer-events-none" : "opacity-60 active:opacity-100"}`}
              aria-label="Previous"
            >
              <ChevronLeft size={28} className="text-foreground" />
            </button>

            {/* Right arrow */}
            <button
              onClick={() => scrollToSlide(activeSlide + 1)}
              className={`absolute right-1 z-20 p-1 transition-opacity ${activeSlide === films.length - 1 ? "opacity-0 pointer-events-none" : "opacity-60 active:opacity-100"}`}
              aria-label="Next"
            >
              <ChevronRight size={28} className="text-foreground" />
            </button>

            <div
              ref={scrollRef}
              className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: "none" }}
            >
              {films.map((film, i) => (
                <div
                  key={film.title}
                  className="snap-center shrink-0 w-full flex items-center justify-center px-10"
                >
                  <a
                    href={film.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <FilmCard
                      {...film}
                      isVisible={isVisible}
                      delay={`animate-delay-${(i + 2) * 100}`}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 py-2">
            {films.map((_, i) => (
              <span
                key={i}
                className={`block rounded-full transition-all duration-300 ${
                  activeSlide === i
                    ? "w-2.5 h-2.5 bg-foreground"
                    : "w-1.5 h-1.5 bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>

        <span className="absolute bottom-6 left-6 text-[10px] tracking-[0.15em] text-muted-foreground/40">
          02 / 03
        </span>
      </section>
    );
  }

  return (
    <section className="snap-section relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 px-8 md:px-12 lg:px-20 w-full max-w-7xl mx-auto">
        <div className="mb-10">
          <p
            className={`text-[10px] tracking-[0.3em] text-muted-foreground/60 uppercase mb-1 opacity-0 ${
              isVisible ? "animate-fade-up" : ""
            }`}
          >
            OUR WORK
          </p>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-foreground opacity-0 ${
              isVisible ? "animate-fade-up animate-delay-100" : ""
            }`}
          >
            SCREENPLAYS
          </h2>
        </div>

        <div className="flex items-start justify-center gap-8 lg:gap-12">
          {films.map((film, i) => (
            <a
              key={film.title}
              href={film.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <FilmCard
                {...film}
                isVisible={isVisible}
                delay={`animate-delay-${(i + 2) * 100}`}
              />
            </a>
          ))}
        </div>
      </div>

      <span className="absolute bottom-6 left-8 text-[10px] tracking-[0.15em] text-muted-foreground/40">
        02 / 03
      </span>
    </section>
  );
};

export default FilmsSection;
