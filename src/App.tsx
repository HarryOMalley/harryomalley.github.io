import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainTitle from './components/MainTitle';

function App() {
    return (
        <div className="w-screen">
            <div className="flex h-screen max-w-max flex-col items-center justify-between">
                <Navbar />
                <MainTitle />
                <Footer />
            </div>
        </div>
    );
}

export default App;
