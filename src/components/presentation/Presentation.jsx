import '../../styles/text.css';
import '../../styles/Presentation.css';
import '../../styles/animation.css';

export default function Presentation() {
    return (
        <div className='presentation_container'>

            <h1 className='font--NetflixSansRegular color--white presentation_title'>Développeur
                Full-Stack</h1>
            <p className='font--CircularLight color--white presentation_text'>
                Actuellement étudiant en deuxième année en école d'informatique je suis à la recheche d'une altérance
                pour l'année scolaire 2023/2024.
                Curieux d'apprendre et d'essayer de nouvelles choses, j'ai aussi pour projet de devenir developpeur
                freelance. Alors si vous cherchez quelqu'un n'hesitez pas à me contacter 👨‍💻.
            </p>
            <a href='pathToFile' download='cvRafikAdam' className='color--white font--CircularMedium button_resume fill_rectangle'>Télécharger mon
                CV</a>
        </div>
    )
}