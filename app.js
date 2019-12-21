const express = require('express');
const uuid = require('uuid');

const app = express();

app.get('/', (req, res, err) => {
    const hello_world_provider = new HelloWorldProvider();
    const msg = hello_world_provider.get();
    res.send(msg);
});

const polls = new Map();

app.listen(5000, () => {
    console.log('Listening on 5000');
});
