import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const AIAdvisor = () => {
  const [sport, setSport] = useState("");
  const [position, setPosition] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [calorieIntake, setCalorieIntake] = useState("");
  const [improvementGoal, setImprovementGoal] = useState("");
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const getSportsEmoji = (sportInput: string) => {
    const sport = sportInput.toLowerCase();
    if (sport.includes('basketball')) return '🏀';
    if (sport.includes('football') || sport.includes('american football')) return '🏈';
    if (sport.includes('soccer') || sport.includes('football')) return '⚽';
    if (sport.includes('tennis')) return '🎾';
    if (sport.includes('baseball')) return '⚾';
    if (sport.includes('golf')) return '⛳';
    if (sport.includes('hockey')) return '🏒';
    if (sport.includes('volleyball')) return '🏐';
    if (sport.includes('swimming')) return '🏊‍♂️';
    if (sport.includes('running') || sport.includes('track')) return '🏃‍♂️';
    if (sport.includes('cycling')) return '🚴‍♂️';
    if (sport.includes('boxing')) return '🥊';
    if (sport.includes('wrestling')) return '🤼‍♂️';
    if (sport.includes('weightlifting') || sport.includes('powerlifting')) return '🏋️‍♂️';
    if (sport.includes('gymnastics')) return '🤸‍♂️';
    if (sport.includes('skiing')) return '⛷️';
    if (sport.includes('snowboarding')) return '🏂';
    if (sport.includes('surfing')) return '🏄‍♂️';
    if (sport.includes('climbing')) return '🧗‍♂️';
    if (sport.includes('martial arts') || sport.includes('karate') || sport.includes('taekwondo')) return '🥋';
    if (sport.includes('fencing')) return '🤺';
    if (sport.includes('archery')) return '🏹';
    if (sport.includes('rowing')) return '🚣‍♂️';
    if (sport.includes('sailing')) return '⛵';
    return '🏃‍♂️'; // Default to runner
  };

  const getSportsPlayer = (sportInput: string) => {
    const sport = sportInput.toLowerCase();
    if (sport.includes('basketball')) return '⛹️‍♂️';
    if (sport.includes('football') || sport.includes('american football')) return '🏈';
    if (sport.includes('soccer')) return '⚽';
    if (sport.includes('tennis')) return '🎾';
    if (sport.includes('baseball')) return '⚾';
    if (sport.includes('golf')) return '🏌️‍♂️';
    if (sport.includes('hockey')) return '🏒';
    if (sport.includes('volleyball')) return '🏐';
    if (sport.includes('swimming')) return '🏊‍♂️';
    if (sport.includes('running') || sport.includes('track')) return '🏃‍♂️';
    if (sport.includes('cycling')) return '🚴‍♂️';
    if (sport.includes('boxing')) return '🥊';
    if (sport.includes('wrestling')) return '🤼‍♂️';
    if (sport.includes('weightlifting') || sport.includes('powerlifting')) return '🏋️‍♂️';
    if (sport.includes('gymnastics')) return '🤸‍♂️';
    if (sport.includes('skiing')) return '⛷️';
    if (sport.includes('snowboarding')) return '🏂';
    if (sport.includes('surfing')) return '🏄‍♂️';
    if (sport.includes('climbing')) return '🧗‍♂️';
    if (sport.includes('martial arts') || sport.includes('karate') || sport.includes('taekwondo')) return '🥋';
    if (sport.includes('fencing')) return '🤺';
    if (sport.includes('archery')) return '🏹';
    if (sport.includes('rowing')) return '🚣‍♂️';
    if (sport.includes('sailing')) return '⛵';
    return '🏃‍♂️'; // Default to runner
  };

  const generateAdvice = async () => {
    if (!sport.trim() || !position.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in your sport and position to get personalized advice.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simple sport validation
    const sportKeywords = [
      'football', 'basketball', 'baseball', 'soccer', 'tennis', 'golf', 'hockey', 'volleyball', 
      'swimming', 'track', 'field', 'wrestling', 'boxing', 'martial arts', 'rugby', 'lacrosse',
      'softball', 'badminton', 'ping pong', 'table tennis', 'cycling', 'running', 'marathon',
      'triathlon', 'gymnastics', 'diving', 'skiing', 'snowboarding', 'surfing', 'climbing',
      'weightlifting', 'powerlifting', 'crossfit', 'mma', 'judo', 'karate', 'taekwondo',
      'fencing', 'archery', 'polo', 'cricket', 'rowing', 'sailing', 'equestrian'
    ];

    const isSportRelated = sportKeywords.some(keyword => 
      sport.toLowerCase().includes(keyword.toLowerCase())
    );

    if (!isSportRelated) {
      setAdvice("I'm sorry, but I can only provide advice related to sports and athletic performance. Please enter a valid sport to get personalized training recommendations.");
      setIsLoading(false);
      return;
    }

    // Simulate AI processing
    setTimeout(() => {
      const weightNum = weight ? parseInt(weight) : null;
      const heightNum = height ? parseInt(height) : null;
      const caloriesNum = calorieIntake ? parseInt(calorieIntake) : null;
      
      // Generate specific, factual advice
      let nutritionAdvice = "";
      let trainingAdvice = "";
      let dietComposition = "";
      let gymExercises = "";
      
      // Modern athlete nutrition standards with specific food recommendations
      if (caloriesNum && weightNum) {
        const proteinGrams = Math.round(weightNum * 1.6); // 1.6g per lb for elite athletes (updated 2025 standards)
        const fatGrams = Math.round(weightNum * 0.5); // 0.5g per lb for hormone optimization
        
        // Updated BMR calculation using Mifflin-St Jeor equation
        const heightInches = heightNum || 70;
        const weightKg = weightNum * 0.453592;
        const heightCm = heightInches * 2.54;
        const estimatedBMR = Math.round((10 * weightKg) + (6.25 * heightCm) - (5 * 25) + 5); // assuming 25 years old
        const estimatedTDEE = Math.round(estimatedBMR * 1.8); // high activity multiplier for athletes
        
        // Calculate carb needs for performance
        const carbGrams = Math.round((estimatedTDEE - (proteinGrams * 4) - (fatGrams * 9)) / 4);
        
        // Food recommendations
        const proteinFoods = "chicken breast (31g/100g), lean beef (26g/100g), salmon (25g/100g), Greek yogurt (20g/cup), eggs (6g/egg)";
        const fatFoods = "avocado (21g/medium), nuts/seeds (15-20g/oz), olive oil (14g/tbsp), fatty fish omega-3s";
        const carbFoods = "oats (27g/cup), sweet potato (26g/medium), rice (45g/cup), bananas (27g/large)";
        
        if (caloriesNum < estimatedTDEE - 400) {
          nutritionAdvice = `increase to ${estimatedTDEE} calories for peak performance and recovery`;
          dietComposition = `${proteinGrams}g protein (${proteinFoods}), ${fatGrams}g fats (${fatFoods}), ${carbGrams}g carbs (${carbFoods})`;
        } else if (caloriesNum > estimatedTDEE + 400) {
          nutritionAdvice = `optimize at ${estimatedTDEE} calories for lean muscle and performance`;
          dietComposition = `prioritize ${proteinGrams}g protein (${proteinFoods}), ${fatGrams}g healthy fats (${fatFoods}), time carbs around training`;
        } else {
          nutritionAdvice = `maintain ${caloriesNum} calories - excellent for your training demands`;
          dietComposition = `continue ${proteinGrams}g protein (${proteinFoods}), ${fatGrams}g fats (${fatFoods}), ${carbGrams}g carbs (${carbFoods})`;
        }
      } else if (weightNum) {
        const proteinGrams = Math.round(weightNum * 1.6);
        const fatGrams = Math.round(weightNum * 0.5);
        nutritionAdvice = "focus on nutrient timing and food quality for optimal performance";
        dietComposition = `${proteinGrams}g protein from lean meats/fish/eggs, ${fatGrams}g fats from nuts/avocado/olive oil, complex carbs from oats/rice/sweet potatoes`;
      } else {
        nutritionAdvice = "follow modern athlete nutrition protocols with precise macronutrient timing";
        dietComposition = "1.6g protein per lb (chicken, fish, eggs), 0.5g fats per lb (nuts, avocado), 2-3g carbs per lb on training days";
      }
      
      // Sport-specific training recommendations
      const sportLower = sport.toLowerCase();
      const positionLower = position.toLowerCase();
      
      if (sportLower.includes('basketball')) {
        if (positionLower.includes('guard') || positionLower.includes('point')) {
          trainingAdvice = "do cone drills, ladder agility, reaction ball training";
          gymExercises = "squats, deadlifts, box jumps, lateral lunges, medicine ball throws";
        } else {
          trainingAdvice = "practice post moves, rebounding drills, vertical jump training";
          gymExercises = "squats, deadlifts, pull-ups, bench press, calf raises, core work";
        }
      } else if (sportLower.includes('football')) {
        if (positionLower.includes('quarterback')) {
          trainingAdvice = "work on pocket presence, 3-step drops, accuracy drills";
          gymExercises = "bench press, shoulder press, rotational core, leg strength";
        } else if (positionLower.includes('receiver') || positionLower.includes('back')) {
          trainingAdvice = "run route trees, acceleration sprints, catching drills";
          gymExercises = "squats, power cleans, plyometrics, sprint intervals";
        } else {
          trainingAdvice = "practice blocking techniques, explosion drills, tackle fundamentals";
          gymExercises = "deadlifts, squats, bench press, farmers walks, sled pushes";
        }
      } else if (sportLower.includes('soccer')) {
        trainingAdvice = "do passing accuracy, first touch drills, 1v1 situations";
        gymExercises = "squats, lunges, calf raises, core stability, plyometric jumps";
      } else {
        trainingAdvice = "focus on sport-specific movements, reaction time, conditioning";
        gymExercises = "compound lifts: squats, deadlifts, bench press, rows, overhead press";
      }
      
      // Add improvement goal if specified
      let goalAdvice = "";
      if (improvementGoal.trim()) {
        const goal = improvementGoal.toLowerCase();
        if (goal.includes('speed') || goal.includes('sprint')) {
          goalAdvice = " and do 40-yard dashes, hill sprints, resisted runs 3x/week";
        } else if (goal.includes('jump') || goal.includes('vertical')) {
          goalAdvice = " and add depth jumps, box jumps, jump squats to your routine";
        } else if (goal.includes('strength')) {
          goalAdvice = " and increase your big 3 lifts (squat, bench, deadlift) progressively";
        } else {
          goalAdvice = ` and practice ${goal} with dedicated skill sessions 4-5x/week`;
        }
      }
      
      const adviceText = `🏃‍♂️ NUTRITION: ${nutritionAdvice}

📊 DIET BREAKDOWN: ${dietComposition}

🏋️‍♂️ SPORT TRAINING: ${trainingAdvice}

💪 GYM WORKOUTS: ${gymExercises}${goalAdvice}

💡 TIP: Stay consistent with your nutrition and training for 4-6 weeks to see results!`;
      
      setAdvice(adviceText);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section id="ai-advisor" className="py-20 px-4 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary-glow/3"></div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            AI Sports <span className="bg-gradient-hero bg-clip-text text-transparent">Advisor</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized training advice based on your sport, position, and physical attributes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-elegant hover:shadow-glow transition-all duration-500 bg-gradient-card border border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Tell Us About Yourself</CardTitle>
              <CardDescription>
                Enter your athletic information to receive personalized advice
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="sport">What sport do you play?</Label>
                <Input
                  id="sport"
                  placeholder="e.g., Basketball, Football, Soccer, Any sport for fun"
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="position">What position do you play?</Label>
                <Input
                  id="position"
                  placeholder="e.g., Point Guard, Quarterback, Midfielder"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height">Height (inches) - <span className="text-sm text-muted-foreground">Recommended</span></Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="e.g., 70 (optional but helpful for personalized advice)"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (lbs) - <span className="text-sm text-muted-foreground">Recommended</span></Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="e.g., 175 (optional but helpful for personalized advice)"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="calories">Average Daily Calorie Intake - <span className="text-sm text-muted-foreground">Recommended</span></Label>
                <Input
                  id="calories"
                  type="number"
                  placeholder="e.g., 2500 (optional but helps with nutrition advice)"
                  value={calorieIntake}
                  onChange={(e) => setCalorieIntake(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="improvement">What do you want to improve on specifically? (Optional)</Label>
                <Textarea
                  id="improvement"
                  placeholder="e.g., Vertical jump, Speed, Endurance, Shooting accuracy..."
                  value={improvementGoal}
                  onChange={(e) => setImprovementGoal(e.target.value)}
                  rows={3}
                />
              </div>
              
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={generateAdvice}
                disabled={isLoading}
              >
                {isLoading ? "Analyzing..." : "Get AI Advice"}
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-glow transition-all duration-500 bg-gradient-card border border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Your Personalized Advice</CardTitle>
              <CardDescription>
                AI-generated recommendations tailored to your profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              {advice ? (
                <div className="bg-gradient-subtle p-6 rounded-lg border border-border/50">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-4xl animate-bounce-gentle">
                      {sport ? getSportsPlayer(sport) : '🏃‍♂️'}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-primary">Your Personalized Training Plan</h3>
                    </div>
                  </div>
                  <pre className="whitespace-pre-wrap text-sm text-foreground font-medium leading-relaxed">
                    {advice}
                  </pre>
                </div>
              ) : (
                <div className="bg-muted/50 p-8 rounded-lg text-center border border-border/30">
                  <div className="text-6xl mb-6 animate-float">
                    {sport ? getSportsEmoji(sport) : '🏃‍♂️'}
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {sport ? 
                      `Ready to get personalized ${sport} advice! Fill in your details and click "Get AI Advice" to receive your custom training plan.` :
                      "Choose your sport above and fill in your information to receive personalized training advice from our AI coach."
                    }
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;