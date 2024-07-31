import Banner from '../Components/Banner';
import photo from '../Assets/bord_de_mer.jpg'


function Home() {
    return <div className='App'>
        <Banner>
            <img src= {photo} alt='photo de bord de mer'/>
        </Banner>
    </div>
}
export default Home;