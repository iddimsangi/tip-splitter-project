import dollar from "./images/icon-dollar.svg";
import personIcon from "./images/icon-person.svg";
import Input from "./Input";
function App() {
  return (
    <div>
      <div className="bg-[#C3E5E9] h-screen flex flex-col justify-center items-center p-5">
        <h1 className="text-[#00484C] uppercase font-mono font-extrabold tracking-wide">
          Spli <span className="block">tter</span>
        </h1>
        <div className="bg-white p-6 mt-3  rounded shadow-lg min-w-full flex flex-col justify-center items-center space-y-3">
          <div className=" bg-red-700 w-full p-1 flex flex-col space-y-2">
            <Input labelText="Bill" imgSrc={dollar} value={142.55} />
            <div className=" bg-orange-700 w-full ">
              <h2 className=" font-mono text-very-dark-cyan">Select Tip %</h2>
              <div className=" grid grid-cols-2 grid-rows-3 gap-3">
                <a
                  className=" bg-very-dark-cyan  flex justify-center items-center px-12 text-white mb-1 font-mono font-bold rounded-md py-2"
                  href="#"
                >
                  5%
                </a>
                <a
                  className=" bg-very-dark-cyan  flex justify-center items-center px-12 text-white mb-1 font-mono font-bold rounded-md py-2"
                  href="#"
                >
                  10%
                </a>
                <a
                  className=" bg-very-dark-cyan  flex justify-center items-center px-12 text-white mb-1 font-mono font-bold rounded-md py-2"
                  href="#"
                >
                  15%
                </a>
                <a
                  className=" bg-very-dark-cyan  flex justify-center items-center px-12 text-white mb-1 font-mono font-bold rounded-md py-2"
                  href="#"
                >
                  25%
                </a>
                <a
                  className=" bg-very-dark-cyan  flex justify-center items-center px-12 text-white mb-1 font-mono font-bold rounded-md py-2"
                  href="#"
                >
                  50%
                </a>
                <input
                  type="text"
                  placeholder="Custom"
                  className="w-full bg-white font-extrabold text-xl rounded text-center font-mono text-very-dark-cyan outline-none"
                />
              </div>
            </div>
            <Input
              labelText="Number of people %"
              imgSrc={personIcon}
              value={5}
            />
          </div>
          <div className=" bg-green-600 w-full p-1 rounded-lg">
            <div className=" bg-yellow-400 flex justify-between items-center mb-3">
              <h2>
                Tip Amount <span className=" block">/ person</span>
              </h2>
              <h1>$445</h1>
            </div>
            <div className=" bg-yellow-400 flex justify-between items-center mb-3">
              <h2>
                Total <span className=" block">/ person</span>
              </h2>
              <h1>$445</h1>
            </div>
            <button className=" bg-black w-full text-white">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
