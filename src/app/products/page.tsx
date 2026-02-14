import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/sheets";
import Link from "next/link";

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string }>;
}) {
    const { category } = await searchParams;
    const allProducts = await getProducts();

    // Filter by category if provided
    const filteredProducts = category
        ? allProducts.filter(p => p.category.toLowerCase() === category.toLowerCase())
        : allProducts;

    const categories = Array.from(new Set(allProducts.map(p => p.category))).sort();

    return (
        <div className="container px-4 py-8 md:py-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        {category ? `${category} Products` : "All Products"}
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

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24">
                    <p className="text-xl text-muted-foreground">No products found in this category.</p>
                    <Link href="/products" className="text-primary hover:underline mt-4 inline-block">
                        View all products
                    </Link>
                </div>
            )}
        </div>
    );
}
