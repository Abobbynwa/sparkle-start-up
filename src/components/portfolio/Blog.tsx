import { useEffect, useRef, useState } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import blogSecurityImg from "@/assets/blog-security.jpg";
import blogCareerImg from "@/assets/blog-career.jpg";
import blogDockerImg from "@/assets/blog-docker.jpg";
import blogLinuxImg from "@/assets/blog-linux.jpg";
import blogVulnerabilityImg from "@/assets/blog-vulnerability.jpg";
import blogNetworkImg from "@/assets/blog-network.jpg";

const articles = [
  {
    id: 1,
    title: "Building Secure React Applications: A Comprehensive Guide",
    excerpt:
      "Learn essential security practices for React development, from XSS prevention to secure authentication patterns.",
    fullContent: `
      <h3>Introduction</h3>
      <p>Security in React applications is often overlooked, but it is crucial for protecting your users and data. In this comprehensive guide, we will explore the essential security practices every React developer should know.</p>
      
      <h3>1. Cross-Site Scripting (XSS) Prevention</h3>
      <p>React automatically escapes values embedded in JSX, which provides built-in protection against XSS attacks. However, there are still scenarios where you need to be careful:</p>
      <ul>
        <li><strong>dangerouslySetInnerHTML:</strong> Only use this when absolutely necessary and always sanitize the HTML using libraries like DOMPurify.</li>
        <li><strong>URL handling:</strong> Always validate and sanitize URLs before rendering them in href attributes.</li>
        <li><strong>User-generated content:</strong> Never trust user input. Always validate and sanitize on both client and server.</li>
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
    image: blogSecurityImg,
  },
  {
    id: 2,
    title: "From Chemistry to Code: My Journey into Tech",
    excerpt:
      "How a Chemistry graduate from ESUT transitioned to full-stack development and cybersecurity — lessons learned and tips for career changers.",
    fullContent: `
      <h3>The Beginning</h3>
      <p>When I graduated with a BSc in Chemistry from Enugu State University of Science and Technology (ESUT) in 2023, I never imagined I would end up as a full-stack developer and cybersecurity professional. But life has a way of surprising us.</p>
      
      <h3>The Transition</h3>
      <p>My journey started with curiosity. I began learning Python to automate some repetitive lab tasks, and that was when I discovered my passion for coding. The logical thinking and analytical skills from Chemistry transferred perfectly to programming and cybersecurity.</p>
      
      <h3>Key Lessons Learned</h3>
      <ul>
        <li><strong>Start with fundamentals:</strong> Do not rush into frameworks. Understand core programming concepts first.</li>
        <li><strong>Build projects:</strong> I developed full-stack applications including e-commerce platforms, food ordering systems, and school portals.</li>
        <li><strong>Leverage AI tools:</strong> Using ChatGPT, Claude, and Copilot accelerated my learning and rapid prototyping.</li>
        <li><strong>Get certified:</strong> Certifications from HackerRank, Cisco, and Forage validated my skills.</li>
      </ul>
      
      <h3>Why Cybersecurity?</h3>
      <p>As I built more applications, I became increasingly interested in how to secure them. This led me to explore cybersecurity, combining technical skills with investigative thinking.</p>
      
      <h3>Tips for Career Changers</h3>
      <p>If you are considering a career change into tech, remember: your previous experience is an asset, not a liability. The analytical skills, problem-solving abilities, and domain knowledge you bring are valuable in tech.</p>
    `,
    category: "Career",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    image: blogCareerImg,
  },
  {
    id: 3,
    title: "Docker for Developers: Containerization Best Practices",
    excerpt:
      "A practical guide to Docker containerization for development workflows, including multi-stage builds and security considerations.",
    fullContent: `
      <h3>Why Docker?</h3>
      <p>Docker has changed how developers build, ship, and run applications. It eliminates the common "it works on my machine" problem by providing consistent environments across development, testing, and production.</p>
      
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
      <p>Docker Compose simplifies managing multi-container applications. It is useful for local development with databases, caches, and other services.</p>
      
      <h3>Conclusion</h3>
      <p>Docker is an essential tool for modern development. Master these best practices to build efficient, secure, and maintainable containerized applications.</p>
    `,
    category: "DevOps",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    image: blogDockerImg,
  },
  {
    id: 4,
    title: "Linux Security Hardening: Protecting Your Servers",
    excerpt:
      "Essential Linux security practices I have applied while consulting for SMEs — from access control to intrusion detection.",
    fullContent: `
      <h3>Introduction</h3>
      <p>As a Cybersecurity and Linux Consultant, I have secured Linux environments for SMEs and technical labs. Here are the essential practices that help improve server uptime and resilience.</p>
      
      <h3>1. Access Control</h3>
      <p>Proper access control is the foundation of Linux security:</p>
      <ul>
        <li><strong>SSH Key Authentication:</strong> Disable password authentication and use SSH keys only.</li>
        <li><strong>Fail2Ban:</strong> Implement automatic IP banning for failed login attempts.</li>
        <li><strong>Sudo Configuration:</strong> Limit sudo access to specific commands and users.</li>
        <li><strong>User Management:</strong> Regularly audit user accounts and remove inactive ones.</li>
      </ul>
      
      <h3>2. Firewall Configuration</h3>
      <p>Use iptables or ufw to configure strict firewall rules. Only allow necessary incoming connections and log denied traffic for analysis.</p>
      
      <h3>3. System Updates</h3>
      <p>Keep your system updated with the latest security patches. Automate security updates while carefully managing application updates.</p>
      
      <h3>4. Monitoring and Auditing</h3>
      <ul>
        <li>Implement centralized logging with tools like rsyslog or ELK stack</li>
        <li>Use auditd for system call auditing</li>
        <li>Set up intrusion detection with OSSEC or Wazuh</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Linux security is about layers. No single measure is enough. Combine multiple strategies for stronger protection.</p>
    `,
    category: "Linux",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    image: blogLinuxImg,
  },
  {
    id: 5,
    title: "Vulnerability Assessment: A Practical Approach",
    excerpt:
      "How to perform effective vulnerability assessments and deliver actionable remediation reports for clients.",
    fullContent: `
      <h3>What is Vulnerability Assessment?</h3>
      <p>Vulnerability assessment is the systematic process of identifying, quantifying, and prioritizing security vulnerabilities in systems and applications. It is a crucial component of any security program.</p>
      
      <h3>The Assessment Process</h3>
      <ul>
        <li><strong>Scoping:</strong> Define the assessment boundaries and objectives with stakeholders.</li>
        <li><strong>Discovery:</strong> Identify all assets within scope using network scanning tools.</li>
        <li><strong>Scanning:</strong> Use automated tools like Nessus, OpenVAS, or Nmap to identify vulnerabilities.</li>
        <li><strong>Analysis:</strong> Validate findings and eliminate false positives.</li>
        <li><strong>Reporting:</strong> Document findings with clear remediation guidance.</li>
      </ul>
      
      <h3>Tools of the Trade</h3>
      <p>Popular vulnerability scanning tools include:</p>
      <ul>
        <li>Nessus - Comprehensive vulnerability scanner</li>
        <li>OpenVAS - Open-source alternative</li>
        <li>Nmap - Network discovery and security auditing</li>
        <li>Nikto - Web server scanner</li>
        <li>OWASP ZAP - Web application security testing</li>
      </ul>
      
      <h3>Delivering Value</h3>
      <p>The key to successful assessments is delivering actionable reports. Prioritize findings by risk, provide clear remediation steps, and follow up to verify fixes.</p>
    `,
    category: "Security",
    date: "Nov 20, 2024",
    readTime: "6 min read",
    image: blogVulnerabilityImg,
  },
  {
    id: 6,
    title: "Network Monitoring: Keeping Systems Healthy",
    excerpt:
      "Best practices for network performance monitoring and troubleshooting from my experience at Coscharis Group.",
    fullContent: `
      <h3>The Importance of Network Monitoring</h3>
      <p>As an IT Operations, Systems, and Network Support Engineer at Coscharis Group, I have learned that proactive network monitoring is essential for minimizing downtime and maintaining business continuity.</p>
      
      <h3>Key Monitoring Metrics</h3>
      <ul>
        <li><strong>Bandwidth Utilization:</strong> Track network throughput to identify bottlenecks.</li>
        <li><strong>Latency:</strong> Monitor response times between network nodes.</li>
        <li><strong>Packet Loss:</strong> Detect and investigate dropped packets.</li>
        <li><strong>Device Health:</strong> Monitor CPU, memory, and interface status.</li>
      </ul>
      
      <h3>Monitoring Tools</h3>
      <p>Effective network monitoring requires the right tools:</p>
      <ul>
        <li>PRTG Network Monitor - Comprehensive monitoring solution</li>
        <li>Nagios - Open-source infrastructure monitoring</li>
        <li>Zabbix - Enterprise-class monitoring</li>
        <li>Wireshark - Deep packet analysis</li>
      </ul>
      
      <h3>Troubleshooting Approach</h3>
      <p>When issues arise, follow a systematic approach:</p>
      <ul>
        <li>Identify the scope and impact of the issue</li>
        <li>Gather relevant data from monitoring tools and logs</li>
        <li>Isolate the problem to specific network segments</li>
        <li>Implement and verify the solution</li>
        <li>Document the issue and resolution for future reference</li>
      </ul>
      
      <h3>User Support</h3>
      <p>Technical support is not just about fixing problems. It is also about helping users understand network resources and empowering them to work efficiently.</p>
    `,
    category: "IT Ops",
    date: "Nov 15, 2024",
    readTime: "8 min read",
    image: blogNetworkImg,
  },
  {
    id: 7,
    title: "Critical API Vulnerability: From Discovery to Backend Compromise",
    excerpt:
      "A sanitized penetration testing case study showing how broken API access control can expose sensitive backend functionality.",
    fullContent: `
      <h3>Introduction</h3>
      <p>During an authorized security assessment of an enterprise ERP application, I identified a critical broken access control issue affecting backend API access.</p>

      <h3>Initial Discovery</h3>
      <p>The process began with reconnaissance and frontend JavaScript analysis. By reviewing application assets, I identified API routes used by the system.</p>

      <h3>Vulnerability Identified</h3>
      <p>The backend failed to properly enforce authentication and authorization on sensitive API endpoints. This created a serious security weakness because protected actions could be reached directly at the API layer.</p>

      <h3>Attack Chain</h3>
      <ul>
        <li>Frontend assets revealed backend API structure</li>
        <li>Direct API requests reached sensitive endpoints</li>
        <li>Backend authorization controls were insufficient</li>
        <li>Unauthorized data actions became possible</li>
      </ul>

      <h3>Impact</h3>
      <p>The vulnerability could affect confidentiality, integrity, and availability of business data. In a real-world attack scenario, this type of weakness may allow data exposure, unauthorized record manipulation, or operational disruption.</p>

      <h3>Severity</h3>
      <p><strong>Critical</strong> — because sensitive backend functionality should never be accessible without proper server-side authentication and authorization checks.</p>

      <h3>Recommendations</h3>
      <ul>
        <li>Enforce authentication on every sensitive API endpoint</li>
        <li>Implement role-based access control on the backend</li>
        <li>Validate all requests server-side</li>
        <li>Log suspicious API activity</li>
        <li>Perform regular API security testing</li>
      </ul>

      <h3>Disclosure</h3>
      <p>This case study has been sanitized. All sensitive URLs, IP addresses, credentials, and organization-specific details have been removed.</p>
    `,
    category: "Security",
    date: "May 2026",
    readTime: "6 min read",
    image: blogVulnerabilityImg,
  },
];

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<
    (typeof articles)[0] | null
  >(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const displayedArticles = showAll ? articles : articles.slice(0, 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Security: "bg-accent/20 text-accent",
      Career: "bg-neon-green/20 text-neon-green",
      DevOps: "bg-primary/20 text-primary",
      Linux: "bg-neon-purple/20 text-neon-purple",
      "IT Ops": "bg-neon-cyan/20 text-neon-cyan",
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
          {displayedArticles.map((article, index) => (
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
            onClick={() => setShowAll(!showAll)}
            className="border-primary/50 text-primary hover:bg-primary/10 font-mono"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                View All Articles ({articles.length})
                <ChevronDown className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Article Modal */}
      <Dialog
        open={!!selectedArticle}
        onOpenChange={() => setSelectedArticle(null)}
      >
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-primary/20">
          {selectedArticle && (
            <>
              {/* Modal Header Image */}
              <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

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
                dangerouslySetInnerHTML={{
                  __html: selectedArticle.fullContent,
                }}
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Blog;
