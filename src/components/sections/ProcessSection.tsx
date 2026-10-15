import React from 'react';
import { MessageSquare, ClipboardCheck, FileText, CalendarClock, HardHat, KeyRound, LucideIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

interface Step {
    title: string;
    description: string;
    Icon: LucideIcon;
}

const steps: Step[] = [
    {
        title: "Initial Enquiry",
        description: "You reach out and tell us about your vision, needs and budget.",
        Icon: MessageSquare,
    },
    {
        title: "Consultation & Site Assessment",
        description: "We visit the site to assess the scope and requirements in detail.",
        Icon: ClipboardCheck,
    },
    {
        title: "Project Proposal",
        description: "You receive a clear, detailed proposal with accurate costing.",
        Icon: FileText,
    },
    {
        title: "Planning & Scheduling",
        description: "We finalise the programme, materials and timeline for the build.",
        Icon: CalendarClock,
    },
    {
        title: "Construction & Installation",
        description: "Our team executes the work with precision craftsmanship.",
        Icon: HardHat,
    },
    {
        title: "Project Handover",
        description: "We complete a final walkthrough and hand over your finished space.",
        Icon: KeyRound,
    },
];

export const ProcessSection = () => {
    return (
        <section className="py-24 bg-neutral-dark/30" id="process">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">How We Work</span>
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Our <span className="text-primary">Process</span></h2>
                    <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
                </div>

                <div className="relative">
                    {/* Connector line — vertical on mobile, horizontal on desktop */}
                    <div
                        aria-hidden="true"
                        className="md:hidden absolute left-[39px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10"
                    ></div>
                    <div
                        aria-hidden="true"
                        className="hidden md:block absolute top-10 left-[8.33%] right-[8.33%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10"
                    ></div>

                    <div className="grid gap-12 md:gap-4 md:grid-cols-6">
                        {steps.map((step, index) => (
                            <Reveal key={step.title} direction="up" delay={Math.min(index * 0.1, 0.5)}>
                                <div className="group flex md:flex-col items-start md:items-center gap-6 md:gap-5 md:text-center">
                                    {/* Node */}
                                    <div className="relative z-10 shrink-0">
                                        <div className="grid place-items-center w-20 h-20 rounded-full border-2 border-primary/40 bg-background-dark transition-all duration-400 group-hover:border-primary group-hover:shadow-[0_0_25px_-6px_rgba(232,170,7,0.6)] group-hover:-translate-y-1">
                                            <step.Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                                        </div>
                                        <span className="absolute -top-1.5 -right-1.5 grid place-items-center w-7 h-7 rounded-full bg-primary text-background-dark text-sm font-bold shadow-lg">
                                            {index + 1}
                                        </span>
                                    </div>

                                    {/* Text */}
                                    <div className="md:px-1">
                                        <h3 className="text-lg font-bold leading-snug mb-2">{step.title}</h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
