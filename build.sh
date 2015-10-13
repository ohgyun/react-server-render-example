#!/bin/bash
babel *.jsx -d .
browserify client.jsx -t babelify -o client.js
node server.js