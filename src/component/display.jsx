import React from 'react'
import createClass from 'create-react-class';

const Display = createClass({
	render() {
		var string = "Total:"+ this.props.data;
		return (
			<div className="Display">
				{string}
			</div>
		);
	}
});

module.exports = Display;