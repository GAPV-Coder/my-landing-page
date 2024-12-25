import {LanguageProvider} from './context/LanguageContext';
import AboutMe from './presentation/components/AboutMe';
import Home from './presentation/components/Home';
import Navbar from './presentation/components/Navbar';

function App() {
    return (
        <>
            <LanguageProvider>
                <Navbar />
                <Home />
                <AboutMe />
            </LanguageProvider>
        </>
    );
}

export default App;
