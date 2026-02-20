"use client"

import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Redirects to the products page with a search filter
            router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
            setIsMenuOpen(false); // Close mobile menu if open
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center flex-1">
                    <button
                        className="mr-2 md:hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                    
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                        <span className="hidden font-bold lg:inline-block text-xl tracking-tight">
                            Eva's Trendifying Hub
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium mr-6">
                        <Link href="/products" className="transition-colors hover:text-primary text-foreground/60">
                            Products
                        </Link>
                        <Link href="/categories" className="transition-colors hover:text-primary text-foreground/60">
                            Categories
                        </Link>
                    </nav>

                    {/* Desktop Search Bar */}
                    <form onSubmit={handleSearch} className="hidden md:flex relative max-w-sm w-full">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-muted/50 border rounded-full py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="absolute right-3 top-1.5 text-muted-foreground hover:text-primary">
                            <Search className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t p-4 bg-background space-y-4">
                    {/* Mobile Search Bar */}
                    <form onSubmit={handleSearch} className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-muted border rounded-lg py-2 pl-4 pr-10 text-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="absolute right-3 top-2.5 text-muted-foreground">
                            <Search className="h-4 w-4" />
                        </button>
                    </form>
                    <nav className="flex flex-col space-y-4 text-sm font-medium">
                        <Link href="/products" className="text-foreground/60" onClick={toggleMenu}>Products</Link>
                        <Link href="/categories" className="text-foreground/60" onClick={toggleMenu}>Categories</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
