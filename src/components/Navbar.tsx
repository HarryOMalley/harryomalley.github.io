function Navbar() {
    return (
        <div className="flex h-12 w-full items-center justify-end bg-black">
            <div className="mr-3 flex w-1/3 flex-row justify-between">
                <a href="#about">
                    <h1 className="p-1 text-gray-200">About</h1>
                </a>
                <a href="#projects">
                    <h1 className="p-1 text-gray-200">Projects</h1>
                </a>
                <a href="#contact">
                    <h1 className="p-1 text-gray-200">Contact</h1>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
