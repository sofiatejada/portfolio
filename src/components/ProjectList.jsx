import Data from '../data/projects.json';
import ProjectItem from './ProjectItem';

export default function Projects() {
    return (
        <section id="projects">
            <img
                alt="png of a html tag"
                src="../public/dark/code-white.png"
            />
            <h1>code</h1>
            <ul>
                {Data.map((project) => (
                    <li key={Math.random()}>
                        <ProjectItem
                            title={project.title}
                            image={project.image}
                            blurb={project.blurb}
                            gh={project.gh_link}
                            deploy={project.deploy}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}
