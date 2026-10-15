import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

interface Service {
    title: string;
    description: string;
    icon: string; // Material Symbols Outlined name
}

const services: Service[] = [
    {
        title: "Renovations",
        description: "Complete home renovations, room transformations and property upgrades tailored to your lifestyle and investment goals.",
        icon: "home_repair_service",
    },
    {
        title: "Outdoor Entertainment Areas",
        description: "Custom outdoor living spaces including patios, braai areas, pergolas, poolside upgrades and entertainment zones designed for effortless hosting.",
        icon: "outdoor_grill",
    },
    {
        title: "Roofing & Waterproofing",
        description: "Roof repairs, waterproofing systems, roof coatings and weather protection solutions that safeguard your property for years to come.",
        icon: "roofing",
    },
    {
        title: "Painting & Decorative Finishes",
        description: "Interior and exterior painting, specialist coatings and decorative finishes that refresh and protect your investment.",
        icon: "format_paint",
    },
    {
        title: "Bathrooms",
        description: "Luxury bathroom renovations and modern upgrades that combine comfort, practicality and premium finishes.",
        icon: "bathtub",
    },
    {
        title: "Construction & Alterations",
        description: "Building alterations, structural modifications, ceilings, partitioning and remodelling solutions that enhance the flow and value of your property.",
        icon: "construction",
    },
    {
        title: "Kitchens & Cabinetry",
        description: "Custom kitchens, built-in cupboards, walk-in closets, vanities and bespoke cabinetry designed for functionality and timeless style.",
        icon: "kitchen",
    },
    {
        title: "Composite Decking & Cladding",
        description: "Premium low-maintenance decking and architectural wall cladding solutions that elevate both indoor and outdoor spaces.",
        icon: "deck",
    },
    {
        title: "Feature Walls",
        description: "Feature walls, ambient lighting, decorative wall systems and custom design elements that create standout living spaces.",
        icon: "architecture",
    },
    {
        title: "Steel, Timber & Composite Solutions",
        description: "Custom steel structures, pergolas, carports, decorative screens and bespoke timber and composite installations.",
        icon: "precision_manufacturing",
    },
    {
        title: "Flooring Solutions",
        description: "Premium tiling, vinyl flooring, laminate flooring and surface finishes installed with precision and attention to detail.",
        icon: "grid_on",
    },
    {
        title: "Aluminium & Security Solutions",
        description: "Aluminium doors, security screen doors and estate-compliant security solutions that blend protection with modern aesthetics.",
        icon: "security",
    },
];

const INITIAL_COUNT = 4;

export const ServicesSection = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleServices = showAll ? services : services.slice(0, INITIAL_COUNT);

    return (
        <section className="py-24 bg-neutral-dark/30" id="services">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Our <span className="text-primary">Expertise</span></h2>
                    <div className="h-1 w-20 bg-primary mx-auto"></div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {visibleServices.map((service, index) => (
                        <Reveal
                            key={service.title}
                            direction="up"
                            delay={(index % INITIAL_COUNT) * 0.1}
                            className="p-8 border border-primary/10 bg-background-dark hover:border-primary/50 transition-all group expertise-card"
                        >
                            <span className="material-symbols-outlined text-primary text-5xl mb-6 block group-hover:scale-110 transition-transform">{service.icon}</span>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                            <div className="spark spark-1"></div><div className="spark spark-2"></div><div className="spark spark-3"></div><div className="spark spark-4"></div>
                        </Reveal>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button
                        type="button"
                        onClick={() => setShowAll((v) => !v)}
                        aria-expanded={showAll}
                        className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-background-dark transition-all duration-300"
                    >
                        {showAll ? "See Less" : `See More Services (${services.length - INITIAL_COUNT})`}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
                    </button>
                </div>
            </div>
        </section>
    );
};
