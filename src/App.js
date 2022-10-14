import './App.css';
import counterLogo from './assets/logo.png'
import Button from './components/Button';
import Counter from './components/Counter';
import {useState} from 'react'

function App() {

  const [numClick, setNum] = useState(0);


  const clickEvent = () => {
    setNum(numClick + 1);
  };

  const resetCounter = () =>{
    setNum(0);
  };

  return (
    <div className="App">
      <div className='logo-container'>
        <p>Click Counter</p>
        <img className='counter-logo' src={counterLogo} alt='counter Logo' />
      </div>
      <div className='main-container'>
        <Counter numClick={numClick}/>
        <Button
        text="Click"
        isClick={true}
        clickEvent={clickEvent}
        />
        <Button
        text="Reset"
        isClick={false}
        clickEvent={resetCounter}/>
      </div>
    </div>
  );
}

export default App;
