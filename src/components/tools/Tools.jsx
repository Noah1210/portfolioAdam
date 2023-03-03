import SmallCards from "../languages/SmallCards";
import vsCodeLogo from "../../images/vscode.png";
import jetbrainsLogo from "../../images/jetbrains.png";
import postmanLogo from "../../images/postman.webp";
import gitLogo from "../../images/git.png";
import bashLogo from "../../images/bash.png";

export default function Tools() {
    const tools = [
        {
            src: vsCodeLogo,
            alt: 'visual studio code logo',
            name: 'VS Code',
            link: '#'

        },
        {
            src: jetbrainsLogo,
            alt: 'JetBrains logo',
            name: 'Suite JetBrains',
            link: '#'
        },
        {
            src: postmanLogo,
            alt: 'Postman logo',
            name: 'Postman',
            link: '#'
        },
        {
            src: gitLogo,
            alt: 'Git logo',
            name: 'Git',
            link: '#'
        },
        {
            src: bashLogo,
            alt: 'Bash logo',
            name: 'Bash',
            link: '#'
        }
    ];
    return (
        <div className='tools_container'>
            <a href='#' className='color--white font--CircularLight size--150 languages_title fill_header'>Outils</a>
            <div className='languages_items_container'>

                {tools.map((tool) => (

                    <span className='languages_language_item' href={tool.link}>
                        <SmallCards name={tool.name} src={tool.src} alt={tool.alt}/>
                    </span>

                ))}


            </div>
        </div>
    )
}