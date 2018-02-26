import React from 'react'
import createClass from 'create-react-class';

const History = createClass({
	render() {
		var string = this.props.data;
		return (
			<div className="Display">
				{string}
			</div>
		);
	}
});

module.exports = History;