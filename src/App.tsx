import {LanguageProvider} from './context/LanguageContext';
import Home from './presentation/components/Home';
import Navbar from './presentation/components/Navbar';

function App() {
    return (
        <>
            <LanguageProvider>
                <Navbar />
                <Home />
            </LanguageProvider>
        </>
    );
}

export default App;
