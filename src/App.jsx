import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { fetchStandings } from "./utils/fetchStandings";

function App() {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const fetchStandingsData = async () => {
      try {
        const standingsData = await fetchStandings();
        setStandings(standingsData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStandingsData();
  }, []);

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
