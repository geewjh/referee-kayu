import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { fetchStandings } from "./components/Standings/fetchStandings";
import { Routes, Route } from "react-router-dom";
import Standings from "./components/Standings/Standings";
import { fetchFixtures } from "./components/Scheduled/fetchFixtures";

function App() {
  const [standings, setStandings] = useState([]);
  const [fixtures, setFixtures] = useState(null);

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

  useEffect(() => {
    const fetchFixturesData = async () => {
      try {
        const fixturesData = await fetchFixtures();
        setFixtures(fixturesData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFixturesData();
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
