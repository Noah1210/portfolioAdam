import '../../styles/text.css';
import '../../styles/Nav.css'
export default function Nav()
{
    return (
        <div className='height--20 items_alignment--row padding_left_right--3'>
            <h1 className='font--NetflixSansBold color--lightRed'>ADAM RAFIK</h1>
            <ul className='font--CircularMedium ul--style items_alignment--row'>
                <li><a href='#' className='color--white'>Qui suis-je ?</a></li>
                <li><a href='#' className='color--white'>Langages</a></li>
                <li><a href='#' className='color--white'>Projets</a></li>
            </ul>
        </div>

    )
}