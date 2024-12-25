import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {motion, AnimatePresence} from 'framer-motion';
import {
    Bootstrap,
    CSS,
    HTML,
    Javascript,
    NextJS,
    React,
    Redux,
    SASS,
    Styled_Component,
    TailwindCSS,
    MaterialUI,
    Typescript,
    Zustand,
    NodeJS,
    Express,
    NestJS,
    Python,
    Django,
    FastAPI,
    Postgresql,
    Mysql,
    Mongodb,
    Redis,
    Sequelize,
    Mongoose,
    AWSLambda,
    AWSCloudWatch,
    AWSApiGateway,
    Git,
    GitHub,
    Jest,
    Cypress,
    Docker,
    S3,
    Cognito,
    ServerlessFramework,
} from '@/utils/icons';
import BlurIn from '@/components/ui/blur-in';

const AboutMe = () => {
    const [activeStack, setActiveStack] = useState('frontend');
    const {t} = useTranslation();

    const frontendStack = [
        {icon: HTML, name: 'HTML5'},
        {icon: CSS, name: 'CSS3'},
        {icon: Javascript, name: 'Javascript'},
        {icon: Typescript, name: 'Typescript'},
        {icon: SASS, name: 'SASS'},
        {icon: Styled_Component, name: 'Styled Component'},
        {icon: Bootstrap, name: 'Bootstrap'},
        {icon: TailwindCSS, name: 'TailwindCSS'},
        {icon: MaterialUI, name: 'MaterialUI'},
        {icon: React, name: 'React'},
        {icon: Redux, name: 'Redux'},
        {icon: Zustand, name: 'Zustand'},
        {icon: NextJS, name: 'NextJS'},
    ];

    const backendStack = [
        {icon: NodeJS, name: 'NodeJS'},
        {icon: Javascript, name: 'Javascript'},
        {icon: Typescript, name: 'Typescript'},
        {icon: Express, name: 'ExpressJS'},
        {icon: NestJS, name: 'NestJS'},
        {icon: Python, name: 'Python'},
        {icon: Django, name: 'Django'},
        {icon: FastAPI, name: 'FastAPI'},
        {icon: Postgresql, name: 'PostgreSQL'},
        {icon: Mysql, name: 'MySQL'},
        {icon: Mongodb, name: 'MongoDB'},
        {icon: Redis, name: 'Redis'},
        {icon: Sequelize, name: 'Sequelize'},
        {icon: Mongoose, name: 'Mongoose'},
        {icon: S3, name: 'AWS S3'},
        {icon: Cognito, name: 'AWS Cognito'},
        {icon: AWSLambda, name: 'AWS Lambda'},
        {icon: AWSApiGateway, name: 'AWS API Gateway'},
        {icon: AWSCloudWatch, name: 'AWS CloudWatch'},
        {icon: Git, name: 'Git'},
        {icon: GitHub, name: 'GitHub'},
        {icon: Jest, name: 'Jest'},
        {icon: Cypress, name: 'Cypress'},
        {icon: Docker, name: 'Docker'},
        {icon: ServerlessFramework, name: 'Serverless Framework'},
    ];

    const currentStack =
        activeStack === 'frontend' ? frontendStack : backendStack;

    return (
        <section className="relative w-full min-h-screen bg-global text-white px-4 lg:px-8 xl:px-0 p-4 md:p-8 lg:p-12">
            {/* Main container with max-width for larger screens */}
            <div className="max-w-[1400px] mx-auto relative lg:pl-8 lg:h-[600px]">
                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 lg:pt-14 m-auto lg:ml-2">
                    {/* Left column */}
                    <div className="space-y-4">
                        <BlurIn
                            className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl oswald-bold text-white/20 lg:text-white/10 text-start"
                            word={t('<SOBRE MÍ />')}
                        />
                        <h3 className="text-xl md:text-2xl text-titleColor oswald-bold">
                            {t('Perfil profesional')}
                        </h3>
                        <div className="h-[400px] md:h-[500px] overflow-y-auto pr-4 text-mutedTextColor space-y-4 oswald-regular">
                            <p>
                                {t(
                                    'Soy un Desarrollador Full Stack residente en Cartagena, Colombia, con cerca de 4 años de experiencia trabajando con tecnologías modernas en el desarrollo de software. Tengo un fuerte enfoque en el desarrollo backend, complementado con habilidades sólidas en el desarrollo frontend.',
                                )}
                            </p>
                            <p>
                                {t(
                                    'Me destaco por mis habilidades téc avanzadas y competencias interpersonales que me permiten integrarme eficientemente en equipos ágiles. Como profesional, me caracterizo por mi capacidad para colaborar, mi adaptabilidad y mi compromiso con la entrega de soluciones de alta calidad. Estoy calificado para desempeñarme en roles como desarrollador full stack, desarrollador frontend y desarrollador backend, siempre orientado al éxito del equipo y de los proyectos en los que participo.',
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl oswald-bold">
                            {t('HISTORIAL ACADEMICO')}
                        </h2>
                        <h3 className="text-xl md:text-2xl text-titleColor oswald-bold">
                            {t(
                                'DESARROLLO WEB FULL STACK Y CIENCIAS DE LA COMPUTACIÓN',
                            )}
                        </h3>
                        <div className="text-mutedTextColor oswald-regular">
                            <p className="mb-4">
                                {t(
                                    'Programa Bootcamp de 5 módulos centrados en:',
                                )}
                            </p>
                            <ul className="list-disc pl-5 space-y-2 oswald-regular text-mutedTextColor">
                                <li>{t('HTML, CSS y JavaScript')}</li>
                                <li>
                                    {t('React + Hooks, React Router y Redux')}
                                </li>
                                <li>{t('Python & Django')}</li>
                                <li>{t('Node.js y Express')}</li>
                                <li>{t('Bases de Datos SQL y NoSQL')}</li>
                                <li>
                                    {t('Estructuras de Datos y Algoritmos')}
                                </li>
                                <li>
                                    {t(
                                        'Arquitectura de Computadores y Administración de Servidores',
                                    )}
                                </li>
                                <li>{t('AWS, Gcloud, Git')}</li>
                                <br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-titleColor oswald-bold text-start lg:ml-10 mb-4">
                    {t('MIS HABILIDADES')}
                </h2>
                <div className="gap-8 lg:ml-10 h-auto">
                    <div className="mt-12">
                        <div className="flex items-center justify-center rounded-lg bg-global text-white">
                            <p className="oswald-regular text-mutedTextColor lg:text-3xl md:text-4xl sm:text-2xl">
                                {t(
                                    'A lo largo de mi experiencia laboral he trabajado con diversas tecnologías lo cual me ha permitido ser versatil y poder solucionar los desafios a los que me enfreto día con día.',
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="text-bgCardColor p-4 mt-6">
                        <div className="flex space-x-2 mb-8">
                            <button
                                onClick={() => setActiveStack('frontend')}
                                className={`px-6 py-2 rounded-lg oswald-bold transition-colors ${
                                    activeStack === 'frontend'
                                        ? 'bg-global text-titleColor'
                                        : 'text-white'
                                }`}>
                                {t('Frontend')}
                            </button>
                            <button
                                onClick={() => setActiveStack('backend')}
                                className={`px-6 py-2 rounded-lg oswald-bold transition-colors ${
                                    activeStack === 'backend'
                                        ? 'bg-global text-titleColor'
                                        : 'text-white'
                                }`}>
                                {t('Backend')}
                            </button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full overflow-hidden">
                            <AnimatePresence mode="wait">
                                {currentStack.map(tech => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{y: 10, opacity: 0}}
                                        animate={{y: 0, opacity: 1}}
                                        exit={{y: -10, opacity: 0}}
                                        transition={{duration: 0.2}}
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.8}}
                                        className="flex flex-col items-center justify-center p-4 m-2 rounded-lg shadow-lg bg-menuColor hover:shadow-md transition-shadow">
                                        <img
                                            src={tech.icon}
                                            alt={`${tech.name} icon`}
                                            className="w-10 h-10 mb-2"
                                        />
                                        <div className="text-sm oswald-regular text-white">
                                            {tech.name}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
