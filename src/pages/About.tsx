import { Button } from "@/components/ui/button";
import { ArrowLeft, Instagram } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-foreground mb-8">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">Bulldog Sports & Analytics Club</span>
          </h1>
          <div className="flex justify-center mb-8">
            <Button 
              variant="outline"
              onClick={() => window.open('https://www.instagram.com/bulldogsportsanalyticsclub', '_blank')}
              className="flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              Follow us on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do & Why We Do It */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What We Do */}
            <div className="bg-card p-8 rounded-lg shadow-card">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🏀</div>
                <h2 className="text-3xl font-bold text-foreground mb-6">What we do?</h2>
              </div>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-4"></span>
                  Clean up local parks
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-4"></span>
                  Play sports after cleanup
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-4"></span>
                  Analyze data from school sports
                </li>
              </ul>
            </div>

            {/* Why We Do It */}
            <div className="bg-card p-8 rounded-lg shadow-card">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">⚽</div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Why we do it?</h2>
              </div>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary rounded-full mr-4"></span>
                  Keeps us physically active
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary rounded-full mr-4"></span>
                  Simple and fun way to give back to our community
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary rounded-full mr-4"></span>
                  Connect with new people
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join The Club Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="flex justify-center space-x-8 mb-8">
              <div className="text-6xl">🐕</div>
              <div className="text-6xl">🏈</div>
              <div className="text-6xl">⚾</div>
            </div>
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Join The Club
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Ready to make a difference in your community while staying active and having fun? 
              Join the Bulldogs and be part of something bigger!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Community Impact</h3>
              <p className="text-primary-foreground/80">Make your neighborhood better while building lasting friendships</p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl mb-4">💪</div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Stay Active</h3>
              <p className="text-primary-foreground/80">Combine community service with sports and fitness activities</p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Learn Analytics</h3>
              <p className="text-primary-foreground/80">Develop data analysis skills through real sports statistics</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary"
                onClick={() => window.open('https://discord.gg/9hxz8wXzjs', '_blank')}
                className="px-8 py-4 text-lg font-semibold"
              >
                Join Our Discord
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="px-8 py-4 text-lg font-semibold bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20"
              >
                Back to Home
              </Button>
            </div>
            <p className="text-primary-foreground/70">
              Join our Discord community and contact us about membership and upcoming events
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;