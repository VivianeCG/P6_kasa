import Banner from "../Components/Banner.js";
import photo from "../Assets/bord_de_mer.jpg";
import "../Styles/HomePage/Homepage.css";
import Card from "../Components/Card.js";
import data from "../Assets/accomodations.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <Banner src={photo} alt="bord de mer">
        <h1 className="banner_text">Chez vous, partout et ailleurs</h1>
      </Banner>
      <section className="card_background">
        {data.map((accommodation) => (
          <Link to={`/RentalInfos/${accommodation.id}`}>
            <Card
              key={accommodation.id}
              src={accommodation.cover}
              alt={accommodation.title}
            >
              <h2 className="flat_name">{accommodation.title}</h2>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
}
export default Home;
//className='App'
