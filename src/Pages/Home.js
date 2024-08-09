import Banner from '../Components/Banner.js';
import photo from '../Assets/bord_de_mer.jpg';
import '../Styles/HomePage/Homepage.css';
import Card from '../Components/Card.js';
import accomodation from'../Assets/accomodations.json';

function Home() {
    return (<div className='App'>
                <Banner src={photo} alt="bord de mer">
                    <h1 className='banner_text'>Chez vous, partout et ailleurs</h1>
                </Banner>
                <section className='card_background'>
                    {/*map et link balises parents de card pour aller vers les infos de l'appart*/}
                    <Card/>
                </section>
            </div>);
}
export default Home;