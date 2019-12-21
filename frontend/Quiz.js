function getQueryParam(item) {
    var svalue = window.location.search.match(new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i'));
    return svalue ? svalue[1] : svalue;
}

var guid = getQueryParam('guid');
let obj = {
    'guid': guid
};
data1 = [{
    'question':'Question1',
    'guesses': ['variant1', 'variant2', 'variant3'],
    'id': 1
}]

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