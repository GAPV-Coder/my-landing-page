import {LanguageProvider} from './context/LanguageContext';
import AboutMe from './presentation/components/AboutMe';
import Home from './presentation/components/Home';
import MyExprerience from './presentation/components/MyExprerience';
import Navbar from './presentation/components/Navbar';

function App() {
    return (
        <>
            <LanguageProvider>
                <Navbar />
                <Home />
                <AboutMe />
                <MyExprerience />
            </LanguageProvider>
        </>
    );
}

export default App;
