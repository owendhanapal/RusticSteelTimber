import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../ui/Reveal';

export const PortfolioSection = () => {
    return (
        <section className="py-24" id="portfolio">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Project <span className="text-primary">Portfolio</span></h2>
                        <p className="text-slate-400 mt-4 max-w-xl">A showcase of our recent works blending the industrial and the organic.</p>
                    </div>
                    <Link to="/portfolio" className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2 group">
                        View All Projects <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Reveal direction="zoom" delay={0.1} className="relative group aspect-[4/3] overflow-hidden rounded-lg">
                        <img
                            alt="Modern living room with steel beams and wood ceiling"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkDK20jYaf9CVac9QS2PHK89f_9bFDghbJHaam8TcOGtJDxKnQGwbBjN8GcVQG5CN-_5mzbkT84SHoXmcsOf2M2WExRcAnFcC379xRon2EkKp0dYRooc63Ezw7Q7-BB4AmqxVkSfxVzF4PMOIsvnp1GfiOsEfR21l1FrIDCse3N59L9t82Nknhk-23ypz1YUpkduJFFAYC63YLNMccUuBaMiwvmIIhrypmY-zxFI53AtLpn4lMMR6sLL66RD9kO0ZtrbAIK2ZX1DKS"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-background-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 border-4 border-transparent group-hover:border-primary">
                            <h4 className="text-xl font-bold text-primary">Urban Loft Hybrid</h4>
                            <p className="text-sm text-slate-300">New York, NY</p>
                        </div>
                    </Reveal>
                    <Reveal direction="zoom" delay={0.3} className="relative group aspect-[4/3] overflow-hidden rounded-lg">
                        <img
                            alt="Modern mountain cabin with timber and steel"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWxB3VHsHMYUHjEci3ohxWYMhdO0tplhEUHrEjPE0K92xr6s_2ltWvonQy-L19vrHZDpgEFyTBB-d2M4CzHj9tYEoUubx4XweJP6OEhsf9r7GAUHDGZdblHcFrHVQC--BfPiF2FaM8SRPl88dSwr8kW7OuGF4qD073uYIJ6uyLc-G5Dc0nKl78HA6p7wp0Hvf6kReZgFwa_gxRoSdRF5cMspFBb7WPKvBJgnpoLs117_ZU_p0tYoAqY5wNXmMedSaorvQ-027N7p1K"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-background-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 border-4 border-transparent group-hover:border-primary">
                            <h4 className="text-xl font-bold text-primary">Mountain Retreat</h4>
                            <p className="text-sm text-slate-300">Aspen, CO</p>
                        </div>
                    </Reveal>
                    <Reveal direction="zoom" delay={0.5} className="relative group aspect-[4/3] overflow-hidden rounded-lg">
                        <img
                            alt="Exterior of a modern home with black steel and light timber"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDreQ6sLZQqCgVRqNXK2Z2f4odXpULizpuRk0tXbuaLbzZ1peq-rPctlUHBXU0oeXxPAjdNlLYGmR7-u5GKbdwed7rwq1y07uDa4MKPIbCZ8Eb-i9LBvzaK3cb0x6eOGGP8qv8gfQFZ6sfb0k3K08zdvNfn4oPDnAtvFstyvXc4r08CVgtfmWNLLKvwrkYd683nep9DQzP6Ivp36pfrrhWuLUNMYR7dxQ8pmP1WAv2dchFf7HjbK6RxYhrHUcXpmpGt6ZqXWAAhaiGD"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-background-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 border-4 border-transparent group-hover:border-primary">
                            <h4 className="text-xl font-bold text-primary">Minimalist Manor</h4>
                            <p className="text-sm text-slate-300">Austin, TX</p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
