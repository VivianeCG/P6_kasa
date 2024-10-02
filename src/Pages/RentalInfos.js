import { Navigate, useParams } from "react-router-dom";
import Slideshow from "../Components/Slideshow.js";
import Names_and_tags from "../Components/Name_and_tags.js";
import Owner from "../Components/Owner.js";
import Collapse from "../Components/Collapse.js";
import data from "../Assets/accomodations.json";
import Rating from "../Components/Rating.js";

function RentalInfos() {
  const { id } = useParams();
  const accommodation = data.find((accommodation) => accommodation.id === id);
  if (!accommodation) {
    return <Navigate to={"*"} />;
  }
  return (
    <main className='main_container_rental'>
      <Slideshow key={accommodation.id} pictures={accommodation.pictures} />
      <div className='containers'>
        <section className='container1'>
          <Names_and_tags
            title={accommodation.title}
            location={accommodation.location}
            tags={accommodation.tags}
          />
        </section>
        <section className='container2'>
          <Owner host={accommodation.host} />
          <Rating rating={accommodation.rating} />
        </section>
      </div>
      <section className='description_equipment rentalInfo_page'>
        <div className='collapse_width50'>
          <Collapse
            className='collapse_button collapse_arrow rentalInfo_page'
            title='Description'
          >
            <>{accommodation.description}</>
          </Collapse>
        </div>
        <div className='collapse_width50'>
          <Collapse
            className='collapse_button collapse_arrow rentalInfo_page'
            title='Équipements'
          >
            <ul className='equipements_list'>
              {accommodation.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </section>
    </main>
  );
}
export default RentalInfos;
