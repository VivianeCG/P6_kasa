import '../Styles/Card/card.css';

const Card = ({ src, alt, children }) => {
    return (
        <article>
            <figure className="card">
                <img className='card_img' src={src} alt={alt} />
                {children}
            </figure>
        </article>
    );
};

export default Card;
