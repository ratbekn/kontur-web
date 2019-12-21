function getQueryParam() {
    const location = window.location.toString().split('/');
    return location[location.length - 1];
}

var id = getQueryParam();
let obj = {
    'id': id
};
questions1 = {
    'id': 1,
    'questions':[{
    'question':'Question1',
    'guesses': ['variant1', 'variant2', 'variant3'],
    'id': 1
},
{
    'question':'Question2',
    'guesses': ['variaasdnt1', 'vggariant2', 'abcsvariant3'],
    'id': 2
}]
};

answers = {
    'id': id,
    'results': []
};

let currentQuestion = 0

function showNextQuestion(questions) {
    data = questions[currentQuestion]; // пока только для одного вопроса
    const old_question = document.querySelector('.question');
    if (old_question) {
        old_question.remove();
    }
    const question = document.createElement('div');
    question.setAttribute('class', 'question');
    const question_title = document.createElement('div');
    question_title.setAttribute('class', 'question_title');
    question.append(question_title);
    question_title.innerHTML = data.question;
    let k = 0;
    console.log(data.guesses);
    for (const guess of data.guesses) {
        const option_element = document.createElement('label');
        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'option');
        input.setAttribute('value', 'answer' + k);
        k += 1;
        const div = document.createElement('div');
        div.setAttribute('class', 'option');
        div.innerHTML = guess;
        option_element.append(input);
        option_element.append(div);
        question.append(option_element);
    }
    document.body.prepend(question);
    if (currentQuestion === questions.length - 1) {
        const old_button = document.querySelector('#showNext');
        old_button.setAttribute('onclick', 'sendAnswers()');
        old_button.setAttribute('value', 'Отправить');
    }
}

function saveAnswer() {
    _addAnswerToArray();
    currentQuestion += 1;
    showNextQuestion();
}

function _addAnswerToArray() {
    const options = document.querySelectorAll('.question label input');
    console.log(document.querySelectorAll('.option'));
    console.log(options);
    let i = 0;
    for (const option of options) {
        if (option.checked) {
            answers.results.push({
                'question': questions[currentQuestion].question,
                'id': questions[currentQuestion].id,
                'answer': questions[currentQuestion].guesses[i]
            })
        }
        i += 1;
    }
    console.log(answers);
}

function sendAnswers() {
    _addAnswerToArray();
    fetch('/api/poll/' + id, {method: 'PUT'})
        .then(function (response) {
            return response.json();
        })
        .then(function (data1) {
            document.body.innerHTML('hello)');
        })
        .catch(alert);
}


fetch('/api/poll/' + id, {method: 'GET'})
        .then(function (response) {
            return response.json();
        })
        .then(function (data1) {
            showNextQuestion(data1);
        })
        .catch(alert);