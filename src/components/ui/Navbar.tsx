import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <nav className="fixed top-0 w-full z-[100] bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[110]">
                <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                    <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
                    <span className="text-xl font-bold tracking-tighter uppercase text-primary">Rustic Steel & Timber</span>
                </Link>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="/#about">About</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="/#services">Services</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="/portfolio">Portfolio</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="/#contact">Contact</a>
                    <a href="/#contact" className="bg-primary text-background-dark px-6 py-2.5 rounded font-bold text-sm uppercase tracking-wider gold-glow transition-all">
                        Request a Quote
                    </a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button 
                    className="md:hidden text-primary pointer-events-auto"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="material-symbols-outlined text-3xl transition-transform duration-300">
                        {isMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`
                fixed inset-0 w-full h-screen bg-neutral-950/98 z-[105] flex flex-col items-center justify-center gap-8
                transition-all duration-300 md:hidden pt-12
                ${isMenuOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-105'}
            `}>
                <a className="text-3xl font-bold text-white hover:text-primary transition-colors" href="/#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a className="text-3xl font-bold text-white hover:text-primary transition-colors" href="/#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a className="text-3xl font-bold text-white hover:text-primary transition-colors" href="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                <a className="text-3xl font-bold text-white hover:text-primary transition-colors" href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <a href="/#contact" className="bg-primary text-background-dark mt-8 px-10 py-4 rounded font-bold text-xl uppercase tracking-wider gold-glow transition-all" onClick={() => setIsMenuOpen(false)}>
                    Request a Quote
                </a>
            </div>
        </nav>
    );
};
