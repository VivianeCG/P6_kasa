import Banner from '../Components/Banner.js';
import photo from '../Assets/photo_montagne.jpg';
import Collapse from '../Components/Collapse.js';
import data from '../Assets/aboutInformations.json';

function About() {
    return (<div className='App about_page'>
                <Banner src={photo} alt="paysage de montagne" />
                <section className='collapse_wrapper'> 
                    {data.map((info) => (
                    <Collapse
                        key={info.id}
                        id={info.id}
                        title={info.title}
                        className='collapse_element collapse_arrow collapse_button'>
                        <div>{info.content}</div>
                    </Collapse>
                    ))}
                </section>
            </div>);
}

export default About;

