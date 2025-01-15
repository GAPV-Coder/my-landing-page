import {LanguageProvider} from './context/LanguageContext';
import AboutMe from './presentation/components/AboutMe';
import ContactMe from './presentation/components/ContactMe';
import Home from './presentation/components/Home';
import MyExprerience from './presentation/components/MyExprerience';
import MyPortfolio from './presentation/components/MyPortfolio';
import Navbar from './presentation/components/Navbar';
import Testimonials from './presentation/components/Testimonials';

function App() {
    return (
        <>
            <LanguageProvider>
                <Navbar />
                <Home />
                <AboutMe />
                <MyExprerience />
                <MyPortfolio />
                <Testimonials />
                <ContactMe />
            </LanguageProvider>
        </>
    );
}

export default App;
