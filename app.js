const express = require('express');
const uuid = require('uuid');

const app = express();
const polls = new Map();

app.route('/poll/:id')
    .get((req, res, err) => {
        const id = req.params.id;
        const poll = polls.get(id);
        if (poll === undefined)
            return 'Unknown id';
        const view = renderPoll(poll);
        res.send(view);
    }
);

app.listen(5000, () => {
    console.log('Listening on 5000');
});
