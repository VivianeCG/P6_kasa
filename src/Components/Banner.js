import '../Styles/Banner/Banner.css';

function Banner(image) {
    return (<div>
                <figure className="banner"> 
                    <img src= {image} alt='photo de bord de mer'/>
                </figure>
            </div>);
}
export default Banner;