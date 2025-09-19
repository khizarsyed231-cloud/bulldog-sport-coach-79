import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      name: "Athletic Photo Editing",
      description: "Professional photo editing to showcase your athletic achievements and create stunning sports portraits.",
      icon: "📸",
      features: [
        "Action shot enhancement",
        "Background replacement", 
        "Color correction & lighting",
        "Team photo composition",
        "Social media optimization"
      ]
    },
    {
      name: "Video Highlight Reels", 
      description: "Create compelling video content that highlights your best athletic moments and skills.",
      icon: "🎥",
      features: [
        "Game footage compilation",
        "Skill demonstration videos",
        "Recruitment video creation",
        "Social media clips",
        "Professional transitions & effects"
      ]
    },
    {
      name: "Sports Portfolio Creation",
      description: "Complete digital portfolio to showcase your athletic potential to coaches and recruiters.",
      icon: "📁",
      features: [
        "Professional layout design",
        "Stat integration",
        "Photo & video curation", 
        "Achievement highlights",
        "Recruiter-friendly format"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Submit Your Content",
      description: "Upload your photos, videos, or raw footage through our secure portal."
    },
    {
      step: "2", 
      title: "Consultation & Planning",
      description: "We discuss your goals, target audience, and desired style for the final product."
    },
    {
      step: "3",
      title: "Professional Editing",
      description: "Our team works their magic using industry-standard tools and techniques."
    },
    {
      step: "4",
      title: "Review & Revisions",
      description: "You review the work and we make any necessary adjustments to ensure perfection."
    },
    {
      step: "5",
      title: "Final Delivery",
      description: "Receive your polished content in multiple formats ready for any platform."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Creative <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional photo and video editing services to help athletes showcase their potential and stand out from the competition.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-athletic transition-smooth">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button variant="hero" size="lg" className="w-full">
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Process</h2>
              <p className="text-lg text-muted-foreground">From raw content to polished perfection in 5 simple steps</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Why Choose Our Services?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Sports-Focused Expertise</h4>
                      <p className="text-sm text-muted-foreground">We understand athletics and know how to capture the power, emotion, and skill in every frame.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Fast Turnaround</h4>
                      <p className="text-sm text-muted-foreground">We know timing is crucial in sports. Most projects completed within 3-5 business days.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Student-Athlete Focused</h4>
                      <p className="text-sm text-muted-foreground">We understand the unique needs of student-athletes and provide flexible, accessible creative services.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Unlimited Revisions</h4>
                      <p className="text-sm text-muted-foreground">We work until you're completely satisfied with the final result.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-subtle">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to Showcase Your Potential?</CardTitle>
                <CardDescription>
                  Let us help you create content that gets you noticed by coaches, recruiters, and fans.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Whether you need a single photo touched up or a complete recruiting video package, 
                    we're here to help you put your best foot forward and make a lasting impression.
                  </p>
                  
                  <div className="flex flex-col space-y-3">
                    <Button variant="hero" size="lg" className="w-full">
                      Start Your Project
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      View Portfolio Examples
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Questions About Our Services?</CardTitle>
                <CardDescription>
                  Get in touch with our creative team to discuss your project needs and get a custom quote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" onClick={() => window.location.href = '/contact'}>
                    Contact Us
                  </Button>
                  <Button variant="outline" size="lg">
                    Request Quote
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

export default Services;