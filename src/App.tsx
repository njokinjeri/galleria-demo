import { useEffect, useState } from "react";
import Header from "./components/Header"
import Loader from "./components/Loader";
import Gallery from "./components/Gallery";
import type { Painting } from "./types/types";
import Slide from "./components/Slide";
import SlideShow from "./components/SlideShow";

export default function App() {
    const [loading, setLoading] = useState<boolean>(true);
    const [paintings, setPaintings] = useState<Painting[]>([])
    const [currentIndex, setCurrentIndex] = useState<number | null>(null)

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
    
    if (loading) return (
        <main className="min-h-screen flex flex-col items-center justify-center">
            <Loader />
            <h1>Loading Gallery...</h1>
        </main>
    );

    const startSlideshow = () => {
        setCurrentIndex(currentIndex === null ? 0 : null)
    }

    const handlePrev = () => {
        if (currentIndex === 0 || currentIndex === null) {
            setCurrentIndex(paintings.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleNext = () => {
        if (currentIndex === paintings.length - 1 || currentIndex === null ) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const progress = currentIndex !== null
                    ? ((currentIndex + 1) / paintings.length) * 100
                    : 0

    return (
        <main className="min-h-screen">
            <Header 
                onStartSlideshow={startSlideshow}
                isSlideshowActive={currentIndex !== null}
            />
            {currentIndex === null ? (
                <Gallery 
                    data={paintings}
                    onSelect={(index) => setCurrentIndex(index)}
                />
            ) : (
                <SlideShow painting={paintings[currentIndex]}>
                    <Slide 
                        painting={paintings[currentIndex]}
                        onClose={() => setCurrentIndex(null)}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        progress={progress}
                    />
                </SlideShow>
            )}
            
        </main>
    )
}