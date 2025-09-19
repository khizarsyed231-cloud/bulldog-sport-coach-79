import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      name: "Discord Community",
      description: "Join our Discord server for real-time conversations, community support, and exclusive content.",
      icon: "💬",
      url: "https://discord.gg/dDYMDAXe2t",
      buttonText: "Join Discord"
    },
    {
      name: "Instagram",
      description: "Follow us for daily motivation, athlete spotlights, and behind-the-scenes content.",
      icon: "📸",
      url: "#", // TODO: Replace with actual Instagram URL
      buttonText: "Follow on Instagram"
    },
    {
      name: "Google Classroom",
      description: "Access educational resources, tutorials, and structured learning content for athletes.",
      icon: "📚",
      url: "https://classroom.google.com/c/ODAxOTk5MDUwNzgx?cjc=lbtimtnp",
      buttonText: "Join Classroom"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Contact <span className="bg-gradient-hero bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team and connect with the Bulldog Sports Analytics community across multiple platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="shadow-card hover:shadow-athletic transition-smooth">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{method.icon}</div>
                  <CardTitle className="text-xl">{method.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {method.description}
                  </p>
                  <Button 
                    variant={index === 0 ? "hero" : "outline"} 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open(method.url, '_blank')}
                  >
                    {method.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Get Support</CardTitle>
                <CardDescription>
                  Need help or have questions? Here's the best ways to reach us.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Quick Questions</h4>
                      <p className="text-sm text-muted-foreground">Join our Discord for immediate community support</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Learning Resources</h4>
                      <p className="text-sm text-muted-foreground">Check out our Google Classroom for tutorials and guides</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Daily Updates</h4>
                      <p className="text-sm text-muted-foreground">Follow our Instagram for the latest news and tips</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Response Times</CardTitle>
                <CardDescription>
                  Here's when you can expect to hear back from us.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Discord Messages</span>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">Real-time</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Instagram DMs</span>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">24-48 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Classroom Questions</span>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">Same day</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-subtle rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">💡 Pro Tip</h4>
                  <p className="text-xs text-muted-foreground">
                    For the fastest response, join our Discord community where fellow athletes and our team are active throughout the day!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto shadow-card bg-gradient-subtle">
              <CardHeader>
                <CardTitle className="text-2xl">Join Our Community Today!</CardTitle>
                <CardDescription>
                  Be part of a growing community of athletes dedicated to improving their performance through data-driven insights.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => window.open('https://discord.gg/dDYMDAXe2t', '_blank')}
                  >
                    Join Discord Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.location.href = '/#ai-advisor'}
                  >
                    Try AI Advisor
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

export default Contact;