const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto glass rounded-2xl p-10 md:p-14 neon-border">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Saya adalah seorang multimedia grafis yang sedang berkuliah di{" "}
            <span className="text-foreground font-medium">Politeknik IDN Bogor</span> dan memiliki minat besar dalam seni,
            visual, serta karya kreatif digital. Saya percaya bahwa setiap karya visual memiliki cerita
            yang bisa menginspirasi dan memberikan dampak positif.
          </p>
          <div className="mt-8 flex gap-8">
            {[
              { label: "Projects", value: "10+" },
              { label: "Skills", value: "7+" },
              { label: "Experience", value: "2+ yrs" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
