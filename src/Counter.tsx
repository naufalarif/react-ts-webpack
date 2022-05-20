import { FunctionComponent, useState } from "react";

const Counter: FunctionComponent = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button onClick={() => setCount(prevState => prevState + 1)}>Count {count}</button>
    </div>
  )
}

export default Counter;