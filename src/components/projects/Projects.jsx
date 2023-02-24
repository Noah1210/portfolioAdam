import Project from "./Project";

export default function Projects() {
    const projects = [
        {
            name: 'Site de VOD',
            description: "Ce projet est la création d'un site de VOD tel que Netflix. J'ai travaillé sur le back-end en Symfony. Pour ce qui est du front, c'est un de mes collègues de classe qui s'en est occupé, il à été réalisé en Angular. J'ai réalisé l'entièreté du back en approximativement 2 semaines (à 4h de travail par jour en moyenne).",
            githubLink: '#',
            type: '️👨‍💻‍👨‍💻 Projet en duo'
        },
        {
            name: 'Portfolio',
            description: "Ce projet est la création d'un site de VOD tel que Netflix. J'ai travaillé sur le back-end en Symfony. Pour ce qui est du front, c'est un de mes collègues de classe qui s'en est occupé, il à été réalisé en Angular. J'ai réalisé l'entièreté du back en approximativement 2 semaines (à 4h de travail par jour en moyenne).",
            githubLink: '#',
            type: '️👨‍💻‍👨‍💻 Projet en duo'
        }
    ]
    return (
        <div className='container'>
            <a href='#' className='color--white font--CircularLight size--150 fill_header'>Projets (voir plus)</a>
            <div className='projects_container'>
                {projects.map(project => <Project name={project.name} time={project.time}
                                                  description={project.description} type={project.type}/>)}

            </div>
        </div>
    )
}