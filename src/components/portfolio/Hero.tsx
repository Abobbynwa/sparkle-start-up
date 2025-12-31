import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Cybersecurity Analyst",
  "DevOps Enthusiast",
  "IT Support Specialist",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(role.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Terminal-style intro */}
        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-secondary/50 backdrop-blur-sm opacity-0 animate-fade-up">
          <span className="text-primary font-mono text-sm">
            {">"} Hello, World! Welcome to my portfolio
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono mb-6 opacity-0 animate-fade-up stagger-1">
          <span className="text-foreground">Valentine</span>{" "}
          <span className="gradient-text">Agaba</span>
        </h1>

        {/* Animated role */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-8 opacity-0 animate-fade-up stagger-2">
          <span className="text-xl md:text-3xl font-mono text-muted-foreground">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up stagger-3">
          Crafting secure, scalable, and elegant digital solutions. Based in{" "}
          <span className="text-primary">Lagos, Nigeria</span> — open to remote
          opportunities worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-up stagger-4">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="group bg-primary text-primary-foreground hover:bg-primary/90 neon-border font-mono"
          >
            View Projects
            <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 font-mono"
            asChild
          >
            <a href="/Valentine_Agaba_CV.pdf" download>
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center opacity-0 animate-fade-up stagger-5">
          <a
            href="https://github.com/valentineagaba"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/valentineagaba"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:valentineagaba7@gmail.com"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-6">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-mono">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
