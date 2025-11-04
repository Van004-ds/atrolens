import { Card } from "@/components/ui/card";
import { Telescope, Target, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="p-6 space-y-8">
      <div className="space-y-2 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          About AstroLens
        </h1>
        <p className="text-xl text-muted-foreground">
          Exploring the universe, one exoplanet at a time
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Mission Statement */}
        <Card className="p-8 bg-gradient-to-br from-card to-muted border-border">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                AstroLens is dedicated to making exoplanet discovery accessible to everyone. 
                We curate and present the latest findings in exoplanetary science, helping you 
                explore distant worlds and understand humanity's place in the cosmos. Our platform 
                brings together data from various space missions and telescopes to create a 
                comprehensive view of planets beyond our solar system.
              </p>
            </div>
          </div>
        </Card>

        {/* What We Offer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-primary/10 w-fit">
                <Telescope className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Comprehensive Database</h3>
              <p className="text-muted-foreground">
                Access detailed information about hundreds of exoplanets, including their 
                characteristics, discovery dates, and potential for habitability.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-secondary/50 transition-colors">
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-secondary/10 w-fit">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Latest Discoveries</h3>
              <p className="text-muted-foreground">
                Stay updated with breaking news and recent findings from the world's leading 
                space agencies and research institutions.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-accent/10 w-fit">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">For Everyone</h3>
              <p className="text-muted-foreground">
                Whether you're a student, educator, or space enthusiast, our intuitive 
                interface makes exploring the cosmos accessible to all.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-primary/10 w-fit">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Search & Compare</h3>
              <p className="text-muted-foreground">
                Advanced search capabilities and comparison tools help you analyze and 
                understand the diversity of worlds beyond our solar system.
              </p>
            </div>
          </Card>
        </div>

        {/* The Journey */}
        <Card className="p-8 bg-gradient-to-br from-card to-muted border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Journey Ahead</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The search for exoplanets represents one of humanity's most ambitious scientific 
            endeavors. Since the first confirmed detection in the 1990s, we've discovered 
            thousands of worlds orbiting distant stars. Each discovery brings us closer to 
            answering fundamental questions: Are we alone? What other Earth-like worlds exist?
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With next-generation telescopes and advanced detection methods, we're entering a 
            golden age of exoplanet discovery. AstroLens is your window into this exciting 
            frontier, bringing the universe closer to home, one planet at a time.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
