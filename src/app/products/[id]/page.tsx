import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { getProductById } from "@/lib/sheets";

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container px-4 py-8 md:py-12 lg:py-16">
            <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back to {product.category} Products
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Product Image Area */}
                <div className="relative aspect-square lg:aspect-[4/5] bg-muted/50 rounded-xl overflow-hidden shadow-sm">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        priority
                        unoptimized={true}
                        className="object-contain p-4 md:p-8"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>

                {/* Product Info Area */}
                <div className="flex flex-col">
                    <div className="mb-6">
                        <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">
                            {product.category}
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-bold text-foreground">
                            ${product.price.toFixed(2)}
                        </p>
                    </div>

                    <div className="prose prose-sm dark:prose-invert max-w-none mb-10 pb-10 border-b">
                        <h3 className="text-lg font-semibold mb-4">Description</h3>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                            {product.description}
                        </p>
                    </div>

                    <div className="mt-auto">
                        <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            Buy Now
                            <ExternalLink className="ml-2 h-5 w-5" />
                        </a>
                        <p className="mt-4 text-xs text-muted-foreground italic">
                            *This will redirect you to the official platform (Gumroad, Spreadshirt, etc.) to complete your purchase.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
