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

            <div  className="conatact_container noselect">
                <div className="canvas">
                    <div className="tracker tr-1"></div>
                    <div className="tracker tr-2"></div>
                    <div className="tracker tr-3"></div>
                    <div className="tracker tr-4"></div>
                    <div className="tracker tr-5"></div>
                    <div className="tracker tr-6"></div>
                    <div className="tracker tr-7"></div>
                    <div className="tracker tr-8"></div>
                    <div className="tracker tr-9"></div>
                    <div className="tracker tr-10"></div>
                    <div className="tracker tr-11"></div>
                    <div className="tracker tr-12"></div>
                    <div className="tracker tr-13"></div>
                    <div className="tracker tr-14"></div>
                    <div className="tracker tr-15"></div>
                    <div className="tracker tr-16"></div>
                    <div className="tracker tr-17"></div>
                    <div className="tracker tr-18"></div>
                    <div className="tracker tr-19"></div>
                    <div className="tracker tr-20"></div>
                    <div className="tracker tr-21"></div>
                    <div className="tracker tr-22"></div>
                    <div className="tracker tr-23"></div>
                    <div className="tracker tr-24"></div>
                    <div className="tracker tr-25"></div>
                    <div id="card">
                        <p id="prompt">Me contacter</p>
                        <div className="title">

                                <a href='mailto:adam.rfk2@gmail.com' className='email_link link'>
                                    <h2 className='label'>Email: </h2>
                                    <p className='email'>contact@adamrafik.com</p>
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
                    </div>
                </div>
            </div>
        </div>

)
}