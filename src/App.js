import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    inputText: "",
    addressList: [],
  };

  handleInput = (event) => {
    // getting the value of the input and assigning to the state
    this.setState({ inputText: event.target.value });
  };

  handleSubmit = (event) => {
    // stop default form behaviour which is to reload the page.
    // dont want that with react spa!!!!
    event.preventDefault();

    this.setState({
      addressList: [...this.state.addressList, this.state.inputText],
      inputText: "",
    });
  };

  render() {
    return (
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.inputText} onChange={this.handleInput}/>
      </form>

      <div className="address-list">
        <div>
          {this.state.addressList.map((value, index) => {
            return (
               <Address key={index} value={this.state.addressList[index]}/>
            )
          })}
        
        </div>
      </div>
      </div>
    )
  }

}

const Address = (props) => {
    return (
      <p>{props.value}</p>
    )
}

export default App;
