// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  let time = new Date
  // console.log(time)
  let hour = time.getHours();
  hour > 12 ? hour = (hour - 12) * 30 : hour = hour * 30;
  // console.log(hour)

  const [timea, setTimea] = useState({
    sec: new Date().getSeconds() * 6,
    min: new Date().getMinutes() * 6,
    hour: new Date().getHours() * 30
  });

  function refreshClock() {
    setTimea({
      sec: new Date().getSeconds() * 6,
      min: (new Date().getMinutes()*6) + (new Date().getSeconds()/10),
      hour: ( new Date().getHours()*30) + (new Date().getMinutes()/2)
    });
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className="App">
      <div className="clock">
        <div className="hands hand1" style={{ transform: `rotate(${timea.hour}deg)` }}>Hour</div>
        <div className="hands hand2" style={{ transform: `rotate(${timea.min}deg)` }}>Minutes</div>
        <div className="hands hand3" style={{ transform: `rotate(${timea.sec}deg)` }}>Second</div>
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
      </div>
    </div>
  );
}

export default App;
