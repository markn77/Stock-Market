import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [stock, setStock] = useState("");
  const [data, setData] = useState(null);

  const getStockData = async () => {
    const result = await fetch(`https://api.api-ninjas.com/v1/stockprice?ticker=${stock.toUpperCase()}`, {
      headers: {"X-Api-Key": "NIYaHPuVYMyZvgYTVcZE0g==u7w2URuvzYXSDwBm"}
    })

    const data = await result.json()
    setData(data)
    console.log(data)
  }

  const convertUnix = (unix_time) => {
    const date = new Date(unix_time*1000)

    return `${date.toLocaleDateString("en-US")} at ${date.toLocaleTimeString()}`
  }

  return (
    <div className="App">
      <div className='firstDiv'>
        <img class="logo" src="villanova-logo.png"/>
        <h1>Villanova Stock Market</h1>
      </div>
      {data ? (
        <div>
          <h2>{data.name}</h2>
          <h2>${data.price}</h2>
          <h2>{convertUnix(data.updated)}</h2>
        </div>
      ) : null}
      <input class="round-button" 
        onChange={(e) => {
          setStock(e.target.value);
        }}
        data={stock}
        type="text" placeholder="Enter stocks ticker..."></input>
      {/* <stockData /> */}
      <button onClick={getStockData}>Search</button>
    </div>
  );
}

export default App;
