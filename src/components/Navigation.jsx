export default function Navigation() {
    return (
        <header
            className="text-center flex flex-col h-screen border-x border-x-[#01ffff] w-52 dark:bg-black"
            id="navigation"
        >
            <div className="bg-black">
                <img
                    className=" m-3 h-48"
                    alt="sofia logo"
                    src="/{ Sofia }.png"
                />
                <p className="border-y border-y-[#01ffff] text-xl text-[#01ffff] px-5 pt-4 pb-4 mb-5">
                    Web Developer
                </p>
            </div>

            <nav className="flex flex-col bg-white dark:bg-black">
                <a
                    className="p-2 rounded-md hover:opacity-60 transition duration-700 "
                    href="#about"
                >
                    about
                </a>
                <a
                    className=" mx-2 p-2 rounded-md hover:opacity-60 duration-700 "
                    href="#projects"
                >
                    my work
                </a>
                <a
                    className="mx-2 p-2 rounded-md hover:opacity-60 duration-700 "
                    href="#cool-stuff"
                >
                    fun stuff
                </a>
                <a
                    className=" mt-5 p-2 text-sm border-y border-y-[#ff66c4] hover:opacity-60 duration-700"
                    href="mailto: sofianais@icloud.com"
                >
                    contact me
                </a>
            </nav>
        </header>
    );
}
