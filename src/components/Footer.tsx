import bulldogLogo from "@/assets/bulldog-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary-deep text-primary-foreground py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <img 
                  src={bulldogLogo} 
                  alt="Bulldog Sports & Analytics Club Logo" 
                  className="w-12 h-12 object-contain drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-white/20 rounded-full blur-lg -z-10"></div>
              </div>
              <h3 className="text-xl font-bold drop-shadow-sm">Bulldogs Analytics Sports Club</h3>
            </div>
            <p className="text-primary-foreground/90 max-w-md leading-relaxed">
              Empowering athletes with AI-driven insights and personalized training recommendations 
              to reach their peak performance.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground drop-shadow-sm">Services</h4>
            <ul className="space-y-3 text-primary-foreground/90">
              <li>
                <a href="/services" className="hover:text-primary-foreground transition-colors hover:drop-shadow-sm">
                  AI Sports Advisor
                </a>
              </li>
              <li>
                <a href="/analytics" className="hover:text-primary-foreground transition-colors hover:drop-shadow-sm">
                  Performance Analytics
                </a>
              </li>
              <li>
                <a href="/training-programs" className="hover:text-primary-foreground transition-colors hover:drop-shadow-sm">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary-foreground transition-colors hover:drop-shadow-sm">
                  Coaching Support
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground drop-shadow-sm">Club</h4>
            <ul className="space-y-3 text-primary-foreground/90">
              <li>
                <a href="/membership" className="hover:text-primary-foreground transition-colors hover:drop-shadow-sm">
                  Membership
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-primary-foreground transition-colors hover:drop-shadow-sm">
                  Events
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-primary-foreground transition-colors hover:drop-shadow-sm">
                  Community
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary-foreground transition-colors hover:drop-shadow-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 Bulldogs Analytics Sports Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;