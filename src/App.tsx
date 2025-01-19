import {LanguageProvider} from './context/LanguageContext';
import AboutMe from './presentation/components/AboutMe';
import ContactMe from './presentation/components/ContactMe';
import Footer from './presentation/components/Footer';
import Home from './presentation/components/Home';
import MyExprerience from './presentation/components/MyExprerience';
import MyPortfolio from './presentation/components/MyPortfolio';
import Navbar from './presentation/components/Navbar';
import ScrollToTopButton from './presentation/components/ScrollToTopButton';
import Testimonials from './presentation/components/Testimonials';

function App() {
    return (
        <div className="scroll-smooth">
            <LanguageProvider>
                <Navbar />
                <div id="home">
                    <Home />
                </div>
                <div id="about-me">
                    <AboutMe />
                </div>
                <div id="my-experience">
                    <MyExprerience />
                </div>
                <div id="portfolio">
                    <MyPortfolio />
                </div>
                <div id="testimonials">
                    <Testimonials />
                </div>
                <div id="contact-me">
                    <ContactMe />
                </div>
                <Footer />
                <ScrollToTopButton />
            </LanguageProvider>
        </div>
    );
}

export default App;
