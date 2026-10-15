import React from 'react';
import { Reveal } from '../ui/Reveal';

interface Partner {
    name: string;
    logo: string;
    url: string;
}

const partners: Partner[] = [
    {
        name: "BNI (Business Network International)",
        logo: "/images/bni-proud-member.png",
        url: "https://www.bni.com/about/",
    },
    // Add more partners here as they come.
];

export const PartnersSection = () => {
    return (
        <section className="py-24 bg-background-dark/50" id="partners">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter gold-shimmer">Our Partners</h2>
                    <div className="h-1 w-20 bg-primary mx-auto opacity-50"></div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8">
                    {partners.map((partner, i) => (
                        <Reveal key={partner.name} direction="up" delay={i * 0.1}>
                            <a
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${partner.name}`}
                                className="block bg-white rounded-xl p-6 md:p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(232,170,7,0.6)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark"
                            >
                                <img
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-24 md:h-28 w-auto object-contain"
                                />
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
