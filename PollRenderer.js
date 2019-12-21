function renderQuestion(question) {
    return "<div>" +
        `<h3>${question.title}</h3>` +
        question.options.map(
            option => `<div>${option}</div>`
        ).join("") +
        "</div>";
}

function renderPoll(poll){
    return `<div>
                ${poll.questions.map(
                    question => renderQuestion(question)).join("")}
            </div>`;
}