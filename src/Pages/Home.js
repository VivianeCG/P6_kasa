import Banner from '../Components/Banner';
import photo from '../Assets/bord_de_mer.jpg';


function Home() {
    return (<div className='App'>
                <Banner src={photo} alt="bord de mer" />
            </div>);
}
export default Home;