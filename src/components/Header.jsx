export default function Header() {
    return (
        <header
            className="p-5 justify-between flex items-center bg-sky-950"
            id="header"
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
                    className="p-2 rounded-md hover:opacity-60 transition duration-700 hover:bg-black"
                    href="#projects"
                >
                    i CODE
                </a>
                <a
                    className="mx-2 p-2 rounded-md hover:opacity-60 duration-700 hover:bg-black"
                    href="#cool-stuff"
                >
                    COOL
                </a>
                <a
                    className="mr-1 p-2 rounded-md hover:opacity-60 duration-700 hover:bg-black "
                    href="#contact"
                >
                    HELLO
                </a>
            </nav>
        </header>
    );
}
