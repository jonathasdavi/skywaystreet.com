interface SideDotsProps {
  activeSection: number;
  totalSections: number;
  onNavigate: (index: number) => void;
}

const SideDots = ({ activeSection, totalSections, onNavigate }: SideDotsProps) => {
  return (
    <div className="fixed right-6 top-1/2 z-50 -translate-y-1/2 flex flex-col gap-4">
      {Array.from({ length: totalSections }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className="group relative flex items-center justify-center w-4 h-4"
          aria-label={`Go to section ${i + 1}`}
        >
          <span
            className={`block rounded-full transition-all duration-300 ${
              activeSection === i
                ? "w-2.5 h-2.5 bg-foreground shadow-[0_0_8px_hsla(0,0%,100%,0.4)]"
                : "w-1.5 h-1.5 bg-muted-foreground/50 group-hover:bg-muted-foreground"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default SideDots;
