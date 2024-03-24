import FixtureNSBody from "./FixtureNSBody";
import { TfiTimer } from "react-icons/tfi";

const FixtureNS = ({ fixture }) => {
  const fixtureDate = new Date(fixture.fixture.date);
  const formattedTime = fixtureDate.toLocaleTimeString("en-SG", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className="w-[98%] pl-3 flex items-center text-sm text-black"
      key={fixture.fixture.id}
    >
      <div className="w-full flex p-1">
        <div className="w-[10%] flex flex-col justify-center items-center text-center italic text-black">
          {formattedTime} <TfiTimer />
        </div>
        <FixtureNSBody fixture={fixture} />
      </div>
    </div>
  );
};

export default FixtureNS;
