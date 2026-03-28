interface AboutSectionProps {
  isVisible: boolean;
}

const AboutSection = ({ isVisible }: AboutSectionProps) => {
  return (
    <section className="snap-section relative flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 px-8 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">
        {/* Left */}
        <div>
          <p
            className={`text-[10px] tracking-[0.3em] text-muted-foreground/60 uppercase mb-2 opacity-0 ${
              isVisible ? "animate-fade-up" : ""
            }`}
          >
            WHO WE ARE
          </p>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 opacity-0 ${
              isVisible ? "animate-fade-up animate-delay-100" : ""
            }`}
          >
            ABOUT
          </h2>

          <div className={`flex gap-5 opacity-0 ${isVisible ? "animate-fade-up animate-delay-200" : ""}`}>
            {/* Instagram */}
            <a href="#" className="glitch-hover text-muted-foreground hover:text-foreground transition-colors" data-text="IG" aria-label="Instagram">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* Vimeo */}
            <a href="#" className="glitch-hover text-muted-foreground hover:text-foreground transition-colors" data-text="V" aria-label="Vimeo">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7.42c-.1 2.1-1.56 4.98-4.38 8.62C14.68 19.94 12.26 22 10.3 22c-1.22 0-2.24-1.12-3.08-3.38l-1.68-6.16C4.86 10.2 4.12 9.08 3.32 9.08c-.16 0-.7.32-1.62.98L.5 8.5c1.02-.9 2.02-1.8 3.02-2.68 1.36-1.18 2.38-1.8 3.06-1.86 1.6-.16 2.6.94 2.98 3.3.4 2.54.68 4.12.84 4.74.46 2.12.98 3.18 1.54 3.18.44 0 1.1-.7 1.98-2.08.88-1.38 1.36-2.44 1.42-3.16.12-1.2-.34-1.8-1.42-1.8-.5 0-1.02.12-1.56.34 1.04-3.4 3.02-5.04 5.96-4.96 2.18.06 3.2 1.48 3.08 4.26z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="glitch-hover text-muted-foreground hover:text-foreground transition-colors" data-text="YT" aria-label="YouTube">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <p
            className={`text-base md:text-lg leading-relaxed text-muted-foreground opacity-0 ${
              isVisible ? "animate-fade-up animate-delay-200" : ""
            }`}
          >
            Skyway Street is an independent project aimed at bringing together screenplays and audiovisual works—both fiction and documentary—in search of funding and collaborative support.
          </p>
          <p
            className={`text-base md:text-lg leading-relaxed text-foreground/90 opacity-0 ${
              isVisible ? "animate-fade-up animate-delay-300" : ""
            }`}
          >
           Our project is raw, intimate, and unapologetically urban. We believe the most powerful stories are the ones you pass by every day without even noticing.
          </p>

          <div className={`pt-6 border-t border-border/30 opacity-0 ${isVisible ? "animate-fade-up animate-delay-400" : ""}`}>
            <p className="text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase mb-2">CONTACT</p>
            <a
              href="mailto:contact@skywaystreet.com"
              className="glitch-hover text-base text-muted-foreground underline underline-offset-4 decoration-muted-foreground/30 hover:text-foreground transition-colors"
              data-text="contact@skywaystreet.com"
            >
              contact@skywaystreet.com
            </a>
          </div>

          <p className={`text-[10px] tracking-[0.15em] text-muted-foreground/30 pt-4 opacity-0 ${isVisible ? "animate-fade-up animate-delay-500" : ""}`}>
            © 2026 SKYWAY STREET
          </p>
        </div>
      </div>

      <span className="absolute bottom-6 left-8 text-[10px] tracking-[0.15em] text-muted-foreground/40">
        03 / 03
      </span>
    </section>
  );
};

export default AboutSection;
