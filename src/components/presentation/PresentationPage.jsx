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
        text: "Je m'appelle Adam Rafik, j'ai 19 ans et je suis passionné d'informatique. " + "Dev, réseaux, cyber-sécurité, tout m'interesse du moment que je peux apprendre quelque chose de nouveau." + " Mais j'ai tout de même une petite préférence pour le dev, que ce soit front ou back. Le front me permet" + " de laisser s'exprimer \"l'artiste\" qui est en moi, et le back me permet de faire travailler ma logique."
    }, {
        header: "Ce que je recherche",
        text: "Actuellement étudiant dans une école d'informatique, je suis à la recherche d'une alternance pour l'année scolaire 2023/2024. Je recherche une alternance dans le domaine du développement de préférence, mais je reste ouvert à toute proposition. interesse ou tout simplement que vous avez une missions je suis prenneur. De plus, j'ai pour objectif de devenir développeur freelance, alors si mon profil vous intéresse ou tout simplement que vous avez une mission je suis preneur."
    }, {
        header: "Pourquoi moi ?",
        text: "En tant que développeur passionné je suis capable de travailler de manière autonome et de m’adapter  rapidement aux situations et aux problèmes qui se présentent à moi. Je suis capable de fournir un travail de qualité dans les délais imparti. Si vous cherchez un développeur compétent et passionné alors je suis convaincu que je suis la personne qu’il vous faut."
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