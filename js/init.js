import * as User from "./models/UserModel.js"
import * as Quiz from "./models/QuizModel.js"


// USERS
if (!localStorage.users) {
    const users = [
        {
            id: 1,
            username: "admin",
            password: "admin",
        },
    ];
    users.forEach((user) => {
        User.add(user.username, user.password)
    })
}

// QUIZES
if (!localStorage.quizzes('quizzes')) {
    const quizzes = [
        {
            question: "Which of the following is used to iterate over a sequence (like a list, tuple, or string) in Python?",
            rightanswer: "for",
            option2: "while",
            option3: "loop",
            option4: "iterate",
            questionNum: "1",
            tip: "Tip: This keyword is often paired with 'each' to indicate looping through items one by one."
        },
        {
            question: "Which HTML element is used to create a hyperlink?",
            rightanswer: "<a>",
            option2: "<link>",
            option3: "<href>",
            option4: "<hyperlink>",
            questionNum: "2",
            tip: "Tip: The tag often stands for 'anchor.'"
        },
        {
            question: "What is the binary representation of the decimal number 5?",
            rightanswer: "101",
            option2: "110",
            option3: "111",
            option4: "100",
            questionNum: "3",
            tip: "In binary, only the digits 0 and 1 are used, and it’s based on powers of 2."
        },
        {
            question: "ques",
            rightanswer: "a",
            option2: "b",
            option3: "c",
            option4: "d",
            questionNum: "4",
            tip: ""
        },
        {
            question: "Which principle of design involves the distribution of visual weight in a composition?",
            rightanswer: "Balance",
            option2: "Contrast",
            option3: "Proportion",
            option4: "Rhythm",
            questionNum: "5",
            tip: "This principle strives to achieve equilibrium in visual elements."
        },
        {
            question: "Which keyword is used to declare a variable that cannot be reassigned in JavaScript?",
            rightanswer: "const",
            option2: "let",
            option3: "var",
            option4: "define",
            questionNum: "6",
            tip: "This keyword is used for variables whose value remains constant throughout their lifecycle."
        },
        {
            question: "Which HTML attribute is used to define the A-Frame scene in an HTML file?",
            rightanswer: "a-scene",
            option2: "a-frame",
            option3: "a-view",
            option4: "a-vr",
            questionNum: "7",
            tip: "This attribute is used as the container for all A-Frame entities and components."
        },
        {
            question: "What is the main objective of creating wireframes in interface design?",
            rightanswer: "To present a rough layout of content and functionality",
            option2: "To create a detailed visual design",
            option3: "To finalize the design for development",
            option4: "To apply colors and typography",
            questionNum: "8",
            tip: "Wireframes are basic visual guides that represent the skeletal framework of a website or application, focusing on structure and functionality."
        },
        {
            question: "What does analytical geometry primarily study regarding spatial relationships?",
            rightanswer: "Planes",
            option2: "Curved surfaces",
            option3: "Solid volumes",
            option4: " Rotational transformations",
            questionNum: "9",
            tip: "Analytical geometry deals with the geometric properties of straight lines, planes, and their interactions in space."
        },
        {
            question: "ques",
            rightanswer: "a",
            option2: "b",
            option3: "c",
            option4: "d",
            questionNum: "10",
            tip: ""
        },
        {
            question: "ques",
            rightanswer: "a",
            option2: "b",
            option3: "c",
            option4: "d",
            questionNum: "x",
            tip: ""
        },
    ];
    quizzes.forEach((quiz) => {
        Quiz.add(quiz.question, quiz.rightanswer, quiz.option2, quiz.option3, quiz.option4, questionNum)
    })
}