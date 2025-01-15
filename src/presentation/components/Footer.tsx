import {Github, Linkedin} from 'lucide-react';
import {useTranslation} from 'react-i18next';
import {RiTwitterXLine} from 'react-icons/ri';

const Footer = () => {
    const {t} = useTranslation();

    return (
        <footer className="bg-global py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="oswald-regular text-mutedTextColor text-sm mb-4 md:mb-0">
                        Copyright © {new Date().getFullYear()} GAPER.DEV.{' '}
                        {t('Todos los derechos reservados')}
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/GAPV-Coder"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Github
                                className="text-mutedTextColor hover:text-titleColor transition-colors"
                                size={24}
                            />
                        </a>
                        <a
                            href="https://x.com/Gustavo_PV90"
                            target="_blank"
                            rel="noopener noreferrer">
                            <RiTwitterXLine
                                className="text-mutedTextColor hover:text-titleColor transition-colors"
                                size={24}
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gustavoadolfopereiravilla/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Linkedin
                                className="text-mutedTextColor hover:text-titleColor transition-colors"
                                size={24}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
