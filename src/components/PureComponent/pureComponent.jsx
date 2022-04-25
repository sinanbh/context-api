import {PureComponent} from 'react';

class PureComponentExample extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log("Pure Component")
        return <h2>Pure Component : {this.props.message}</h2>
    }
} 

export default PureComponentExample;