import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Lock, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import project thumbnails
import chatbotImg from "@/assets/project-chatbot.jpg";
import schoolImg from "@/assets/project-school.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import scannerImg from "@/assets/project-scanner.jpg";
import cicdImg from "@/assets/project-cicd.jpg";
import networkImg from "@/assets/project-network.jpg";
import skyfinderImg from "@/assets/project-skyfinder.jpg";

const projects = [
  {
    id: 1,
    title: "AI-Powered Chatbot",
    description:
      "Intelligent chatbot built with Python and OpenAI GPT API. Features natural language processing, context awareness, and multi-turn conversations.",
    image: chatbotImg,
    tags: ["Python", "OpenAI API", "NLP", "FastAPI"],
    category: "development",
    github: "https://github.com/Abobbynwa",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "School Management Platform",
    description:
      "Full-featured school management system with RBAC, payment integration, student portals, and administrative dashboards.",
    image: schoolImg,
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "development",
    github: "https://github.com/Abobbynwa",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Secure E-Commerce Platform",
    description:
      "End-to-end encrypted e-commerce solution with Docker containerization, secure payment processing, and comprehensive security audits.",
    image: ecommerceImg,
    tags: ["Next.js", "Docker", "Security", "Payments"],
    category: "security",
    github: "#",
    live: "https://github.com/Abobbynwa",
    featured: true,
  },
  {
    id: 4,
    title: "Vulnerability Scanner Tool",
    description:
      "Custom security tool for automated vulnerability scanning and reporting. Identifies OWASP Top 10 vulnerabilities.",
    image: scannerImg,
    tags: ["Python", "Security", "API", "Automation"],
    category: "security",
    github: "https://github.com/Abobbynwa",
  },
  {
    id: 5,
    title: "DevOps CI/CD Pipeline",
    description:
      "Automated deployment pipeline with GitHub Actions, Docker, and AWS integration for seamless continuous delivery.",
    image: cicdImg,
    tags: ["Docker", "GitHub Actions", "AWS", "Linux"],
    category: "devops",
    github: "https://github.com/Abobbynwa",
  },
  {
    id: 6,
    title: "Network Monitoring Dashboard",
    description:
      "Real-time network monitoring solution with alerts, traffic analysis, and security event logging.",
    image: networkImg,
    tags: ["React", "Node.js", "WebSocket", "Security"],
    category: "devops",
    github: "https://github.com/Abobbynwa/noc-live-view",
    live: "https://noc-live-view-okgkyupkv-abobbynwas-projects.vercel.app/",
  },
  {
    id: 7,
    title: "Sky Finder",
    description:
      "Flight tracking and aviation information platform with real-time flight data, airport details, and route visualization.",
    image: skyfinderImg,
    tags: ["React", "API", "Aviation", "Real-time"],
    category: "development",
    github: "https://github.com/Abobbynwa/sky-finder",
    live: "https://skyfligh.lovable.app",
    featured: true,
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "development", label: "Development", icon: Code },
  { id: "security", label: "Security", icon: Lock },
  { id: "devops", label: "DevOps", icon: Globe },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                activeFilter === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-secondary overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs font-mono bg-primary text-primary-foreground rounded">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-mono mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono rounded bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
