
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import { originals, ActionMovies, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries } from './constants/constants'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title='Action' isSmall url={ActionMovies} istrailer />
      <RowPost title='Comedy' isSmall url={ComedyMovies} istrailer />
      <RowPost title='Horror' isSmall url={HorrorMovies} istrailer />
      <RowPost title='Romance' isSmall url={RomanceMovies} istrailer />
      <RowPost title='Documentaries' isSmall url={Documentaries} istrailer />
    </div>
  );
}

export default App;
