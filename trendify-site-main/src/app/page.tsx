import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { getProducts } from "@/lib/sheets";
import { TrendingUp, Sparkles, ShoppingBag } from "lucide-react";

// Category popularity ranking based on 2025-2026 search trends
const CATEGORY_PRIORITY: Record<string, number> = {
    // High Priority - Most Popular
    "Fashion (Women & Kids)": 1,
    "Fashion (Men)": 2,
    "Fitness & Health": 3,
    "Beauty & Personal Care": 4,
    "Home & Garden": 5,
    "Food & Drink": 6,
    "Animals & Pets": 7,
    "Computer & Internet": 8,
    
    // Medium Priority - Growing Niches
    "Online Marketing & E-Business": 9,
    "Personal Development": 10,
    "Education": 11,
    "Software": 12,
    "Business & Investment": 13,
    
    // Lower Priority - Niche Markets
    "Coloring Books": 14,
    "Fun & Games": 15,
    "Canva Templates & Printables": 16,
    "Hobby & Craft": 17,
    "Custom Gifts": 18,
    "Survival": 19,
    "Dating & Romance": 20,
    "Email Marketing": 21,
};

export default async function Home() {
    const allProducts = await getProducts();
    const trendingProducts = allProducts.slice(0, 8);

    // Group products by category
    const categories = Array.from(new Set(allProducts.map((p) => p.category)));
    
    // Sort categories by popularity priority
    const sortedCategories = categories.sort((a, b) => {
        const priorityA = CATEGORY_PRIORITY[a] || 999;
        const priorityB = CATEGORY_PRIORITY[b] || 999;
        return priorityA - priorityB;
    });
    
    const groupedProducts = sortedCategories.reduce((acc, category) => {
        acc[category] = allProducts.filter((p) => p.category === category);
        return acc;
    }, {} as Record<string, typeof allProducts>);

    // Select top 4 most popular categories for the visual cards
    const topCategories = sortedCategories.slice(0, 4);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[70vh] flex items-center">
                {/* Background Image with Gradient Overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop")' }}
                />
                {/* Dark Overlay with Gradient */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

                <div className="container relative z-20 px-4 py-16 md:py-24 lg:py-32">
                    <div className="flex flex-col items-center gap-6 text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <Sparkles className="w-4 h-4 text-pink-400" />
                            <span className="text-sm font-medium text-white/90">Discover Trending Products</span>
                        </div>
                        
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
                            Eva&apos;s <span className="gradient-text">Trendifying</span> Hub
                        </h1>
                        <p className="max-w-[42rem] leading-normal text-gray-200 sm:text-xl sm:leading-8 drop-shadow-md">
                            Discover the latest multi-platform trends. From Fashion to Digital Products, we bring you the best from across the web.
                        </p>
                        
                        {/* Stats */}
                        <div className="flex flex-wrap items-center justify-center gap-6 py-4">
                            <div className="flex items-center gap-2 text-white/80">
                                <ShoppingBag className="w-5 h-5 text-violet-400" />
                                <span className="font-semibold">{allProducts.length}+</span>
                                <span className="text-sm">Products</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/80">
                                <TrendingUp className="w-5 h-5 text-pink-400" />
                                <span className="font-semibold">{categories.length}</span>
                                <span className="text-sm">Categories</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/40 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                            >
                                Shop Now
                            </Link>
                            <Link
                                href="/categories"
                                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-white/20 hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                            >
                                Explore Categories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Categories Section */}
            <section className="container px-4 py-12 md:py-16">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight gradient-text">
                            Popular Categories
                        </h2>
                        <p className="text-muted-foreground mt-1">
                            Most searched categories this season
                        </p>
                    </div>
                    <Link
                        href="/categories"
                        className="text-sm font-medium text-violet-400 hover:text-pink-400 transition-colors"
                    >
                        View All →
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topCategories.map((category) => (
                        <CategoryCard
                            key={category}
                            category={category}
                            products={groupedProducts[category]}
                            featured
                        />
                    ))}
                </div>
            </section>

            {/* Trending Now Section */}
            <section id="trending" className="container px-4 py-12 md:py-24">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-5 h-5 text-pink-400" />
                            <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
                        </div>
                        <p className="text-muted-foreground">The most popular items this week.</p>
                    </div>
                    <Link
                        href="/products"
                        className="text-violet-400 hover:text-pink-400 transition-colors font-medium"
                    >
                        View All Products →
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trendingProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/products"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl"
                    >
                        View All {allProducts.length} Products
                    </Link>
                </div>
            </section>
        </div>
    );
}
