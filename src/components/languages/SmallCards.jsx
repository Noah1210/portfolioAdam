import '../../styles/Language.css';
import '../../styles/text.css';
import '../../styles/animation.css';

export default function SmallCards(props) {
    return (
        <div className='language_card'>
            <img className='language_image' src={props.src} lang={props.alt}/>
            <h1 className='font--CircularLight color--white language_name'>{props.name}</h1>
        </div>
    )
}