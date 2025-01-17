import React, {createContext, useContext, useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';

interface LanguageContextProps {
    language: string;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
    undefined,
);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({
    children,
}) => {
    const {i18n} = useTranslation();
    const [language, setLanguage] = useState(
        () => localStorage.getItem('language') || i18n.language || 'es',
    );

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);

    const toggleLanguage = () => {
        const newLanguage = language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    return (
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context)
        throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};
