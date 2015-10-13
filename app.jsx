var express = require('express');
var app = express();

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var HelloMessage = require('./HelloMessage');

app.get('/', function (req, res) {
    var html = ReactDOMServer.renderToString(<HelloMessage name="World!" />);
    res.send(html);
});

app.listen(3000);