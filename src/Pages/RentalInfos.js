import Carrousel from '../Components/Carrousel.js';
import Names_and_tags from '../Components/Name_and_tags.js';
import Owner_and_rating from '../Components/Owner_and_rating.js';
import Collapse from '../Components/Collapse.js';
import '../Styles/RentalInfos/RentalInfos.css';
import data from'../Assets/accomodations.json';

function RentalInfos() {
    return (<main>
                <Carrousel/>
                <div className='containers'>
                    <section className='container1'>
                        <Names_and_tags/>
                    </section>
                    <section className='container2'>
                        <Owner_and_rating/>
                    </section>
                </div>
                <Collapse/>
                <Collapse/>
            </main>);
}

export default RentalInfos;