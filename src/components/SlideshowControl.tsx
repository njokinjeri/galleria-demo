import iconBack from '/assets/shared/icon-back-button.svg';
import iconNext from '/assets/shared/icon-next-button.svg'

type ControlsProp = {
    name: string;
    artist: string;
    onNext: () => void;
    onPrev: () => void
    progress: number;
}

export default function SlideshowControl({ name, artist, onNext, onPrev, progress }: ControlsProp) {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white z-50">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200">
                <div 
                    className="h-full bg-black transition-all duration-500 ease-in-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="flex justify-between py-4 px-6 md:px-10 md:py-6 max-w-7xl mx-auto">
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-black leading-tight">{name}</h3>
                    <p className="text-sm text-gray-500 tracking-wide">{artist}</p>
                </div>
                <div className="flex items-center gap-6 md:gap-10">
                    <button onClick={onPrev} aria-label="Previous Slide" className="hover:opacity-50 transition-opacity cursor-pointer">
                        <img src={iconBack} alt="" className="size-7" />
                    </button>
                    <button onClick={onNext} aria-label="Next Slide" className="hover:opacity-50 transition-opacity cursor-pointer">
                        <img src={iconNext} alt="" className='size-7' />
                    </button>
                </div>
            </div>
        </footer>
    )
}