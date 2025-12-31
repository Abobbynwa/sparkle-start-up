import { useEffect, useRef, useState } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Frontend Development with React",
    issuer: "HackerRank",
    year: "2025",
    icon: "🎯",
    color: "primary",
  },
  {
    id: 2,
    title: "Cybersecurity Job Simulation",
    issuer: "Forage (Mastercard)",
    year: "2025",
    icon: "🛡️",
    color: "accent",
  },
  {
    id: 3,
    title: "Ethical Hacker Certificate",
    issuer: "Cisco",
    year: "2025",
    icon: "🔐",
    color: "neon-green",
  },
  {
    id: 4,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    year: "2025",
    icon: "🔒",
    color: "primary",
  },
  {
    id: 5,
    title: "Vulnerability Management",
    issuer: "XSTECH",
    year: "2024",
    icon: "🎖️",
    color: "accent",
  },
  {
    id: 6,
    title: "Software Development",
    issuer: "Enugu SME Center",
    year: "2024",
    icon: "💻",
    color: "neon-green",
  },
];

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      primary: "border-primary/30 hover:border-primary",
      accent: "border-accent/30 hover:border-accent",
      "neon-green": "border-neon-green/30 hover:border-neon-green",
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-24 relative overflow-hidden bg-secondary/30"
    >
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-2">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Professional certifications validating my expertise in development,
            cybersecurity, and IT operations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`glass-card rounded-xl p-6 ${getColorClass(
                cert.color
              )} transition-all duration-500 group cursor-default ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Icon & Year */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{cert.icon}</span>
                <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {cert.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-mono mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              {/* Issuer */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-4 h-4" />
                <span className="text-sm">{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
