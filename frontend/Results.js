function getQueryParam() {
    var dirs = window.location.pathname.split('/');
    return dirs[dirs.length - 1];
}

var guid = getQueryParam();
let obj = {
    'guid': guid
};

const quiz_id = document.querySelector('.quiz_id');
quiz_id.innerHTML = obj['guid'];

const resultsSample = [
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

function showResults(){
    const results = document.querySelector('.results');
    for (const question of resultsSample){
        const title = document.createElement('h3');
        title.innerHTML = question["question"];;
        const guesses = document.createElement('ul');
        for (const gues in question["guesses"]){
            const guesElem = document.createElement('li');
            guesElem.innerHTML = "   " + gues + ": " + question["guesses"][gues];
            guesses.append(guesElem)
        }
        results.append(title);
        results.append(guesses);
    }
}

// fetch('*', {method: 'POST',body:JSON.stringify(obj),headers:{'content-type': 'application/json'}})
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (obj) {
//             const quiz_id = document.querySelector('.quiz_id');
//             quiz_id.innerHTML = obj['guid'];
//         })
//         .catch(alert);
