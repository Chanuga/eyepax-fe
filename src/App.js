import './App.css';
import axios from 'axios';
import Carousel from './components/Carousel';
import { useEffect, useState } from 'react';

function App() {
  const [imgArray, setImgArray] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3600/api/carousel?slides=5')
            .then(function (response) {
                // handle success
                console.log(response?.data);
                setImgArray(response?.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);

  return (
    <div className="App">
      <Carousel imgArray={imgArray}/>
    </div>
  );
}

export default App;
