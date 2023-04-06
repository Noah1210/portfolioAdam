import '../../styles//Project.css';

export default function Project(props) {
    return (
        <div className='project_card color--black'>
            <a href={props.githublink} target='_blank' className='project_image_container'>
                <img className='project_image' src={props.src} alt={props.alt}/>
            </a>

            <div className='project_description_div'>
                <div className='project_description_title'>
                    <h1 className='project_description_name color--white font--NetflixSansRegular'>{props.name}</h1>
                    <div className='project_description_title_line'></div>
                </div>

                <p className='project_description_text color--white font--CircularLight'>{props.description}</p>

                <span className='project_description_type_span'>
                <u className='project_description_type color--white font--NetflixSansLight'>{props.type}</u>
            </span>
            </div>
        </div>
    );
}