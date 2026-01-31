type LightboxProps = {
    image: string;
    onClose: () => void
}

export default function Lightbox({ image, onClose }: LightboxProps) {
    return (
        <section>
            <button
                onClick={onClose}
            > Close
            </button>
            <img src={image} alt="Full view" />
        </section>
    )

}