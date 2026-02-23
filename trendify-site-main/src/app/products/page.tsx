import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/sheets";
import Link from "next/link";

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

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string; search?: string }>;
}) {
    // 1. Get both category and search keyword from the URL
    const { category, search } = await searchParams;
    const allProducts = await getProducts();

    // 2. Logic to filter products
    const filteredProducts = allProducts.filter((p) => {
        const matchesCategory = category 
            ? p.category.toLowerCase() === category.toLowerCase() 
            : true;
            
        const matchesSearch = search 
            ? p.name.toLowerCase().includes(search.toLowerCase()) || 
              p.category.toLowerCase().includes(search.toLowerCase())
            : true;

        return matchesCategory && matchesSearch;
    });

    // Get categories and sort by popularity
    const categories = Array.from(new Set(allProducts.map(p => p.category)));
    const sortedCategories = categories.sort((a, b) => {
        const priorityA = CATEGORY_PRIORITY[a] || 999;
        const priorityB = CATEGORY_PRIORITY[b] || 999;
        return priorityA - priorityB;
    });

    return (
        <div className="container px-4 py-8 md:py-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        {search ? `Results for "${search}"` : category ? `${category} Products` : "All Products"}
                    </h1>
                    <p className="text-muted-foreground">
                        Showing {filteredProducts.length} items
                    </p>
                </div>

                {/* Category Quick Filter */}
                <div className="flex flex-wrap gap-2">
                    <Link
                        href="/products"
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${!category 
                            ? "bg-gradient-to-r from-violet-600 to-pink-500 text-white border-transparent shadow-lg shadow-violet-500/25" 
                            : "bg-background hover:bg-muted border-border hover:border-primary/50"
                        }`}
                    >
                        All
                    </Link>
                    {sortedCategories.map(cat => (
                        <Link
                            key={cat}
                            href={`/products?category=${encodeURIComponent(cat)}`}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${category?.toLowerCase() === cat.toLowerCase()
                                ? "bg-gradient-to-r from-violet-600 to-pink-500 text-white border-transparent shadow-lg shadow-violet-500/25"
                                : "bg-background hover:bg-muted border-border hover:border-primary/50"
                            }`}
                        >
                            {cat}
                        </Link>
                    ))}
                </div>
            </div>

            {/* 3. Display Products or "No Product Found" */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 border-2 border-dashed rounded-3xl bg-muted/10">
                    <h3 className="text-2xl font-bold mb-2">No Product Found</h3>
                    <p className="text-muted-foreground mb-6">
                        We couldn&apos;t find anything matching &quot;{search || category}&quot;.
                    </p>
                    <Link href="/products" className="bg-gradient-to-r from-violet-600 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/25">
                        Clear Search & View All
                    </Link>
                </div>
            )}
        </div>
    );
}
