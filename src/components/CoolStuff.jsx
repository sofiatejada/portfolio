/* eslint-disable react/no-unescaped-entities */
import data from '../data/data.json';
import Card from './CoolStuffItem';

export default function CoolStuff() {
    return (
        <section id="cool-stuff">
            <img
                alt="png of a crescent moon"
                src="../public/dark/moon-white.png"
            />
            <h2>this stuff's pretty cool i guess...</h2>
            <section>
                {data.map((item) => (
                    <article key={Math.random()}>
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
