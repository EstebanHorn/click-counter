import './App.css';
import counterLogo from './assets/logo.png'
import Button from './components/Button';

function App() {

  const clickEvent = () => {
    console.log("click");
  }

  const resetCounter = () =>{
    console.log("reset");
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <p>Click Counter</p>
        <img className='counter-logo' src={counterLogo} alt='counter Logo' />
      </div>
      <div className='main-container'>
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
