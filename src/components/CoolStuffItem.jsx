import PropTypes from 'prop-types';

export default function Card({ title, data, blurb, dark }) {
    return (
        <>
            <h3>
                {title}
                <img
                    alt="png of the thing i like"
                    src={dark}
                    className=" h-14 w-14"
                />
            </h3>
            <section className="grid grid-cols-2">
                {data.map((item) => (
                    <article key={Math.random()}>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={item.link}
                        >
                            <img
                                src={item.image}
                                alt={`Placeholder for ${item.title}`}
                                className="h-12 w-12 rounded-full object-cover"
                            />
                        </a>
                    </article>
                ))}
            </section>
            <p>{blurb}</p>
        </>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array,
    blurb: PropTypes.string.isRequired,
    dark: PropTypes.string.isRequired,
    light: PropTypes.string.isRequired,
};
