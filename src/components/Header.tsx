import logo from '/assets/shared/logo.svg';

type HeaderProps = {
    onStartSlideshow: () => void;
    isSlideshowActive: boolean;
}
export default function Header({ onStartSlideshow, isSlideshowActive }: HeaderProps) {
    return (
        <nav>
            <img src={logo} alt="page logo" />
            <h1 onClick={onStartSlideshow}
            >
                {isSlideshowActive ? "Stop Slideshow" : "Start Slideshow"}</h1>
        </nav>
    )
}