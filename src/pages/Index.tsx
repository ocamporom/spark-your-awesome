import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
      
      <div className="text-center animate-slide-up relative z-10">
        <h1 className="text-8xl md:text-9xl font-bold mb-16 drop-shadow-[0_0_60px_rgba(255,255,255,0.8)] animate-float" style={{ color: '#FFFFFF' }}>
          Renigo
        </h1>
        
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          <Button variant="emerald" size="nav">
            Navigation
          </Button>
          <Link to="/home">
            <Button variant="sapphire" size="nav">
              Developers
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="cyan" size="nav">
              About Us
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="navy" size="nav">
              Projects
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="light" size="nav">
              Contact us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
