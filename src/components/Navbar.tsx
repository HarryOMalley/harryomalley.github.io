function Navbar() {
    return (
        <div className="absolute flex h-16 w-full items-center justify-end bg-black">
            <div className="mx-12 flex w-1/3 max-w-lg flex-row justify-between">
                <a href="#about">
                    <h1 className="p-1 text-lg text-gray-200">About</h1>
                </a>
                <a href="#projects">
                    <h1 className="p-1 text-lg text-gray-200">Projects</h1>
                </a>
                <a href="#contact">
                    <h1 className="p-1 text-lg text-gray-200">Contact</h1>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
