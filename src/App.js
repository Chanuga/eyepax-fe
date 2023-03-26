import './App.css';
import Carousel from './components/Carousel';

function App() {

  return (
    <div className="App">
      <Carousel sliders={1} infinte={false}/>
      {/* <Carousel sliders={4} infinte={true}/> */}
      {/* <Carousel sliders={10} infinte={false}/> */}
    </div>
  );
}

export default App;
