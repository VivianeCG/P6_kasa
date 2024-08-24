import Banner from '../Components/Banner.js';
import photo from '../Assets/photo_montagne.jpg';
import Collapse from '../Components/Collapse.js';
import '../Styles/About/About.css';
import data from '../Assets/aboutInformations.json';

function About() {
    return (<div className='App'>
                <Banner src={photo} alt="paysage de montagne" />
                <section className='collapse_wrapper'> 
                    {data.map((info) => (
                    <Collapse
                        key={info.id}
                        title={info.title}
                        content={info.content}
                   />
                    ))}
                </section>
            </div>);
}

export default About;

