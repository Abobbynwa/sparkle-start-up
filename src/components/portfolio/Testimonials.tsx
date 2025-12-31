import { useEffect, useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "CEO, TechStartup Inc.",
    content:
      "Valentine delivered an exceptional e-commerce platform. His attention to security details and clean code architecture exceeded our expectations. Highly recommended!",
    rating: 5,
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CTO, FinanceApp",
    content:
      "Working with Valentine on our security audit was a game-changer. He identified critical vulnerabilities and provided clear, actionable solutions. Professional and thorough.",
    rating: 5,
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "David Okonkwo",
    role: "Founder, EduTech Solutions",
    content:
      "The school management system Valentine built transformed our operations. His understanding of both technical and business requirements is remarkable.",
    rating: 5,
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Emily Williams",
    role: "Product Manager, CloudScale",
    content:
      "Valentine's DevOps expertise helped us reduce deployment time by 70%. His CI/CD implementation was seamless and well-documented.",
    rating: 5,
    avatar: "/placeholder.svg",
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-2">
            Client <span className="gradient-text">Reviews</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <Quote className="w-12 h-12 text-primary/30 mb-6" />

              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  )
                )}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-bold font-mono text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-border hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-border hover:border-primary hover:text-primary"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
