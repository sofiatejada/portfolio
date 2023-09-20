/* eslint-disable react/no-unescaped-entities */
export default function Greeting() {
    return (
        <section
            id="greeting"
            className="bg-white/10 rounded-md m-5 p-5 grid grid-cols-2 gap-6 w-[761px]"
        >
            <section>
                <h1 className="font-bold text-6xl">hi.</h1>
                <p className="pt-24">
                    dude hi, welcome! i code stuff and have varied
                    interests...travel, learning, music, photography,
                    gaming...to name a few.
                </p>
                <section className="flex gap-1 mt-2">
                    <a
                        href="https://www.linkedin.com/in/sofianais/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="h-6"
                            src="/dark/in-white.png"
                            alt="linkedin png"
                        />
                    </a>
                    <a
                        href="https://github.com/sofiatejada/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="h-6"
                            src="/dark/gh-white.png"
                            alt="github png"
                        />
                    </a>
                    <a href="mailto: sofianais@icloud.com">
                        <img
                            className="h-6"
                            src="/dark/email-white.png"
                            alt="email png"
                        />
                    </a>
                </section>
            </section>

            <img
                src="/sofia.JPG"
                alt="sofia with bunny ear filter"
                className="opacity-50 p-6 duration-500 hover:opacity-100"
            />
        </section>
    );
}
