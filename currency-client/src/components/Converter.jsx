import { useState, useEffect } from 'react';
import api from '../api/client';
import { getSymbol } from '../utils/currencySymbols';
import './Converter.css';

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
    <div className='converter-container'>
      <h1 className='converter-title'>Currency Converter</h1>

      <div className='converter-inputs'>
        <div className='input-group'>
          <label htmlFor='from'>From</label>
          <select
            id='from'
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {getSymbol(c)} {c}
              </option>
            ))}
          </select>
        </div>

        <div className='input-group'>
          <label htmlFor='amount'>Amount</label>
          <div className='amount-input-wrapper'>
            <span className='currency-symbol'>{getSymbol(from)} </span>
            <input
              id='amount'
              type='number'
              min='0'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div className='input-group'>
          <label htmlFor='to'>To</label>
          <select id='to' value={to} onChange={(e) => setTo(e.target.value)}>
            {currencies.map((c) => (
              <option key={c} value={c}>
                {getSymbol(c)} {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className='convert-button' onClick={handleConvert}>
        Convert
      </button>

      {result && (
        <h2 className='converter-result'>
          {amount} {from} = <strong>{result}</strong> {to}
        </h2>
      )}
    </div>
  );
};

export default Converter;
