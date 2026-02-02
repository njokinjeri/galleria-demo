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
        <footer>
            <div>
                <div style={{ width: `${progress}%` }}
                />
            </div>
            <div>
                <div>
                    <h3>{name}</h3>
                    <p>{artist}</p>
                </div>
                <div className="flex items-center gap-6 md:gap-10">
                    <button onClick={onPrev} aria-label="Previous Slide">
                        <img src={iconBack} alt="" className="size-10" />
                    </button>
                    <button onClick={onNext} aria-label="Next Slide">
                        <img src={iconNext} alt="" className='size-10' />
                    </button>
                </div>
            </div>
        </footer>
    )
}