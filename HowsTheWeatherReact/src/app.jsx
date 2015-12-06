var React = require('react');
var AppView = require('./AppView');
var ReactDOM = require('react-dom');

var options = {
  title: "How's the weather?",
};

var element = React.createElement(AppView, options);

ReactDOM.render(element, document.querySelector('#container'));
