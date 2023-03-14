import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainTitle from './components/MainTitle';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import SectionButton, { Arrow } from './components/SectionButton';

function App() {
    return (
        <>
            <div className="scrollbar h-screen snap-y snap-proximity overflow-y-scroll scroll-smooth">
                <section
                    id="title"
                    className="flex h-screen snap-start flex-col items-center justify-between bg-gray-100"
                >
                    <Navbar />
                    <MainTitle />
                    <SectionButton direction={Arrow.down} to="#about" />
                </section>
                <section
                    id="about"
                    className="flex h-screen w-full snap-start flex-col items-center justify-between bg-gray-200"
                >
                    <SectionButton direction={Arrow.up} to="#title" />
                    <About />
                    <SectionButton direction={Arrow.down} to="#projects" />
                </section>
                <section
                    id="projects"
                    className="flex h-screen max-h-screen snap-start flex-col items-center justify-between overflow-hidden bg-gray-100"
                >
                    <SectionButton direction={Arrow.up} to="#about" />
                    <div className="h-5/6">
                        <Projects />
                    </div>
                    <SectionButton direction={Arrow.down} to="#contact" />
                </section>
                <section
                    id="contact"
                    className="flex h-screen snap-start flex-col items-center justify-between bg-gray-200"
                >
                    <SectionButton direction={Arrow.up} to="#projects" />
                    <Contact />
                    <Footer />
                </section>
            </div>
        </>
    );
}

export default App;
