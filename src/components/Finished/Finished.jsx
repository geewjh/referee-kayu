import FixtureMF from "./FixtureMF";

const Finished = ({ fixtures }) => {
  const sortedFixturesMF = fixtures?.response
    ?.filter((fixture) => fixture.fixture.status.long === "Match Finished")
    .sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date));

  const groupMFByDate = (fixtures) => {
    const dateGroups = {};

    if (!fixtures) return dateGroups;

    for (const fixture of fixtures) {
      const fixtureDate = new Date(fixture.fixture.date);
      const formattedDate = fixtureDate.toLocaleDateString("en-SG", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      if (!dateGroups[formattedDate]) {
        dateGroups[formattedDate] = [];
      }
      dateGroups[formattedDate].push(fixture);
    }

    return dateGroups;
  };

  const fixturesMFGroupedByDate = groupMFByDate(sortedFixturesMF);
  console.log(fixturesMFGroupedByDate);
  return (
    <div>
      {Object.entries(fixturesMFGroupedByDate).map(([date, fixtures]) => (
        <main key={date}>
          <h2
            className="py-3 pl-4
            text-black
            text-left
            text-sm
            italic 
            font-bold
            "
          >
            {date}
          </h2>
          {fixtures.map((fixture) => (
            <FixtureMF key={fixture.fixture.id} fixture={fixture} />
          ))}
        </main>
      ))}
    </div>
  );
};

export default Finished;
