import { Home, Newspaper, BarChart3, Clock, Info, GitCompare } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Discover", url: "/", icon: Home },
  { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
  { title: "News", url: "/news", icon: Newspaper },
  { title: "Timeline", url: "/timeline", icon: Clock },
  { title: "Compare", url: "/compare", icon: GitCompare },
  { title: "About", url: "/about", icon: Info },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent className="bg-card">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-bold text-lg px-4 py-6">
            {open && "AstroLens"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "bg-primary/20 text-primary font-medium"
                          : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
