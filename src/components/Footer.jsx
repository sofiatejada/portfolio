/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
    return (
        <footer
            className="w-full mt-5 p-5 px-16 justify-between flex items-center bg-tamarind-300 duration-500 hover:bg-black"
            id="footer"
        >
            <img
                alt="png of a contact card"
                src="/dark/contact-white.png"
                className=" h-20 w-20"
            />
            <h3>let's talk</h3>
            <section
                className="flex gap-1 mt-2"
                id="footer"
            >
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
            <p>
                © Sofia Tejada 2022 <a href="#greeting">^</a>
            </p>
        </footer>
    );
}
