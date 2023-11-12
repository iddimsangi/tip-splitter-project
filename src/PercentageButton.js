// PercentageButton.js
import React from "react";

function PercentageButton({ percentage, onClick }) {
  return (
    <a
      onClick={onClick}
      className="bg-very-dark-cyan flex justify-center items-center text-2xl px-12 text-white mb-1 font-mono font-bold rounded-md py-2 hover:bg-[#00CBAE] active:bg-[#00CBAE] focus:bg-[#00CBAE]"
      href="#"
    >
      {percentage}%
    </a>
  );
}

export default PercentageButton;
