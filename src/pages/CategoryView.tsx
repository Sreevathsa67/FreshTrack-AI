import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Eye, TrendingUp, AlertTriangle, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CategoryView() {
  const navigate = useNavigate();

  const categories = [
    {
      id: "vegetables",
      name: "Vegetables",
      freshness: 85,
      itemCount: 247,
      totalValue: "$18,650",
      criticalItems: 12,
      riskLevel: "low",
      image: "🥬"
    },
    {
      id: "fruits",
      name: "Fruits", 
      freshness: 72,
      itemCount: 156,
      totalValue: "$12,400",
      criticalItems: 8,
      riskLevel: "medium",
      image: "🍎"
    },
    {
      id: "dairy",
      name: "Dairy",
      freshness: 91,
      itemCount: 89,
      totalValue: "$8,900",
      criticalItems: 3,
      riskLevel: "low",
      image: "🥛"
    },
    {
      id: "bakery",
      name: "Bakery",
      freshness: 68,
      itemCount: 142,
      totalValue: "$6,200",
      criticalItems: 18,
      riskLevel: "critical",
      image: "🍞"
    }
  ];

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case "critical": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-warning text-warning-foreground";
      default: return "bg-success text-success-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Category View</h1>
          <p className="text-muted-foreground mt-1">
            Fruits & Vegetables inventory overview
          </p>
        </div>
        <Button onClick={() => navigate("/products")} className="gap-2">
          <Package className="w-4 h-4" />
          View All Products
        </Button>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {categories.slice(0, 2).map((category) => (
          <Card key={category.id} className="border-0 shadow-card bg-gradient-to-br from-card to-muted/20 hover:shadow-elevated transition-all duration-300 cursor-pointer"
                onClick={() => navigate("/products")}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{category.image}</div>
                  <div>
                    <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">Fresh produce monitoring</p>
                  </div>
                </div>
                <Badge className={getRiskBadgeColor(category.riskLevel)}>
                  {category.riskLevel}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Freshness Progress */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">Freshness Score</span>
                  <span className="text-2xl font-bold text-primary">{category.freshness}%</span>
                </div>
                <Progress value={category.freshness} className="h-3" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Current freshness level</span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    vs yesterday
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center space-y-1">
                  <p className="text-2xl font-bold text-foreground">{category.itemCount}</p>
                  <p className="text-xs text-muted-foreground">Total Items</p>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-2xl font-bold text-success">{category.totalValue}</p>
                  <p className="text-xs text-muted-foreground">Total Value</p>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-2xl font-bold text-destructive">{category.criticalItems}</p>
                  <p className="text-xs text-muted-foreground">Critical Items</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/products");
                  }}
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/products");
                  }}
                >
                  <AlertTriangle className="w-4 h-4" />
                  Manage Alerts
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">403</div>
            <div className="text-sm text-muted-foreground">Total F&V Items</div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-success">78.5%</div>
            <div className="text-sm text-muted-foreground">Avg Freshness</div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-warning">20</div>
            <div className="text-sm text-muted-foreground">Items at Risk</div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-foreground">$31,050</div>
            <div className="text-sm text-muted-foreground">Combined Value</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}