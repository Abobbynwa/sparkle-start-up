import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    title: "Building Secure React Applications: A Comprehensive Guide",
    excerpt:
      "Learn essential security practices for React development, from XSS prevention to secure authentication patterns.",
    category: "Security",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "From Chemistry to Code: My Journey into Tech",
    excerpt:
      "How a Chemistry graduate transitioned to full-stack development and cybersecurity — lessons learned and tips for career changers.",
    category: "Career",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Docker for Developers: Containerization Best Practices",
    excerpt:
      "A practical guide to Docker containerization for development workflows, including multi-stage builds and security considerations.",
    category: "DevOps",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    image: "/placeholder.svg",
  },
];

const Blog = () => {
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

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Security: "bg-accent/20 text-accent",
      Career: "bg-neon-green/20 text-neon-green",
      DevOps: "bg-primary/20 text-primary",
    };
    return colors[category] || colors.Security;
  };

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="py-24 relative overflow-hidden bg-secondary/30"
    >
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-2">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Thoughts on development, security, and the tech industry.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className={`group glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 bg-secondary overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-xs font-mono rounded-full ${getCategoryColor(
                    article.category
                  )}`}
                >
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-mono mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <span className="inline-flex items-center text-sm font-mono text-primary group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 font-mono"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
