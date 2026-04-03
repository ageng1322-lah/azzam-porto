import { Mail, Instagram, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Tertarik untuk berkolaborasi? Hubungi saya melalui platform berikut.
        </p>
        <div className="flex justify-center gap-6">
          {[
            { icon: Mail, label: "Email" },
            { icon: Instagram, label: "Instagram" },
            { icon: Github, label: "GitHub" },
          ].map((item) => (
            <button
              key={item.label}
              className="glass rounded-xl p-4 hover:neon-glow transition-all duration-300 group"
            >
              <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
