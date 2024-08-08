import '../Styles/Card/card.css';

const Card = ({ src, alt, children }) => {
    return (
        <div>
            <figure className="card">
                <img src={src} alt={alt} />
                {children}
            </figure>
        </div>
    );
};

export default Card;
