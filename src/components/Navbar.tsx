
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary">
              EduMentor
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Início
              </a>
              <a href="#features" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Recursos
              </a>
              <a href="#about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Sobre
              </a>
              <Button variant="default" size="sm">
                Entrar
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            Início
          </a>
          <a
            href="#features"
            className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            Recursos
          </a>
          <a
            href="#about"
            className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            Sobre
          </a>
          <div className="pt-4 pb-3">
            <Button variant="default" className="w-full">
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
