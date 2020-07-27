import React, {Component} from 'react';
import logo from './logo.svg';
import Gladiator from "./components/Gladiator";
import './App.css';

class App extends Component {
  state = {
    disable: {
      arm: false
    }
  }
  constructor(props) {
    super(props);

    this.handleInputChange.bind(this);
  }

  handleInputChange=  event => {
    const target = event.target;
    const disable = {
      arm: target.checked
    }

    this.setState({
      disable
    });
  }

  render() {
    return <div className="App">
      <div>
        <form>
          <label>
            Right hand:
            <input
              name="rightHand"
              type="checkbox"
              checked={this.state.disable.arm}
              onChange={this.handleInputChange} />
          </label>
        </form>
        <Gladiator rightArm={this.state.disable.arm}/>
      </div>
    </div>
  };
}

export default App;
