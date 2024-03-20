import StandingsHeader from "./StandingsHeader";
import StandingsRow from "./StandingsRow";

const headers = [
  "Position",
  "Club",
  "",
  "GP",
  "W",
  "D",
  "L",
  "GF",
  "GA",
  "GD",
  "Points",
  "Form",
];

const dataProperties = [
  "Position",
  "Club",
  "Games Played",
  "Games Won",
  "Games Drawn",
  "Games Loss",
  "Goals For",
  "Goals Against",
  "Goals Difference",
  "Points",
  "Previous 5 Games",
];

const tableHeaders = headers.map((header, index) => ({
  header,
  data: dataProperties[index] || "",
}));

// console.log(tableHeaders);

const Standings = ({ standings }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr className="text-center text-sm italic font-light">
            {tableHeaders.map((header, index) => {
              return <StandingsHeader key={index} header={header.header} />;
            })}
          </tr>
        </thead>

        <tbody>
          {standings.response[0].league.standings[0].map((team) => (
            <StandingsRow key={team.team.id} team={team} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Standings;
