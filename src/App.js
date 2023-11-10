import dollar from "./images/icon-dollar.svg";
import personIcon from "./images/icon-person.svg";
import PercentageButton from "./PercentageButton";
import Input from "./Input";
import DisplayAmount from "./DisplayAmount";
function App() {
  return (
    <div>
      <div className="bg-[#C3E5E9] h-screen flex flex-col justify-center items-center p-5">
        <h1 className="text-[#00484C] uppercase font-mono text-3xl tracking-wide tracking-wide">
          Spli <span className="block">tter</span>
        </h1>
        <div className="bg-white customShadow rounded-2xl px-6 py-8 mt-3  shadow-lg min-w-full flex flex-col justify-center items-center space-y-3">
          <div className="w-full p-1 flex flex-col space-y-3">
            <Input labelText="Bill" imgSrc={dollar} value={142.55} />
            <div className="w-full ">
              <h2 className=" font-mono text-grayish-cyan mb-2">
                Select Tip %
              </h2>
              <div className=" grid grid-cols-2 grid-rows-3 gap-3">
                <PercentageButton percentage={5} />
                <PercentageButton percentage={10} />
                <PercentageButton percentage={15} />
                <PercentageButton percentage={25} />
                <PercentageButton percentage={50} />
                <input
                  type="text"
                  placeholder="Custom"
                  className="w-full bg-[#F3F8FB] font-extrabold text-2xl rounded text-center customShadowInp font-mono text-very-dark-cyan outline-none"
                />
              </div>
            </div>
            <Input
              labelText="Number of people %"
              imgSrc={personIcon}
              value={5}
            />
          </div>
          <div className=" bg-very-dark-cyan w-full px-4 py-8 rounded-lg">
            <DisplayAmount amountLabel={"Tip Amount"} amount={445} />
            <DisplayAmount amountLabel={"Total"} amount={445} />
            <button className=" bg-[#00CBAE] w-full text-very-dark-cyan font-extrabold mt-2  text-lg py-3 font-mono rounded-lg ">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
