import { useEffect, useRef, useState } from "react";
import { Code2, Shield, Server, Award } from "lucide-react";

const stats = [
  { icon: Code2, value: "10+", label: "Projects Delivered" },
  { icon: Shield, value: "6+", label: "Certifications" },
  { icon: Server, value: "3+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
];

const About = () => {
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-2">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">Full Stack Developer</span> and{" "}
              <span className="text-accent font-semibold">Cybersecurity Analyst</span> with a
              unique background in Chemistry from Enugu State University of Science and
              Technology. This scientific foundation gives me a methodical approach to
              problem-solving in the digital realm.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across <span className="text-primary">web development</span>,{" "}
              <span className="text-accent">security operations</span>, and{" "}
              <span className="text-neon-green">DevOps practices</span>. I build secure,
              scalable applications while ensuring they're protected against modern threats.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently based in Lagos, Nigeria, I'm passionate about bridging the gap between
              development and security — creating solutions that are not just functional, but
              fortified.
            </p>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/30">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-neon-green font-mono text-sm">
                Open to Remote & Contract Roles
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-6 rounded-xl text-center group hover:border-primary/50 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold font-mono gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
