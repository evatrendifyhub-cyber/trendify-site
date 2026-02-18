"use client"

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between px-4 md:px-6">
                <div className="flex items-center">
                    <button
                        className="mr-2 md:hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                        <span className="hidden font-bold sm:inline-block text-xl tracking-tight">
                            Eva's Trendifying Hub
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href="/products"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Products
                        </Link>
                        <Link
                            href="/categories"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Categories
                        </Link>
                    </nav>
                </div>
                {/* User icon section removed from here */}
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t p-4 bg-background">
                    <nav className="flex flex-col space-y-4 text-sm font-medium">
                        <Link
                            href="/products"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            onClick={toggleMenu}
                        >
                            Products
                        </Link>
                        <Link
                            href="/categories"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            onClick={toggleMenu}
                        >
                            Categories
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
