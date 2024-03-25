const TeamDetailsCard = ({ team, rank }) => {
  return (
    <main className="card">
      <div className="card-body">
        <figure>
          <img src={team.logo} alt={team.name} width={55} />
        </figure>
        <h2 className="card-title text-xs italic mx-auto m-4 font-light">
          <span className="badge badge-accent badge-sm">Rank: {rank}</span>
          {team.name}
        </h2>
      </div>
    </main>
  );
};

export default TeamDetailsCard;
