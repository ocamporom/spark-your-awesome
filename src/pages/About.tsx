import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-6xl font-bold mb-6">About Renigo</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to revolutionize the way businesses operate through innovative technology and exceptional service.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-card/40 backdrop-blur-sm rounded-3xl p-12 border border-border/50 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Founded in 2024, Renigo emerged from a simple vision: to make cutting-edge technology accessible to businesses of all sizes. We believe that innovation shouldn't be limited to large corporations with massive budgets.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we're proud to serve thousands of clients worldwide, helping them achieve their goals through our comprehensive suite of services and unwavering commitment to excellence.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-secondary transition-all duration-300 hover:scale-105 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Users className="text-secondary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Team First</h3>
            <p className="text-muted-foreground">
              We invest in our people because great teams build great products.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary transition-all duration-300 hover:scale-105 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Goal Driven</h3>
            <p className="text-muted-foreground">
              Every decision we make is guided by measurable outcomes.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-accent transition-all duration-300 hover:scale-105 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Award className="text-accent" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Excellence</h3>
            <p className="text-muted-foreground">
              We strive for perfection in everything we do.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-destructive transition-all duration-300 hover:scale-105 text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Heart className="text-destructive" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Passion</h3>
            <p className="text-muted-foreground">
              We love what we do and it shows in our work.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-12 border border-border/50 mb-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-5xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <div className="text-5xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.9s' }}>
              <div className="text-5xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of something bigger. Let's create the future together.
          </p>
          <Link to="/contact">
            <Button variant="emerald" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
