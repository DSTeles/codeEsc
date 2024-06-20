import * as Quiz from "../models/QuizModel.js"

const quizModal = document.getElementById("modal")
const escapeRoomLevel = 0

function loadQuiz(questionNum){
  Quiz.init();
  
  // TIMER
  const timerEnd = new Date().getTime() + 1000 * 60 * 20
  
  const timer = setInterval(() => {
    const currentTime = new Date().getTime();
    const distance = timerEnd - currentTime;
    // calcs minutes/seconds
    const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)).toString().padStart(2, '0');  /* makes sure it always has 2 digits */
    const seconds = Math.floor(distance % (1000 * 60) / 1000).toString().padStart(2, '0');
    
    // once countdown finishes
    if (distance < 0 ) {
      modal.style.display = "block";
      document.getElementById("questionnumber").innerHTML = "You lost!"
    }
    
    // place timer on html
    document.getElementById("countdown").innerHTML = minutes + ":" + seconds;
  });
  
  
  
  
  // gets questions
  
  const quizzes = JSON.parse(localStorage.getItem('quizzes'));
  console.log(quizzes)
    // gets all level buttons and turns them into an array
    const areas = document.querySelectorAll("area");
    // const levels = Array.from(areas);
    // console.log(levels)

    // gets the current question to be displayed
    const currentLevel = Quiz.getCurrentQuestion();
    console.log(currentLevel);




    // Quiz Popups - Modal

    // Get the modal
    const modal = document.getElementById("quizModal");
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];


    // close modal
    // when the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    // when the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    // Add click event listeners to each area element
    areas.forEach(function(area) {
      area.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = "block";
        const level = area.getAttribute('title');

        document.getElementById("questionnumber").innerHTML = "Question " + level;
        document.getElementById("question").innerHTML = quizzes[parseInt(level)].question;

      });
    });
}

loadQuiz();


