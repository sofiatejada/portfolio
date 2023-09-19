import PropTypes from 'prop-types';

export default function ProjectItem({ title, image, blurb, gh, deploy }) {
    return (
        <>
            <figure>
                <img
                    src={image}
                    alt={`Image of ${title} app`}
                />
                <figcaption>{title}</figcaption>
            </figure>
            <article>
                <code>{blurb}</code>
                <a
                    href={gh}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        alt="png of gh icon"
                        src="../public/dark/gh-white.png"
                    />
                </a>
                <a
                    href={deploy}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        alt="png of website icon"
                        src="../public/dark/site-white.png"
                    />
                </a>
            </article>
        </>
    );
}

ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    blurb: PropTypes.string.isRequired,
    gh: PropTypes.string.isRequired,
    deploy: PropTypes.string.isRequired,
};
