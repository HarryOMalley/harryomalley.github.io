import { FaGithub, FaLinkedin } from 'react-icons/fa';

const MainTitle = () => {
    return (
        <div className="flex h-1/6 flex-col items-center justify-between text-center">
            <h1 className="font-mono text-5xl font-bold">Harry O'Malley</h1>
            <h2 className="text-3xl">Engineer</h2>
            <div className="flex w-1/2 flex-row justify-between text-5xl">
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
