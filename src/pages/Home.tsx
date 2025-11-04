import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import ExoplanetCard from "@/components/ExoplanetCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { exoplanets } from "@/data/exoplanets";
import { Search, Sparkles } from "lucide-react";
import cosmicHero from "@/assets/cosmic-hero.jpg";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(exoplanets.map(p => p.discoveryYear)))
      .sort((a, b) => b - a);
    return uniqueYears;
  }, []);

  const filteredPlanets = useMemo(() => {
    return exoplanets.filter(planet => {
      const matchesSearch = planet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        planet.starName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        planet.type.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesYear = selectedYear === "all" || planet.discoveryYear.toString() === selectedYear;
      
      return matchesSearch && matchesYear;
    });
  }, [searchTerm, selectedYear]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${cosmicHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Explore the Universe</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Discover Exoplanets
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Journey through space and explore distant worlds beyond our solar system. 
              Search by name or year to uncover the mysteries of the cosmos.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 border-b border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by planet name, star, or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full md:w-48 h-12 bg-input border-border">
                <SelectValue placeholder="All Years" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map(year => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {(searchTerm || selectedYear !== "all") && (
            <div className="max-w-4xl mx-auto mt-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Found {filteredPlanets.length} exoplanet{filteredPlanets.length !== 1 ? 's' : ''}
              </p>
              {(searchTerm || selectedYear !== "all") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedYear("all");
                  }}
                >
                  Clear filters
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Planets Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPlanets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlanets.map(planet => (
                <ExoplanetCard key={planet.id} planet={planet} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No exoplanets found matching your search.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedYear("all");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
