import { useState } from "react";

function Counter() {
  const [count, setCount]  = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div className="m-b-md">Value:
        {isVisible ?
          <span>{count}</span>
          :
          <span>*****</span>
        }
        
        <button onClick={() => setIsVisible(!isVisible)}>{ isVisible ? 'Hide' : 'Show'}</button>
        </div>
      <button className="m-b-md" onClick={() => setCount(count + 1)}>Increase</button>
      <button className="m-b-md" onClick={() => setCount(count - 1)}>Decrease</button>
      <button className="m-b-md" onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export { Counter };