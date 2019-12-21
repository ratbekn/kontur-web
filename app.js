const express = require('express');
const uuid = require('uuid');
const path = require('path');

const app = express();
const polls = new Map();

app.use(express.static('frontend/'));

app.route('/poll/:id')
    .get((req, res, err) => {
            const id = req.params.id;
            const poll = polls.get(id);
            if (poll === undefined) {
                res.statusCode = 400;
                res.end('Unknown id');
            }

            const fileDirectory = path.resolve(__dirname, '.', 'frontend/');

            res.sendFile('Quiz.html', {root: fileDirectory}, (err) => {
                res.end();

                if (err) throw(err);
            });
        }
    );

app.route('/api/poll')
    .post((req, res, err) => {
        const newPollId = uuid.v4();

        polls.set(newPollId, {
            id: newPollId,
            questions: [
                {
                    id: uuid.v4(),
                    question: 'Hello',
                    guesses: ['one', 'two', 'three', 'four']
                }
            ]
        });

        res.send(newPollId);
    });

app.route('/api/poll/:id')
    .get((req, res, err) => {
        const pollId = req.params.id;

        if (polls.has(pollId)) {
            res.send(polls.get(pollId))
                .end();
        }

        res.status(400)
            .end();
    });


app.route('/poll/:id')
    .get((req, res, err) => {
        const id = req.params.id;
        const poll = polls.get(id);
        if (poll === undefined) {
            res.statusCode = 400;
            res.end('Unknown id');
        }
        res.sendFile('./Quiz.html');
    }
);

app.listen(5000, () => {
    console.log('Listening on 5000');
});
