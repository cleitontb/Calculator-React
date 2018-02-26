import React from 'react'
import createClass from 'create-react-class';
import '../style/button.css';

const Button = createClass({
	render(){
		return (
			<div className="Button"
			     data-size={this.props.size}
			     onClick={this.props.onClick}
			     data-value={this.props.value}>
				{this.props.label}
			</div>
		);
	}
});

module.exports = Button;