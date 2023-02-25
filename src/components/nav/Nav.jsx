import '../../styles/text.css';
import '../../styles/Nav.css';
import '../../styles/animation.css';
export default function Nav()
{
    return (
        <div className='items_alignment--row padding_left_right--3 nav_bar'>

            <div className='nav_name_container'>
                <a href='/' className='font--NetflixSansBold color--white nav_name'>ADAM RAFIK</a>
                <div className='nav_name_line'></div>
            </div>



            <ul className='font--CircularMedium ul--style items_alignment--row'>
                <li className='nav_item fill_rectangle'><a href='#' className='color--white'>Qui suis-je ?</a></li>
                <li className='nav_item fill_rectangle'><a href='#' className='color--white'>Langages</a></li>
                <li className='nav_item fill_rectangle'><a href='#' className='color--white'>Projets</a></li>
            </ul>



        </div>

    )
}