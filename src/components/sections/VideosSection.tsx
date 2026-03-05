import React from 'react';
import { Reveal } from '../ui/Reveal';

// Helper function to extract the video ID from standard YouTube links
const getYouTubeId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

// ADD YOUR VIDEOS HERE:
// Just paste the regular YouTube link (e.g., "https://youtu.be/..."). 
// Leave the url blank if you just want a placeholder.
const videosData = [
    {
        title: "Rustic Craftsmanship",
        desc: "A quick look at our custom metalwork in action.",
        url: "https://youtu.be/lvlOGmsS5cw?si=Y4WoPiG3xFNWk_1D"
    },
    {
        title: "Timber Raising 2024",
        desc: "Time-lapse of a massive oak frame assembly.",
        url: "https://youtu.be/tswmDAIYb0A?si=5tEvowQmKJlpmpeQ"
    },
    {
        title: "Modern Cabin Tour",
        desc: "A walkthrough of the award-winning Alpine project.",
        url: "https://youtu.be/Zpj5nHmqkqU?si=dWn1m5ZAJ_diXv0e"
    }
];

export const VideosSection = () => {
    return (
        <section className="py-24" id="videos">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <Reveal direction="up">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight gold-shimmer">Craftsmanship In Motion</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Go behind the scenes and witness the transformation from raw materials to architectural masterpieces.</p>
                    </Reveal>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {videosData.map((video, i) => {
                        const embedId = getYouTubeId(video.url);

                        return (
                            <Reveal key={i} direction="up" delay={i * 0.2} className="relative group rounded-xl overflow-hidden bg-neutral-dark border border-primary/10 gold-glow flex flex-col">
                                {embedId ? (
                                    <div className="aspect-video w-full relative">
                                        <iframe
                                            className="absolute inset-0 w-full h-full"
                                            src={`https://www.youtube.com/embed/${embedId}`}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                ) : (
                                    <div className="aspect-video bg-slate-800 flex items-center justify-center relative">
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                        <span className="material-symbols-outlined text-6xl text-primary opacity-80 group-hover:scale-110 transition-transform cursor-pointer">play_circle</span>
                                    </div>
                                )}
                                <div className="p-6 flex-1 bg-neutral-dark">
                                    <h4 className="text-lg font-bold text-primary mb-2">{video.title}</h4>
                                    <p className="text-sm text-slate-500">{video.desc}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
