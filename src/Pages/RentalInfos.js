import { Navigate, useParams } from 'react-router-dom';
import Carrousel from '../Components/Carrousel.js';
import Names_and_tags from '../Components/Name_and_tags.js';
import Owner from '../Components/Owner.js';
import Collapse from '../Components/Collapse.js';
import data from'../Assets/accomodations.json';
import Rating from '../Components/Rating.js';

function RentalInfos() {
    const { id } = useParams(); 
    const accommodation = data.find(accommodation => accommodation.id === id);
    if (!accommodation) {
        return <Navigate to={"*"}/>; 
    }
    return (<main>
                <Carrousel />
                <div className='containers'>
                    <section className='container1'>
                        <Names_and_tags
                            title={accommodation.title}
                            location={accommodation.location}
                            tags={accommodation.tags}
                        />
                    </section>
                    <section className='container2'>
                        <Owner host={accommodation.host}/>
                        <Rating rating={accommodation.rating}/>
                    </section>
                </div>
                <section className='description_equipment'>
                    <Collapse className='collapse_width50' title="Description" content={accommodation.description}/>
                    <Collapse className='collapse_width50' title="Équipements" content={accommodation.equipments.join(', ')} />
                </section>
            </main>);
}

export default RentalInfos;