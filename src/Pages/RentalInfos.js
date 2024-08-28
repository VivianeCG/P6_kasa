import Carrousel from '../Components/Carrousel.js';
import Names_and_tags from '../Components/Name_and_tags.js';
import Owner from '../Components/Owner.js';
import Collapse from '../Components/Collapse.js';
import '../Styles/RentalInfos/RentalInfos.css';
import data from'../Assets/accomodations.json';
import Rating from '../Components/Rating.js';

function RentalInfos() {
    return (<main>
                <Carrousel/>
                <div className='containers'>
                    <section className='container1'>
                        <Names_and_tags/>
                    </section>
                    <section className='container2'>
                        <Owner/>
                        <Rating/>
                    </section>
                </div>
                <section className='description_equipment'>
                    <Collapse className='collapse_width50'/>
                    <Collapse className='collapse_width50'/>
                </section>
            </main>);
}

export default RentalInfos;