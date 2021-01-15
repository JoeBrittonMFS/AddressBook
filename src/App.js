import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    inputText: "",
  }


  render() {
    return (
      <div className="container">
      <form>
        <input type="text" value={this.state.inputText}/>
      </form>

      <div className="address-list">

      </div>
      

      </div>
    )
  }

}

const Address = (props) => {
    return 
}

export default App;
