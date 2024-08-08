import Banner from '../Components/Banner.js';
import photo from '../Assets/photo_montagne.jpg';
import Collapse from '../Components/Collapse.js';

function About() {
    return (<div className='App'>
                <Banner src={photo} alt="paysage de montagne" />
                <Collapse/>
            </div>);
}

export default About;

