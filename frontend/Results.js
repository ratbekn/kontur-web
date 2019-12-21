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

function showResults(data){
    let results = document.querySelector('.results');
    results.remove();
    let newResults = document.createElement('div');
    newResults.setAttribute('class', 'results');
    for (const question of data){
        const title = document.createElement('h3');
        title.innerHTML = question["question"];;
        const guesses = document.createElement('ul');
        for (const gues in question["guesses"]){
            const guesElem = document.createElement('li');
            guesElem.innerHTML = "   " + gues + ": " + question["guesses"][gues];
            guesses.append(guesElem)
        }
        newResults.append(title);
        newResults.append(guesses);
    }
    document.querySelector('body').append(newResults);
}

function updateResults(){
    // fetch('/api/poll/' + id, {method: 'GET'})
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         resultsData = data;
    //         showResults();
    //     })
    //     .catch(alert);
    showResults(resultsSample);
}

