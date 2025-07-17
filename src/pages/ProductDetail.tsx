import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Thermometer, 
  Droplets, 
  Clock, 
  MapPin, 
  Package,
  ArrowLeftRight,
  Zap,
  Percent,
  Trash2,
  Bot,
  Activity,
  Wifi
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [aiPrompt, setAiPrompt] = useState("");

  // Mock product data - in real app, this would come from an API
  const product = {
    id: "organic-spinach",
    name: "Organic Spinach",
    category: "Vegetables",
    freshness: 85,
    temperature: "35°F",
    humidity: "65%",
    shelfLife: "3 days",
    location: "Aisle 12A - Cooler 3",
    shelf: "C3-A12",
    quantity: "45 lbs",
    batch: "VEG001-A",
    riskLevel: "low"
  };
const freshnessHistory = [
    { time: '6 AM', value: 92 },
    { time: '9 AM', value: 90 },
    { time: '12 PM', value: 88 },
    { time: '3 PM', value: 86 },
    { time: '6 PM', value: 85 },
    { time: 'Now', value: 85 }
  ];

  const iotData = [
    { label: 'Temperature', value: '35°F', status: 'normal', icon: Thermometer },
    { label: 'Humidity', value: '65%', status: 'normal', icon: Droplets },
    { label: 'Air Circulation', value: 'Good', status: 'normal', icon: Activity },
    { label: 'Sensor Status', value: 'Connected', status: 'normal', icon: Wifi },
  ];

  const quickActions = [
    {
      title: "Transfer to High-Demand Store",
      description: "Move to Store #002 within 6 hours for optimal revenue recovery",
      icon: ArrowLeftRight,
      variant: "default" as const,
      color: "text-primary"
    },
    {
      title: "Create Flash Sale (30% off)",
      description: "Immediate markdown to accelerate turnover",
      icon: Zap,
      variant: "default" as const,
      color: "text-success"
    },
    {
      title: "Apply Markdown (25% off)",
      description: "Standard price reduction for aging inventory",
      icon: Percent,
      variant: "outline" as const,
      color: "text-warning"
    },
    {
      title: "Remove from Inventory",
      description: "Mark as unsellable and dispose safely",
      icon: Trash2,
      variant: "destructive" as const,
      color: "text-destructive"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => navigate("/products")}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
            <p className="text-muted-foreground">Product Details & Analytics</p>
          </div>
        </div>
        <Badge className={product.riskLevel === "low" ? "bg-success text-success-foreground" : ""}>
          {product.riskLevel} risk
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="freshness">Freshness</TabsTrigger>
              <TabsTrigger value="store-map">Store Map</TabsTrigger>
              <TabsTrigger value="iot-data">IoT Data</TabsTrigger>
              <TabsTrigger value="live-feed">Live Feed</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Product Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-success/20 to-success/10 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">🥬</span>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="text-muted-foreground">{product.category}</p>
                      <Badge className="bg-success/10 text-success">
                        {product.riskLevel} risk
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Current Freshness</p>
                      <p className="text-2xl font-bold text-primary">{product.freshness}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{product.location.split(' - ')[1]}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Shelf</p>
                      <p className="font-medium">{product.shelf}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Temperature</p>
                      <p className="font-medium">{product.temperature}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Shelf Life</p>
                      <p className="font-medium">{product.shelfLife}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Batch</p>
                      <p className="font-medium">{product.batch}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">Detailed product specifications and history would be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            
            <TabsContent value="freshness">
  <Card className="border-0 shadow-card">
    <CardContent className="p-6">
      <h3 className="font-semibold mb-4">Freshness Trend</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={freshnessHistory}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey="time" />
            <YAxis domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
</TabsContent>


            <TabsContent value="store-map">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">Interactive store map showing product location would be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="iot-data">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">Real-time IoT sensor data and environmental monitoring would be shown here.</p>
                </CardContent>
              </Card>
            </TabsContent>

         <TabsContent value="live-feed">
  <Card className="border-0 shadow-card">
    <CardHeader>
      <CardTitle>Live Sensor Feed</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="p-4 bg-muted rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-muted-foreground">2 min ago:</span>
            <span>Temperature stable at 35°F</span>
          </div>
        </div>
        <div className="p-4 bg-muted rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-muted-foreground">5 min ago:</span>
            <span>Humidity adjusted to 65%</span>
          </div>
        </div>
        <div className="p-4 bg-muted rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-warning rounded-full"></div>
            <span className="text-muted-foreground">15 min ago:</span>
            <span>Minor temperature fluctuation detected</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</TabsContent>
          </Tabs>
        </div>

        {/* Quick Actions Sidebar */}
        <div className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant}
                  className="w-full justify-start h-auto p-4 text-left"
                  onClick={() => {/* Action logic */}}
                >
                  <div className="flex items-start gap-3">
                    <action.icon className={`w-5 h-5 mt-0.5 ${action.color}`} />
                    <div>
                      <div className="font-medium">{action.title}</div>
                      <div className="text-xs opacity-70 mt-1">{action.description}</div>
                    </div>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* AI Assistant */}
          <Card className="border-0 shadow-card bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">AI Assistant</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-card rounded-lg border">
                <p className="text-sm text-primary font-medium mb-1">AI Recommendation:</p>
                <p className="text-sm text-muted-foreground">
                  Transfer to Store #002 within 6 hours for optimal revenue recovery based on demand patterns.
                </p>
              </div>
              <Textarea
                placeholder="Ask AI about this product..."
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                className="min-h-[80px]"
              />
              <Button className="w-full gap-2">
                <Bot className="w-4 h-4" />
                Ask AI
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}