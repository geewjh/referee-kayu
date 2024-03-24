const StandingsRow = ({ team }) => {
  return (
    <tr key={team.team.id} className="text-center">
      <td>{team.rank}</td>
      <td>
        <img
          className="mx-auto"
          src={team.team.logo}
          alt={team.team.name}
          width={50}
        />
      </td>
      <td className="italic text-left">{team.team.name}</td>
      <td>{team.all.played}</td>
      <td>{team.all.win}</td>
      <td>{team.all.draw}</td>
      <td>{team.all.lose}</td>
      <td>{team.all.goals.for}</td>
      <td>{team.all.goals.against}</td>
      <td>{team.goalsDiff}</td>
      <td>{team.points}</td>
      <td className="italic">{team.form}</td>
    </tr>
  );
};

export default StandingsRow;
