import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { exoplanets } from "@/data/exoplanets";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Timeline = () => {
  const sortedPlanets = [...exoplanets].sort((a, b) => b.discoveryYear - a.discoveryYear);
  
  const groupedByYear = sortedPlanets.reduce((acc, planet) => {
    if (!acc[planet.discoveryYear]) {
      acc[planet.discoveryYear] = [];
    }
    acc[planet.discoveryYear].push(planet);
    return acc;
  }, {} as Record<number, typeof exoplanets>);

  return (
    <div className="p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Discovery Timeline
        </h1>
        <p className="text-muted-foreground">
          Chronicle of exoplanet discoveries throughout history
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {Object.entries(groupedByYear)
          .sort((a, b) => Number(b[0]) - Number(a[0]))
          .map(([year, planets]) => (
            <div key={year} className="relative">
              {/* Year Marker */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-xl font-bold text-primary">{year}</span>
                </div>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Planets Grid */}
              <div className="space-y-4 pl-8 border-l-2 border-border">
                {planets.map((planet) => (
                  <Link key={planet.id} to={`/planet/${planet.id}`}>
                    <Card className="group p-6 bg-gradient-to-br from-card to-muted border-border hover:border-primary/50 hover:scale-[1.02] transition-all">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {planet.name}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {planet.description}
                            </p>
                          </div>
                          <Badge variant={planet.habitableZone ? "default" : "secondary"}>
                            {planet.habitableZone ? "Habitable" : planet.type}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{planet.distanceFromEarth} ly</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>Orbits {planet.starName}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Timeline;
