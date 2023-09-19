import PropTypes from 'prop-types';

export default function Card({ title, data, blurb, dark }) {
    return (
        <>
            <h3>
                {title}
                <img
                    alt="png of the thing i like"
                    src={dark}
                />
            </h3>
            {data.map((item) => (
                <section key={Math.random()}>
                    <article>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={item.link}
                        >
                            <figure>
                                <img
                                    src={item.image}
                                    alt={`Placeholder for ${item.title}`}
                                />
                            </figure>
                        </a>
                    </article>
                </section>
            ))}
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
