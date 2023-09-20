// import Contact from './Contact';
import CoolStuff from './CoolStuff';
import Greeting from './Greeting';
import Header from './Header';
import Projects from './ProjectList';
import Footer from './Footer';

export default function Main() {
    return (
        <main
            className="text-white bg-black flex flex-col items-center"
            id="main"
        >
            <Header />
            <Greeting />
            <Projects />
            <CoolStuff />
            {/* <Contact /> */}
            <Footer />
        </main>
    );
}
