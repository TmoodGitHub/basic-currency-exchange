import { useState } from 'react';
import Converter from './components/Converter';
import History from './components/History';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <>
      <Converter onConvert={() => setRefresh((prev) => prev + 1)} />
      <History refresh={refresh} />
    </>
  );
}

export default App;
