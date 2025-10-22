import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center animate-slide-up">
        <h1 className="text-8xl md:text-9xl font-bold mb-12 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-float">
          Renigo
        </h1>
        
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 px-4">
          <Link to="/home">
            <Button variant="sapphire" size="nav">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="cyan" size="nav">
              About Us
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
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

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default Index;
