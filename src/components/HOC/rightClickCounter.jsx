import React from "react";
import IncrementCounterHoc from "./incrementCounterHoc";

const RightClickCounter = (props) => {
    const { counter, handleChange} = props;

    return(
        <div>
            <h2>Right Click Counter: {counter}</h2>
            <button onContextMenu={handleChange}>Right Click Counter</button>
        </div>
    )

}

export default IncrementCounterHoc(RightClickCounter);