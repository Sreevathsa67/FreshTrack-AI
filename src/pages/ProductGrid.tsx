import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  Thermometer, 
  Droplets, 
  Clock, 
  MapPin,
  ArrowLeftRight,
  Zap,
  Eye
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ProductGrid() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: "organic-spinach",
      name: "Organic Spinach",
      freshness: 85,
      temperature: "35°F",
      humidity: "65%",
      shelfLife: "3 days",
      location: "Aisle 12A - Cooler 3",
      quantity: "45 lbs",
      trend: "declining",
      riskLevel: "low"
    },
    {
      id: "roma-tomatoes", 
      name: "Roma Tomatoes",
      freshness: 72,
      temperature: "38°F", 
      humidity: "70%",
      shelfLife: "2 days",
      location: "Aisle 12B - Display",
      quantity: "67 lbs",
      trend: "declining",
      riskLevel: "medium"
    },
    {
      id: "iceberg-lettuce",
      name: "Iceberg Lettuce", 
      freshness: 45,
      temperature: "34°F",
      humidity: "75%", 
      shelfLife: "8 hours",
      location: "Aisle 12A - Cooler 1",
      quantity: "23 lbs",
      trend: "declining",
      riskLevel: "critical"
    },
    {
      id: "baby-carrots",
      name: "Baby Carrots",
      freshness: 92,
      temperature: "36°F",
      humidity: "60%",
      shelfLife: "5 days", 
      location: "Aisle 12C - Cooler 2",
      quantity: "38 lbs",
      trend: "stable",
      riskLevel: "low"
    },
    {
      id: "red-bell-peppers",
      name: "Red Bell Peppers",
      freshness: 78,
      temperature: "37°F",
      humidity: "68%",
      shelfLife: "4 days",
      location: "Aisle 12B - Display", 
      quantity: "29 lbs",
      trend: "declining",
      riskLevel: "medium"
    },
    {
      id: "broccoli-crowns",
      name: "Broccoli Crowns",
      freshness: 88,
      temperature: "35°F", 
      humidity: "72%",
      shelfLife: "6 days",
      location: "Aisle 12A - Cooler 3",
      quantity: "41 lbs", 
      trend: "stable",
      riskLevel: "low"
    }
  ];

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case "critical": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-warning text-warning-foreground";  
      default: return "bg-success text-success-foreground";
    }
  };

  const getFreshnessLevel = (percentage: number) => {
    if (percentage >= 85) return { level: "Fresh", color: "bg-success text-success-foreground" };
    if (percentage >= 60) return { level: "Moderate", color: "bg-warning text-warning-foreground" };
    return { level: "Critical", color: "bg-destructive text-destructive-foreground" };
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Product Grid</h1>
          <p className="text-muted-foreground mt-1">
            Individual item monitoring and management
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search products..." 
            className="pl-9 bg-muted/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filter by risk
        </Button>
        <Button variant="outline" className="gap-2">
          <ArrowUpDown className="w-4 h-4" />
          Sort by
        </Button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="border-0 shadow-card hover:shadow-elevated transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge className={getFreshnessLevel(product.freshness).color}>
                    {getFreshnessLevel(product.freshness).level}
                  </Badge>
                  <Badge className={getRiskBadgeColor(product.riskLevel)}>
                    {product.riskLevel} risk
                  </Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{product.freshness}%</span>
                <span className="text-sm text-muted-foreground">Freshness</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Environmental Conditions */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-primary" />
                  <span className="text-sm">{product.temperature}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-primary" />
                  <span className="text-sm">{product.humidity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm">{product.shelfLife}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{product.location.split(' - ')[1]}</span>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Available Quantity</span>
                <span className="font-medium">{product.quantity}</span>
              </div>

              {/* Freshness Trend */}
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground">Freshness Trend</span>
                <Progress value={product.freshness} className="h-2" />
                <span className={`text-xs ${product.trend === 'declining' ? 'text-warning' : 'text-success'}`}>
                  {product.trend === 'declining' ? 'Declining' : 'Stable'}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="gap-1 text-xs"
                  onClick={() => {/* Transfer logic */}}
                >
                  <ArrowLeftRight className="w-3 h-3" />
                  Transfer
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="gap-1 text-xs"
                  onClick={() => {/* Flash sale logic */}}
                >
                  <Zap className="w-3 h-3" />
                  Flash Sale
                </Button>
                <Button 
                  size="sm"
                  className="gap-1 text-xs"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <Eye className="w-3 h-3" />
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}