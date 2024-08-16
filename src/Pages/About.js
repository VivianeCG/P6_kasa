import Banner from '../Components/Banner.js';
import photo from '../Assets/photo_montagne.jpg';
import Collapse from '../Components/Collapse.js';
import '../Styles/About/About.css';

function About() {
    return (<div className='App'>
                <Banner src={photo} alt="paysage de montagne" />
                <section className='collapse_wrapper'> 
                    <Collapse/>
                    <Collapse/>
                    <Collapse/>
                    <Collapse/>
                </section>
            </div>);
}

export default About;

