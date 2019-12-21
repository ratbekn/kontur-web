const express = require('express');
const uuid = require('uuid');

const app = express();

const polls = new Map();

app.listen(5000, () => {
    console.log('Listening on 5000');
});
