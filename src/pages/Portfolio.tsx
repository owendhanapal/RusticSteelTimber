import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';

export const Portfolio = () => {
    return (
        <main className="pt-20">
            {/* Portfolio Header */}
            <section className="py-24 bg-neutral-dark/30 border-b border-primary/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">Our <span className="text-primary">Portfolio</span></h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Explore our complete collection of architectural masterpieces, where raw industrial strength meets the warmth of natural design.
                    </p>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* More items can be added here later */}
                        {[
                            { title: "Urban Loft Hybrid", location: "New York, NY", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkDK20jYaf9CVac9QS2PHK89f_9bFDghbJHaam8TcOGtJDxKnQGwbBjN8GcVQG5CN-_5mzbkT84SHoXmcsOf2M2WExRcAnFcC379xRon2EkKp0dYRooc63Ezw7Q7-BB4AmqxVkSfxVzF4PMOIsvnp1GfiOsEfR21l1FrIDCse3N59L9t82Nknhk-23ypz1YUpkduJFFAYC63YLNMccUuBaMiwvmIIhrypmY-zxFI53AtLpn4lMMR6sLL66RD9kO0ZtrbAIK2ZX1DKS" },
                            { title: "Mountain Retreat", location: "Aspen, CO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWxB3VHsHMYUHjEci3ohxWYMhdO0tplhEUHrEjPE0K92xr6s_2ltWvonQy-L19vrHZDpgEFyTBB-d2M4CzHj9tYEoUubx4XweJP6OEhsf9r7GAUHDGZdblHcFrHVQC--BfPiF2FaM8SRPl88dSwr8kW7OuGF4qD073uYIJ6uyLc-G5Dc0nKl78HA6p7wp0Hvf6kReZgFwa_gxRoSdRF5cMspFBb7WPKvBJgnpoLs117_ZU_p0tYoAqY5wNXmMedSaorvQ-027N7p1K" },
                            { title: "Minimalist Manor", location: "Austin, TX", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDreQ6sLZQqCgVRqNXK2Z2f4odXpULizpuRk0tXbuaLbzZ1peq-rPctlUHBXU0oeXxPAjdNlLYGmR7-u5GKbdwed7rwq1y07uDa4MKPIbCZ8Eb-i9LBvzaK3cb0x6eOGGP8qv8gfQFZ6sfb0k3K08zdvNfn4oPDnAtvFstyvXc4r08CVgtfmWNLLKvwrkYd683nep9DQzP6Ivp36pfrrhWuLUNMYR7dxQ8pmP1WAv2dchFf7HjbK6RxYhrHUcXpmpGt6ZqXWAAhaiGD" },
                            { title: "Timber Frame Event Center", location: "Nashville, TN", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfFLu3vRidi4jlr7MVMdw_kqy3LFRbWF6f8i3iYDrTTC077af8fZoyvDcpGudbKmTJhj6UheH55s_ZKvgcNeVpSdtm9hV0K2OnPKcQxXVBg9xijepZOkaMD_rahnYFHDfTzHZbRWlUoPGWtkzaRvrnNJV_cV36ompcziG347F5MwQtW1c0fDozOemCpTMOjmmoPrMSg0JMq4TmBK9uKQNtfzYzNJvGRLZHh5xzBHP_Sbv1VpvHBcGoTagDDwxcwIJnn2Iz5sFUjzqi" },
                            { title: "Industrial Brewery", location: "Portland, OR", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkDK20jYaf9CVac9QS2PHK89f_9bFDghbJHaam8TcOGtJDxKnQGwbBjN8GcVQG5CN-_5mzbkT84SHoXmcsOf2M2WExRcAnFcC379xRon2EkKp0dYRooc63Ezw7Q7-BB4AmqxVkSfxVzF4PMOIsvnp1GfiOsEfR21l1FrIDCse3N59L9t82Nknhk-23ypz1YUpkduJFFAYC63YLNMccUuBaMiwvmIIhrypmY-zxFI53AtLpn4lMMR6sLL66RD9kO0ZtrbAIK2ZX1DKS" },
                            { title: "Custom Steel Staircase", location: "Chicago, IL", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDreQ6sLZQqCgVRqNXK2Z2f4odXpULizpuRk0tXbuaLbzZ1peq-rPctlUHBXU0oeXxPAjdNlLYGmR7-u5GKbdwed7rwq1y07uDa4MKPIbCZ8Eb-i9LBvzaK3cb0x6eOGGP8qv8gfQFZ6sfb0k3K08zdvNfn4oPDnAtvFstyvXc4r08CVgtfmWNLLKvwrkYd683nep9DQzP6Ivp36pfrrhWuLUNMYR7dxQ8pmP1WAv2dchFf7HjbK6RxYhrHUcXpmpGt6ZqXWAAhaiGD" },
                        ].map((project, i) => (
                            <div key={i} className="relative group aspect-[4/3] overflow-hidden rounded-lg cursor-pointer">
                                <img
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src={project.img}
                                />
                                <div className="absolute inset-0 bg-background-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 border-4 border-transparent group-hover:border-primary">
                                    <h4 className="text-xl font-bold text-primary">{project.title}</h4>
                                    <p className="text-sm text-slate-300">{project.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
