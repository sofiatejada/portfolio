import CoolStuff from './CoolStuff';
import Greeting from './Greeting';
import Navigation from './Navigation';
import Projects from './ProjectList';

export default function Main() {
    return (
        <main
            className="text-white bg-black grid grid-cols-2 items-center"
            id="main"
        >
            <aside className="bg-tamarind-300 self-start top-0 sticky">
                <Navigation />
            </aside>
            <div>
                <Greeting />
                <Projects />
                <CoolStuff />
            </div>
        </main>
    );
}
