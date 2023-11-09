import dollar from "./images/icon-dollar.svg";
function App() {
  return (
    <di>
      <div className="bg-[#C3E5E9] h-screen flex flex-col justify-center items-center p-5">
        <h1 className="text-[#00484C] uppercase font-bold  ">
          Spli <span className="block">tter</span>
        </h1>
        <div className="bg-white p-3 mt-3  rounded shadow-lg min-w-full flex flex-col justify-center items-center space-y-3">
          <div className=" bg-red-700 w-full p-1 flex flex-col space-y-2">
            <form className="flex flex-col bg-blue-500">
              <label>Bill</label>
              <div className="flex">
                <img src={dollar} alt="dollar" />
                <input type="number" value={889} className="w-full" />
              </div>
            </form>
            <div className=" bg-orange-700 w-full ">
              <h2>Select Tip %</h2>
              <div className=" grid grid-cols-2 grid-rows-3">
                <a href="#">5%</a>
                <a href="#">10%</a>
                <a href="#">15%</a>
                <a href="#">25%</a>
                <a href="#">50%</a>
                {/* <button>5%</button>
                <button>10%</button>
                <button>15%</button>
                <button>25%</button>
                <button>50%</button> */}
                <input type="number" placeholder="Custom" />
              </div>
            </div>
            <form className="flex flex-col bg-blue-500">
              <label>Bill</label>
              <div className="flex">
                <img src={dollar} alt="dollar" />
                <input type="number" value={889} className="w-full" />
              </div>
            </form>
          </div>
          <div className=" bg-green-600 w-full p-1"></div>
        </div>
      </div>
    </di>
  );
}

export default App;
