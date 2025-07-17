import { Search, Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import freshtrackLogo from "@/assets/freshtrack-logo.png";

export function Header() {
  return (
    <header className="border-b bg-card shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div className="flex items-center gap-3">
            <img src={freshtrackLogo} alt="FreshTrack" className="w-8 h-8" />
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold text-primary">FreshTrack</span>
              <span className="text-lg font-semibold text-accent ">AI</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search products..." 
              className="pl-9 w-64 bg-muted/50 border-border focus:bg-background"
            />
          </div>

          <Select defaultValue="dallas">
            <SelectTrigger className="w-48 bg-muted/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dallas">Walmart-Washington -2040</SelectItem>
              <SelectItem value="houston">Walmart-NewYork-7921</SelectItem>
              <SelectItem value="austin">Walmart-LA-3929</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-destructive">
                3
              </Badge>
            </Button>

            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 px-3">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">Store Manager</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}