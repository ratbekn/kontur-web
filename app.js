const express = require('express');

const app = express();

app.get('/', (req, res, err) => {
    res.send('Hello, World!');
});

app.listen(5000, () => {
    console.log('Listening on 5000');
});
