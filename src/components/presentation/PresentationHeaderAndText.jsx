import '../../styles/PresentationIntro.css';
export default function PresentationHeaderAndText(props) {
    return (
        <div className='presentation-intro_container'>

            <div className='presentation-intro_title_div'>
                <h1 className='presentation-intro_title color--white font--NetflixSansRegular'>{props.header}</h1>
                <div className='presentation-intro_title_line'></div>
            </div>
            <p className='presentation-page_introduction color--white font--CircularLight'>
                {props.text}
            </p>
        </div>
    )
}