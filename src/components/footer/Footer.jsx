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
            <div className='footer_links font--CircularLight font'>
                <a className='footer_icon_link color--white' target="_blank"
                   href='https://www.linkedin.com/in/adam-rafik-268348230/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BKxwj6YB8THKHXP3rh780vg%3D%3D'>GitHub</a>
                <a className='footer_icon_link color--white' href='mailto:contact@adamrafik.com'>contact@adamrafik.com</a>
                <a className='footer_icon_link color--white' target="_blank" href='https://github.com/Adam-rk'>LinkedIn</a>
                <a className='footer_icon_link color--white' target="_blank" href=''>Malt</a>
            </div>

        </div>
    )
}