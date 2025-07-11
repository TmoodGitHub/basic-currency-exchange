import { useState, useEffect } from 'react';
import api from '../api/client';

const Converter = ({ onConvert }) => {
  const [currencies, setCurrencies] = useState([]);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    api.get('/currencies').then((res) => setCurrencies(res.data));
  }, []);

  const handleConvert = async () => {
    const { data } = await api.post('/convert', { from, to, amount });
    setResult(data.result.toFixed(2));
    if (onConvert) onConvert();
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {currencies.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <input
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {currencies.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button onClick={handleConvert}>Convert</button>
      {result && (
        <h2>
          {amount} {from} = <strong>{result}</strong> {to}
        </h2>
      )}
    </div>
  );
};

export default Converter;
