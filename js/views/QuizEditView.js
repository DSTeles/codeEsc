import  * as Quiz from "../models/QuizModel"

const forms = document.querySelectorAll("form");
console.log(forms);

function editQuestion(){
    Quiz.init();

    
}

forms.addEventListener("submit", editQuestion())

