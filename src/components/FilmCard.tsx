interface FilmCardProps {
  title: string;
  logline: string;
  poster: string;
  delay: string;
  isVisible: boolean;
}

const FilmCard = ({ title, logline, poster, delay, isVisible }: FilmCardProps) => {
  return (
    <div
      className={`group relative cursor-pointer transition-all duration-500 ease-out opacity-0 w-full max-w-[280px] md:max-w-none md:w-[280px] lg:w-[320px] mx-auto ${
        isVisible ? "animate-fade-up" : ""
      } ${delay}`}
    >
      {/* Poster wrapper - glitch effects only here */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={poster}
          alt={title}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/30" />

        {/* Glitch overlays - inside image only */}
        <div className="card-glitch-overlay" />
        <div className="card-glitch-scan" />
        <div className="card-glitch-rgb" />

        {/* Neon border glow on hover */}
        <div className="absolute inset-0 border border-transparent transition-all duration-300 group-hover:border-neon-blue/30 group-hover:shadow-[inset_0_0_40px_hsla(190,100%,50%,0.1)]" />

        {/* ENTER overlay - desktop only */}
        <div className="hidden md:flex absolute inset-0 z-20 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50">
          <span className="glitch-hover text-2xl font-black tracking-[0.3em] text-foreground text-glow" data-text="ENTER">
            ENTER
          </span>
        </div>
      </div>

      {/* Info - outside glitch area */}
      <div className="mt-4 space-y-1.5">
        <h3 className="text-base lg:text-lg font-bold tracking-wide text-foreground">{title}</h3>
        <p className="text-xs lg:text-sm leading-relaxed tracking-wide text-muted-foreground line-clamp-2">
          {logline}
        </p>
        <span className="md:hidden glitch-hover inline-block pt-2 text-[10px] tracking-[0.2em] text-muted-foreground/60 uppercase" data-text="ENTER SITE →">
          ENTER SITE →
        </span>
      </div>
    </div>
  );
};

export default FilmCard;
