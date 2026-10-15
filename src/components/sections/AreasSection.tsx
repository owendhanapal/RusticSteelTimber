import React from 'react';
import { MapPin } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const areas = [
    "Johannesburg",
    "Sandton",
    "Fourways",
    "Bryanston",
    "Midrand",
    "Centurion",
    "Pretoria",
    "Roodepoort",
    "Ruimsig",
    "Krugersdorp",
];

export const AreasSection = () => {
    return (
        <section className="py-16 border-y border-primary/10" id="areas">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <Reveal direction="up">
                    <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-8">
                        <MapPin className="w-4 h-4" /> Areas We Service
                    </span>

                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {areas.map((area) => (
                            <span
                                key={area}
                                className="px-5 py-2 rounded-full border border-primary/20 bg-neutral-dark/40 text-slate-200 text-sm font-medium hover:border-primary/60 hover:text-primary transition-colors duration-300"
                            >
                                {area}
                            </span>
                        ))}
                    </div>

                    <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Based in <span className="text-slate-200 font-semibold">Gauteng</span>, we undertake projects throughout the province and are available for select projects nationwide.
                    </p>
                </Reveal>
            </div>
        </section>
    );
};
