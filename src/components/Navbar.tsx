const Navbar = () => {
    return (
        <div className="flex h-12 w-screen items-center justify-end bg-black">
            <div className="mr-3 flex w-1/3 flex-row justify-between">
                <h1 className="p-1 text-gray-200">About</h1>
                <h1 className="p-1 text-gray-200">Projects</h1>
                <h1 className="p-1 text-gray-200">Contact</h1>
            </div>
        </div>
    );
};

export default Navbar;
