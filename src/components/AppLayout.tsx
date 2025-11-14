import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Telescope } from "lucide-react";
import DoodleBackground from "./DoodleBackground";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background relative">
        <DoodleBackground />
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-40 h-16 flex items-center gap-4 border-b border-border bg-background/90 backdrop-blur-lg px-6">
            <SidebarTrigger />
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary">
                <Telescope className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">
                AstroLens
              </span>
            </div>
          </header>
          
          <main className="flex-1 relative z-10">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
