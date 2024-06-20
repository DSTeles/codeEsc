let questions = [];


// Exportar quizzes da LocalStorage
export function init() {
    if(localStorage.questions){
        const tempQuiz = JSON.parse(localStorage.questions);
        for(let quiz of tempQuiz) {
            questions.push(new Quiz(quiz.question, quiz.rightanswer, quiz.option2, quiz.option3, quiz.option4, quiz.questionNum));
        }
    }
    else{
        questions = [];
    }
}

// Definir o quiz atual
export function setCurrentQuestion(questionNum){
    localStorage.setItem("question", questionNum);
}


// Obter quiz atual
export function getCurrentQuestion() {
    return questions.find((question) => question.questionNum === localStorage.getItem("question"));
}


// Timer
export function startTimer(){
    const timerEnd = new Date().getTime() + 1000 * 60 * 60

    const timer = setInterval(() => {
    const currentTime = new Date().getTime();
    const distance = timerEnd - currentTime;
    // calcs minutes/seconds
    const minutes = Math.floor(distance % (1000 * 60 * 20) / (1000 * 60)).toString().padStart(2, '0');  /* makes sure it always has 2 digits */
    const seconds = Math.floor(distance % (1000 * 20) / 1000).toString().padStart(2, '0');

    // once countdown finishes
    if (distance < 0 ) {
        clearInterval(timer);
        // see this later
        throw Error ("Your time ran out");
    }

    // place timer on html
    document.getElementById("countdown").innerHTML = minutes + ":" + seconds;
});
}



class Quiz {
    question = "";
    rightanswer = "";
    option2 = "";
    option3 = "";
    option4 = "";
    questionNum = "";
    tip= "";

    constructor(question, rightanswer, option2, option3, option4, questionNum, tip){
        this.questionNum = questionNum
        this.question = question;
        this.rightanswer = rightanswer;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.tip = tip;
    }
}