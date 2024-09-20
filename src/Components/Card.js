const Card = ({src, alt, children }) => {
    return (
        <article className="flat_card">
                <figure className="card">
                    <img className='card_img' src={src} alt={alt} />
                    {children}
                </figure>
        </article>
    );
};

export default Card;
