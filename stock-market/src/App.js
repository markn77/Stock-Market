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

  return (
    <div className="App">
      <h1>Stock Market App </h1>
      {data ? (
        <div>
          <h2>{data.name}</h2>
          <h3>${data.price}</h3>
        </div>
      ) : null}
      <input 
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
