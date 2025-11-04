import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsItem } from "@/data/exoplanets";
import { Calendar, ArrowRight } from "lucide-react";

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Card className="group overflow-hidden hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-card to-muted border-border hover:border-secondary/50">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-2 flex-1">
            {news.title}
          </h3>
          <Badge variant="outline" className="shrink-0">
            <Calendar className="w-3 h-3 mr-1" />
            {new Date(news.date).toLocaleDateString()}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {news.excerpt}
        </p>

        <div className="flex items-center justify-between pt-2">
          <Badge className="bg-primary/20 text-primary border-primary/30">
            {news.planetName}
          </Badge>
          
          <Link 
            to={`/news/${news.id}`}
            className="text-sm text-secondary hover:text-accent transition-colors flex items-center gap-1 group/link"
          >
            Read more
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;
