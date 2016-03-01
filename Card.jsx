var React = require('react/addons');

var Card = React.createClass({

	render:function(){

		return <div>
			{this.props.content.blocks[0].title}
		</div>
	}
})

module.exports = Card;
