// PercentageButton.js
import React from "react";

function PercentageButton({ percentage }) {
  return (
    <a
      className="bg-very-dark-cyan flex justify-center items-center px-12 text-white mb-1 font-mono font-bold rounded-md py-2"
      href="#"
    >
      {percentage}%
    </a>
  );
}

export default PercentageButton;
