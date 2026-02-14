import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { getProducts } from "@/lib/sheets";

export default async function Home() {
  const allProducts = await getProducts();
  const trendingProducts = allProducts.slice(0, 8);

  // Group products by category
  const categories = Array.from(new Set(allProducts.map((p) => p.category)));
  const groupedProducts = categories.reduce((acc, category) => {
    acc[category] = allProducts.filter((p) => p.category === category);
    return acc;
  }, {} as Record<string, typeof allProducts>);

  // Select major categories for the visual cards
  const majorCategories = ["Fashion", "Health", "Gifts", "Digital Products"];
  // Fallback to whatever categories are available if the specific ones don't exist
  const categoriesToShow = majorCategories.filter(cat => groupedProducts[cat]).length > 0
    ? majorCategories.filter(cat => groupedProducts[cat])
    : categories.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop")' }}
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 z-10 bg-black/40" />

        <div className="container relative z-20 px-4 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-md">
              Eva's Trendifying Hub
            </h1>
            <p className="max-w-[42rem] leading-normal text-gray-200 sm:text-xl sm:leading-8 drop-shadow-sm">
              Discover the latest multi-platform trends. From Fashion to Digital Products, we bring you the best from across the web.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-medium text-black shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Shop Now
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-8 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards Section (Amazon-style) */}
      <section className="container px-4 py-8 md:py-12 bg-muted/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesToShow.map((category) => (
            <CategoryCard
              key={category}
              category={category}
              products={groupedProducts[category]}
            />
          ))}
        </div>
      </section>

      {/* Trending Now Section */}
      <section id="trending" className="container px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
            <p className="text-muted-foreground">The most popular items this week.</p>
          </div>
          <Link
            href="/products"
            className="text-primary hover:underline font-medium"
          >
            View All Products
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
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View All {allProducts.length} Products
          </Link>
        </div>
      </section>
    </div>
  );
}

