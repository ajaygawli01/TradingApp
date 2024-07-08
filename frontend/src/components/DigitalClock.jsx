import React, { useEffect, useState } from 'react'

function DigitalClock() {
    const [time, updateTime] = useState(new Date());
  useEffect(() => {
    // timer updation logic
    const timer = setInterval(() => {
      updateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
   

        <div className=" mr-3 h-[30px]">
            <span className="border border-slate-300 outline outline-offset-2 outline-1 p-1 text-xl  rounded-lg">{time.toLocaleTimeString()}</span>
          </div>

  )
}

export default DigitalClock