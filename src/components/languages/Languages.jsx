import Language from "./Language";
import symfony from '../../images/symfony.svg'

export default function Languages()
{
    const languages = [
        {
            src: symfony,
            alt: 'idk',
            name: 'Symfony'
        },
        {
            src: 'idk',
            alt: 'idk',
            name: 'React.JS'
        },
        {
            src: 'idk',
            alt: 'idk',
            name: 'Express'
        },
        {
            src: 'idk',
            alt: 'idk',
            name: 'BCP PLUS'
        }
    ];
    return (
        <div>
            {languages.map(language => <Language src={language.src} alt={language.alt} name={language.name} />)}
        </div>
    )
}