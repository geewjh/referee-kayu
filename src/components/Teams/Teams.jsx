import TeamsDetailsCard from "./TeamsDetailsCard";

const Teams = ({ standings }) => {
  if (
    !standings ||
    !standings.response ||
    !standings.response[0] ||
    !standings.response[0].league ||
    !standings.response[0].league.standings ||
    standings.response[0].league.standings.length === 0
  ) {
    return null;
  }

  const sortedTeamsByRank = [...standings.response[0].league.standings[0]];
  sortedTeamsByRank.sort((a, b) => a.rank - b.rank);

  return (
    <div className="grid grid-cols-4 py-10 gap-9">
      {sortedTeamsByRank.map((club) => (
        <TeamsDetailsCard
          key={club.team.id}
          rank={club.rank}
          team={club.team}
        />
      ))}
    </div>
  );
};

export default Teams;
