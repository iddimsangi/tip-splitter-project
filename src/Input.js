// Input.js
import React from "react";

function Input({ labelText, imgSrc, value }) {
  return (
    <form className="flex flex-col mt-2">
      <label className="font-mono text-grayish-cyan mb-2">{labelText}</label>
      <div className="flex items-center bg-[#F3F8FB] p-2 rounded">
        <img src={imgSrc} className="ml-3" alt="icon" />
        <input
          type="text"
          value={value}
          className="w-full bg-transparent font-extrabold text-xl text-right font-mono text-very-dark-cyan outline-none"
        />
      </div>
    </form>
  );
}

export default Input;
