import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { TextSliderSection } from '../components/sections/TextSliderSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { VideosSection } from '../components/sections/VideosSection';

export const Home = () => {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <TextSliderSection />
            <ServicesSection />
            <PortfolioSection />
            <PartnersSection />
            <VideosSection />
        </main>
    );
};
