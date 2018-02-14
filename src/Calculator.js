import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			total: 0,
			operation: "+"
		}
	}

	calculateNumbers(e){
		let num1 = parseInt(this.value1.value)
		let num2 = parseInt(this.value2.value)
		if (!num1){
			num1 = 0;
		}else if (!num2){
			num2 = 0;
		}
		console.log(this.state.operation)
		this.setState({
			total: eval(`${num1} ${this.state.operation} ${num2}`)
		})
	}

	changeOperation(e){
		//similar to ajax .done
		this.setState({
			total: 0,
			operation: e.target.value
		}, function(){this.calculateNumbers(e)})

	}
  render() {
  	let operations = ['+','/','*','-']
	let operators = operations.map((operator, index)=>{
		return <option value={operator} key={index}>{operator}</option>
	})
    return (
      <div className="container">
		  <h1>Math with React!</h1>

		  <div className="add">
		     <input type="number" ref={(input) => {this.value1 = input;}} onChange={(e) => this.calculateNumbers(e)}/>
		     <select onChange={(e)=>this.changeOperation(e)}>
		     	{operators}
		     </select>
		     <input type="number" ref={(input) => {this.value2 = input;}} onChange={(e) => this.calculateNumbers(e)}/>
		     <span>=</span>
		     <h3>{this.state.total}</h3>
		  </div>
	</div>
    );
  }
}

export default App;
