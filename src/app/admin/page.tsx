import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, CreditCard, Activity, ShoppingBag } from "lucide-react";



import { getProducts } from "@/lib/sheets";

export default async function AdminDashboard() {
    const products = await getProducts();

    // Mock data for dashboard
    const stats = [
        {
            title: "Total Revenue",
            value: "$45,231.89",
            change: "+20.1% from last month",
            icon: DollarSign,
        },
        {
            title: "Subscriptions",
            value: "+2350",
            change: "+180.1% from last month",
            icon: Users,
        },
        {
            title: "Sales",
            value: "+12,234",
            change: "+19% from last month",
            icon: CreditCard,
        },
        {
            title: "Total Products",
            value: products.length.toString(),
            change: "Fetched from Google Sheets",
            icon: ShoppingBag,
        },
    ];
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.title} className="rounded-xl border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
                            <h3 className="tracking-tight text-sm font-medium">
                                {stat.title}
                            </h3>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                {stat.change}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 rounded-xl border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="font-semibold leading-none tracking-tight">Overview</h3>
                    </div>
                    <div className="p-6 pt-0 pl-2">
                        <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                            Chart Placeholder
                        </div>
                    </div>
                </div>
                <div className="col-span-3 rounded-xl border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="font-semibold leading-none tracking-tight">Recent Sales</h3>
                        <p className="text-sm text-muted-foreground">You made 265 sales this month.</p>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="space-y-8">
                            <div className="flex items-center">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">Olivia Martin</p>
                                    <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
                                </div>
                                <div className="ml-auto font-medium">+$1,999.00</div>
                            </div>
                            <div className="flex items-center">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">Jackson Lee</p>
                                    <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
                                </div>
                                <div className="ml-auto font-medium">+$39.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
