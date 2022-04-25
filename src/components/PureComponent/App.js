import React from 'react';
import './App.css';
import RegularComponent from './components/PureComponent/regularComponent';
import PureComponentExample from './components/PureComponent/pureComponent'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg : "Hello"
    };
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     msg: "welcome"
    //   });
    // }, 100000);
  }

  
  render() {
    console.log("Parent Component");
    return(
      <div className='App'>
        <h1>Message: {this.state.msg}</h1>
        <RegularComponent message={this.state.msg} />
        <PureComponentExample message={this.state.msg} />
      </div>
    )
  }





}

export default App;
