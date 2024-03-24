import FixtureMFBody from "./FixtureMFBody";
import { TfiTimer } from "react-icons/tfi";

const FixtureMF = ({ fixture }) => {
  return (
    <div
      className="w-[98%] pl-3 flex items-center text-sm text-black"
      key={fixture.fixture.id}
    >
      <div className="w-full flex p-1">
        <div className="w-[10%] flex flex-col justify-center items-center text-center italic text-black">
          {fixture.fixture.status.long} <TfiTimer />
        </div>
        <FixtureMFBody fixture={fixture} />
      </div>
    </div>
  );
};

export default FixtureMF;
