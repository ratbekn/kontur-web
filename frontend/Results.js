function getQueryParam(item) {
    var dirs = window.location.pathname.split('/');
    return dirs[dirs.length - 1];
}

var guid = getQueryParam('guid');
let obj = {
    'guid': guid
};

const quiz_id = document.querySelector('.quiz_id');
quiz_id.innerHTML = obj['guid'];

const results = [
    {
        "question": "gender",
        "guesses": {
            "male": 3,
            "female": 2,
        }
    },
    {
        "question": "like anime",
        "guesses": {
            "yes": 3,
            "no": 2,
        }
    },
];

function ShowResults(results){
    const results = document.querySelector('.results');
    for (const question in results){
        const h2 = document.createElement('h2');
        h2.innerHTML = question["question"];;
        const guesses = document.createElement('div');
        guesses.setAttribute('class', 'guesses');
        for (const gues in guesses){
            const gues = document.createElement('br');
            gues.innerHTML = "   " + guesses[gues];
            guesses.append(gues)
        }
        results.append(h2);
        results.append(guesses);
    }
}

ShowResults(results);

// fetch('*', {method: 'POST',body:JSON.stringify(obj),headers:{'content-type': 'application/json'}})
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (obj) {
//             const quiz_id = document.querySelector('.quiz_id');
//             quiz_id.innerHTML = obj['guid'];
//         })
//         .catch(alert);
