import {useState} from 'react';
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
import {useTranslation} from 'react-i18next';
import {Button} from '@/components/ui/button';
import logo from '../assets/logo/logo.png';
import {useLanguage} from '@/context/LanguageContext';
import {Switch} from '@/components/ui/switch';
import en from '../../presentation/assets/flags/en.svg';
import es from '../../presentation/assets/flags/es.svg';

const navItems = [
    {icon: House, title: 'Inicio'},
    {icon: UserRoundPen, title: 'Sobre mi'},
    {icon: FileUser, title: 'Experiencia'},
    {icon: AppWindow, title: 'Portafolio'},
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {t} = useTranslation();
    const {language, toggleLanguage} = useLanguage();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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

    return (
        <nav className="bg-global oswald-bold p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div>
                    <img src={logo} alt="My Logo" className="w-40 h-12" />
                </div>

                {/* Botones de Navegación */}
                <div className="hidden lg:flex space-x-4">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.title.toLowerCase().replace(' ', '-')}`}
                            className="text-white hover:text-titleColor transition duration-300">
                            {t(item.title)}
                        </a>
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
                                    className={`absolute left-1 top-1 text-xs font-bold ${
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
                                    className={`absolute right-1 top-1 text-xs font-bold ${
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
                        variant="secondary"
                        className="bg-zinc-800 text-white hover:border hover:text-titleColor hover:border-titleColor hover:bg-global oswald-bold px-4 py-2 rounded-md transition duration-300">
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
                                    onClick={toggleMenu}
                                    className="flex items-center space-x-4">
                                    {/* Renderizamos el ícono junto al título */}
                                    <item.icon className="w-6 h-6 text-white" />
                                    <a
                                        href={`#${item.title.toLowerCase().replace(' ', '-')}`}
                                        className="block text-lg text-white hover:text-white transition duration-300">
                                        {t(item.title)}
                                    </a>
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
                                    className={`absolute left-1 top-1 text-xs font-bold ${
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
                                    className={`absolute right-1 top-1 text-xs font-bold ${
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
                        <div className="mt-80">
                            <Button className="bg-titleColor text-white text-oswald-bold w-full py-2 rounded-md">
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
