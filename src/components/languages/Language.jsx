import '../../styles/Language.css';
import '../../styles/text.css'

export default function Language(props) {
    return (
        <div className='card_dimensions--200 position--relative filter--black'>
            <div className=' max-width--100 display--block'></div>
            <img src={props.src} alt={props.alt} className='max-width--100 display--block img'/>

            <h1 className='font--CircularLight color--white position--absolute--center nametest'>{props.name}</h1>
        </div>
    )
}