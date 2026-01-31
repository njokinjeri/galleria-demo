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
        <section>
            <div>
                <button onClick={onClose}>Back to Gallery</button>
            </div>
            <div>
                <img 
                    src={painting.images.hero.small}
                    srcSet={`${painting.images.hero.small} 768w, ${painting.images.hero.large} 1280w`}
                    alt={painting.name}
                />
                <button onClick={() => setShowLightbox(true)}>
                    <img src={viewImage} alt="view image icon" />                    
                    VIEW IMAGE
                </button>
            </div>
            <div>
                <div>
                    <h1>{painting.name}</h1>
                    <h2>{painting.artist.name}</h2>
                </div>
                <div>
                    <p>{painting.description}</p>
                    <a href={painting.source} target="_blank"> Go to Source</a>
                </div>
            </div>
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
        </section>
    )
}