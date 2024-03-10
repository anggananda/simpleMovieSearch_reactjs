import React, { useState } from "react";

const PressBtn = ({ name }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    counter !== 0 && setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div className="flex h-[100dvh] justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-4">
        <p className="px-4 py-2 text-4xl">{name}</p>

        <h1>{counter}</h1>
        <div className="flex gap-6">
          <button
            onClick={handleIncrement}
            className="px-3 py-1 rounded-md bg-slate-800 text-white hoverKbg-slate-700 text-2xl"
          >
            +
          </button>
          <button
            onClick={handleDecrement}
            className="px-3 py-1 rounded-md bg-slate-800 text-white hoverKbg-slate-700 text-2xl"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default PressBtn;
