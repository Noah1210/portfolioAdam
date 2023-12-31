import '../../styles/text.css';
import '../../styles/Nav.css';
import '../../styles/animation.css';
import * as Icon from "react-bootstrap-icons";
import {useState} from "react";

export default function Nav() {

    const [text, setText] = useState('a_d_a_m._');

    function handleDiscordClick(event) {
        const input = document.createElement('input');
        input.setAttribute('value', text);

        document.body.appendChild(input);

        input.select();

        document.execCommand('copy');

        document.body.removeChild(input);

        alert('ID Discord Copié');

        event.preventDefault();

    }

    return (
        <div className='nav_bar'>

            <div className='nav_name_container'>
                <a href='/' className='font--NetflixSansBold color--white nav_name'>ADAM RAFIK</a>
                <div className='nav_name_line'></div>
            </div>

            <div className='network_div'>

                <a className='icon_link color--white' href='mailto:contact@adamrafik.com'><Icon.EnvelopeAtFill/></a>
                <a className='icon_link color--white' href='#' onClick={handleDiscordClick}><Icon.Discord/></a>
                <a className='icon_link color--white' target="_blank"
                   href='https://github.com/Adam-rk'><Icon.Github/></a>
            </div>
        </div>

    )
}