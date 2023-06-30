import SmallCards from "./SmallCards";
import '../../styles/Languages.css';
import '../../styles/text.css';
import '../../styles/animation.css';

import symfonyLogo from '../../images/symfony.svg';
import reactJsLogo from '../../images/reactjs.png';
import javaScriptLogo from '../../images/javascript.png';
import phpLogo from '../../images/php.png';
import nodeJsLogo from '../../images/nodejs.png';
import mySqlLogo from '../../images/mySql.png';
import pythonLogo from '../../images/python.png';
import cLogo from '../../images/c.png';
import cPlusLogo from '../../images/c++.png';
import htmlCssLogo from '../../images/htmlcss.png';
import flutterLogo from '../../images/flutter.svg';
import dartLogo from '../../images/dart.png';

export default function Languages() {
    const languages = [
        {
            src: reactJsLogo,
            alt: 'React.JS logo',
            name: 'ReactJS',
            link: '#'

        },
        {
            src: reactJsLogo,
            alt: 'React.JS logo',
            name: 'React Native',
            link: '#'

        },
        {
            src: javaScriptLogo,
            alt: 'JavaScript logo',
            name: 'JavaScript',
            link: '#'
        },
        {
            src: symfonyLogo,
            alt: 'symfony logo',
            name: 'Symfony',
            link: '#'
        },
        {
            src: phpLogo,
            alt: 'PHP logo',
            name: 'PHP',
            link: '#'
        },
        {
            src: nodeJsLogo,
            alt: 'Express logo',
            name: 'Express',
            link: '#'
        }
        ,
        {
            src: mySqlLogo,
            alt: 'MySQL logo',
            name: 'MySQL',
            link: '#'
        }
        ,
        {
            src: pythonLogo,
            alt: 'Python logo',
            name: 'Python',
            link: '#'
        }
        ,
        {
            src: cLogo,
            alt: 'C logo',
            name: 'C',
            link: '#'
        }
        ,
        {
            src: cPlusLogo,
            alt: 'C++ logo',
            name: 'C++',
            link: '#'
        }
        ,
        {
            src: htmlCssLogo,
            alt: 'HTML/CSS logo',
            name: 'HTML/CSS',
            link: '#'
        }
        ,
        {
            src: dartLogo,
            alt: 'Dart logo',
            name: 'Dart',
            link: '#'
        }
        ,
        {
            src: flutterLogo,
            alt: 'Flutter logo',
            name: 'Flutter',
            link: '#'
        }
    ];
    return (
        <div className='languages_container'>
            <a href='#' className='color--white font--CircularLight size--150 languages_title fill_header' id='programming-languages'>Langages de programmation</a>
            <div className='languages_items_container'>

                {languages.map((language) => (

                    <span className='languages_language_item'>
                        <SmallCards name={language.name} src={language.src} alt={language.alt}/>
                    </span>

                ))}
                <span className='languages_language_item'></span>
                <span className='languages_language_item'></span>

            </div>
        </div>
    )
}