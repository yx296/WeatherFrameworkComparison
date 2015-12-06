var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {zipcode: ''};
  },
  handleChange: function(e) {
    this.setState({zipcode: e.target.value})
  },
  handleKeyPress: function(e) {
    if (e.key === 'Enter') {
      var zipcode = e.target.value;
      this.props.onWeatherSubmit(zipcode);
      this.setState({zipcode: ''});
    }
  },

  render: function() {
    var zipcode = this.state.zipcode;
    return <input
             type="text" 
             placeholder="Enter a zip code" 
             value={zipcode}
             onChange={this.handleChange}
             onKeyPress={this.handleKeyPress}
           />
  }
});
