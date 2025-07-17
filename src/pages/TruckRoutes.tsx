import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Truck, 
  MapPin, 
  Clock, 
  Package, 
  TrendingUp, 
  AlertTriangle,
  Leaf,
  CheckCircle,
  ArrowRight
} from "lucide-react";

import { Fuel } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
export function TruckRoutes() {
  const truckData = {
    truckNumber: "#44",
    route: "New York → Houston",
    driver: "Mike Thompson",
    totalPallets: 12,
    avgFreshness: 76,
    criticalPallets: 2,
    etaHouston: "3h 45m",
    emissions: "104 kg CO₂"
  };

  const pallets = [
    { id: "P001", category: "Vegetables", freshness: 82, temperature: "34°F", status: "good" },
    { id: "P002", category: "Dairy", freshness: 89, temperature: "36°F", status: "good" },
    { id: "P003", category: "Bakery", freshness: 45, temperature: "72°F", status: "critical" },
    { id: "P004", category: "Fruits", freshness: 78, temperature: "39°F", status: "good" },
    { id: "P005", category: "Meat", freshness: 91, temperature: "32°F", status: "excellent" },
    { id: "P006", category: "Seafood", freshness: 73, temperature: "33°F", status: "good" },
    { id: "P007", category: "Vegetables", freshness: 86, temperature: "34°F", status: "good" },
    { id: "P008", category: "Dairy", freshness: 67, temperature: "38°F", status: "warning" }
  ];

  const routeProgress = [
    { city: "New York", freshness: 92, status: "completed", time: "00:00" },
    { city: "Philadelphia", freshness: 90, status: "completed", time: "02:30" },
    { city: "Baltimore", freshness: 88, status: "completed", time: "04:15" },
    { city: "Richmond", freshness: 85, status: "completed", time: "07:45" },
    { city: "Memphis", freshness: 76, status: "current", time: "14:20" },
    { city: "Little Rock", freshness: 74, status: "upcoming", time: "17:45" },
    { city: "Dallas", freshness: 72, status: "upcoming", time: "21:30" },
    { city: "Houston", freshness: 70, status: "upcoming", time: "25:45" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "bg-success text-success-foreground";
      case "good": return "bg-primary text-primary-foreground";
      case "warning": return "bg-warning text-warning-foreground";
      case "critical": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Truck className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Truck {truckData.truckNumber} Route Insights</h1>
            <p className="text-muted-foreground">{truckData.route} • Driver: {truckData.driver}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <MapPin className="w-4 h-4" />
            Live Tracking
          </Button>
          <Button className="gap-2">
            <ArrowRight className="w-4 h-4" />
            Track Route
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-card bg-gradient-to-br from-card to-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Pallets</p>
                <p className="text-2xl font-bold text-foreground">{truckData.totalPallets}</p>
                <p className="text-sm text-muted-foreground">Mixed cargo</p>
              </div>
              <Package className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-card bg-gradient-to-br from-card to-warning/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Freshness</p>
                <p className="text-2xl font-bold text-foreground">{truckData.avgFreshness}%</p>
                <p className="text-sm text-muted-foreground">5% decrease</p>
              </div>
              <TrendingUp className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-card bg-gradient-to-br from-card to-destructive/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Critical Pallets</p>
                <p className="text-2xl font-bold text-foreground">{truckData.criticalPallets}</p>
                <p className="text-sm text-muted-foreground">Below 50% freshness</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-card bg-gradient-to-br from-card to-success/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">ETA Houston</p>
                <p className="text-2xl font-bold text-foreground">{truckData.etaHouston}</p>
                <p className="text-sm text-muted-foreground">300 miles remaining</p>
              </div>
              <Clock className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pallet Health Overview */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Pallet Health Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pallets.map((pallet) => (
              <div key={pallet.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-medium">{pallet.id}</span>
                  <span className="text-sm text-muted-foreground">{pallet.category}</span>
                  <Badge className={getStatusColor(pallet.status)}>
                    {pallet.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{pallet.freshness}%</span>
                  <span className="text-sm text-muted-foreground">{pallet.temperature}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Route Progress */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Route Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {routeProgress.map((stop, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8">
                  {stop.status === "completed" ? (
                    <CheckCircle className="w-5 h-5 text-success" />
                  ) : stop.status === "current" ? (
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  ) : (
                    <div className="w-3 h-3 bg-muted-foreground/30 rounded-full" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${stop.status === "current" ? "text-primary" : ""}`}>
                      {stop.city}
                    </span>
                    <span className="text-sm text-muted-foreground">{stop.time}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-muted-foreground">
                      {stop.freshness}% freshness
                    </span>
                    {stop.status === "current" && (
                      <Badge variant="secondary">Current</Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Fuel className="h-5 w-5 text-warning" />
      CO₂ Emissions Tracking
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Emissions so far</span>
        <span className="text-lg font-bold text-warning">104 kg</span>
      </div>
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={[
              { hour: "6 AM", cumulative: 10.2 },
              { hour: "8 AM", cumulative: 30.8 },
              { hour: "10 AM", cumulative: 62.1 },
              { hour: "12 PM", cumulative: 71.9 },
              { hour: "2 PM", cumulative: 92.4 },
              { hour: "4 PM", cumulative: 98.8 },
              { hour: "6 PM", cumulative: 104 },
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey="hour" fontSize={10} />
            <YAxis fontSize={10} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="cumulative"
              stroke="hsl(var(--warning))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--warning))", strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </CardContent>
</Card>

      {/* CO2 Emissions Tracking */}
      <Card className="border-0 shadow-card bg-gradient-to-r from-success/5 to-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-success" />
            CO₂ Emissions Tracking
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-success">{truckData.emissions}</p>
              <p className="text-sm text-muted-foreground">Emissions so far</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">0.92</p>
              <p className="text-sm text-muted-foreground">kg/item CO₂ ratio</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-warning">4%</p>
              <p className="text-sm text-muted-foreground">improvement vs baseline</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommendation Card */}
     <Card className="border-l-4 border-l-warning bg-[#fff8e1]">

        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-warning">
            <AlertTriangle className="h-5 w-5" />
            AI Recommendation: Early Unloading Suggested
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Recommend Early Unloading at Dallas DC</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Based on current freshness degradation patterns and temperature fluctuations, 
                unloading critical pallets P003 and P009 at Dallas Distribution Center could 
                save an estimated <span className="font-semibold text-success">$2,340 in spoilage costs</span>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="bg-primary/5 p-3 rounded">
                  <p className="font-medium text-primary">Time Savings</p>
                  <p className="text-muted-foreground">4 hours early processing</p>
                </div>
                <div className="bg-success/5 p-3 rounded">
                  <p className="font-medium text-success">Freshness Recovery</p>
                  <p className="text-muted-foreground">+12% avg improvement</p>
                </div>
                <div className="bg-warning/5 p-3 rounded">
                  <p className="font-medium text-warning">Route Efficiency</p>
                  <p className="text-muted-foreground">-8 kg CO₂ emissions</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button  className="flex-1">
                <CheckCircle className="h-4 w-4" />
                Approve Early Unloading
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                View Alternative Routes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}