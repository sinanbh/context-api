import { useContext } from "react";
import { Role, Institute, MyName, MyCounter } from "../../App";

const ChildFour = () => {
    const name = useContext(MyName);
    const ins = useContext(Institute);
    const role = useContext(Role);
    const incrementer = useContext(MyCounter);

    const {counter, handleChange} = incrementer;

    return(
        <div>
            <h2>Child-4 with name: {name} - {ins} - {role} <br /> Counter: {counter}</h2>
            <button onClick={handleChange}>Click Here</button>
        </div>
    )
}

export default ChildFour;