import Banner from '../Components/Banner.js';
import photo from '../Assets/bord_de_mer.jpg';
import '../Styles/HomePage/Homepage.css';
import Card from '../Components/Card.js';


function Home() {
    return (<div className='App'>
                <Banner src={photo} alt="bord de mer"/>
                <figcaption className='banner_text'>Chez vous, partout et ailleurs</figcaption>
                <section className='card_background'>
                <Card/>
                </section>
            </div>);
}
export default Home;