import FixtureNS from "./FixtureNS";

const Scheduled = ({ fixtures }) => {
  const sortedFixturesNS = fixtures?.response
    ?.filter((fixture) => fixture.fixture.status.long === "Not Started")
    .sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date));

  const groupNSByDate = (fixtures) => {
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

  const fixturesNSGroupedByDate = groupNSByDate(sortedFixturesNS);

  return (
    <div>
      {Object.entries(fixturesNSGroupedByDate).map(([date, fixtures]) => (
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
            <FixtureNS key={fixture.fixture.id} fixture={fixture} />
          ))}
        </main>
      ))}
    </div>
  );
};

export default Scheduled;
