import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
    Menu,
    X,
    House,
    UserRoundPen,
    FileUser,
    AppWindow,
    Globe,
} from 'lucide-react';
import {RiSpeakAiLine} from 'react-icons/ri';
import {useTranslation} from 'react-i18next';
import {Button} from '@/components/ui/button';
import logo from '../assets/logo/logo.png';
import {useLanguage} from '@/context/LanguageContext';
import {Switch} from '@/components/ui/switch';
import en from '../../presentation/assets/flags/en.svg';
import es from '../../presentation/assets/flags/es.svg';

const navItems = [
    {icon: House, title: 'Inicio', id: 'home'},
    {icon: UserRoundPen, title: 'Sobre mi', id: 'about-me'},
    {icon: FileUser, title: 'Experiencia', id: 'my-experience'},
    {icon: AppWindow, title: 'Portafolio', id: 'portfolio'},
    {icon: RiSpeakAiLine, title: 'Testimonios', id: 'testimonials'},
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const {t} = useTranslation();
    const {language, toggleLanguage} = useLanguage();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
        setIsMenuOpen(false);
    };

    const menuVariants = {
        hidden: {
            x: '-100%',
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
        visible: {
            x: '0%',
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
                when: 'beforeChildren',
                staggerChildren: 0.05,
            },
        },
    };

    const menuItemVariants = {
        hidden: {opacity: 0, y: -10},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

    const handleScroll = () => {
        const offsets = navItems.map(item => {
            const section = document.getElementById(item.id);
            if (section) {
                return {id: item.id, offsetTop: section.offsetTop};
            }
            return {id: item.id, offsetTop: 0};
        });

        const currentSection = offsets.reduce((closest, section) => {
            const scrollPos = window.scrollY + window.innerHeight / 2;
            return scrollPos >= section.offsetTop ? section.id : closest;
        }, 'home');

        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="bg-global inter-bold p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <button onClick={() => scrollToSection(navItems[0].id)}>
                    <img src={logo} alt="My Logo" className="w-40 h-12" />
                </button>
                <div className="hidden lg:flex space-x-4">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSection(item.id)}
                            className={`transition duration-300 hover:text-titleColor ${
                                activeSection === item.id
                                    ? 'text-titleColor'
                                    : 'text-white'
                            }`}>
                            {t(item.title)}
                        </button>
                    ))}
                </div>

                {/* Botón LET'S TALK y MENU */}
                <div className="hidden lg:flex items-center space-x-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="language-switch"
                                checked={language === 'en'}
                                onCheckedChange={toggleLanguage}
                                className="relative flex items-center w-14 h-6 bg-gray-200 rounded-full">
                                <span
                                    className={`absolute left-1 top-1 text-xs inter-bold ${
                                        language === 'es'
                                            ? 'text-mutedTextColor'
                                            : 'text-gray-400'
                                    }`}>
                                    <img
                                        src={es}
                                        alt="Flag.svg"
                                        className="w-4 h-4 rounded-full"
                                    />
                                </span>
                                <span
                                    className={`absolute right-1 top-1 text-xs inter-bold ${
                                        language === 'en'
                                            ? 'text-mutedTextColor'
                                            : 'text-gray-400'
                                    }`}>
                                    <img
                                        src={en}
                                        alt="Flag.svg"
                                        className="w-4 h-4 rounded-full"
                                    />
                                </span>
                            </Switch>
                        </div>
                    </div>
                    <Button
                        // variant="secondary"
                        onClick={() => scrollToSection('contact-me')}
                        className="bg-white/10 backdrop-blur-sm text-white hover:border hover:text-titleColor hover:border-titleColor hover:bg-global inter-bold px-4 py-2 rounded-md transition duration-300">
                        {t(`HABLEMOS`)}
                    </Button>
                </div>

                {/* Menú Hamburguesa */}
                <div className="lg:hidden text-titleColor">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Menú Móvil */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        className="fixed top-0 left-0 w-3/4 h-full bg-menuColor text-white p-6 z-50">
                        <ul className="space-y-6">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={menuItemVariants}
                                    onClick={() => scrollToSection(item.id)}
                                    className="flex items-center space-x-4">
                                    {/* Renderizamos el ícono junto al título */}
                                    <item.icon className="w-6 h-6 text-white" />
                                    <button
                                        className={`block text-lg transition duration-300 ${
                                            activeSection === item.id
                                                ? 'text-titleColor'
                                                : 'text-white'
                                        }`}>
                                        {t(item.title)}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="flex items-center space-x-2 gap-2">
                            <span className="mt-6">
                                <Globe className="text-white" />
                            </span>
                            <Switch
                                id="language-switch"
                                checked={language === 'en'}
                                onCheckedChange={toggleLanguage}
                                className="relative flex items-center w-14 h-6 bg-gray-200 rounded-full mt-6">
                                <span
                                    className={`absolute left-1 top-1 text-xinter-bold ${
                                        language === 'es'
                                            ? 'text-mutedTextColor'
                                            : 'text-gray-400'
                                    }`}>
                                    <img
                                        src={es}
                                        alt="Flag.svg"
                                        className="w-4 h-4 rounded-full"
                                    />
                                </span>
                                <span
                                    className={`absolute right-1 top-1 inter-bold ${
                                        language === 'en'
                                            ? 'text-mutedTextColor'
                                            : 'text-gray-400'
                                    }`}>
                                    <img
                                        src={en}
                                        alt="Flag.svg"
                                        className="w-4 h-4 rounded-full"
                                    />
                                </span>
                            </Switch>
                        </div>
                        <div className="mt-72">
                            <Button
                                onClick={() => scrollToSection('contact-me')}
                                className="bg-titleColor text-white inter-bold w-full py-2 rounded-md">
                                {t(`HABLEMOS`)}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
