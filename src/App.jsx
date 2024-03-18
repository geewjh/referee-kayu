import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { fetchStandings } from "./components/Standings/fetchStandings";
import { Routes, Route } from "react-router-dom";
import Standings from "./components/Standings/Standings";

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
      <Routes>
        <Route
          path="/standings"
          element={<Standings standings={standings} />}
        />
      </Routes>
    </div>
  );
}

export default App;
