import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Package, 
  TrendingUp, 
  AlertTriangle, 
  DollarSign,
  Clock,
  Eye,
  Calendar,
  Download
} from "lucide-react";

export function Dashboard() {
// Inside summaryCards
const summaryCards = [
  {
    title: "Total supply",
    value: "7,940",
    change: "+3% from yesterday",
    icon: Package,
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    title: "Freshness Average",
    value: "89%",
    change: "+1.7% vs yesterday",
    icon: TrendingUp,
    color: "text-success",
    bgColor: "bg-success/10",
    showScale: true
  },
  {
    title: "Critical",
    value: "47",
    change: "-3% from yesterday",
    icon: AlertTriangle,
    color: "text-destructive",
    bgColor: "bg-destructive/10"
  },
  {
    title: "Profits",
    value: "$10,450",
    change: "+2.8% from yesterday",
    icon: DollarSign,
    color: "text-success",
    bgColor: "bg-success/10"
  },
];

// Inside categories
const categories = [
  { name: "Vegetables", freshness: 78, items: 233, risk: "medium" },
  { name: "Fruits", freshness: 68, items: 169, risk: "critical" },
  { name: "Dairy", freshness: 94, items: 75, risk: "low" },
  { name: "Bakery", freshness: 74, items: 138, risk: "medium" },
];

// Inside alerts
const alerts = [
  {
    type: "warning",
    title: "Heater 4 humidity rising",
    time: "4 min ago",
    action: "Review"
  },
  {
    type: "critical",
    title: "8 items expiring in 1 hour",
    time: "6 min ago",
    action: "Check"
  },
  {
    type: "info",
    title: "Cheese stock below target",
    time: "9 min ago",
    action: "Details"
  },
];

// Inside freshnessData
const freshnessData = [
  { time: "6 AM", value: 75 },
  { time: "9 AM", value: 78 },
  { time: "12 PM", value: 81 },
  { time: "3 PM", value: 77 },
  { time: "6 PM", value: 70 },
  { time: "Now", value: 76 },
];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Real-time inventory and freshness monitoring
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Filter Periods
          </Button>
          <Button className="gap-2">
            <Download className="w-4 h-4" />
            Save Report
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <Card key={index} className={`${card.bgColor} border-0 shadow-card`}>

            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {card.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {card.change}
                  </p>
                  {card.showScale && (
                    <div className="mt-3 space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">Freshness Scale:</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-success"></div>
                          <span className="text-xs">Fresh: 85-100%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-warning"></div>
                          <span className="text-xs">Moderate: 60-84%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-destructive"></div>
                          <span className="text-xs">Critical: 0-59%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className={`w-12 h-12 rounded-full ${card.bgColor} flex items-center justify-center ${card.color}`}>
                  <card.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Freshness Rate Chart */}
        <Card className="lg:col-span-2 border-0 shadow-card">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Freshness Rate</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Current: 77%</span>
                <Badge variant="secondary" className="bg-success/10 text-success">
                  +9.2% vs yesterday
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-end h-48 gap-3">
                {freshnessData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-gradient-to-t from-primary to-primary-light rounded-t-lg transition-all duration-500 hover:shadow-lg"
                      style={{ height: `${(data.value / 100) * 180}px` }}
                    />
                    <span className="text-xs text-muted-foreground mt-2">{data.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Alerts */}
        <Card className="border-0 shadow-card">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Warnings</CardTitle>
              <Badge className="bg-destructive/10 text-destructive">3 Active</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  alert.type === 'critical' ? 'bg-destructive' : 
                  alert.type === 'warning' ? 'bg-warning' : 'bg-primary'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{alert.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
                <Button size="sm" variant="outline" className="text-xs">
                  {alert.action}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Category Performance */}
      <Card className="border-0 shadow-card">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">Freshness level</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{category.name}</span>
                  <Badge 
                    variant={category.risk === 'critical' ? 'destructive' : 
                            category.risk === 'medium' ? 'secondary' : 'default'}
                    className={category.risk === 'low' ? 'bg-success text-success-foreground' : ''}
                  >
                    {category.risk}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Freshness</span>
                    <span className="font-medium">{category.freshness}%</span>
                  </div>
                  <Progress 
                    value={category.freshness} 
                    className="h-2"
                  />
                  <p className="text-xs text-muted-foreground">{category.items} items</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights Section */}
      <Card className="border-0 shadow-card bg-gradient-to-r from-primary/5 to-accent/5">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <CardTitle className="text-lg font-semibold">Route #29 – Advanced AI Logistics Insights</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Spoilage Risk Index */}
            <div className="p-4 rounded-xl bg-card border shadow-sm">
  {/* Header */}
  <div className="flex items-center gap-2 mb-2">
    <AlertTriangle className="w-4 h-4 text-destructive" />
    <h4 className="font-medium text-sm text-foreground">Spoilage Risk Index</h4>
  </div>

  {/* Prediction Summary */}
  <p className="text-base font-semibold text-foreground leading-tight">
    Predicted Spoilage in Next 24 Hours: <span className="font-bold">15 Items</span>
  </p>
  <p className="text-xs text-destructive mb-2">↑6%</p>
  <p className="text-xs text-muted-foreground mb-3">Based on: gas sensors, temp, item age</p>

  {/* Zone Grid */}
<div className="grid grid-cols-2 gap-6 w-fit mx-auto">
  {[
    { zone: "A", color: "bg-red-500", risk: "85%", items: 12 },
    { zone: "B", color: "bg-yellow-500", risk: "45%", items: 8 },
    { zone: "C", color: "bg-red-500", risk: "72%", items: 15 },
    { zone: "D", color: "bg-green-600", risk: "30%", items: 6 },
  ].map((z) => (
    <div
      key={z.zone}
      className={`rounded-2xl p-4 w-32 h-24 text-white shadow-md backdrop-blur-sm bg-opacity-80 ${z.color} transition-transform hover:scale-105 flex flex-col items-center justify-center text-center`}
    >
      <div className="text-sm font-semibold">Zone {z.zone}</div>
      <div className="mt-1 text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-medium">
        {z.risk} risk
      </div>
      <div className="mt-1 text-[11px] font-light">{z.items} items</div>
    </div>
  ))}
</div>


  {/* Footer */}
  <p className="text-[10px] text-muted-foreground mt-3">Warehouse Zone Risk Map</p>
</div>


         {/* Pallet Health Score */}
<div className="p-4 rounded-lg bg-card border shadow-sm flex flex-col items-center text-center">
  {/* Header */}
  <div className="flex items-center gap-2 mb-2">
    <Package className="w-4 h-4 text-yellow-600" />
    <h4 className="font-medium text-sm text-foreground">Pallet Health Score</h4>
  </div>

  {/* Centered Circular Score */}
  <div className="relative w-20 h-20 mb-3">
    {/* Background circle */}
    <div className="w-20 h-20 rounded-full border-4 border-muted"></div>

    {/* Orange progress arc (simulated fill) */}
    <div
      className="absolute top-0 left-0 w-20 h-20 rounded-full border-4 border-orange-500 border-t-transparent border-r-transparent transform rotate-[263deg]"
      style={{
        clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%)",
      }}
    ></div>

    {/* Center text */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-lg font-bold text-foreground">73%</span>
    </div>
  </div>

  {/* Details below */}
  <p className="text-sm font-semibold text-foreground">Avg Pallet Health: 73%</p>
  <p className="text-xs text-destructive">↓9%</p>
  <p className="text-xs text-muted-foreground">
    Composite score: freshness, vibration, delay
  </p>
</div>


            {/* Per Item Carbon Emissions */}
            <div className="p-4 rounded-lg bg-card border">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 text-success">🌱</span>
                <h4 className="font-medium text-sm text-foreground">Per Item Carbon Emissions</h4>
              </div>
              <p className="text-lg font-bold">CO₂ Per Item Today: 0.92 kg/item</p>
              <p className="text-xs text-success mb-2">↓4%</p>
              <div className="h-8 bg-muted rounded mb-2 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-success via-warning to-destructive"></div>
              </div>
              <p className="text-xs text-muted-foreground">Emissions vs Delivery Time</p>
            </div>

            {/* Time-to-Spoil Distribution */}
            <div className="p-4 rounded-lg bg-card border">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-warning" />
                <h4 className="font-medium text-sm text-foreground">Time-to-Spoil Distribution</h4>
              </div>
              <p className="text-lg font-bold">31 Items expiring in &lt; 6 Hours</p>
              <div className="space-y-2 mt-3">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-3 bg-destructive rounded"></div>
                  <span className="text-xs">&lt; 6h: 31</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-3 bg-warning rounded"></div>
                  <span className="text-xs">6-12h: 18</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-3 bg-primary rounded"></div>
                  <span className="text-xs">12-24h: 45</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-3 bg-success rounded"></div>
                  <span className="text-xs">24-48h: 67</span>
                </div>
              </div>
            </div>

            {/* Most Affected Product Types */}
            <div className="p-4 rounded-lg bg-card border">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-4 h-4 text-destructive" />
                <h4 className="font-medium text-sm text-foreground">Most Affected Product Types</h4>
              </div>
              <p className="text-sm font-medium mb-3">Bakery & Seafood at highest spoilage risk</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs">Bakery</span>
                  <div className="flex items-center gap-1">
                    <div className="w-12 h-2 bg-destructive rounded"></div>
                    <span className="text-xs">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">Seafood</span>
                  <div className="flex items-center gap-1">
                    <div className="w-10 h-2 bg-destructive rounded"></div>
                    <span className="text-xs">72%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">Dairy</span>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-2 bg-warning rounded"></div>
                    <span className="text-xs">34%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">Fruits</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 bg-success rounded"></div>
                    <span className="text-xs">18%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Route vs Freshness Loss */}
            <div className="p-4 rounded-lg bg-card border">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 text-primary">🚚</span>
                <h4 className="font-medium text-sm text-foreground">Route vs Freshness Loss</h4>
              </div>
              <p className="text-lg font-bold">Route #23 caused 9% freshness drop</p>
              <div className="mt-3 grid grid-cols-3 gap-1">
                <div className="h-4 bg-success rounded"></div>
                <div className="h-4 bg-warning rounded"></div>
                <div className="h-4 bg-destructive rounded"></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Map-based route analysis with color zones</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}