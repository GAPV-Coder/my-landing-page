import {cn} from '@/lib/utils';
import {useTranslation} from 'react-i18next';
import Marquee from '@/components/ui/marquee';
import BlurIn from '@/components/ui/blur-in';

const reviews = [
    {
        name: 'Juan Sanchez',
        username: '@sanchezitos',
        body: 'Trabajar con él fue inspirador, siempre buscando la excelencia en cada proyecto.',
        img: 'https://avatar.vercel.sh/jack',
    },
    {
        name: 'Santiago Henao',
        username: '@shenao',
        body: 'Lideró con claridad y empatía, creando un ambiente de trabajo colaborativo.',
        img: 'https://avatar.vercel.sh/jill',
    },
    {
        name: 'Felipe Castilla',
        username: '@facastilla',
        body: 'Su enfoque técnico y visión estratégica fueron clave para el éxito del equipo.',
        img: 'https://avatar.vercel.sh/john',
    },
    {
        name: 'Gerardo Ramirez',
        username: '@gerardorm',
        body: 'Un desarrollador talentoso y siempre dispuesto a apoyar al equipo.',
        img: 'https://avatar.vercel.sh/james',
    },
    {
        name: 'Daniel Polo',
        username: '@danipolo',
        body: 'Su capacidad para resolver problemas fue invaluable en nuestro equipo.',
        img: 'https://avatar.vercel.sh/jane',
    },
    {
        name: 'Camila Parada',
        username: '@cpvalderrama',
        body: 'Compartimos grandes aprendizajes y proyectos únicos en la universidad.',
        img: 'https://avatar.vercel.sh/jenny',
    },
    {
        name: 'Diego Mesa',
        username: '@dmesa',
        body: 'Excelente colaborador con quien trabajé en varios proyectos universitarios.',
        img: 'https://avatar.vercel.sh/jack',
    },
    {
        name: 'Andrés Rojas',
        username: '@arojass',
        body: 'Demostró creatividad y habilidad técnica en cada proyecto conjunto.',
        img: 'https://avatar.vercel.sh/jenny',
    },
    {
        name: 'Ashley Perkins',
        username: '@adperkins',
        body: 'El sitio web superó mis expectativas, perfecto para mi negocio.',
        img: 'https://avatar.vercel.sh/jane',
    },
    {
        name: 'Katriny Bohórquez',
        username: '@kbb',
        body: 'Su atención al detalle mejoró la calidad en cada etapa del proyecto.',
        img: 'https://avatar.vercel.sh/jill',
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    const {t} = useTranslation();

    return (
        <figure
            className={cn(
                'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
                // light styles
                'bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40 transition-colors duration-300',
                // dark styles
                'bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40 transition-colors duration-300',
            )}>
            <div className="flex flex-row items-center gap-2">
                <img
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm oswald-medium text-titleColor">
                        {name}
                    </figcaption>
                    <p className="text-xs oswald-medium text-mutedTextColor">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm oswald-regular text-white">
                {t(body)}
            </blockquote>
        </figure>
    );
};

const Testimonials = () => {
    const {t} = useTranslation();

    return (
        <>
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background bg-global">
                <BlurIn
                    className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl oswald-bold text-white/20 lg:text-white/10 lg:text-start mt-16 mb-10"
                    word={t('<TESTIMONIOS />')}
                />
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map(review => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map(review => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-global dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-global dark:from-background"></div>
            </div>
        </>
    );
};

export default Testimonials;
