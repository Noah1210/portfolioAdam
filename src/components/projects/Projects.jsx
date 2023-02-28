import Project from "./Project";
import foto from '../../images/foto.jpg';
import test from '../../images/test.jpg';

export default function Projects() {
    const projects = [
        {
            src: foto,
            alt: 'Project screenshot',
            name: 'Site de VOD',
            description: "Ce projet est la création d'un site de VOD tel que Netflix. J'ai travaillé sur le back-end en Symfony. Pour ce qui est du front, c'est un de mes collègues de classe qui s'en est occupé, il à été réalisé en Angular. J'ai réalisé l'entièreté du back en approximativement 2 semaines (à 4h de travail par jour en moyenne).",
            githubLink: '',
            type: '️👨‍💻‍👨‍💻 Projet en duo'
        },
        {
            src: test,
            alt: 'Project screenshot',
            name: 'Portfolio',
            description: "Ce projet est la création d'un site de VOD tel que Netflix. J'ai travaillé sur le back-end en Symfony. Pour ce qui est du front, c'est un de mes collègues de classe qui s'en est occupé, il à été réalisé en Angular. J'ai réalisé l'entièreté du back en approximativement 2 semaines (à 4h de travail par jour en moyenne).",
            githubLink: '#',
            type: '️👷‍♂️ Projet Solo'
        }
    ]
    return (
        <div className='container'>
            <a href='#' className='color--white font--CircularLight size--150 fill_header' id='projects'>Projets (voir plus)</a>
            <div className='projects_container'>
                {projects.map(project => <Project src={project.src} alt={project.alt} name={project.name} time={project.time}
                                                  description={project.description} type={project.type}/>)}

            </div>
        </div>
    )
}