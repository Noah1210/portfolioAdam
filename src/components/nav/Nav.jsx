import '../../styles/text.css';
import '../../styles/Nav.css';
import '../../styles/animation.css';
export default function Nav()
{
    return (
        <div className='nav_bar'>

            <div className='nav_name_container'>
                <a href='/' className='font--NetflixSansBold color--white nav_name'>ADAM RAFIK</a>
                <div className='nav_name_line'></div>
            </div>



            <ul className='font--CircularMedium nav_item_container'>
                <li className='nav_item fill_rectangle'><a href='/me' className='color--white'>Qui suis-je ?</a></li>
                <li className='nav_item fill_rectangle'><a href='#programming-languages' className='color--white'>Langages/Outils</a></li>
                <li className='nav_item fill_rectangle'><a href='#projects' className='color--white'>Projets</a></li>
            </ul>



        </div>

    )
}