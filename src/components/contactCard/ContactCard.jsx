import '../../styles/ContactCard.css'
import {useEffect, useState} from "react";
import profilePic from '../../images/profilepic.png';

export default function ContactCard() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    function swapSide(event) {
        setOpen(!open);
        setShow(true);
    }

    useEffect(() => {
        setShow(true);
    }, []);


    return (
        <div>
            <div className='contact-card'>
                <div className='contact-card_inner'>

                        <div className={`contact-card_front ${show ? 'show' : ''}`} onClick={swapSide}>
                            <h1 className='contact-card_title font--NetflixSansBold color--white'>Me Contacter</h1>
                        </div>
                        <div className={`contact-card_back ${show ? 'show' : ''}`}>
                            <div className='contact-card_left-part'>
                                <a href='mailto:adam.rfk2@gmail.com' className='email_link link'>
                                    <h2 className='label'>Email: </h2>
                                    <p className='email'>adam.rfk2@gmail.com</p>
                                </a>

                                <a href='#' className='phone-number_link link'>
                                    <h2 className='label'>Numéro de téléhpone: </h2>
                                    <p className='phone-number'>00 00 00 00 00</p>
                                </a>

                                <a href='https://github.com/Adam-rk' target='_blank' className='github_link link'>
                                    <h2 className='label'>GitHub: </h2>
                                    <p className='github'>Adam-rk</p>
                                </a>
                            </div>
                            <div className='contact-card_right-part' onClick={swapSide}>
                                <div className=''>
                                    <img className='avatar_image' src={profilePic}
                                         alt='Profil Picture of Michael Scott from The Office TV Show'/>
                                </div>
                                <p className='description'>Voici ma description</p>
                            </div>
                        </div>

                </div>
            </div>


            <div className="card">
                <div className="card_inner">
                    <div className="card_front">
                        {/* front card content */}
                    </div>
                    <div className="card_back">
                        {/* back card content */}
                    </div>
                </div>
            </div>
        </div>
    )
}