import CoolStuff from './CoolStuff';
import About from './About';
import Navigation from './Navigation';
import Projects from './ProjectList';
import Hello from './Hello';

export default function Main() {
    return (
        <main
            className="text-white bg-black flex items-center"
            id="main"
        >
            <div className="bg-neutral-800 self-start top-0 sticky">
                <Navigation />
            </div>
            <div>
                <Hello />
                <About />
                <Projects />
                <CoolStuff />
            </div>
        </main>
    );
}
