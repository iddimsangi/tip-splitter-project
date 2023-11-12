import React, { useState, useEffect } from "react";
import dollar from "./images/icon-dollar.svg";
import personIcon from "./images/icon-person.svg";
import PercentageButton from "./PercentageButton";
import Input from "./Input";
import DisplayAmount from "./DisplayAmount";

const tipValues = [5, 10, 15, 25, 50];

function App() {
  const [percentageTips, setPercentageTips] = useState(tipValues);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const handleSelectTip = (tip_val) => {
    setSelectedTip(tip_val);
    setCustomTip(String(tip_val));
  };

  const customHandler = (e) => {
    setCustomTip(e.target.value);
  };
  // ... (previous imports and code)

  useEffect(() => {
    if (customTip !== selectedTip) {
      const selectedIndex = percentageTips.indexOf(selectedTip);

      if (selectedIndex !== -1) {
        const updatedTips = [...percentageTips];
        updatedTips[selectedIndex] = parseFloat(customTip);

        setPercentageTips(updatedTips);
        setSelectedTip(customTip);
      }
    }
  }, [customTip, percentageTips, selectedTip]);

  // ... (rest of the code)

  // useEffect(() => {
  //   if (!isNaN(customTip)) {
  //     const selectedIndex = percentageTips.indexOf(selectedTip);

  //     if (selectedIndex !== -1) {
  //       const updatedTips = [...percentageTips];
  //       updatedTips[selectedIndex] = parseFloat(customTip);

  //       setPercentageTips(updatedTips);
  //     }
  //   }
  // }, [customTip, percentageTips, selectedTip]);

  useEffect(() => {
    if (bill !== 0 && people !== 0) {
      const tipAmount = (bill * (selectedTip / 100)) / people;
      setTipPerPerson(tipAmount.toFixed(2));
      const totalAmount = bill / people + tipAmount;
      setTotalPerPerson(totalAmount.toFixed(2));
    }
  }, [bill, people, selectedTip]);

  return (
    <div>
      <div className="bg-[#C3E5E9] h-screen flex flex-col justify-center items-center p-5">
        <h1 className="text-[#00484C] uppercase font-mono text-3xl tracking-wide tracking-wide">
          Spli <span className="block">tter</span>
        </h1>
        <div className="bg-white customShadow rounded-2xl px-6 py-8 mt-3  shadow-lg w-full flex flex-col justify-center items-center space-y-3 md:flex-row md:space-y-0 md:space-x-3 md:max-w-5xl">
          <div className="w-full p-1 flex flex-col space-y-3">
            <Input
              labelText="Bill"
              imgSrc={dollar}
              defaultValue={bill}
              onChange={(e) => setBill(e.target.value)}
            />

            <div className="w-full ">
              <h2 className=" font-mono text-grayish-cyan mb-2">
                Select Tip %
              </h2>
              <div className=" grid grid-cols-2 grid-rows-3 gap-3">
                {percentageTips.map((tip) => (
                  <PercentageButton
                    key={tip}
                    percentage={tip}
                    onClick={() => handleSelectTip(tip)}
                  />
                ))}
                <input
                  type="text"
                  placeholder="Custom"
                  value={customTip}
                  onChange={customHandler}
                  className="w-full bg-[#F3F8FB] font-extrabold text-2xl rounded text-center customShadowInp font-mono text-very-dark-cyan focus:ring-[#00CBAE]"
                />
              </div>
            </div>

            <Input
              labelText="Number of people %"
              imgSrc={personIcon}
              defaultValue={people}
              onChange={(e) => setPeople(e.target.value)}
            />
          </div>
          <div className=" bg-very-dark-cyan w-full px-4 py-8 rounded-lg md:h-full">
            <DisplayAmount amountLabel={"Tip Amount"} amount={tipPerPerson} />
            <DisplayAmount amountLabel={"Total"} amount={totalPerPerson} />
            <button
              className="bg-[#00CBAE] w-full text-very-dark-cyan font-extrabold mt-2 text-lg py-3 font-mono rounded-lg md:mt-32"
              onClick={() => {
                setBill(0);
                setPeople(0);
                setSelectedTip(0);
                setCustomTip("");
                setTipPerPerson(0);
                setTotalPerPerson(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
