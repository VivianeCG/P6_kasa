import '../Styles/Card/card.css';
import { Link } from 'react-router-dom';

const Card = ({ src, alt, children }) => {
    return (
        <article>
            <Link to={"/RentalInfos"}>
                <figure className="card">
                    <img className='card_img' src={src} alt={alt} />
                    {children}
                </figure>
            </Link>
        </article>
    );
};

export default Card;
