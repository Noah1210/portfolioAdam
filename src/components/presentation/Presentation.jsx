import '../../styles/text.css';
import '../../styles/Presentation.css';
import '../../styles/animation.css';

export default function Presentation() {
    return (
        <div className='presentation_container'>

            <h1 className='font--NetflixSansRegular color--white presentation_title'>Développeur
                Full-Stack</h1>
            <p className='font--CircularLight color--white presentation_text'>
                Actuellement étudiant en deuxième année en école d'informatique je suis à la recherche d'une alternance
                pour l'année scolaire 2023/2024.
                Curieux d'apprendre et d'essayer de nouvelles choses, j'ai aussi pour projet de devenir developpeur
                freelance. Alors si vous cherchez quelqu'un n'hesitez pas à me contacter 👨‍💻.
            </p>
            <div className='presentation_buttons'>
                {/*<a href={cv} download='cvRafikAdam' className='color--white font--CircularMedium button_resume fill_rectangle'>Télécharger mon
                    CV</a>*/}
                <a href='/me' className='color--white font--CircularMedium button_resume fill_rectangle'>En savoir plus</a>
            </div>

        </div>
    )
}