import { useEffect, useState } from "react";
import IncrementCounterHoc from "./incrementCounterHoc";

const MouseOverCounter = (props) => {
    const { counter, handleChange} = props;

    return(
        <div>
            <h2 onMouseOver={handleChange}>Mouse Over Counter: {counter}</h2>
        </div>
    )

}

export default IncrementCounterHoc(MouseOverCounter);