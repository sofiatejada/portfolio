export default function Navigation() {
    return (
        <header
            className=" text-center flex flex-col h-screen border-r w-52"
            id="navigation"
        >
            <div className="bg-black">
                <img
                    className=" m-3  h-48"
                    alt="sofia logo"
                    src="/{ Sofia }.png"
                />
                <p className="text-xl text-slate-400 px-5 pt-2 pb-7">
                    Web Developer
                </p>
            </div>

            <nav className="flex flex-col ">
                <a
                    className="p-2 rounded-md hover:opacity-60 transition duration-700 "
                    href="#about"
                >
                    about
                </a>
                <a
                    className="mx-2 p-2 rounded-md hover:opacity-60 duration-700 "
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
                    className=" p-2 text-sm border border-solid  border-[#ff66c4]"
                    href="mailto: sofianais@icloud.com"
                >
                    contact me
                </a>
            </nav>
        </header>
    );
}
