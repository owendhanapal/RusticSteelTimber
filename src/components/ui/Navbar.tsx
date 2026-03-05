import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
                    <span className="text-xl font-bold tracking-tighter uppercase text-primary">Rustic Steel & Timber</span>
                </Link>
                <div className="hidden md:flex items-center gap-10">
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="/#about">About</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="/#services">Services</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="/#portfolio">Portfolio</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
                    <button className="bg-primary text-background-dark px-6 py-2.5 rounded font-bold text-sm uppercase tracking-wider gold-glow transition-all">
                        Request a Quote
                    </button>
                </div>
                <button className="md:hidden text-primary">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    );
};
