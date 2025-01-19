import {ArrowUp} from 'lucide-react';
import {useEffect, useState} from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 z-50 bg-titleColor text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-opacity-90 transition">
                <ArrowUp className="w-6 h-6" />
            </button>
        )
    );
};

export default ScrollToTopButton;
