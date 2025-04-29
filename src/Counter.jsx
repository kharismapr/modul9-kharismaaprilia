import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => { if (count % 10 === 0 && count !== 0) setTimeout(() => alert(`${count} is divisible by 10`), 0); }
  , [count]);

  return (
    <div className="flex flex-col items-center justify-center py-6 bg-mainBlue text-white w-full h-full mx-auto px-4 sm:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-1">Counter Demo</h1>
      <div className="text-2xl sm:text-3xl my-8 font-semibold">{count}</div>
      <div className="flex space-x-4 sm:space-x-6">
        <button onClick={() => setCount(count - 1)} className="bg-[#183754] px-4 py-2 rounded-lg hover:bg-blue-400 font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg">-</button>
        <button onClick={() => setCount(0)} className="bg-[#183754] px-5 py-2 rounded-lg hover:bg-blue-400 font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg">Reset</button>
        <button onClick={() => setCount(count + 1)} className="bg-[#183754] px-4 py-2 rounded-lg hover:bg-blue-400 font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg">+</button>
      </div>
    </div>
  );
}
