import { Play, Image as ImageIcon, Camera } from "lucide-react";

const projects = [
  { title: "Project Video", category: "Videography", icon: Play, color: "from-primary to-secondary", image: "/video-editor.png" },
  { title: "Poster Design", category: "Graphic Design", icon: ImageIcon, color: "from-secondary to-primary", image: "/design-poster.png" },
  { title: "Photo Editor", category: "Photography", icon: Camera, color: "from-primary via-secondary to-primary", image: "/photo-editor.png" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 gradient-text">Projects</h2>
        <p className="text-muted-foreground mb-12">Karya-karya terbaik saya</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="card-project group cursor-pointer">
              <div className={`aspect-[16/10] bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top relative z-10 transition-transform duration-700 group-hover:scale-105" 
                  onError={(e) => {
                    // Hide the image if it hasn't been added yet, falling back to the generic icon
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <project.icon className="absolute z-0 w-16 h-16 text-foreground/30 group-hover:text-foreground/60 transition-all duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all duration-500 z-20 pointer-events-none" />
              </div>
              <div className="p-5">
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">{project.category}</p>
                <h3 className="font-heading text-lg font-semibold text-foreground">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
