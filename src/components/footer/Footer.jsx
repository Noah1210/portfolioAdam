import * as Icon from 'react-bootstrap-icons';

import '../../styles/Footer.css';
import '../../styles/text.css';
import {useState} from "react";

export default function Footer() {

    const [text, setText] = useState('Adam_#9858');

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
        <div className='footer_container'>
            <h1 className='color--white font--CircularLight copyright'>Adam@2023</h1>
            <div className='networks_div'>
                <ul className='networks_icons'>
                    <li className='icon_item'><a className='icon_link color--white' target="_blank" href='https://www.linkedin.com/in/adam-rafik-268348230/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BKxwj6YB8THKHXP3rh780vg%3D%3D'><Icon.Linkedin /></a></li>
                    <li className='icon_item'><a className='icon_link color--white' href='#' onClick={handleDiscordClick}><Icon.Discord /></a></li>
                    <li className='icon_item'><a className='icon_link color--white' target="_blank" href='https://github.com/Adam-rk'><Icon.Github /></a></li>
                </ul>
            </div>
        </div>
    )
}