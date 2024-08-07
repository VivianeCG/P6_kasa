import Banner from '../Components/Banner';
import photo from '../Assets/photo_montagne.jpg';

function About() {
    return (<div className='App'>
                <Banner src={photo} alt="paysage de montagne" />
            </div>);
}

export default About;

