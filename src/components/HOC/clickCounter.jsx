import React from "react";
import IncrementCounterHoc from "./incrementCounterHoc";

const ClickCounter = (props) => {
    const { counter, handleChange} = props;

    return(
        <div>
            <h2>Click Counter: {counter}</h2>
            <button onClick={handleChange}>Click Counter</button>
        </div>
    )

}

export default IncrementCounterHoc(ClickCounter);
