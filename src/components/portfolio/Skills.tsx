import { useEffect, useRef, useState } from "react";
import { Code2, Shield, Server } from "lucide-react";

const skillCategories = [
  {
    id: "development",
    icon: Code2,
    title: "Development",
    color: "primary",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "Node.js / Express", level: 85 },
      { name: "Python", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "PostgreSQL / MongoDB", level: 80 },
      { name: "REST APIs / GraphQL", level: 85 },
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "Cybersecurity",
    color: "accent",
    skills: [
      { name: "OWASP Top 10", level: 85 },
      { name: "Penetration Testing", level: 75 },
      { name: "SIEM / SOC Analysis", level: 80 },
      { name: "Vulnerability Assessment", level: 85 },
      { name: "Security Audits", level: 80 },
      { name: "Incident Response", level: 75 },
    ],
  },
  {
    id: "devops",
    icon: Server,
    title: "DevOps & IT",
    color: "neon-green",
    skills: [
      { name: "Docker / Containers", level: 80 },
      { name: "CI/CD Pipelines", level: 75 },
      { name: "Linux Administration", level: 85 },
      { name: "AWS / Cloud Services", level: 70 },
      { name: "Git / Version Control", level: 90 },
      { name: "Network Management", level: 75 },
    ],
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("development");
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

  const getColorClass = (color: string, type: "text" | "bg" | "border") => {
    const colorMap: Record<string, Record<string, string>> = {
      primary: {
        text: "text-primary",
        bg: "bg-primary",
        border: "border-primary",
      },
      accent: {
        text: "text-accent",
        bg: "bg-accent",
        border: "border-accent",
      },
      "neon-green": {
        text: "text-neon-green",
        bg: "bg-neon-green",
        border: "border-neon-green",
      },
    };
    return colorMap[color]?.[type] || "";
  };

  const activeSkills = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 relative overflow-hidden bg-secondary/30"
    >
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-2">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? `${getColorClass(category.color, "bg")} text-background`
                  : `border ${getColorClass(category.color, "border")}/30 ${getColorClass(
                      category.color,
                      "text"
                    )} hover:${getColorClass(category.color, "border")}`
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {activeSkills && (
            <div className="grid md:grid-cols-2 gap-6">
              {activeSkills.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass-card p-4 rounded-lg group hover:border-primary/30 transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-foreground">
                      {skill.name}
                    </span>
                    <span
                      className={`font-mono text-xs ${getColorClass(
                        activeSkills.color,
                        "text"
                      )}`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getColorClass(
                        activeSkills.color,
                        "bg"
                      )} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100 + 500}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tools Cloud */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-muted-foreground mb-6 font-mono text-sm">
            Tools & Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "TypeScript",
              "Docker",
              "PostgreSQL",
              "MySql Lite3",
              "AWS",
              "Linux",
              "Git",
              "Burp Suite",
              "Wireshark",
              "Nmap",
              "Metasploit",
              "VS Code",
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full text-sm font-mono border border-border bg-card hover:border-primary/50 hover:text-primary transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
