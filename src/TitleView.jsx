var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <h1>
      {this.props.title}
    </h1>
  }
});
