import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { exoplanets } from "@/data/exoplanets";
import { ArrowLeft, Star, Gauge, Orbit, Globe, Calendar } from "lucide-react";

const PlanetDetail = () => {
  const { id } = useParams();
  const planet = exoplanets.find(p => p.id === id);

  if (!planet) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Planet not found</h1>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Explore
            </Button>
          </Link>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {planet.name}
                </h1>
                <Badge variant={planet.habitableZone ? "default" : "secondary"} className="text-base">
                  {planet.habitableZone ? "Habitable Zone" : planet.type}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2 text-xl text-muted-foreground">
                <Star className="w-5 h-5" />
                <span>Orbiting {planet.starName}</span>
              </div>
            </div>

            {/* Description */}
            <Card className="p-8 bg-gradient-to-br from-card to-muted border-border">
              <p className="text-lg text-foreground leading-relaxed">
                {planet.description}
              </p>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Discovery Year</p>
                    <p className="text-2xl font-bold text-foreground">{planet.discoveryYear}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-secondary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Distance from Earth</p>
                    <p className="text-2xl font-bold text-foreground">{planet.distanceFromEarth} ly</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Orbit className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Orbital Period</p>
                    <p className="text-2xl font-bold text-foreground">{planet.orbitalPeriod} days</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Gauge className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Mass</p>
                    <p className="text-2xl font-bold text-foreground">{planet.mass} M<sub>J</sub></p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-secondary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Radius</p>
                    <p className="text-2xl font-bold text-foreground">{planet.radius} R<sub>J</sub></p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Planet Type</p>
                    <p className="text-2xl font-bold text-foreground">{planet.type}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanetDetail;
