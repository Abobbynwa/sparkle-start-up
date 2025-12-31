import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-xl font-bold font-mono gradient-text"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {"<VA />"}
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Valentine Agaba. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/valentineagaba"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/valentineagaba"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:valentineagaba7@gmail.com"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> in Lagos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
