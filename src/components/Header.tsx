import logo from '/assets/shared/logo.svg';

type HeaderProps = {
    onStartSlideshow: () => void;
    isSlideshowActive: boolean;
    onLogoClick: () => void;
}
export default function Header({ onStartSlideshow, isSlideshowActive, onLogoClick }: HeaderProps) {
    return (
        <nav className="w-full pt-10 px-6 flex justify-between items-center">
            <img 
                src={logo} 
                alt="page logo" 
                className="w-1/3 max-w-60 cursor-pointer"
                onClick={onLogoClick}
            />
            <h1 
                className="text-sm md:text-lg text-gray-400 hover:text-gray-900 font-bold tracking-wider uppercase cursor-pointer"
                onClick={onStartSlideshow}
            >
                {isSlideshowActive ? "Stop Slideshow" : "Start Slideshow"}</h1>
        </nav>
    )
}