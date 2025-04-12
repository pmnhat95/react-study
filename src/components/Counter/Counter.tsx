import { useState } from "react";
import styles from './Counter.module.scss';

function Counter() {
  const [count, setCount]  = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="card">
      <div className="m-b-md">Value:
        {isVisible ?
          <span>{count}</span>
          :
          <span>*****</span>
        }
      </div>
      <div>Show/Hide value</div>
      <button className={`${isVisible ? styles.active : ''} m-b-md`} onClick={() => setIsVisible(!isVisible)}>{ isVisible ? 'Hide' : 'Show'}</button>
      <div className="flex gap-10">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export { Counter };