interface HeroSectionProps {
  onExplore: () => void;
  isVisible: boolean;
}

const HeroSection = ({ onExplore, isVisible }: HeroSectionProps) => {
  return (
    <section className="snap-section relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <p
          className={`text-xs md:text-sm tracking-[0.4em] text-muted-foreground uppercase mb-6 opacity-0 ${
            isVisible ? "animate-fade-up" : ""
          }`}
        >
INDEPENDENT CINEMA        </p>

        <h1
          className={`text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tight text-foreground text-glow leading-[0.85] uppercase opacity-0 ${
            isVisible ? "animate-fade-up animate-delay-100" : ""
          }`}
          style={{ textWrap: "balance" }}
        >
          SKYWAY
          <br />
          STREET
        </h1>

        <p
          className={`mt-8 text-sm md:text-base tracking-[0.2em] text-muted-foreground uppercase opacity-0 ${
            isVisible ? "animate-fade-up animate-delay-300" : ""
          }`}
        >
          STREET STORIES, CINEMATIC SKIES
        </p>

        <button
          onClick={onExplore}
          className={`glitch-hover mt-12 border border-foreground/30 px-10 py-4 text-xs md:text-sm tracking-[0.25em] text-foreground/80 uppercase transition-all duration-300 hover:bg-foreground/5 hover:border-foreground/60 active:scale-[0.97] opacity-0 ${
            isVisible ? "animate-fade-up animate-delay-500" : ""
          }`}
          data-text="EXPLORE OUR PROJECTS →"
        >
          EXPLORE OUR PROJECTS →
        </button>
      </div>

      <span className="absolute bottom-6 left-8 text-[10px] tracking-[0.15em] text-muted-foreground/40">
        01 / 03
      </span>
    </section>
  );
};

export default HeroSection;
