import PropTypes from 'prop-types';

export default function ProjectItem({ title, image, blurb, gh, deploy }) {
    return (
        <>
            <figure>
                <img
                    src={image}
                    alt={`Image of ${title} app`}
                    className=" h-60 opacity-50 duration-500 hover:opacity-100"
                />
                <figcaption>{title}</figcaption>
            </figure>
            <article>
                <code>{blurb}</code>
                <div className="flex gap-1 mt-2">
                    <a
                        href={gh}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            alt="png of gh icon"
                            src="/dark/gh-white.png"
                            className="h-6"
                        />
                    </a>
                    <a
                        href={deploy}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            alt="png of website icon"
                            src="/dark/site-white.png"
                            className="h-6"
                        />
                    </a>
                </div>
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
