import React, {useState, useEffect } from 'react';
import axios from 'axios';

const stockData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [symbol, setSymbol] = useState('AAPL');

    const apiKey = '0UF55PJ2H76ZQNW3';

    useEffect(() => {
        const fetchStockData = async () => {
            const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;
        

        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (err) {
            setError('Error fetching stock data');
            console.error(err);
        }
    };

    fetchStockData();
}, [symbol]);

return (
    <div>
        <h1>Stock Data for {symbol}</h1>
    </div>
);
};