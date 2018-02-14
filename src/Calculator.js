import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			total: 0
		}
	}

	addNumbers(e){
		let num1 = parseInt(this.value1.value)
		let num2 = parseInt(this.value2.value)
		if (!num1){
			num1 = 0;
		}else if (!num2){
			num2 = 0;
		}
		this.setState({
			total: num1 + num2
		})
	}
  render() {
    return (
      <div className="container">
		  <h1>Add with React!</h1>

		  <div className="add">
		     <input type="number" ref={(input) => {this.value1 = input;}} onChange={(e) => this.addNumbers(e)}/>
		     <span>+</span>
		     <input type="number" ref={(input) => {this.value2 = input;}} onChange={(e) => this.addNumbers(e)}/>
		     <span>=</span>
		     <h3>{this.state.total}</h3>
		  </div>
	</div>
    );
  }
}

export default App;
