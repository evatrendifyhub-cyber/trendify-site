"use client"

import Link from "next/link";
import { Menu, X, Search, MessageCircle, Info } from "lucide-react";
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
        <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center flex-1">
                    <button
                        className="mr-2 md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                    
                    <Link href="/" className="mr-6 flex items-center space-x-2 group">
                        <img src="/logo.png" alt="Logo" className="h-8 w-auto transition-transform group-hover:scale-105" />
                        <span className="hidden font-bold lg:inline-block text-xl tracking-tight gradient-text">
                            Eva&apos;s Trendifying Hub
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-1 text-sm font-medium mr-6">
                        <Link 
                            href="/products" 
                            className="px-3 py-2 rounded-lg transition-colors hover:text-primary hover:bg-muted text-foreground/70"
                        >
                            Products
                        </Link>
                        <Link 
                            href="/categories" 
                            className="px-3 py-2 rounded-lg transition-colors hover:text-primary hover:bg-muted text-foreground/70"
                        >
                            Categories
                        </Link>
                        <Link 
                            href="/about" 
                            className="px-3 py-2 rounded-lg transition-colors hover:text-primary hover:bg-muted text-foreground/70 flex items-center gap-1.5"
                        >
                            <Info className="w-4 h-4" />
                            About
                        </Link>
                        <Link 
                            href="/comment-inquiries" 
                            className="px-3 py-2 rounded-lg transition-colors hover:text-primary hover:bg-muted text-foreground/70 flex items-center gap-1.5"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Inquiries
                        </Link>
                    </nav>

                    {/* Desktop Search Bar */}
                    <form onSubmit={handleSearch} className="hidden md:flex relative max-w-sm w-full">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-muted/50 border border-border/50 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="absolute right-3 top-2 text-muted-foreground hover:text-primary transition-colors">
                            <Search className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-border/50 p-4 bg-background/95 backdrop-blur-xl space-y-4">
                    {/* Mobile Search Bar */}
                    <form onSubmit={handleSearch} className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-muted border border-border/50 rounded-lg py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="absolute right-3 top-2.5 text-muted-foreground hover:text-primary">
                            <Search className="h-4 w-4" />
                        </button>
                    </form>
                    <nav className="flex flex-col space-y-1 text-sm font-medium">
                        <Link 
                            href="/products" 
                            className="px-3 py-2.5 rounded-lg text-foreground/70 hover:bg-muted hover:text-primary transition-colors"
                            onClick={toggleMenu}
                        >
                            Products
                        </Link>
                        <Link 
                            href="/categories" 
                            className="px-3 py-2.5 rounded-lg text-foreground/70 hover:bg-muted hover:text-primary transition-colors"
                            onClick={toggleMenu}
                        >
                            Categories
                        </Link>
                        <Link 
                            href="/about" 
                            className="px-3 py-2.5 rounded-lg text-foreground/70 hover:bg-muted hover:text-primary transition-colors flex items-center gap-2"
                            onClick={toggleMenu}
                        >
                            <Info className="w-4 h-4" />
                            About
                        </Link>
                        <Link 
                            href="/comment-inquiries" 
                            className="px-3 py-2.5 rounded-lg text-foreground/70 hover:bg-muted hover:text-primary transition-colors flex items-center gap-2"
                            onClick={toggleMenu}
                        >
                            <MessageCircle className="w-4 h-4" />
                            Inquiries
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
