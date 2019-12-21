const express = require('express');
const uuid = require('uuid');

const app = express();

app.get('/', (req, res, err) => {
    res.send('Hello, World!');
});

const polls = new Map();

app.listen(5000, () => {
    console.log('Listening on 5000');
});
