import { Sparkles, TrendingUp, ShoppingBag, Heart, Zap, Globe } from "lucide-react";

export const metadata = {
    title: "About Us | Eva's Trendifying Hub",
    description: "Learn about Eva's Trendifying Hub - your destination for trending products across Fashion, Fitness, Digital Products, and more.",
};

export default function AboutPage() {
    const features = [
        {
            icon: TrendingUp,
            title: "Trending Products",
            description: "We curate the most popular and trending items from across the web, so you don't have to search."
        },
        {
            icon: ShoppingBag,
            title: "Diverse Categories",
            description: "From Fashion to Digital Products, we offer 20+ categories to suit every need and interest."
        },
        {
            icon: Zap,
            title: "Daily Updates",
            description: "Our catalog is constantly updated with fresh products to keep you ahead of the trends."
        },
        {
            icon: Heart,
            title: "Quality First",
            description: "Every product is carefully selected to ensure quality and value for our customers."
        },
        {
            icon: Globe,
            title: "Multi-Platform",
            description: "We bring you the best products from various platforms, all in one convenient place."
        },
        {
            icon: Sparkles,
            title: "Curated for You",
            description: "Our team handpicks each item to ensure you get only the best trending products."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-background to-pink-900/20" />
                <div className="container relative z-10 px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span className="text-sm font-medium text-violet-300">Our Story</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            About <span className="gradient-text">Eva&apos;s Trendifying Hub</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Your ultimate destination for discovering the latest trends across Fashion, 
                            Fitness, Digital Products, and so much more. We bring you the best from across the web, 
                            curated with care and updated daily.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 md:py-20 border-y border-border/50">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    At Eva&apos;s Trendifying Hub, we believe that staying on top of trends shouldn&apos;t be difficult. 
                                    Our mission is to simplify your shopping experience by bringing together the most popular 
                                    and trending products from various platforms into one convenient destination.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Whether you&apos;re looking for the latest fashion trends, fitness essentials, 
                                    digital products, or unique gifts, we&apos;ve got you covered. Our team works 
                                    tirelessly to curate a collection that meets your needs and exceeds your expectations.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-2xl blur-2xl" />
                                <div className="relative bg-card border border-border/50 rounded-2xl p-8">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="text-center">
                                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">134+</div>
                                            <div className="text-sm text-muted-foreground">Products</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">20</div>
                                            <div className="text-sm text-muted-foreground">Categories</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">Daily</div>
                                            <div className="text-sm text-muted-foreground">Updates</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">100%</div>
                                            <div className="text-sm text-muted-foreground">Curated</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 md:py-24">
                <div className="container px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                        <p className="text-muted-foreground">
                            We&apos;re committed to providing you with the best shopping experience possible.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div 
                                key={index} 
                                className="group p-6 bg-card border border-border/50 rounded-xl hover:border-primary/30 transition-all duration-300 hover-glow"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6 text-violet-400" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20">
                <div className="container px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-3xl blur-xl" />
                            <div className="relative bg-card border border-border/50 rounded-3xl p-8 md:p-12">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                    Ready to Discover Trending Products?
                                </h2>
                                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                                    Browse our collection of carefully curated products across 20+ categories. 
                                    Find exactly what you&apos;re looking for today.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <a 
                                        href="/products" 
                                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:scale-105"
                                    >
                                        Browse Products
                                    </a>
                                    <a 
                                        href="/categories" 
                                        className="inline-flex items-center justify-center rounded-full border-2 border-border px-8 py-3 text-sm font-medium transition-colors hover:bg-muted"
                                    >
                                        View Categories
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
