import {motion} from 'framer-motion';
import {Download, Github, Linkedin} from 'lucide-react';
import {RiTwitterXLine} from 'react-icons/ri';
import {useTranslation} from 'react-i18next';
import profile from '../assets/images/Perfil-removebg.png';
import BoxReveal from '@/components/ui/box-reveal';
import {Button} from '@/components/ui/button';

const Home = () => {
    const {t} = useTranslation();

    return (
        <section className="bg-global min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12">
            <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="w-full lg:w-1/2 space-y-6">
                    <BoxReveal boxColor={'#0EA5E9'} duration={0.5}>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl inter-semiBold text-white">
                            {t('Hola! Soy Gustavo Pereira')}
                        </h2>
                    </BoxReveal>
                    <BoxReveal boxColor={'#0EA5E9'} duration={0.5}>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl inter-bold text-titleColor">
                            {t('Soy Desarrollador Full Stack')}
                        </h1>
                    </BoxReveal>
                    <BoxReveal boxColor={'#0EA5E9'} duration={0.5}>
                        <p className="text-sm md:text-base lg:text-lg inter-medium text-mutedTextColor">
                            {t(
                                'Como apasionado por el desarrollo de software, me encanta desarrollar aplicaciones Frontend y Backend, cuento con más de 3 años de experiencia laboral y poseo habilidades solidas en diversas tecnologías.',
                            )}
                        </p>
                    </BoxReveal>
                    <BoxReveal boxColor={'#0EA5E9'} duration={0.5}>
                        <div className="z-10 flex items-center justify-center">
                            <Button className="inter-bold text-white bg-titleColor hover:bg-titleColor rounded-xl inline-flex items-center justify-center px-4 py-1">
                                <span>{t('DESCARGAR CV')}</span>
                                <Download className="text-white ml-1 w-4 h-4 transition-transform duration-300 ease-in-out" />
                            </Button>
                        </div>
                    </BoxReveal>
                </div>
                <motion.div
                    className="w-full lg:w-1/2 flex items-center justify-center gap-8"
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        duration: 0.7,
                        scale: {
                            type: 'spring',
                            visualDuration: 0.7,
                            bounce: 0.7,
                        },
                    }}>
                    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                        <img
                            src={profile}
                            alt="My-profile.png"
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <a
                            href="https://github.com/GAPV-Coder"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Github className="w-6 h-6 md:w-8 md:h-8 text-titleColor transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                        </a>
                        <a
                            href="https://x.com/Gustavo_PV90"
                            target="_blank"
                            rel="noopener noreferrer">
                            <RiTwitterXLine className="w-6 h-6 md:w-8 md:h-8 text-titleColor transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gustavoadolfopereiravilla/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-titleColor transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
