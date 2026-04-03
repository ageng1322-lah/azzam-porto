import { useRef } from "react";
import { ChevronLeft, ChevronRight, Video, Camera, Palette, PenTool, Layout, Clapperboard, Image } from "lucide-react";

const skills = [
  { name: "Motion Graphic", icon: Clapperboard },
  { name: "Videography", icon: Video },
  { name: "Photography", icon: Camera },
  { name: "Editing", icon: PenTool },
  { name: "Branding Poster", icon: Image },
  { name: "Drawing Art", icon: Palette },
  { name: "UI/UX Design", icon: Layout },
];

const SkillsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 gradient-text">Skills</h2>
        <p className="text-muted-foreground mb-12">Keahlian yang saya kuasai</p>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-2 hover:neon-glow transition-all hidden md:block"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <div ref={scrollRef} className="flex gap-5 overflow-x-auto scrollbar-hide pb-4" style={{ scrollbarWidth: "none" }}>
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <skill.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <p className="text-sm font-medium text-foreground whitespace-nowrap">{skill.name}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-2 hover:neon-glow transition-all hidden md:block"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
