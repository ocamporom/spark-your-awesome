import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Palette, Smartphone, Globe, Database, Cloud } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A scalable e-commerce solution serving 100K+ daily users with real-time inventory management.",
      icon: Globe,
      color: "secondary",
      tags: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and instant transactions.",
      icon: Smartphone,
      color: "primary",
      tags: ["React Native", "Security", "API"]
    },
    {
      title: "Design System",
      description: "Comprehensive UI component library used across 50+ applications in a Fortune 500 company.",
      icon: Palette,
      color: "accent",
      tags: ["Design", "React", "Storybook"]
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time analytics platform powered by machine learning for predictive insights.",
      icon: Database,
      color: "secondary",
      tags: ["AI/ML", "Python", "React"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Managed cloud infrastructure solution supporting 99.99% uptime for enterprise clients.",
      icon: Cloud,
      color: "primary",
      tags: ["AWS", "DevOps", "Kubernetes"]
    },
    {
      title: "Developer Tools",
      description: "Suite of developer productivity tools used by 10K+ developers worldwide.",
      icon: Code,
      color: "accent",
      tags: ["CLI", "VS Code", "TypeScript"]
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have transformed businesses and delighted users.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="group bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 bg-${project.color}/20 rounded-full flex items-center justify-center mb-6`}>
                  <Icon className={`text-${project.color}`} size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-muted/50 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="group-hover:text-primary transition-colors">
                  View Details
                  <ExternalLink className="ml-2" size={16} />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-12 border border-border/50 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Project Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">1M+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our expertise and passion for excellence.
          </p>
          <Link to="/contact">
            <Button variant="sapphire" size="lg">
              Start a Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
