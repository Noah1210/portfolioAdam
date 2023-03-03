import Project from "./Project";
import vodCover from '../../images/vodcover.png';
import gameOfLifeCover from '../../images/gameoflife.png';

export default function Projects() {
    const projects = [
        {
            src: vodCover,
            alt: 'Project screenshot',
            name: 'Site de VOD',
            description: "Ce projet est la création d'un site de VOD tel que Netflix. J'ai travaillé sur le back-end en Symfony. Pour ce qui est du front, c'est un de mes collègues de classe qui s'en est occupé, il à été réalisé en Angular. J'ai réalisé l'entièreté du back en approximativement 2 semaines (à 4h de travail par jour en moyenne).",
            githubLink: 'https://github.com/Adam-rk/Netflix-clone',
            type: '️👨‍💻‍👨‍💻 Projet en duo'
        },
        {
            src: gameOfLifeCover,
            alt: 'Project screenshot',
            name: 'Game Of Life',
            description: "Il s'agit d'un petit projet que j'ai réalisé en PHP. L'objectif était de coder le 'Jeux De La Vie' de John Horton Conway et de l'afficher dans le terminal. Les cellules évoulent selon les règles du jeux, règles que vous pouvez trouver dans mon repo Github (cliquez sur la photo).",
            githubLink: 'https://github.com/Adam-rk/Game-Of-Life',
            type: '️👷‍♂️ Projet Solo'
        }
    ]
    return (
        <div className='projects_container'>
            <a href='#' className='color--white font--CircularLight size--150 fill_header' id='projects'>Projets (voir
                plus)</a>
            <div className='projects_container'>

                {projects.map(project => <div className='single_project'><Project src={project.src} alt={project.alt}
                                                                                  name={project.name}
                                                                                  githublink={project.githubLink}
                                                                                  description={project.description}
                                                                                  type={project.type}/></div>)}


            </div>
        </div>
    )
}