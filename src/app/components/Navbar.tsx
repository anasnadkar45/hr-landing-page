"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../public/Logo.svg";
import Link from "next/link";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Add smooth scrolling behavior to the document
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth"
        });
    };

    if (!isMounted) {
        return null;
    }

    return (
        <motion.nav
            className={`fixed top-2 -left-2 -right-2 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative py-3 px-3 bg-card rounded-md border border-slate-400/50">
                    <div className="flex justify-between items-center">
                        <motion.div
                            className="font-bold text-xl"
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href={"/"} className="flex gap-2 items-center">
                                <Image src={Logo} alt="Logo" className="size-7" />
                                <h1>ShamzBridge</h1>
                            </Link>
                        </motion.div>
                        <div className="hidden md:flex space-x-5">
                            <a href="#home" className="text-base font-medium hover:text-primary" onClick={handleScroll}>
                                Home
                            </a>
                            <a href="#about" className="text-base font-medium hover:text-primary" onClick={handleScroll}>
                                About Us
                            </a>
                            <a href="#services" className="text-base font-medium hover:text-primary" onClick={handleScroll}>
                                Services
                            </a>
                            <a href="#faq" className="text-base font-medium hover:text-primary" onClick={handleScroll}>
                                Faqs
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button className="whitespace-nowrap hidden md:block" variant="default">
                                Get Started for Free
                            </Button>
                            <div className="md:hidden">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <Menu className="h-6 w-6" />
                                            <span className="sr-only">Open menu</span>
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="right">
                                        <nav className="flex flex-col gap-4">
                                            <a href="#home" className="text-base font-medium hover:text-primary" onClick={handleScroll}>
                                                Home
                                            </a>
                                            <a href="#about" className="text-base font-medium hover:text-primary" onClick={handleScroll}>
                                                About Us
                                            </a>
                                            <a href="#services" className="text-base font-medium hover:text-primary" onClick={handleScroll}>
                                                Services
                                            </a>
                                            <a href="#faq" className="text-base font-medium hover:text-primary" onClick={handleScroll}>
                                                Faqs
                                            </a>
                                            <Button className="whitespace-nowrap" variant="default">
                                                Get Started for Free
                                            </Button>
                                        </nav>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--primary))] to-[hsl(var(--primary))] opacity-0 transition-opacity duration-300 rounded-md z-5 pointer-events-none"
                        whileHover={{ opacity: 0.2 }}
                    />
                </div>
            </div>
        </motion.nav>
    );
};