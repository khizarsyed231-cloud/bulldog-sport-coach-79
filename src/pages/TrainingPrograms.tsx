import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TrainingPrograms = () => {
  const programs = [
    {
      name: "Academy Training & Performance Center",
      location: "Sacramento, CA",
      description: "Elite athletic training and performance center offering personalized coaching and state-of-the-art facilities.",
      website: "https://www.theacademyfitness.com/",
      specialties: ["Personal Training", "Group Classes", "Athletic Performance"]
    },
    {
      name: "GAME-FIT Sacramento",
      location: "Sacramento, CA", 
      description: "Athletic group training classes for athletes, men, women and youth. Specialized in sports performance training.",
      website: "http://game-fit.com/",
      specialties: ["Group Training", "Personal Training", "Sports Performance"]
    },
    {
      name: "American River College Kinesiology",
      location: "Sacramento, CA",
      description: "College-level athletics and kinesiology programs with professional coaching and training facilities.",
      website: "https://arc.losrios.edu/kinesiology-and-athletics",
      specialties: ["College Athletics", "Kinesiology", "Sports Science"]
    },
    {
      name: "City Sports Club - Landpark",
      location: "3580 Crocker Drive, Sacramento, CA",
      description: "Full-service fitness club with group fitness classes, sports courts, and training programs.",
      website: "https://www.citysportsfitness.com/pages/clubhome.aspx?clubid=1312&Sacramento-California%20GYM=",
      specialties: ["Group Fitness", "Sports Courts", "General Training"]
    },
    {
      name: "Sport Courts Fitness",
      location: "Sacramento, CA",
      description: "Multi-sport facility offering court rentals and training for basketball, volleyball, futsal and pickleball.",
      website: "https://sportcourtsfitness.com/",
      specialties: ["Court Sports", "Basketball", "Volleyball", "Pickleball"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Training Programs <span className="bg-gradient-hero bg-clip-text text-transparent">Near Sacramento</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover top-rated athletic training programs and facilities in the Sacramento area to help you reach your performance goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="shadow-card hover:shadow-athletic transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl">{program.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    📍 {program.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed">{program.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(program.website, '_blank')}
                  >
                    Visit Website
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Can't Find What You're Looking For?</CardTitle>
                <CardDescription>
                  Our AI advisor can help you find the perfect training program based on your specific needs and goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.location.href = '/#ai-advisor'}
                >
                  Get AI Recommendations
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrainingPrograms;