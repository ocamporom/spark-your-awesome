import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Rocket } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-slide-up">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-float">
            Renigo
          </h1>
          <p className="text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your ideas into reality with cutting-edge solutions
          </p>
          <Link to="/contact">
            <Button variant="emerald" size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-secondary transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
              <Zap className="text-secondary" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology stack.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Secure & Reliable</h3>
            <p className="text-muted-foreground">
              Your data is protected with enterprise-grade security and 99.9% uptime guarantee.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-accent transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
              <Rocket className="text-accent" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Scalable Solution</h3>
            <p className="text-muted-foreground">
              Grow without limits. Our platform scales seamlessly with your business needs.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-12 border border-border/50 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of satisfied customers and transform your business today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/projects">
                <Button variant="sapphire" size="lg">
                  View Projects
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="cyan" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
