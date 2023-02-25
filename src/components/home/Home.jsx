import Nav from "../nav/Nav";
import Presentation from "../presentation/Presentation";
import Languages from "../languages/Languages";
import Projects from "../projects/Projects";
import '../../styles/Home.css';
import Footer from "../footer/Footer";
import Tools from "../tools/Tools";
import Loading from "../loading/Loading";
import {useEffect, useState} from "react";

export default function Home() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    return(
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <Nav />
                    <Presentation />
                    <Languages />
                    <Tools />
                    <Projects />
                    <Footer />
                </div>
            )}

        </div>
    )
};