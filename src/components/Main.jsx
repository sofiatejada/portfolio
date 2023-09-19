// import Contact from './Contact';
import CoolStuff from './CoolStuff';
import Greeting from './Greeting';
import Header from './Header';
import Projects from './ProjectList';
import Footer from './Footer';

export default function Main() {
    return (
        <main id="main">
            <Header />
            <Greeting />
            <Projects />
            <CoolStuff />
            {/* <Contact /> */}
            <Footer />
        </main>
    );
}