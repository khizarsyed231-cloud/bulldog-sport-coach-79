import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import bulldogLogo from "@/assets/bulldog-logo.png";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img 
              src={bulldogLogo} 
              alt="Bulldog Sports & Analytics Club Logo" 
              className="w-12 h-12 object-contain drop-shadow-lg"
            />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg -z-10"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Bulldog Sports & Analytics Club
            </h1>
          </div>
        </div>
        <nav className="hidden lg:flex items-center space-x-4">
          <a href="/" className="text-foreground hover:text-primary transition-smooth text-sm font-medium px-3 py-2 rounded-md hover:bg-primary/10">
            Home
          </a>
          <a href="/training-programs" className="text-foreground hover:text-primary transition-smooth text-sm font-medium px-3 py-2 rounded-md hover:bg-primary/10">
            Training
          </a>
          <a href="/services" className="text-foreground hover:text-primary transition-smooth text-sm font-medium px-3 py-2 rounded-md hover:bg-primary/10">
            Services
          </a>
          <a href="/analytics" className="text-foreground hover:text-primary transition-smooth text-sm font-medium px-3 py-2 rounded-md hover:bg-primary/10">
            Analytics
          </a>
          <a href="/membership" className="text-foreground hover:text-primary transition-smooth text-sm font-medium px-3 py-2 rounded-md hover:bg-primary/10">
            Membership
          </a>
          <a href="/community" className="text-foreground hover:text-primary transition-smooth text-sm font-medium px-3 py-2 rounded-md hover:bg-primary/10">
            Community
          </a>
          <a href="/contact" className="text-foreground hover:text-primary transition-smooth text-sm font-medium px-3 py-2 rounded-md hover:bg-primary/10">
            Contact
          </a>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-2"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
          <Button 
            variant="athletic" 
            size="sm"
            onClick={() => window.location.href = '/membership'}
            className="ml-2"
          >
            Join Club
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;