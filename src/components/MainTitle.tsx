import { FaGithub, FaLinkedin } from 'react-icons/fa';

const MainTitle = () => {
    return (
        <div className="text-center">
            <h1 className="font-mono text-3xl font-bold">Harry O'Malley</h1>
            <h2 className="mt-3">Engineer</h2>
            <div className="mt-4 flex flex-row justify-evenly text-2xl">
                <a href="https://github.com/HarryOMalley" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/HarryOMalley" target="_blank">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
};

export default MainTitle;
