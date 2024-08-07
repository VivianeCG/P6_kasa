import '../Styles/Banner/Banner.css';


function Banner({src, alt}) {
    return (<div>
                <figure className="banner"> 
                    <img src={src} alt={alt} />
                </figure>
            </div>);
}

export default Banner;