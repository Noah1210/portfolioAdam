import Nav from "../nav/Nav";
import Presentation from "../presentation/Presentation";
import Languages from "../languages/Languages";
import Projects from "../projects/Projects";
import '../../styles/Home.css';

export default function Home() {
    return(
        <div>
            <Nav />
            <Presentation />
            <Languages />
            <Projects />
        </div>
    )
};