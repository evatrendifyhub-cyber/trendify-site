import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
    category: string;
    products: Product[];
    className?: string;
    featured?: boolean;
}

export function CategoryCard({ category, products, className, featured = false }: CategoryCardProps) {
    const displayProducts = products.slice(0, 4);
    const productCount = products.length;

    return (
        <Link
            href={`/products?category=${encodeURIComponent(category)}`}
            className={cn(
                "group block bg-card border rounded-xl overflow-hidden transition-all duration-300",
                "hover:border-primary/40 hover-glow hover:-translate-y-1",
                className
            )}
        >
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className={cn(
                        "font-bold group-hover:text-primary transition-colors",
                        featured ? "text-lg" : "text-xl"
                    )}>
                        {category}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                        {productCount} items
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-2 flex-grow mb-4">
                    {displayProducts.map((product) => (
                        <div 
                            key={product.id} 
                            className="relative aspect-square bg-muted/30 rounded-lg overflow-hidden group/item"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                priority={true}
                                quality={70}
                                className="object-contain p-2 transition-transform group-hover/item:scale-105"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </div>
                    ))}
                    {/* Fallback for categories with fewer than 4 products */}
                    {Array.from({ length: Math.max(0, 4 - displayProducts.length) }).map((_, i) => (
                        <div 
                            key={`empty-${i}`} 
                            className="aspect-square bg-muted/20 rounded-lg flex items-center justify-center"
                        >
                            <div className="w-8 h-8 rounded-full bg-muted/40" />
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-violet-400 group-hover:text-pink-400 transition-colors flex items-center gap-1">
                        Explore All
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}
