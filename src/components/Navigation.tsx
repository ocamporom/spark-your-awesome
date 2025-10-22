import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isIndexPage = location.pathname === "/";

  const navItems = [
    { label: "Home", path: "/home", variant: "sapphire" as const },
    { label: "About Us", path: "/about", variant: "cyan" as const },
    { label: "Projects", path: "/projects", variant: "navy" as const },
    { label: "Contact us", path: "/contact", variant: "light" as const },
  ];

  if (isIndexPage) return null;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Renigo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button 
                  variant={item.variant}
                  size="lg"
                  className={location.pathname === item.path ? "ring-2 ring-ring" : ""}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-slide-up">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="block">
                <Button 
                  variant={item.variant}
                  size="lg"
                  className={`w-full ${location.pathname === item.path ? "ring-2 ring-ring" : ""}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
