const express = require('express');
const uuid = require('uuid');

const app = express();

app.get('/', (req, res, err) => {
    const hello_world_provider = new HelloWorldProvider();
    const msg = hello_world_provider.get();
    res.send(msg);
});

const polls = new Map();

app.get('/poll/:id', (req, res, err) => {
    const id = req.params.id;
    const poll = polls.get(id);
    if (poll === undefined)
        return 'Unknown id';
    const view = renderPoll(poll);
    res.send(view);
});

app.listen(5000, () => {
    console.log('Listening on 5000');
});
