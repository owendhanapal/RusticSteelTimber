import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

interface Faq {
    question: string;
    answer: string;
}

const faqs: Faq[] = [
    {
        question: "Do you offer free quotations?",
        answer: "Larger projects typically require a professional site consultation and assessment fee to ensure accurate costing and project planning. Consultation fees may be credited towards the project value upon appointment.",
    },
    {
        question: "Which areas do you service?",
        answer: "We service Johannesburg, Sandton, Fourways, Midrand, Centurion, Pretoria, Roodepoort, Krugersdorp and surrounding Gauteng areas.",
    },
    {
        question: "What types of projects do you specialise in?",
        answer: "We specialise in premium renovations, kitchens, bathrooms, custom cabinetry, outdoor entertainment areas, composite decking and cladding, roofing, waterproofing and architectural features.",
    },
    {
        question: "Do you offer turnkey solutions?",
        answer: "Yes. We manage projects from concept to completion, ensuring a seamless experience and exceptional results.",
    },
    {
        question: "Can you assist with design and product selection?",
        answer: "Yes. We work closely with clients to develop practical and aesthetically pleasing solutions tailored to their needs and budget.",
    },
    {
        question: "How long will my project take?",
        answer: "Project timelines vary depending on the scope of work. A detailed programme will be provided before work begins.",
    },
    {
        question: "Do you supply materials?",
        answer: "Yes. We can supply all required materials or work with client-supplied finishes where preferred.",
    },
    {
        question: "Do you provide warranties on your workmanship?",
        answer: "Yes. We stand behind the quality of our workmanship and provide warranties on applicable services.",
    },
];

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section className="py-24" id="faq">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto"></div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <Reveal key={faq.question} direction="up" delay={Math.min(index * 0.05, 0.3)}>
                                <div
                                    className={`border bg-background-dark transition-colors duration-300 ${
                                        isOpen ? 'border-primary/50' : 'border-primary/10 hover:border-primary/30'
                                    }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggle(index)}
                                        aria-expanded={isOpen}
                                        className="w-full flex items-center justify-between gap-4 p-6 text-left"
                                    >
                                        <span className="text-lg md:text-xl font-bold">{faq.question}</span>
                                        <ChevronDown
                                            className={`shrink-0 w-6 h-6 transition-transform duration-300 ${
                                                isOpen ? 'rotate-180 text-primary' : 'text-slate-500'
                                            }`}
                                        />
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: [0.21, 1, 0.36, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 pb-6 text-slate-400 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
