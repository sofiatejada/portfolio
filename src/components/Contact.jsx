/* eslint-disable react/no-unescaped-entities */

const placeholders = [
    `tell me what song you have on repeat lately`,
    `talk to me about your favorite Pokémon`,
    `recommend a show or series`,
    `tell me about the last place you traveled to`,
    `tell me about a book you read recently`,
    `what musical do you wanna see next?`,
];

function randomPlaceholder(arr) {
    let randomNum = Math.floor(Math.random() * arr.length);

    return arr[randomNum];
}

export default function Contact() {
    return (
        <section id="contact">
            <h2>Let's Connect</h2>
            <a
                href="https://www.linkedin.com/in/sofianais/"
                target="_blank"
                rel="noreferrer"
            >
                LinkedIn
            </a>
            <a
                href="https://github.com/sofiatejada/"
                target="_blank"
                rel="noreferrer"
            >
                GitHub
            </a>
            <a href="mailto: sofianais@icloud.com">Email</a>
            <form
                id="contact-form"
                // onSubmit={handleSubmit}
                method="POST"
            >
                <div>
                    <label htmlFor="name">
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            // value={details.name}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="message">
                        <textarea
                            id="message"
                            placeholder={randomPlaceholder(placeholders)}
                            required
                        />
                    </label>
                </div>
            </form>
            <div>
                <button type="submit"></button>
            </div>
        </section>
    );
}
