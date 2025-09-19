import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-subtle py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Elevate Your
            <span className="bg-gradient-hero bg-clip-text text-transparent drop-shadow-sm"> Athletic Performance</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Get personalized AI-powered coaching advice tailored to your sport, position, and physical attributes. 
            Join the Bulldog Sports Analytics Club and unlock your potential.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById('ai-advisor')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative group"
          >
            <span className="relative z-10">Try AI Sports Advisor</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/20 to-primary/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '/about'}
          >
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gradient-card p-8 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 border border-border/50">
            <div className="text-4xl mb-6 filter drop-shadow-sm">🎯</div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Personalized Analysis</h3>
            <p className="text-muted-foreground leading-relaxed">Get tailored advice based on your specific sport, position, and physical attributes.</p>
          </div>
          
          <div className="bg-gradient-card p-8 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 border border-border/50">
            <div className="text-4xl mb-6 filter drop-shadow-sm">📊</div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Data-Driven Insights</h3>
            <p className="text-muted-foreground leading-relaxed">Our AI analyzes performance patterns to provide actionable improvement strategies.</p>
          </div>
          
          <div className="bg-gradient-card p-8 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 border border-border/50">
            <div className="text-4xl mb-6 filter drop-shadow-sm">🏆</div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Proven Results</h3>
            <p className="text-muted-foreground leading-relaxed">Join thousands of athletes who have improved their game with our guidance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;