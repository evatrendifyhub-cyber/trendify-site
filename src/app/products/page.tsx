import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/sheets";
import Link from "next/link";

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

    const categories = Array.from(new Set(allProducts.map(p => p.category))).sort();

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
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${!category ? "bg-primary text-primary-foreground border-primary" : "bg-background hover:bg-accent"
                            }`}
                    >
                        All
                    </Link>
                    {categories.map(cat => (
                        <Link
                            key={cat}
                            href={`/products?category=${encodeURIComponent(cat)}`}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${category?.toLowerCase() === cat.toLowerCase()
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-background hover:bg-accent"
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
                        We couldn't find anything matching "{search || category}".
                    </p>
                    <Link href="/products" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                        Clear Search & View All
                    </Link>
                </div>
            )}
        </div>
    );
}
