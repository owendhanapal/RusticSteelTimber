import React from 'react';

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-primary/10 bg-background-dark">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">architecture</span>
                    <span className="font-bold tracking-tighter uppercase text-slate-400">Rustic Steel & Timber</span>
                </div>
                <p className="text-slate-500 text-sm">© 2024 Rustic Steel and Timber. All rights reserved.</p>
                <div className="flex gap-6">
                    <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share_reviews</span></a>
                    <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">photo_camera</span></a>
                    <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">work</span></a>
                </div>
            </div>
        </footer>
    );
};
