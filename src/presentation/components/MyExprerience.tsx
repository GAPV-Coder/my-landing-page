import BlurIn from '@/components/ui/blur-in';
import {MagicCard} from '@/components/ui/magic-card';
import {useTranslation} from 'react-i18next';

interface Experience {
    id: string;
    company: string;
    position: string;
    date: string;
    description: string;
}

const experiences: Experience[] = [
    {
        id: '01',
        company: 'Bitpoint LATAM',
        position: 'Desarrollador Full Stack',
        date: 'Abril 2024 - Septiembre 2024',
        description:
            'Diseñé APIs e integré servicios externos. Implementé componentes funcionales con React y desarrollé aplicaciones móviles con React Native. Utilicé un stack moderno para entregar soluciones robustas en un entorno ágil y escalable.',
    },
    {
        id: '02',
        company: 'Erco Energy',
        position: 'Desarrollador Full Stack',
        date: 'Mayo 2023 - Junio 2023',
        description:
            'Implementé una solución de base de datos que mejoró las ventas en un 20% y desarrollé una plataforma para visualizar estadísticas internas. Proporcioné soluciones innovadoras y optimicé procesos para usuarios finales.',
    },
    {
        id: '03',
        company: 'QA&C SAS',
        position: 'Desarrollador Full Stack',
        date: 'Julio 2022 - Junio 2023',
        description:
            'Lideré el desarrollo de una plataforma SaaS para membresías, integré software con terceros y desarrollé un e-commerce con pasarelas de pago. Aseguré soluciones escalables y orientadas al cliente.',
    },
    {
        id: '04',
        company: 'Bitpoint LATAM',
        position: 'Desarrollador Full Stack',
        date: 'Enero 2022 - Junio 2022',
        description:
            'Realicé una integración entre la plataforma y una pasarela de pago que amplió la cobertura a LATAM. Lideré proyectos de integración de software con impacto regional significativo.',
    },
    {
        id: '05',
        company: 'Kiero International Group',
        position: 'Desarrollador Frontend',
        date: 'Junio 2021 - Agosto 2021',
        description:
            'Diseñé componentes personalizados para mejorar la experiencia del usuario y desarrollé funciones SASS para unificar estilos. Proporcioné soluciones intuitivas y estéticas.',
    },
    {
        id: '06',
        company: 'Freelance',
        position: 'Desarrollador Full Stack',
        date: 'Mayo 2020 - Diciembre 2021',
        description:
            'Creé aplicaciones de gestión para salones de belleza, fotografía e inventarios online, mejorando la organización y captación de clientes. Ofrecí soluciones personalizadas y efectivas.',
    },
];

const MyExprerience = () => {
    const {t} = useTranslation();

    return (
        <div className="bg-global min-h-screen p-8 md:p-12 lg:p-12">
            <BlurIn
                className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl inter-bold text-white/20 lg:text-white/10 text-start"
                word={t('<EXPERIENCIA />')}
            />
            <div className="">
                <h3 className="text-mutedTextColor text-start mt-8 mb-4 lg:text-2xl md:text-3xl sm:text-2xl inter-bold">
                    {t(
                        'Soy un desarrollador de software Full Stack con experiencia en el diseño, desarrollo e implementación de soluciones tecnológicas innovadoras. He trabajado con diversas tecnologías como JavaScript, TypeScript, React, Node.js y AWS, aplicándolas en proyectos de integración de software, desarrollo de plataformas SaaS, e-commerce y aplicaciones móviles. Mi enfoque está en entregar productos escalables y centrados en el usuario, con un impacto tangible en los negocios.',
                    )}
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8 mt-14">
                {experiences.map(exp => (
                    <div key={exp.id} className="relative group">
                        {/* Background Number */}
                        <div className="absolute inset-0 flex items-center justify-center text-white opacity-5 text-[8rem] inter-bold z-0">
                            {exp.id}
                        </div>

                        {/* Card Content */}
                        <MagicCard className="relative z-10 bg-white/10 backdrop-blur-sm p-6 rounded-lg h-full border border-white/20 hover:border-white/40 transition-colors duration-300 cursor-pointer items-center shadow-2xl">
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl inter-bold text-titleColor">
                                    {exp.company}
                                </h3>
                                <h4 className="text-lg text-gray-300 inter-semiBold">
                                    {t(exp.position)}
                                </h4>
                                <p className="text-sm text-mutedTextColor inter-regular">
                                    {t(exp.date)}
                                </p>
                                <p className="text-white leading-relaxed inter-regular">
                                    {t(exp.description)}
                                </p>
                            </div>
                        </MagicCard>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyExprerience;
