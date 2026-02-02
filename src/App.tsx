import { useEffect, useState, useCallback } from "react";
import Header from "./components/Header"
import Loader from "./components/Loader";
import Gallery from "./components/Gallery";
import type { Painting } from "./types/types";
import Slide from "./components/Slide";
import SlideShow from "./components/SlideShow";

export default function App() {
    const [loading, setLoading] = useState<boolean>(true);
    const [paintings, setPaintings] = useState<Painting[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    useEffect(() => {
        fetch('data/gallery.json')
        .then(response => response.json())
        .then(data => {
            setPaintings(data)
            setLoading(false)
        })
        .catch((error) => { 
            console.error("Error fetching slide:", error)
            setLoading(false);
        })
    }, []);

    const togglePlay = () => {
        if (currentIndex === null) {
            setCurrentIndex(0);
            setIsPlaying(true)
        } else {
            setIsPlaying(!isPlaying)
        }
    }

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => {
            if (prev === null || prev === paintings.length - 1) {
                return 0;
            }
            return prev + 1;
        })
    }, [paintings.length])

    
    useEffect(() => {
        let interval: number | undefined;

        if (isPlaying && currentIndex !== null) {
            interval = window.setInterval(() => {
                handleNext();
            }, 5000)
        }
        return () => clearInterval(interval)
    }, [isPlaying ,currentIndex, handleNext])
    

    const handlePrev = () => {
        setCurrentIndex((prev) => {
            if (prev === null || prev === 0) {
                return paintings.length - 1
            }
            return prev - 1
        })
    }

    if (loading) return (
        <main className="min-h-screen flex flex-col items-center justify-center">
            <Loader />
            <h1>Loading Gallery...</h1>
        </main>
    );

    const progress = currentIndex !== null
                    ? ((currentIndex + 1) / paintings.length) * 100
                    : 0;
    return (
        <main className="min-h-screen bg-amber-800">
            <Header 
                onStartSlideshow={togglePlay}
                isSlideshowActive={isPlaying}
            />
            {currentIndex === null ? (
                <Gallery 
                    data={paintings}
                    onSelect={(index) => {
                        setCurrentIndex(index);
                        setIsPlaying(true); 
                }} />
            ) : (
                <SlideShow painting={paintings[currentIndex]}>
                    <Slide 
                        painting={paintings[currentIndex]}
                        onClose={() => { 
                            setCurrentIndex(null);
                            setIsPlaying(false);
                        }}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        progress={progress}
                    />
                </SlideShow>
            )}
            
        </main>
    )
}