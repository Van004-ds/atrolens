import { Card } from "@/components/ui/card";
import { exoplanets } from "@/data/exoplanets";
import { Globe, Star, Gauge, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const totalPlanets = exoplanets.length;
  const habitablePlanets = exoplanets.filter(p => p.habitableZone).length;
  const avgDistance = Math.round(exoplanets.reduce((acc, p) => acc + p.distanceFromEarth, 0) / totalPlanets);
  const latestYear = Math.max(...exoplanets.map(p => p.discoveryYear));
  
  const typeDistribution = exoplanets.reduce((acc, planet) => {
    acc[planet.type] = (acc[planet.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const yearDistribution = exoplanets.reduce((acc, planet) => {
    acc[planet.discoveryYear] = (acc[planet.discoveryYear] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  return (
    <div className="p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Mission Dashboard
        </h1>
        <p className="text-muted-foreground">
          Overview of exoplanet discoveries and statistics
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-card to-muted border-border hover:border-primary/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Exoplanets</p>
              <p className="text-3xl font-bold text-foreground">{totalPlanets}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-card to-muted border-border hover:border-secondary/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-secondary/10">
              <Star className="w-6 h-6 text-secondary" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Habitable Zone</p>
              <p className="text-3xl font-bold text-foreground">{habitablePlanets}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-card to-muted border-border hover:border-accent/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent/10">
              <Gauge className="w-6 h-6 text-accent" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Avg Distance</p>
              <p className="text-3xl font-bold text-foreground">{avgDistance} ly</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-card to-muted border-border hover:border-primary/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Latest Discovery</p>
              <p className="text-3xl font-bold text-foreground">{latestYear}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Planet Types */}
        <Card className="p-6 bg-card border-border">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Planet Types</h2>
          <div className="space-y-4">
            {Object.entries(typeDistribution).map(([type, count]) => (
              <div key={type}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{type}</span>
                  <span className="text-sm text-muted-foreground">{count} planets</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all"
                    style={{ width: `${(count / totalPlanets) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Discoveries by Year */}
        <Card className="p-6 bg-card border-border">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Discoveries Timeline</h2>
          <div className="space-y-4">
            {Object.entries(yearDistribution)
              .sort((a, b) => Number(b[0]) - Number(a[0]))
              .map(([year, count]) => (
                <div key={year}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{year}</span>
                    <span className="text-sm text-muted-foreground">{count} discovered</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-secondary to-accent rounded-full transition-all"
                      style={{ width: `${(count / Math.max(...Object.values(yearDistribution))) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6 bg-gradient-to-br from-card to-muted border-border">
        <h2 className="text-2xl font-bold mb-4 text-foreground">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link to="/">
            <Button variant="outline">Explore Planets</Button>
          </Link>
          <Link to="/compare">
            <Button variant="outline">Compare Planets</Button>
          </Link>
          <Link to="/timeline">
            <Button variant="outline">View Timeline</Button>
          </Link>
          <Link to="/news">
            <Button variant="outline">Latest News</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
