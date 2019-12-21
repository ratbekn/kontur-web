const express = require('express');
const uuid = require('uuid');

const app = express();
const polls = new Map();

app.route('/poll/:id')
    .get((req, res, err) => {
        const id = req.params.id;
        const poll = polls.get(id);
        if (poll === undefined) {
            res.statusCode = 400;
            res.end('Unknown id');
        }
        res.sendFile('./poll.html');
    }
);

app.listen(5000, () => {
    console.log('Listening on 5000');
});
