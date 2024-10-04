import Banner from "../Components/Banner.js";
import photo from "../Assets/bord_de_mer.jpg";
import Card from "../Components/Card.js";
import data from "../Assets/accomodations.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className='main_container'>
      <Banner src={photo} alt='bord de mer'>
        <h1 className='banner_text'>
          <div className='banner_1'>Chez vous,</div>
          <div className='banner_2'>partout et ailleurs</div>
        </h1>
      </Banner>
      <section className='card_background'>
      {data.map((accommodation) => (
        <Link to={`/RentalInfos/${accommodation.id}`} key={accommodation.id}>
          <Card
            key={accommodation.id}
            src={accommodation.cover}
            alt={accommodation.title}
          >
            <h2 className='flat_name'>{accommodation.title}</h2>
          </Card>
        </Link>
      ))}
      </section>
    </main>
  );
}
export default Home;
