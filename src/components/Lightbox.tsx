type LightboxProps = {
    image: string;
    onClose: () => void
}

export default function Lightbox({ image, onClose }: LightboxProps) {
    return (
        <div className="fixed inset-0 z-100 flex flex-col items-center justify-start bg-black/90 p-6 md:p-12 animate-in fade-in duration-300">
            
            <div className="w-full max-w-5xl flex flex-col items-end">
                <button 
                    onClick={onClose}
                    className="mb-8 text-white text-[14px] font-bold tracking-[0.2em] uppercase hover:opacity-50 transition-opacity"
                >
                    Close
                </button>

                <div className="w-full flex justify-center">
                    <img 
                        src={image} 
                        alt="Gallery" 
                        className="max-h-[75vh] md:max-h-[85vh] w-auto md:w-3/4 h-auto object-contain shadow-2xl select-none"
                    />
                </div>
            </div>
            <div 
                className="absolute inset-0 -z-10 cursor-zoom-out" 
                onClick={onClose}
            />
        </div>
    );
}