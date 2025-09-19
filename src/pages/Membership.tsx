import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Membership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Membership <span className="bg-gradient-hero bg-clip-text text-transparent">Plans</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan to unlock your athletic potential with our AI-powered coaching and analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Free Plan */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Free Plan</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-4xl font-bold text-foreground">$0<span className="text-lg font-normal text-muted-foreground">/month</span></div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Basic AI sports advice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>General training recommendations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Access to training program directory</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Community access</span>
                  </div>
                </div>

                <Button variant="outline" size="lg" className="w-full">
                  Current Plan
                </Button>
              </CardContent>
            </Card>

            {/* AI+ Plan */}
            <Card className="shadow-card border-primary/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-hero text-white px-4 py-1 text-sm font-semibold">
                RECOMMENDED
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">AI+ Plan</CardTitle>
                <CardDescription>Advanced AI coaching and analytics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-4xl font-bold text-foreground">$1<span className="text-lg font-normal text-muted-foreground">/month</span></div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Advanced AI analysis with detailed insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Personalized training plans</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Nutrition and recovery recommendations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Progress tracking and analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Priority support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Access to exclusive content</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Higher accuracy AI results</span>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Upgrade to AI+
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="max-w-2xl mx-auto shadow-card bg-gradient-subtle">
              <CardHeader>
                <CardTitle className="text-2xl">Why Upgrade to AI+?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  For just $1, you can unlock our advanced AI capabilities that provide more accurate, 
                  detailed, and personalized coaching advice. Get better results faster with our premium 
                  analytics engine that considers advanced performance metrics and provides actionable insights 
                  tailored specifically to your athletic goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg">
                    Start AI+ Today
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => window.location.href = '/#ai-advisor'}>
                    Try Free Version First
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Membership;