import logo from './logo.svg';
import './App.css';
import as from './assets/logo192.png'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import { useState } from 'react'


function App() {

  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState('0%');
  const [forward, setForward] = useState(true);

  function shiftImage(count) {
    switch (count) {
      case 0:
        setMargin("0%");
        break;
      case 1:
        setMargin("-25%");
        break;
        case 2:
          setMargin("-50%");
          break;
        case 3:
          setMargin("-75%");
          break;
    }
  }

  if (forward) {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        if (count === 4) {
          setForward(false);
        }
        else {
          setCount(count + 1);
          shiftImage(count);
        }
      }, 2000);
    }
  } else {
    for (let i = 4; i > 0; i--) {
      setTimeout(() => {
        if (count === 0) {
          setForward(true);
        }
        else {
          setCount(0);
          shiftImage(count);
        }
      }, 0);
    }
  }

  return (
    <>
      <div className='carousel-container'>
        <div className='images-container'>
          <div className='image' style={{ marginLeft: margin }}>
            <img src={image1} alt='image show' />
          </div>
          <div className='image'>
            <img src={image2} alt='image show' />
          </div>
          <div className='image'>
            <img src={image1} alt='image show' />
          </div>
          <div className='image'>
            <img src={image2} alt='image show' />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;




