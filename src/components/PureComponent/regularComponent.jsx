import React, {Component} from 'react';

class RegularComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log("Regular Component");
        return <h2>Regular Component : {this.props.message} </h2>
    }
}

export default RegularComponent; 