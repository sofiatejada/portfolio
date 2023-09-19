/* eslint-disable react/no-unescaped-entities */
export default function Greeting() {
    return (
        <section
            id="greeting"
            className="flex pt-5 px-5 justify-around"
        >
            <section className="">
                <h1 className=" font-bold text-6xl">hi.</h1>
                <p className="">
                    dude hi, welcome! i code stuff and have varied interests...i
                    think i'm kinda quirky, but like a right amount. what do you
                    think?
                </p>
            </section>
            <figure>
                <img
                    src="/sofia.JPG"
                    alt="sofia with bunny ear filter"
                    className="h-1/2"
                />
            </figure>
        </section>
    );
}
