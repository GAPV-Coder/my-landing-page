import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import i18n from './i18n';

i18n.init().then(() => {
    const root = document.getElementById('root');
    if (root) {
        createRoot(root).render(
            <StrictMode>
                <App />
            </StrictMode>,
        );
    }
});
