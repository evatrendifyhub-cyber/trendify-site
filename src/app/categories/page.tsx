import { CategoryCard } from "@/components/CategoryCard";
import { getProducts } from "@/lib/sheets";

export default async function CategoriesPage() {
    const allProducts = await getProducts();

    // Group products by category
    const categories = Array.from(new Set(allProducts.map((p) => p.category))).sort();

    const groupedProducts = categories.reduce((acc, category) => {
        acc[category] = allProducts.filter((p) => p.category === category);
        return acc;
    }, {} as Record<string, typeof allProducts>);

    return (
        <div className="container px-4 py-8 md:py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Shop by Category</h1>
                <p className="text-muted-foreground">
                    Discover our collection across {categories.length} distinct categories.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <CategoryCard
                        key={category}
                        category={category}
                        products={groupedProducts[category]}
                    />
                ))}
            </div>
        </div>
    );
}
