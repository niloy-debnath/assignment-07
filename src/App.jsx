import { useEffect, useState } from 'react';
import './App.css';
import CardContainer from './Components/CardContainer/CardContainer';
import CountBox from './Components/CountBox/CountBox';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/NavBar';

function App() {
  const [data, setData] = useState([]);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/data.json');
      const json = await result.json();
      setData(json);
    };
    fetchData();
  }, []);

  // Counts
  const inProgressCount = data.filter(elm => elm.status === "In-Progress").length;
  const resolvedCount = data.filter(elm => elm.status === "Resolved").length;

  return (
    <>
      <Navbar />
      <CountBox inProgress={inProgressCount} resolved={resolvedCount} />
      <CardContainer data={data} />
      <Footer />
    </>
  );
}

export default App;
