import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/types";

interface ProductCardProps extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> {
    product: Product;
    aspectRatio?: "portrait" | "square";
}

export function ProductCard({
    product,
    aspectRatio = "portrait",
    className,
}: ProductCardProps) {
    return (
        <div className={cn("group space-y-3", className)}>
            <Link
                href={`/products/${product.id}`}
                className="block focus:outline-none"
            >
                <div className={cn(
                    "relative overflow-hidden rounded-xl bg-card border border-border/50 transition-all duration-300",
                    "group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10",
                    aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
                )}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        unoptimized={true}
                        className="object-contain p-4 transition-all duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <p className="text-white/90 text-sm line-clamp-3 leading-relaxed mb-3">
                            {product.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-violet-300 text-sm font-medium">
                            View Details
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </Link>

            <div className="space-y-2">
                <Link href={`/products/${product.id}`} className="block">
                    <h3 className="font-medium leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                    </h3>
                </Link>
                
                <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                        {product.category}
                    </span>
                    <p className="font-bold text-lg gradient-text">
                        ${product.price.toFixed(2)}
                    </p>
                </div>

                {/* Mobile Description */}
                <p className="text-xs text-muted-foreground line-clamp-2 md:hidden">
                    {product.description}
                </p>
            </div>
        </div>
    );
}
