import { useState } from 'react';
import type { Painting } from '../types/types'
import viewImage from '/assets/shared/icon-view-image.svg';
import Lightbox from './Lightbox'
import SlideshowControl from './SlideshowControl';

type SlideProps = {
    painting: Painting;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void
    progress: number;
}

export default function Slide({ painting, onClose, onNext, onPrev, progress}: SlideProps) {
    const [showLightbox, setShowLightbox] = useState(false);

    return (
        <article className="min-h-screen w-full flex flex-col gap-8 relative px-6 pb-40 lg:px-10 lg:pb-24 max-w-7xl mx-auto bg-white overflow-x-hidden lg:overflow-x-visible">
            <div>
                <button 
                    onClick={onClose}
                    className="text-gray-500 font-bold tracking-widest text-xs uppercase hover:text-black transition-colors cursor-pointer"
                >Back to Gallery</button>
            </div>
            <section className="pt-4 grid grid-cols-1 lg:grid-cols-12 lg:gap-x-10">
                <section className="relative lg:col-span-8">
                    <div className="relative inline-block w-full">
                        <img 
                            src={painting.images.hero.small}
                            srcSet={`${painting.images.hero.small} 768w, ${painting.images.hero.large} 1280w`}
                            alt={painting.name}
                            className="w-full md:max-w-3/4 h-auto object-cover shadow-sm"
                        />
                        <button 
                            onClick={() => setShowLightbox(true)}
                            className="absolute top-4 left-4 lg:bottom-4 lg:top-auto bg-black/75 text-white px-4 py-3 flex items-center gap-4 text-xs font-bold tracking-[0.2em] hover:scale-90 uppercase cursor-pointer"
                        >
                        <img 
                            src={viewImage} 
                            alt="view image icon" 
                            className="size-4" />                    
                            VIEW IMAGE
                        </button>
                    </div>
                    <div className="absolute -bottom-20 left-0 bg-white p-10 
                                    md:left-auto md:right-0 md:top-0 md:bottom-auto 
                                    lg:left-auto lg:-right-25 lg:top-0 lg:bottom-auto 
                                    w-[90%] md:w-[60%] lg:w-120 shadow-sm lg:shadow-none">
                        <h1 className="text-2xl md:text-5xl font-bold leading-tight text-black">
                            {painting.name}
                        </h1>
                        <h2 className="text-gray-500 mt-2 md:mt-6 text-sm md:text-lg">
                            {painting.artist.name}
                        </h2>
                    </div>
                </section>
                <section className="relative lg:col-span-4 flex flex-col items-start md:justify-center lg:items-start pt-24 lg:pt-0">
                    <div className="absolute left-0 md:left-auto md:right-10 md:-top-37.5 lg:top-auto lg:bottom-2 lg:-left-45 z-30">
                        <img 
                            src={painting.artist.image} 
                            alt={painting.artist.name} 
                            className="size-24 md:size-32 object-cover" 
                        />
                    </div>
                    <span className="absolute right-0 text-[8rem] md:text-[14rem]  text-gray-200/60 font-bold z-10 select-none
                                     md:right-auto md:left-0 md:-top-10 lg:text-[10rem] lg:left-auto lg:right-0 lg:-top-15" 
                    >{painting.year}</span>
                    <div className="relative">
                        <p className="text-gray-500 text-base/8 font-extrabold relative z-10 pt-36 md:pt-10 lg:pt-20 px-4 lg:px-0"
                        >{painting.description}</p>
                        <a 
                            href={painting.source} 
                            target="_blank"
                            rel="no-referrer"
                            className="inline-block mt-10 ml-4 lg:ml-0 text-xs font-bold text-gray-500 underline tracking-[0.2em] hover:text-black transition-colors uppercase"
                            > 
                            Go to Source</a>
                    </div>
                </section>
            </section>
            <SlideshowControl 
                name = {painting.name}
                artist = {painting.artist.name} 
                onNext = {onNext} 
                onPrev = {onPrev} 
                progress={progress} 
            />
            { showLightbox && (
                <Lightbox image={painting.images.gallery} onClose={() => setShowLightbox(false)} />
            )}
        </article>
    )
}