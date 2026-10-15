import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { TextSliderSection } from '../components/sections/TextSliderSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { FaqSection } from '../components/sections/FaqSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { AreasSection } from '../components/sections/AreasSection';
import { ContactSection } from '../components/sections/ContactSection';
// import { VideosSection } from '../components/sections/VideosSection';

export const Home = () => {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <TextSliderSection />
            <ServicesSection />
            <PortfolioSection />
            <ProcessSection />
            <PartnersSection />
            <ContactSection />
            <AreasSection />
            <FaqSection />
            {/* <VideosSection /> */}
        </main>
    );
};
