import {useState} from 'react';
import {useForm} from 'react-hook-form';
import emailjs from 'emailjs-com';
import {useTranslation} from 'react-i18next';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {motion} from 'framer-motion';
import {toast, Toaster} from 'sonner';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import BlurIn from '@/components/ui/blur-in';
import {SendMessage} from '@/utils/icons';

const ContactMe = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {t} = useTranslation();

    const formSchema = z.object({
        fullName: z
            .string()
            .min(2, t('El nombre debe tener al menos 2 caracteres')),
        email: z.string().email(t('Correo electrónico inválido')),
        phone: z
            .string()
            .min(10, t('El teléfono debe tener al menos 10 dígitos')),
        message: z
            .string()
            .min(10, t('El mensaje debe tener al menos 10 caracteres')),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            message: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
        const userId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    user_name: values.fullName,
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                },
                userId,
            );

            toast.success(
                t(
                    'Su mensaje ha sido enviado exitosamente. En breve nos pondremos en contacto con usted.',
                ),
                {
                    duration: 3000,
                    action: {
                        label: t('Cerrar'),
                        onClick: () => toast.dismiss(),
                    },
                },
            );
            form.reset();
        } catch (error) {
            toast.error(
                t(
                    'Lo sentimos, se ha producido un error al enviar su mensaje. Por favor, inténtelo de nuevo.',
                ),
                {
                    duration: 3000,
                    action: {
                        label: t('Cerrar'),
                        onClick: () => toast.dismiss(),
                    },
                },
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full px-8 py-8 bg-global">
            <BlurIn
                className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl oswald-bold text-white/20 lg:text-white/10 text-start mt-16 mb-10"
                word={t('<CONTACTAME />')}
            />
            <div className="flex flex-col lg:flex-row gap-8 px-4">
                <div className="lg:w-1/2 space-y-6">
                    <div className="text-2xl oswald-bold text-titleColor">
                        <h2>
                            {t(
                                'Juntos podemos hacer un gran equipo, escríbeme y hagamos realidad tus ideas!',
                            )}
                        </h2>
                    </div>
                    <div className="text-6xl text-primary mt-6 lg:ml-52">
                        <img
                            src={SendMessage}
                            alt="Logo message.png"
                            className="w-60 h-60"
                        />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder={t(
                                                    'Tu nombre completo',
                                                )}
                                                className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40 transition-colors duration-300 text-white oswald-light"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder={t('tu@email.com')}
                                                className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40 transition-colors duration-300 text-white oswald-light"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="tel"
                                                placeholder={t(
                                                    'Tu número de teléfono',
                                                )}
                                                className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40 transition-colors duration-300 text-white oswald-light"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder={t(
                                                    'Escribe tu mensaje aquí...',
                                                )}
                                                className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40 transition-colors duration-300 text-white oswald-light h-32"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="oswald-regular text-lg bg-titleColor hover:bg-titleColor hover:text-global transition-colors duration-300">
                                {isSubmitting ? (
                                    <>
                                        <span className="animate-spin mr-2">
                                            ⏳
                                        </span>
                                        {t('Enviando...')}
                                    </>
                                ) : (
                                    <>{t('Enviar')}</>
                                )}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
            <Toaster position="bottom-right" richColors />
        </div>
    );
};

export default ContactMe;
