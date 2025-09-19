import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Community <span className="bg-gradient-hero bg-clip-text text-transparent">Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with fellow athletes, share your journey, and be part of our growing sports analytics community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Folsom High School Partnership */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <span>🏫</span>
                  <span>Folsom High School Partnership</span>
                </CardTitle>
                <CardDescription>
                  Official partnership with Folsom High School Athletics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We're proud to partner with Folsom High School, providing AI-powered sports analytics 
                  and training recommendations to their student athletes. Join the Bulldogs community 
                  and access exclusive resources tailored for high school athletics.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Student athlete resources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Coach collaboration tools</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Team performance analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Academic integration</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://fhs.fcusd.org/', '_blank')}
                >
                  Visit Folsom High School
                </Button>
              </CardContent>
            </Card>

            {/* Community Features */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <span>👥</span>
                  <span>Community Features</span>
                </CardTitle>
                <CardDescription>
                  Connect, share, and grow together
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Join thousands of athletes sharing their training journey, celebrating wins, 
                  and supporting each other's athletic goals. Our community is built on mutual 
                  respect and shared passion for sports excellence.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Share training progress</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Ask questions and get advice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Connect with local athletes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Participate in challenges</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://discord.gg/9hxz8wXzjs', '_blank')}
                  >
                    Join Our Discord
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://www.instagram.com/bulldogsportsanalyticsclub/', '_blank')}
                  >
                    Follow on Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Community Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="text-center shadow-card">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
                <p className="text-sm text-muted-foreground">Active Athletes</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Sports Covered</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">15K+</div>
                <p className="text-sm text-muted-foreground">AI Consultations</p>
              </CardContent>
            </Card>
          </div>

          {/* Community Guidelines */}
          <div className="mt-16">
            <Card className="shadow-card bg-gradient-subtle">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center space-x-2">
                      <span>✅</span>
                      <span>What We Encourage</span>
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Sharing training tips and experiences</li>
                      <li>• Supporting fellow athletes</li>
                      <li>• Asking thoughtful questions</li>
                      <li>• Celebrating achievements</li>
                      <li>• Constructive feedback</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center space-x-2">
                      <span>❌</span>
                      <span>What We Don't Allow</span>
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Inappropriate or offensive content</li>
                      <li>• Spam or self-promotion</li>
                      <li>• Negativity or discouraging comments</li>
                      <li>• Sharing personal information</li>
                      <li>• Off-topic discussions</li>
                    </ul>
                  </div>
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

export default Community;