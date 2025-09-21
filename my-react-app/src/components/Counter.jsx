import { useState } from "react";
import CustomBtn from "./CustomButton";

const CounterApp = () => {
    // count - state variable, updated via setCount
    const [count, setCount] = useState(0);

    // functions to increment and decrement the count
    const incrementCount = () => setCount(count+1);
    const decrementCount = () => setCount(count-1);

    return (
       <div>
        <h2>Counter App: </h2>
        <p>Count: {count}</p>
          {/* Using the CustomBtn component with a label and an onClick handler */}
        <CustomBtn label="Increment" onClick={incrementCount} />
        <CustomBtn label="Decrement" onClick={decrementCount} />
       </div> 
    )
}

export default CounterApp;