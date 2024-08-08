import '../Styles/Banner/Banner.css';


function Banner({src, alt, children}) {
    return (<div>
                <figure className="banner"> 
                    <img src={src} alt={alt}/>
                    {children}
                </figure>
            </div>);
}

export default Banner;