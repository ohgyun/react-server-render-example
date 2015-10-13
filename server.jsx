import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Counter from './Counter';

const app = express();

app.get('/', (req, res) => {
    // data caculated on server
    let initialCount = 3;

    let html = '<html><body>';

    // Render component with initial data 
    html += '<div id="container">';
    html += ReactDOMServer.renderToString(<Counter initialCount={initialCount} />);
    html += '</div>';

    // Syncing client data to server data
    html += `<script>window.initialCount = ${initialCount};</script>`;

    html += '<script src="/js/client.js"></script>';

    html += '</body></html>';

    res.send(html);
});

app.use('/js', express.static(__dirname));

app.listen(3000);