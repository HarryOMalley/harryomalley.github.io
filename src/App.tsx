import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainTitle from './components/MainTitle';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

function App() {
    return (
        <div className="h-screen w-screen snap-y snap-proximity overflow-scroll scroll-smooth">
            <section
                id="title"
                className="flex h-screen w-screen snap-start flex-col items-center justify-between bg-gray-100"
            >
                <Navbar />
                <MainTitle />
                <div className="m-3 h-5 items-center text-center">
                    <a href="#about">
                        <FaArrowDown />
                    </a>
                </div>
            </section>
            <section
                id="about"
                className="flex h-screen w-screen snap-start flex-col items-center justify-between bg-gray-100"
            >
                <div className="m-3 h-5 items-center text-center">
                    <a href="#title">
                        <FaArrowUp />
                    </a>
                </div>
                <About />
                <div className="m-3 h-5 items-center text-center">
                    <a href="#projects">
                        <FaArrowDown />
                    </a>
                </div>
            </section>
            <section
                id="projects"
                className="flex h-screen max-h-screen w-screen snap-start flex-col items-center justify-between overflow-hidden bg-gray-200"
            >
                <div className="m-3 h-5 items-center text-center">
                    <a href="#about">
                        <FaArrowUp />
                    </a>
                </div>
                <div className="h-5/6 w-screen">
                    <Projects />
                </div>
                <div className="m-3 h-5 items-center text-center">
                    <a href="#contact">
                        <FaArrowDown />
                    </a>
                </div>
            </section>
            <section
                id="contact"
                className="flex h-screen w-screen snap-start flex-col items-center justify-between bg-gray-100"
            >
                <div className="m-3 h-5 items-center text-center">
                    <a href="#projects">
                        <FaArrowUp />
                    </a>
                </div>
                <Contact />
                <Footer />
            </section>
        </div>
    );
}

export default App;
