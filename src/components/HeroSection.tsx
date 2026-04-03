import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Cinematic cityscape"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <p className="animate-fade-up text-sm md:text-base tracking-[0.3em] uppercase text-primary font-medium mb-4">
              Multimedia Grafis Student
            </p>
            <h1 className="animate-fade-up animate-fade-up-delay-1 font-sans text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 leading-tight" style={{ letterSpacing: '-0.075em' }}>
              <span className="gradient-text font-extrabold my-0 md:block lg:inline">Azzam Ahmad </span>
              <span className="text-foreground -mt-2 inline-block">Umair</span>
            </h1>
            <p className="animate-fade-up animate-fade-up-delay-2 text-muted-foreground text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
              Multimedia Grafis Student di Politeknik IDN Bogor yang berfokus pada seni, visual, dan karya kreatif
            </p>
            <div className="animate-fade-up animate-fade-up-delay-3">
              <a href="#projects" className="btn-cta inline-block">
                Lihat Portofolio
              </a>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-up animate-fade-up-delay-2 mt-12 md:mt-0">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 p-3 lg:p-4 rounded-[2rem] bg-background/30 border border-primary/20 backdrop-blur-md shadow-2xl shadow-primary/10 group transform transition-transform duration-500 hover:-translate-y-2">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-secondary/10">
                <img 
                  src="/profile.png" 
                  alt="Azzam Ahmad Umair" 
                  className="w-full h-full object-cover object-top relative z-10 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {/* Fallback box style in case image isn't loaded */}
                <div className="absolute inset-0 z-0 flex items-center justify-center p-4 text-center">
                   <span className="text-muted-foreground/50 text-xs shadow-none">Tambahkan profile.png ke folder public</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent z-20 pointer-events-none" />
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
