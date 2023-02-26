import Nav from "../nav/Nav";
import ContactCard from "../contactCard/ContactCard";
import '../../styles/ContactCard.css';
import '../../styles/PresentationPage.css';
import PresentationHeaderAndText from "./PresentationHeaderAndText";
import Footer from "../footer/Footer";
import SpokenLanguages from "../languages/SpokenLanguages";
import SmallCards from "../languages/SmallCards";
import frenchFlag from "../../images/france.png";
import americanFlag from "../../images/etats-unis.png";
import maroccanFlag from "../../images/maroc.png";
import amazighFlag from "../../images/amazigh.png";
import spanishFlag from "../../images/espagne.png";
import questionMark from '../../images/question.png';

export default function PresentationPage() {

    const paragraphs = [{
        header: 'Présentation',
        text: "Je m'appelle Adam Rafik, j'ai 19 ans et je suis passionné d'informatique. " + "Dev, réseaux, cyber-sécurité, tout m'interesse du moment que je peux apprendre quelque chose de nouveau." + "Mais j'ai tout de même une petite préférence pour le dev, que ce soit front ou back. Le front me permet" + "de laisser s'exprimer \"l'artiste\" qui est en moi, et le back me permet de faire travailler ma logique."
    }, {
        header: "Ce que je recherche",
        text: "Actuellement étudiant à l'École Hexagone, je suis à la recherche d'une alternance pour l'année scoalaire 2023/2023." + "Je recherche un alternance dans le domaine du développement de préférence, mais je reste ouvert à toute propositions."
    }, {
        header: "Pourquoi moi ?",
        text: "Je suis quelqu'un de passioné par ce que je fais et quand je fais quelque chose je le fais à fond. J'apprends vite"
    }, {
        header: "Langues",
        text: "En ayant vécu pendant 16 ans au Maroc et étudié dans une école française, j'ai eu la chance d'évoluer dès mon plus jeune âge dans un environnement culturellement riche. Cette expérience m'a profondément marqué et a nourri ma curiosité naturelle. C'est ainsi que j'ai appris plusieurs langues, ce qui constitue aujourd'hui un atout considérable dans le monde professionnel. Grâce à cette richesse culturelle et linguistique, j'ai acquis une ouverture d'esprit qui, je pense, ne peux être que bénéfique dans mon travail."
    }]

    const spokenLanguages = [{
        src: frenchFlag, alt: 'jsp', name: 'Français'
    }, {
        src: americanFlag, alt: 'jsp', name: 'Anglais'
    }, {
        src: maroccanFlag, alt: 'jsp', name: 'Arabe'
    }, {
        src: amazighFlag, alt: 'jsp', name: 'Berbère'
    }, {
        src: spanishFlag, alt: 'jsp', name: 'Espagnol'
    }]
    return (<div>
        <Nav/>
        <ContactCard/>
        {paragraphs.map(paragraph => <PresentationHeaderAndText header={paragraph.header} text={paragraph.text}/>)}

        <div className='spoken-languages_cards'>
            {spokenLanguages.map(language => <SmallCards src={language.src} alt={language.alt}
                                                         name={language.name}/>)}
        </div>

        <Footer/>
    </div>)
}