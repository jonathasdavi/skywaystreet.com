interface HeaderProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

const navItems = [
  { label: "FILMS", index: 1 },
  { label: "ABOUT", index: 2 },
];

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 md:px-12">
      <button
        onClick={() => onNavigate(0)}
        className="glitch-hover text-sm font-black tracking-[0.25em] text-foreground text-glow uppercase"
        data-text="SKYWAY STREET"
      >
        SKYWAY STREET
      </button>

      <nav className="flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onNavigate(item.index)}
            className={`glitch-hover relative text-xs tracking-[0.2em] transition-colors duration-200 ${
              activeSection === item.index
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            data-text={item.label}
          >
            {item.label}
            <span
              className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                activeSection === item.index ? "w-full" : "w-0"
              }`}
            />
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
