import Data from '../data/projects.json';
import ProjectItem from './ProjectItem';

export default function Projects() {
    return (
        <section
            id="projects"
            className="flex flex-col items-center bg-white/10 rounded-md m-5 p-5 w-[761px]"
        >
            <img
                alt="png of a html tag"
                src="/dark/code-white.png"
                className=" h-20 w-20"
            />
            <h1 className="text-4xl mb-16">code</h1>
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
