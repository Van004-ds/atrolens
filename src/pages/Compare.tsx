import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { exoplanets } from "@/data/exoplanets";
import { ArrowLeftRight, Star, Globe, Orbit, Gauge, Calendar } from "lucide-react";

const Compare = () => {
  const [planet1Id, setPlanet1Id] = useState<string>(exoplanets[0].id);
  const [planet2Id, setPlanet2Id] = useState<string>(exoplanets[1].id);

  const planet1 = exoplanets.find(p => p.id === planet1Id);
  const planet2 = exoplanets.find(p => p.id === planet2Id);

  const ComparisonRow = ({ label, value1, value2, icon: Icon }: { 
    label: string; 
    value1: string | number; 
    value2: string | number;
    icon: React.ElementType;
  }) => (
    <div className="grid grid-cols-3 gap-4 py-4 border-b border-border last:border-0">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="w-4 h-4" />
        <span className="font-medium">{label}</span>
      </div>
      <div className="text-foreground font-semibold text-center">{value1}</div>
      <div className="text-foreground font-semibold text-center">{value2}</div>
    </div>
  );

  return (
    <div className="p-6 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Compare Exoplanets
        </h1>
        <p className="text-muted-foreground">
          Analyze and compare characteristics of different exoplanets
        </p>
      </div>

      {/* Planet Selectors */}
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 bg-card border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">First Planet</label>
              <Select value={planet1Id} onValueChange={setPlanet1Id}>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {exoplanets.map(planet => (
                    <SelectItem key={planet.id} value={planet.id}>
                      {planet.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <ArrowLeftRight className="w-6 h-6 text-primary" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Second Planet</label>
              <Select value={planet2Id} onValueChange={setPlanet2Id}>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {exoplanets.map(planet => (
                    <SelectItem key={planet.id} value={planet.id}>
                      {planet.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>
      </div>

      {/* Comparison Table */}
      {planet1 && planet2 && (
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Headers */}
          <Card className="p-6 bg-gradient-to-br from-card to-muted border-border">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">{planet1.name}</h3>
                <Badge variant={planet1.habitableZone ? "default" : "secondary"}>
                  {planet1.habitableZone ? "Habitable" : planet1.type}
                </Badge>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-muted-foreground font-medium">vs</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">{planet2.name}</h3>
                <Badge variant={planet2.habitableZone ? "default" : "secondary"}>
                  {planet2.habitableZone ? "Habitable" : planet2.type}
                </Badge>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-2">
              <ComparisonRow
                label="Discovery Year"
                value1={planet1.discoveryYear}
                value2={planet2.discoveryYear}
                icon={Calendar}
              />
              <ComparisonRow
                label="Distance (ly)"
                value1={planet1.distanceFromEarth}
                value2={planet2.distanceFromEarth}
                icon={Globe}
              />
              <ComparisonRow
                label="Star Name"
                value1={planet1.starName}
                value2={planet2.starName}
                icon={Star}
              />
              <ComparisonRow
                label="Mass (MJ)"
                value1={planet1.mass}
                value2={planet2.mass}
                icon={Gauge}
              />
              <ComparisonRow
                label="Radius (RJ)"
                value1={planet1.radius}
                value2={planet2.radius}
                icon={Globe}
              />
              <ComparisonRow
                label="Orbital Period (days)"
                value1={planet1.orbitalPeriod}
                value2={planet2.orbitalPeriod}
                icon={Orbit}
              />
              <ComparisonRow
                label="Type"
                value1={planet1.type}
                value2={planet2.type}
                icon={Star}
              />
            </div>
          </Card>

          {/* Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border">
              <h4 className="font-bold text-foreground mb-3">About {planet1.name}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {planet1.description}
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h4 className="font-bold text-foreground mb-3">About {planet2.name}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {planet2.description}
              </p>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compare;
