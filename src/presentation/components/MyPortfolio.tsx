import {useState, useEffect} from 'react';
import {Github, ExternalLink} from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import BlurIn from '@/components/ui/blur-in';
import {useTranslation} from 'react-i18next';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';

interface Project {
    title: string;
    image: string;
    github: string;
    demo: string;
}

const projects: Project[] = [
    {
        title: 'Project 1',
        image: '/placeholder.svg?height=400&width=600',
        github: 'https://github.com/username/project1',
        demo: 'https://project1.demo',
    },
    {
        title: 'Project 2',
        image: '/placeholder.svg?height=400&width=600',
        github: 'https://github.com/username/project2',
        demo: 'https://project2.demo',
    },
    {
        title: 'Project 3',
        image: '/placeholder.svg?height=400&width=600',
        github: 'https://github.com/username/project3',
        demo: 'https://project3.demo',
    },
    {
        title: 'Project 4',
        image: '/placeholder.svg?height=400&width=600',
        github: 'https://github.com/username/project4',
        demo: 'https://project4.demo',
    },
    {
        title: 'Project 5',
        image: '/placeholder.svg?height=400&width=600',
        github: 'https://github.com/username/project5',
        demo: 'https://project5.demo',
    },
];

const MyPortfolio = () => {
    const {t} = useTranslation();
    const [api, setApi] = useState<any>();
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!api || isPaused) return;

        const interval = setInterval(() => {
            api.scrollNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [api, isPaused]);

    return (
        <div className="min-h-screen bg-global text-white p-4 md:p-8">
            <BlurIn
                className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl oswald-bold text-white/20 lg:text-white/10 text-start mt-16 mb-10"
                word={t('<PORTAFOLIO />')}
            />
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
                {/* Left Column */}
                <div className="space-y-12 lg:w-3/4">
                    <div className="space-y-4">
                        <h2 className="text-titleColor text-lg oswald-medium tracking-wide">
                            DESARROLLADOR FULL STACK, FRONTEND Y BACKEND
                        </h2>
                        <h1 className="text-4xl md:text-5xl oswald-bold">
                            MIS PORTAFOLIOS RECIENTES
                        </h1>
                    </div>

                    <div className="space-y-4 bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40 transition-colors duration-300 p-3">
                        <h3 className="text-2xl text-titleColor oswald-semiBold">
                            PROYECTOS DESTACADOS
                        </h3>
                        <p className="text-white oswald-regular">
                            He desarrollado proyectos personales que reflejan
                            mis habilidades técnicas como desarrollador Full
                            Stack, destacando el consumo de API's y la
                            integración con pasarelas de pago. Entre mis logros
                            se encuentran el desarrollo de plataformas SaaS
                            funcionales y escalables, billeteras virtuales con
                            alta seguridad y aplicaciones web enfocadas en
                            experiencias de usuario optimizadas. Estos proyectos
                            demuestran mi capacidad para implementar soluciones
                            completas, desde el backend hasta el frontend,
                            utilizando tecnologías modernas y metodologías de
                            desarrollo efectivas.
                        </p>
                    </div>
                </div>

                {/* Right Column - Carousel */}
                <div className="relative">
                    <Carousel
                        setApi={setApi}
                        className="w-full"
                        opts={{
                            align: 'start',
                        }}>
                        <CarouselContent>
                            {projects.map((project, index) => (
                                <CarouselItem
                                    key={index}
                                    className="sm:basis-full md:basis-1/2 lg:basis-1/2">
                                    <Card
                                        className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40 transition-colors duration-300 lg:h-[460px] lg:w-[300px]"
                                        onMouseEnter={() => setIsPaused(true)}
                                        onMouseLeave={() => setIsPaused(false)}>
                                        <CardContent className="p-0">
                                            <div className="relative aspect-[4/3]">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-[400px] object-cover"
                                                />
                                                <div className="p-4">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="oswald-medium text-white">
                                                            {project.title}
                                                        </h4>
                                                        <div className="flex gap-2">
                                                            <Button
                                                                className="hover:bg-titleColor"
                                                                variant="ghost"
                                                                size="icon"
                                                                asChild>
                                                                <a
                                                                    href={
                                                                        project.github
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer">
                                                                    <Github className="h-5 w-5 text-white" />
                                                                </a>
                                                            </Button>
                                                            <Button
                                                                className="hover:bg-titleColor"
                                                                variant="ghost"
                                                                size="icon"
                                                                asChild>
                                                                <a
                                                                    href={
                                                                        project.demo
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer">
                                                                    <ExternalLink className="h-5 w-5 text-white" />
                                                                </a>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0 -translate-x-1/2" />
                        <CarouselNext className="absolute right-0 translate-x-1/2" />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
