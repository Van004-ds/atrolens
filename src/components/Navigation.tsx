import { Link } from "react-router-dom";
import { Telescope } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary transition-transform group-hover:scale-110">
            <Telescope className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ExoSearch
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Discover
          </Link>
          <Link 
            to="/news" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            News
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
