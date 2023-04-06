import '../../styles/text.css';
import '../../styles/Home.css';

export default function Loading() {
    return (
        <div className="loading">
            <div className='loading_text_container'>
                <h1 className="font--NetflixSansBold color--white loading_text">Bienvenu dans mon Portfolio 🗂️</h1>
                <div className='loading_line'></div>
            </div>
        </div>
    );
};