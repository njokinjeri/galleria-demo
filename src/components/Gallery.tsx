import type { Painting } from '../types/types';

type GalleryProps = {
    data: Painting[];
    onSelect: (index: number) => void;
}

export default function Gallery ({ data, onSelect }: GalleryProps) {
    return (
        <main>
            <section>
                {data.map((painting, index) => (
                    <div
                        key={index}
                        onClick={() => onSelect(index)}
                    >
                        <img 
                            src={painting.images.thumbnail} 
                            alt={painting.name} 
                        />
                        <div>
                            <h2>{painting.name}</h2>
                            <p>{painting.artist.name}</p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}