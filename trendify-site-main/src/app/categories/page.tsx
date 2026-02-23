import { CategoryCard } from "@/components/CategoryCard";
import { getProducts } from "@/lib/sheets";

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

export default async function CategoriesPage() {
    const allProducts = await getProducts();

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

    return (
        <div className="container px-4 py-8 md:py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2 gradient-text">
                    Shop by Category
                </h1>
                <p className="text-muted-foreground">
                    Discover our collection across {categories.length} distinct categories, organized by popularity.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedCategories.map((category) => (
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
