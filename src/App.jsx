import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { fetchStandings } from "./components/Standings/fetchStandings";
import { Routes, Route } from "react-router-dom";
import Standings from "./components/Standings/Standings";
import { fetchSchedulesByLeague } from "./components/Scheduled/fetchSchedulesByLeague";

function App() {
  const [standings, setStandings] = useState([]);
  const [schedules, setSchedules] = useState(null);

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
    const fetchSchedulesData = async () => {
      try {
        const schedulesData = await fetchSchedulesByLeague();
        setSchedules(schedulesData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSchedulesData();
  }, []);

  console.log(schedules);

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
