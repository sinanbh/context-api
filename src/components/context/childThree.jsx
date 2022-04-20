import { Institute, MyName, Role } from "../../App";

const ChildThree = ({ name }) => {
    return <MyName.Consumer>
        {
            (name) => {
                return <Institute.Consumer>
                    {
                        (ins) => {
                            return <Role.Consumer>
                                {
                                    (role) => {
                                        return <h4>My name is {name} - {ins} - {role}</h4>
                                    }
                                }
                            </Role.Consumer>
                        }
                    }
                </Institute.Consumer>
            }
        }
    </MyName.Consumer>
} 
export default ChildThree;