import React from 'react'
import createClass from 'create-react-class';
import '../style/buttons.css';

const Buttons = createClass({
	render(){
		return(
			<div className="Buttons">
				{this.props.children}
			</div>
		)
	}
});

module.exports = Buttons;