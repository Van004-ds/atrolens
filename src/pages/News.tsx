import NewsCard from "@/components/NewsCard";
import { newsItems } from "@/data/exoplanets";
import { Newspaper } from "lucide-react";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-6 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm mb-4">
              <Newspaper className="w-4 h-4" />
              <span>Latest Discoveries</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Exoplanet News
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest discoveries and breakthroughs in exoplanet research.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {newsItems.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
