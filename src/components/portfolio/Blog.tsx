import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const articles = [
  {
    id: 1,
    title: "Building Secure React Applications: A Comprehensive Guide",
    excerpt:
      "Learn essential security practices for React development, from XSS prevention to secure authentication patterns.",
    fullContent: `
      <h3>Introduction</h3>
      <p>Security in React applications is often overlooked, but it's crucial for protecting your users and data. In this comprehensive guide, we'll explore the essential security practices every React developer should know.</p>
      
      <h3>1. Cross-Site Scripting (XSS) Prevention</h3>
      <p>React automatically escapes values embedded in JSX, which provides built-in protection against XSS attacks. However, there are still scenarios where you need to be careful:</p>
      <ul>
        <li><strong>dangerouslySetInnerHTML:</strong> Only use this when absolutely necessary and always sanitize the HTML using libraries like DOMPurify.</li>
        <li><strong>URL handling:</strong> Always validate and sanitize URLs before rendering them in href attributes.</li>
        <li><strong>User-generated content:</strong> Never trust user input—always validate and sanitize on both client and server.</li>
      </ul>
      
      <h3>2. Secure Authentication Patterns</h3>
      <p>Implementing authentication correctly is critical. Here are best practices:</p>
      <ul>
        <li>Use HTTP-only cookies for storing tokens when possible</li>
        <li>Implement proper session management with token rotation</li>
        <li>Add multi-factor authentication for sensitive applications</li>
        <li>Use secure password hashing algorithms like bcrypt</li>
      </ul>
      
      <h3>3. API Security</h3>
      <p>Protect your API endpoints with proper authorization, rate limiting, and input validation. Always use HTTPS and implement CORS policies correctly.</p>
      
      <h3>Conclusion</h3>
      <p>Security is an ongoing process. Stay updated with the latest vulnerabilities and regularly audit your application's security posture.</p>
    `,
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
    fullContent: `
      <h3>The Beginning</h3>
      <p>When I graduated with a degree in Chemistry, I never imagined I'd end up as a full-stack developer and cybersecurity professional. But life has a way of surprising us.</p>
      
      <h3>The Transition</h3>
      <p>My journey started with curiosity. I began learning Python to automate some repetitive lab tasks, and that's when I discovered my passion for coding. The logical thinking skills from Chemistry transferred perfectly to programming.</p>
      
      <h3>Key Lessons Learned</h3>
      <ul>
        <li><strong>Start with fundamentals:</strong> Don't rush into frameworks. Understand core programming concepts first.</li>
        <li><strong>Build projects:</strong> Theory is important, but hands-on experience is invaluable.</li>
        <li><strong>Network actively:</strong> Connect with other developers, attend meetups, and join online communities.</li>
        <li><strong>Embrace the struggle:</strong> Imposter syndrome is real, but persistence pays off.</li>
      </ul>
      
      <h3>Why Cybersecurity?</h3>
      <p>As I built more applications, I became increasingly interested in how to secure them. This led me to explore cybersecurity, which combines technical skills with investigative thinking—much like my chemistry background.</p>
      
      <h3>Tips for Career Changers</h3>
      <p>If you're considering a career change into tech, remember: your previous experience is an asset, not a liability. The analytical skills, problem-solving abilities, and domain knowledge you bring are valuable in tech.</p>
    `,
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
    fullContent: `
      <h3>Why Docker?</h3>
      <p>Docker has revolutionized how we develop, ship, and run applications. It eliminates the "it works on my machine" problem by providing consistent environments across development, testing, and production.</p>
      
      <h3>Getting Started</h3>
      <p>The basics of Docker are simple: create a Dockerfile, build an image, and run a container. But mastering Docker requires understanding best practices.</p>
      
      <h3>Multi-Stage Builds</h3>
      <p>One of Docker's most powerful features is multi-stage builds. They allow you to:</p>
      <ul>
        <li>Keep your final images small by excluding build dependencies</li>
        <li>Separate build and runtime environments</li>
        <li>Improve security by reducing attack surface</li>
      </ul>
      
      <h3>Security Best Practices</h3>
      <ul>
        <li><strong>Use official base images:</strong> Always start with trusted, official images.</li>
        <li><strong>Run as non-root:</strong> Create a dedicated user for running your application.</li>
        <li><strong>Scan for vulnerabilities:</strong> Use tools like Trivy or Snyk to scan your images.</li>
        <li><strong>Keep images updated:</strong> Regularly update base images to patch security vulnerabilities.</li>
      </ul>
      
      <h3>Docker Compose for Development</h3>
      <p>Docker Compose simplifies managing multi-container applications. It's perfect for local development with databases, caches, and other services.</p>
      
      <h3>Conclusion</h3>
      <p>Docker is an essential tool for modern development. Master these best practices to build efficient, secure, and maintainable containerized applications.</p>
    `,
    category: "DevOps",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    image: "/placeholder.svg",
  },
];

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);
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
              onClick={() => setSelectedArticle(article)}
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

      {/* Article Modal */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-primary/20">
          {selectedArticle && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                  <span
                    className={`px-3 py-1 font-mono rounded-full ${getCategoryColor(
                      selectedArticle.category
                    )}`}
                  >
                    {selectedArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {selectedArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {selectedArticle.readTime}
                  </span>
                </div>
                <DialogTitle className="text-2xl font-bold font-mono text-foreground">
                  {selectedArticle.title}
                </DialogTitle>
              </DialogHeader>
              <div 
                className="prose prose-invert prose-sm max-w-none mt-4
                  [&_h3]:text-lg [&_h3]:font-bold [&_h3]:font-mono [&_h3]:text-primary [&_h3]:mt-6 [&_h3]:mb-3
                  [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4
                  [&_ul]:text-muted-foreground [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
                  [&_li]:leading-relaxed
                  [&_strong]:text-foreground"
                dangerouslySetInnerHTML={{ __html: selectedArticle.fullContent }}
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Blog;
