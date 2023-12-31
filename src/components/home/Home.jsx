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
    return (
        <div>

            <Nav/>
            <Presentation/>
            <Languages/>
            <Tools/>
            <Projects/>
            <Footer/>


        </div>
    )
};