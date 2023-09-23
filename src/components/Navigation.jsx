export default function Navigation() {
    return (
        <header
            className=" h-screen justify-between flex items-center"
            id="navigation"
        >
            <figure>
                <a href="#greeting">
                    <img
                        className="ml-1 h-16 duration-500 hover:scale-125"
                        alt="sofia logo"
                        src="/logo-no-background.png"
                    />
                </a>
            </figure>
            <nav>
                <a
                    className="p-2 rounded-md hover:opacity-60 transition duration-700 "
                    href="#projects"
                >
                    i CODE
                </a>
                <a
                    className="mx-2 p-2 rounded-md hover:opacity-60 duration-700 "
                    href="#cool-stuff"
                >
                    COOL
                </a>
            </nav>
        </header>
    );
}
