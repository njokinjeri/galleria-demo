import type { Painting } from '../types/types';

type GalleryProps = {
    data: Painting[];
    onSelect: (index: number) => void;
}

export default function Gallery ({ data, onSelect }: GalleryProps) {
    return (
        <main className="w-full p-6 md:p-10">
            <section className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-10 space-y-10">
                {data.map((painting, index) => (
                    <div
                        key={index}
                        onClick={() => onSelect(index)}
                        className="relative break-inside-avoid cursor-pointer group overflow-hidden bg-black"
                    >
                        <img 
                            src={painting.images.thumbnail} 
                            alt={painting.name}
                            className="w-full h-auto block transition-transform duration-500 ease-in-out group-hover:scale-110 opacity-100 group-hover:opacity-80" 
                        />
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-black/80 to-transparent text-white">
                            <h2 className="font-bold text-lg">{painting.name}</h2>
                            <p className="text-sm opacity-70">{painting.artist.name}</p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}