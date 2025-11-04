import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { newsItems } from "@/data/exoplanets";
import { ArrowLeft, Calendar } from "lucide-react";

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsItems.find(n => n.id === id);

  if (!news) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">News article not found</h1>
          <Link to="/news">
            <Button>Return to News</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-6 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/news">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Button>
          </Link>

          <article className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="outline" className="gap-2">
                  <Calendar className="w-3 h-3" />
                  {new Date(news.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </Badge>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  {news.planetName}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {news.title}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {news.excerpt}
              </p>
            </div>

            {/* Content */}
            <Card className="p-8 bg-gradient-to-br from-card to-muted border-border">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-foreground leading-relaxed whitespace-pre-line">
                  {news.content}
                </p>
              </div>
            </Card>

            {/* Related Planet Link */}
            <Card className="p-6 bg-card border-border border-primary/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Related Exoplanet</p>
                  <p className="text-xl font-bold text-foreground">{news.planetName}</p>
                </div>
                <Link to="/">
                  <Button variant="outline">
                    Explore Planet
                  </Button>
                </Link>
              </div>
            </Card>
          </article>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
