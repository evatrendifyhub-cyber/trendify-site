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
        <Link
            href={`/products/${product.id}`}
            className={cn("group space-y-3 block focus:outline-none", className)}
        >
            <div className={cn(
                "relative overflow-hidden rounded-md bg-muted/50",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized={true}
                    className="object-contain transition-all group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Desktop Hover Description Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center p-4">
                    <p className="text-white text-sm text-center line-clamp-6 leading-relaxed">
                        {product.description}
                    </p>
                </div>
            </div>

            <div className="space-y-1 text-sm">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium leading-none group-hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                    <p className="font-semibold shrink-0">${product.price.toFixed(2)}</p>
                </div>
                <p className="text-xs text-muted-foreground">{product.category}</p>

                {/* Mobile/Tablet Description (shown by default, hidden on desktop) */}
                <p className="text-xs text-muted-foreground line-clamp-2 md:hidden pt-1">
                    {product.description}
                </p>
            </div>
        </Link>
    );
}
