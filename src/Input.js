// Input.js
import React from "react";
function Input({ labelText, imgSrc, defaultValue, onChange }) {
  return (
    <form className="flex flex-col mt-2">
      <label className="font-mono text-grayish-cyan mb-2">{labelText}</label>
      <div className="flex items-center w-full">
        <img src={imgSrc} className="-mr-6 z-40" alt="icon" />
        <input
          type="text"
          defaultValue={defaultValue}
          onChange={onChange}
          className="w-full font-extrabold text-xl bg-[#F3F8FB] p-2 rounded  text-right font-mono text-very-dark-cyan "
        />
      </div>
    </form>
  );
}

export default Input;
