function Banner({src, alt, children}) {
    return (<div className="banner_container">
                <figure className="banner"> 
                    <img className="banner_image" src={src} alt={alt}/>
                    {children}
                </figure>
            </div>);
}

export default Banner;