import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [color, setColor] = useState({
    red:0,
    green:0,
    blue:0
  })
  // useEffect(() => {}, [color])
  

  const changeBackgroundColor = (colorName, colorValue) => {
      switch (colorName) {
        case "red":
          setColor({...color, red: colorValue})
          break;
          case "green":
          setColor({...color, green: colorValue})
          break;
          case "blue":
          setColor({...color, blue: colorValue})
          break;
          default:
            break
      }
    }
  return (
    <>
    <div 
      className="App"
      style={{
        background: `rgb(${color.red}, ${color.green}, ${color.blue})` }}>
      <form className='my-form'>
        <div className='my-input'>
          <h3>Red</h3>
          <div>
            <input 
              type="range"
              max={255}
              onChange={e => changeBackgroundColor("red", e.target.value)}
              value={color.red}/>
            <input
              type="number"
              onChange={e => changeBackgroundColor("red", e.target.value)}
              value={color.red}
              />
              </div>
        </div>
        <div className='my-input'>
          <h3>Green</h3>
          <div>
            <input
              type="range"
              max={255}
              onChange={e => changeBackgroundColor("green", e.target.value)}
              value={color.green}/>
            <input
              type="number"
              onChange={e => changeBackgroundColor("green", e.target.value)}
              value={color.green}
              />
          </div>
        </div>
        <div className='my-input'>
          <h3>Blue</h3>
          <div>
            <input
              type="range"
              max={255}
              onChange={e => changeBackgroundColor("blue", e.target.value)}
              value={color.blue}/>
            <input
              type="number"
              onChange={e => changeBackgroundColor("blue", e.target.value)}
              value={color.blue}
              />
          </div>
        </div>
        <button 
          className='my-button'
          onClick={(e) => {
            e.preventDefault()
            navigator.clipboard.writeText(`rgb(${color.red}, ${color.green}, ${color.blue})`)
            alert("rgb copied")
          }}
          >
          COPY
        </button>
      </form>
    </div>
    </>
  );
}

export default App;
