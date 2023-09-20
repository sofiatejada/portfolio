/* eslint-disable react/no-unescaped-entities */
import data from '../data/data.json';
import Card from './CoolStuffItem';

export default function CoolStuff() {
    return (
        <section
            id="cool-stuff"
            className="bg-white/10 rounded-md mb-5 mx-5 px-8 pb-8 pt-5 w-[761px] flex flex-col items-center"
        >
            <img
                alt="png of a crescent moon"
                src="/dark/moon-white.png"
                className=" h-20 w-20"
            />
            <h2>this stuff's pretty cool i guess...</h2>
            <section className="grid grid-cols-3 gap-4">
                {data.map((item) => (
                    <article
                        className=" mt-4 border rounded-3xl p-6"
                        key={Math.random()}
                    >
                        <Card
                            title={item.itemName}
                            data={item.data}
                            blurb={item.blurb}
                            light={item.light_icon}
                            dark={item.dark_icon}
                        />
                    </article>
                ))}
            </section>
        </section>
    );
}
