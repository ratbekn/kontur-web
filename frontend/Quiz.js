function getQueryParam() {
    const location = window.location.toString().split('/');
    return location[location.length - 1];
}

var guid = getQueryParam();
let obj = {
    'guid': guid
};
questions = [{
    'question':'Question1',
    'guesses': ['variant1', 'variant2', 'variant3'],
    'id': 1
},
{
    'question':'Question2',
    'guesses': ['variaasdnt1', 'vggariant2', 'abcsvariant3'],
    'id': 2
}]

let currentQuestion = 0

showNextQuestion();

function showNextQuestion() {
    data = questions[currentQuestion]; // пока только для одного вопроса
    // const question = document.querySelector('.question');
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
    currentQuestion += 1;
    if (currentQuestion === questions.length) {
        const old_button = document.querySelector('#showNext');
        old_button.setAttribute('onclick', 'sendAnswers()');
        old_button.setAttribute('value', 'Отправить');
    }
}

function sendAnswers() {
    alert('sended');
}


/*fetch('*', {method: 'POST',body:JSON.stringify(obj),headers:{'content-type': 'application/json'}})
        .then(function (response) {
            return response.json();
        })
        .then(function (data1) {
            data = data1[0] // пока только для одного вопроса
            const question_title = document.querySelector('.question__title');
            question_title.innerHTML = data.question;
            const question = document.querySelector('.question');
            let k = 0;
            console.log(data.options);
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
        })
        .catch(alert);

*/