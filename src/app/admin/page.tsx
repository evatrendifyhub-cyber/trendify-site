"use client";
import { useState } from 'react';
import { 
    DollarSign, Users, CreditCard, Activity, 
    ShoppingBag, Lock, Globe, ExternalLink, LogOut 
} from "lucide-react";

export default function AdminDashboard() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [password, setPassword] = useState("");

    // --- SECURITY CHECK ---
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "Abel9eric!!@@") { 
            setIsAuthorized(true);
        } else {
            alert("Access Denied: Incorrect Password");
        }
    };

    // --- LOGIN SCREEN (Hidden from Customers) ---
    if (!isAuthorized) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 bg-background">
                <div className="w-full max-w-md p-8 space-y-6 bg-card border rounded-2xl shadow-2xl">
                    <div className="flex justify-center">
                        <div className="p-4 bg-primary/10 rounded-full">
                            <Lock className="w-10 h-10 text-primary" />
                        </div>
                    </div>
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight">Seller Control Center</h2>
                        <p className="text-sm text-muted-foreground">Enter your secret key to manage Trendify Hub</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            autoFocus
                            placeholder="Admin Password"
                            className="w-full p-3 border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button 
                            type="submit"
                            className="w-full py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md"
                        >
                            Access Admin Panel
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // --- SELLER DASHBOARD (Visible only after login) ---
    const platformLinks = [
        { title: "Digistore24", desc: "Commissions", url: "https://www.digistore24.com/en/login", icon: DollarSign, color: "text-green-500" },
        { title: "Zazzle", desc: "Store Sales", url: "https://www.zazzle.com/auth/login", icon: ShoppingBag, color: "text-purple-500" },
        { title: "Gumroad", desc: "Digital Payouts", url: "https://gumroad.com/login", icon: CreditCard, color: "text-pink-500" },
        { title: "Spreadshirt", desc: "Merch Stats", url: "https://www.spreadshirt.com/login", icon: Activity, color: "text-orange-500" },
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-6">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight">Seller Dashboard</h2>
                    <p className="text-muted-foreground">Monitoring all active products in real-time.</p>
                </div>
                <button 
                    onClick={() => setIsAuthorized(false)} 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                    <LogOut className="w-4 h-4" /> Logout
                </button>
            </div>
            
            {/* Platform Quick-Links Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {platformLinks.map((p) => (
                    <a 
                        key={p.title} 
                        href={p.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative rounded-xl border bg-card p-6 shadow-sm hover:shadow-md hover:border-blue-400 transition-all"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{p.title}</p>
                            <p.icon className={`h-5 w-5 ${p.color}`} />
                        </div>
                        <div className="text-lg font-bold flex items-center gap-2">
                            {p.desc} <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </a>
                ))}
            </div>

            {/* Country & Traffic Section */}
            <div className="grid gap-6 md:grid-cols-7">
                {/* Global Traffic Chart (Placeholder for Vercel Data) */}
                <div className="col-span-full lg:col-span-4 rounded-xl border bg-card p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <Activity className="w-5 h-5 text-blue-500" />
                        <h3 className="font-bold text-lg">Daily Traffic Overview</h3>
                    </div>
                    <div className="h-[250px] flex flex-col items-center justify-center bg-muted/20 rounded-lg border-dashed border-2">
                        <p className="text-muted-foreground text-sm text-center px-4">
                            📈 <b>Real-Time Charts:</b> <br/>
                            Once you click "Enable" in your <b>Vercel Analytics Dashboard</b>, 
                            your daily/weekly/yearly visitor charts will appear here.
                        </p>
                    </div>
                </div>

                {/* Country-wise Breakdown */}
                <div className="col-span-full lg:col-span-3 rounded-xl border bg-card p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <Globe className="w-5 h-5 text-blue-500" />
                        <h3 className="font-bold text-lg">Top Countries (Current Month)</h3>
                    </div>
                    <div className="space-y-4">
                        <p className="text-xs text-muted-foreground italic mb-4">Tracking global visits...</p>
                        {/* Once connected to Vercel, these would be dynamic */}
                        <div className="flex items-center justify-between border-b pb-2">
                            <span className="text-sm font-medium">1. United States</span>
                            <span className="text-sm text-blue-600 font-bold">Waiting for Data...</span>
                        </div>
                        <div className="flex items-center justify-between border-b pb-2">
                            <span className="text-sm font-medium">2. United Kingdom</span>
                            <span className="text-sm text-blue-600 font-bold">Waiting...</span>
                        </div>
                        <div className="flex items-center justify-between border-b pb-2">
                            <span className="text-sm font-medium">3. Germany</span>
                            <span className="text-sm text-blue-600 font-bold">Waiting...</span>
                        </div>
                        <p className="mt-4 text-[10px] text-center text-muted-foreground uppercase">
                            Login to Vercel.com to see precise city-level data.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
