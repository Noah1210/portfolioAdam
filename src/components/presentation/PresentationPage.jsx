import Nav from "../nav/Nav";
import '../../styles/PresentationPage.css';
import PresentationHeaderAndText from "./PresentationHeaderAndText";
import Footer from "../footer/Footer";
import SmallCards from "../languages/SmallCards";
import frenchFlag from "../../images/france.png";
import americanFlag from "../../images/etats-unis.png";
import maroccanFlag from "../../images/maroc.png";
import amazighFlag from "../../images/amazigh.png";
import spanishFlag from "../../images/espagne.png";

export default function PresentationPage() {

    const paragraphs = [{
        header: 'Présentation',
        text: "Je m'appelle Adam Rafik, j'ai 19 ans et je suis passionné d'informatique. " + "Dev, réseaux, cyber-sécurité, tout m'intéresse du moment que je peux apprendre quelque chose de nouveau." + " Mais j'ai tout de même une petite préférence pour le dev, que ce soit front ou back. Le front me permet" + " de laisser s'exprimer \"l'artiste\" qui est en moi, et le back me permet de faire travailler ma logique."
    }, {
        header: "Ce que je recherche",
        text: "Je suis actuellement à la recherche d'une alternance pour l'année prochaine afin de poursuivre mes études en parallèle avec une expérience professionnelle concrète. Je suis également à la recherche de clients pour proposer mes services en tant que freelance dans le domaine du développement web. Si vous êtes à la recherche d'un développeur web qualifié pour vos projets ou si vous avez des opportunités d'alternance à me proposer, n'hésitez pas à me contacter. Je suis motivé et prêt à relever de nouveaux défis !🧑‍💻"
    }, {
        header: "Pourquoi moi ?",
        text: "En tant que développeur passionné je suis capable de travailler de manière autonome et de m’adapter  rapidement aux situations et aux problèmes qui se présentent à moi. Je suis capable de fournir un travail de qualité dans les délais imparti. Donc si vous cherchez un développeur compétent et passionné alors je suis convaincu que je suis la personne qu’il vous faut."
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

        {paragraphs.map(paragraph => <div className='paragraph'> <PresentationHeaderAndText header={paragraph.header} text={paragraph.text}/></div>)}

        <div className='spoken-languages_container'>
            {spokenLanguages.map(language =>
                <span className='spoken-language_item'>
                <SmallCards src={language.src} alt={language.alt}
                            name={language.name}/>
                     </span>
            )}
        </div>

        <Footer/>
    </div>)
}