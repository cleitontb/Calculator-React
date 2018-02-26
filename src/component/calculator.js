import React from 'react';
import '../style/App.css';
import Button from './button';
import Buttons from './buttons';
import Display from './display';
import createClass from 'create-react-class';

const Calculator = createClass({

	getInitialState(){
		return{
			operation: '',
			resultEnd: ''
		};
	},

	componentDidMount(){
		let me = this;
		let inputEle = document.getElementById('enter');
		inputEle.addEventListener('keyup', function(e){
			let key = e.which || e.keyCode;
			if(key === 13){
				if(me.state.operation !== "") {
					me.calculateOperations();
				}else{
					alert("Realize algum calculo");
				}
			}
		});
	},

	calculateOperations() {

		let operStr = this.state.operation;
		let retOpe = this.evalExpression(operStr);

		this.setState({
			resultEnd: retOpe,
			operation: operStr
		});
	},

	evalExpression(operStr){

		let regex = /([-]{0,1}[\d]*[\.]{0,1}[\d]+)([\+\-\*\/])([\d]*[\.]{0,1}[\d]+)/;
		let parts = regex.exec(operStr);

		if (parts === null) {
			return operStr;
		};

		let numA = parseFloat(parts[1]);
		let numB = parseFloat(parts[3]);

		let calc;
		switch(parts[2]) {
			case '+':
				calc = numA + numB;
			break;
			case '-':
				calc = numA - numB;
			break;
			case '*':
				calc = numA * numB;
			break;
			case '/':
				calc = numA / numB;
			break;
			default:
				alert("Caracter invalido");
			break;
		};

		operStr = operStr.replace(parts[0], calc);
		return  this.evalExpression(operStr);
	},

	valOp: function valOp(value, vlnum) {
		var valueStOp = this.state.operation;
		switch (value) {
			case 'clear':
				this.setState({
					operation: '',
					resultEnd: ''
				});
				break;
			case 'equal':
			case "=":
				this.calculateOperations();
				break;
			default:

				var newOperation = "";

				if (vlnum === 0 && value !== "" && valueStOp === "") {
					newOperation = value;
				}else if (vlnum === 0 && value !== "" && valueStOp !== ""){
					newOperation = value;
				}

				if(vlnum === 1 && value !== "" && valueStOp === ""){
					newOperation = value;
				}else if(vlnum === 1 && value !== "" && valueStOp !== ""){
					newOperation +=  valueStOp + value;
				}
				this.setState({
					operation: newOperation
				});
			break;
		}
	},

	handleClick(value){

		if(value !== "") {
			this.valOp(value, 1);
		}else{
			alert("Realize algum calculo")
		}
	},

	handleChange(e){

		let value = e.target.value;

		if(value !== "" ) {
			this.valOp(value, 0);
		}else{
			alert("Realize algum calculo");
		}
	},

	render() {
		return (
			<div className="App">
				<div className="Display">
					<input type="text"
						className="Custom-input"
						value={this.state.operation}
						onChange={this.handleChange}
						id="enter"
					/>
				</div>
				<Display
					className="Custom-input"
					data={this.state.resultEnd}

				/>
				<Buttons>
					<Button onClick={this.handleClick.bind(this, "clear")} label="C" value="clear"/>
					<Button onClick={this.handleClick.bind(this, "7")} label="7" value="7"/>
					<Button onClick={this.handleClick.bind(this, "4")} label="4" value="4"/>
					<Button onClick={this.handleClick.bind(this, "1")} label="1" value="1"/>
					<Button onClick={this.handleClick.bind(this, "0")} label="0" value="0"/>

					<Button onClick={this.handleClick.bind(this, "/")} label="/" value="/"/>
					<Button onClick={this.handleClick.bind(this, "8")} label="8" value="8"/>
					<Button onClick={this.handleClick.bind(this, "5")} label="5" value="5"/>
					<Button onClick={this.handleClick.bind(this, "2")} label="2" value="2"/>
					<Button onClick={this.handleClick.bind(this, ".")} label="." value="."/>

					<Button onClick={this.handleClick.bind(this, "*")} label="x" value="*"/>
					<Button onClick={this.handleClick.bind(this, "9")} label="9" value="9"/>
					<Button onClick={this.handleClick.bind(this, "6")} label="6" value="6"/>
					<Button onClick={this.handleClick.bind(this, "3")} label="3" value="3"/>

					<Button onClick={this.handleClick.bind(this, "-")} label="-" value="-"/>
					<Button onClick={this.handleClick.bind(this, "+")} label="+" size="2" value="+"/>
					<Button onClick={this.handleClick.bind(this, "equal")} label="=" size="2" value="equal"/>
				</Buttons>
			</div>
		);
	}
});

export default Calculator;