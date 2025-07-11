import { useEffect, useState } from 'react';
import api from '../api/client';

const History = ({ refresh }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    console.log('fetching history...');
    api.get(`/history?page=${page}`).then((res) => {
      setData(res.data.data);
      setPages(res.data.pages);
    });
  }, [page, refresh]);

  return (
    <div>
      <h2>Conversion History</h2>
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Converted</th>
            <th>Rate</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.from_currency}</td>
              <td>{row.to_currency}</td>
              <td>{row.amount}</td>
              <td>{row.converted_amount}</td>
              <td>{row.rate}</td>
              <td>{new Date(row.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: pages }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default History;
