const FixtureMFBody = ({ fixture }) => {
  return (
    <article className="w-[90%]">
      <section className="flex pl-[35%] mb-2 items-center italic text-black">
        <figure className="w-[10%]">
          <img
            className="mx-auto"
            src={fixture.teams.home.logo}
            width={35}
            alt={fixture.teams.home.name}
          />
        </figure>

        <p className="w-[70%] text-left">{fixture.teams.home.name}</p>

        <p className={"w-[20%] text-center"}>{fixture.goals.home}</p>
      </section>

      <section className="flex pl-[35%] mb-2 items-center italic text-black">
        <figure className="w-[10%]">
          <img
            className="mx-auto"
            src={fixture.teams.away.logo}
            width={30}
            alt={fixture.teams.away.name}
          />
        </figure>

        <p className="w-[70%] text-left">{fixture.teams.away.name}</p>

        <p className={"w-[20%] text-center"}>{fixture.goals.away}</p>
      </section>
      <hr />
    </article>
  );
};

export default FixtureMFBody;
