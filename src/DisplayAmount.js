function DisplayAmount({ amountLabel, amount }) {
  return (
    <div className="flex justify-between items-center font-mono mb-3 py-2 md:mb-4">
      <h2 className="text-white">
        {amountLabel}{" "}
        <span className=" block text-grayish-cyan text-sm">/ person</span>
      </h2>
      <h1 className=" font-extrabold text-[#00CBAE] text-3xl">${amount}</h1>
    </div>
  );
}

export default DisplayAmount;
