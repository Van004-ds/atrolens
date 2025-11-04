import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Exoplanet } from "@/data/exoplanets";
import { Star, MapPin } from "lucide-react";

interface ExoplanetCardProps {
  planet: Exoplanet;
}

const ExoplanetCard = ({ planet }: ExoplanetCardProps) => {
  return (
    <Link to={`/planet/${planet.id}`}>
      <Card className="group overflow-hidden hover:scale-105 transition-all duration-300 bg-gradient-to-br from-card to-muted border-border hover:border-primary/50 h-full">
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {planet.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4" />
                <span>{planet.starName}</span>
              </div>
            </div>
            <Badge variant={planet.habitableZone ? "default" : "secondary"}>
              {planet.habitableZone ? "Habitable" : planet.type}
            </Badge>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {planet.description}
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Distance</p>
              <p className="text-sm font-semibold text-foreground">
                {planet.distanceFromEarth} ly
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Discovered</p>
              <p className="text-sm font-semibold text-foreground">
                {planet.discoveryYear}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
            <MapPin className="w-3 h-3" />
            <span>Type: {planet.type}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ExoplanetCard;
