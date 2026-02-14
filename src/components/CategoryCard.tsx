import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
    category: string;
    products: Product[];
    className?: string;
}

export function CategoryCard({ category, products, className }: CategoryCardProps) {
    const displayProducts = products.slice(0, 4);

    return (
        <div className={cn("flex flex-col bg-card border rounded-lg overflow-hidden p-4 shadow-sm h-full", className)}>
            <h3 className="text-xl font-bold mb-4">{category}</h3>

            <div className="grid grid-cols-2 gap-2 flex-grow mb-4">
                {displayProducts.map((product) => (
                    <div key={product.id} className="relative aspect-square bg-muted/50 rounded-sm overflow-hidden">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            priority
                            unoptimized={true}
                            className="object-contain p-1"
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </div>
                ))}
                {/* Fallback for categories with fewer than 4 products */}
                {Array.from({ length: Math.max(0, 4 - displayProducts.length) }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square bg-muted/30 rounded-sm" />
                ))}
            </div>

            <Link
                href={`/products?category=${encodeURIComponent(category)}`}
                className="text-sm font-medium text-blue-500 hover:text-blue-600 hover:underline mt-auto"
            >
                Explore All
            </Link>
        </div>
    );
}
