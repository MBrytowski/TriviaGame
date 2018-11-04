//Game start
$(document).ready(function () {
    // $(".questions").hide();
    $("#quizTime").hide();
    $("#submitBtn").hide();
    $("#restartBtn").hide();
    $("#stats").hide();
    var timeStart = 120;
    var intervalId;
    var incorrectAnswers = 0;
    var correctAnswers = 0;
    var notAnswered = 0;
    var questions = [{
        question: "What is the title of Lifehouse's first album?",
        choices: ["Lifehouse", "Smoke & Mirrors", "No Name Face", "Stanley Climbfall"],
        correct: 2
    }, {
        question: "What is the only mammal born with horns?",
        choices: ["Bison", "Giraffe", "Hippopotamus", "Goat"],
        correct: 1
    }, {
        question: "In what city would you find the Wizard of Oz?",
        choices: ["Springfield", "New York City", "London", "The Emerald City"],
        correct: 3
    }, {
        question: "A standard 7-inch vinyl single is usually played at what rpm?",
        choices: ["45 rpm", "35 rpm", "55 rpm", "30 rpm"],
        correct: 0
    }, {
        question: "The expression 'oy vey' comes from what language?",
        choices: ["Swedish", "Russian", "Yiddish", "French"],
        correct: 2
    }, {
        question: "'Arco iris' is the Spanish term for Rainbow.",
        choices: ["True", "False"],
        correct: 0
    }, {
        question: "What is the color of Underdog's cape?",
        choices: ["Red", "Blue", "Yellow", "Green"],
        correct: 1
    }, {
        question: "Which of the following was NOT written by John Steinbeck?",
        choices: ["The Grapes of Wrath", "East of Eden", "The Cask of Amontillado", "Of Mice and Men"],
        correct: 2
    }, {
        question: "A wombat is a marsupial native to which country?",
        choices: ["Thailand", "Chile", "Brazil", "Australia"],
        correct: 3
    }, {
        question: "A fortnight is a unit of time equal to how many days?",
        choices: ["14", "21", "7", "28"],
        correct: 0
    }];

    //Clicking start begins timer and hides non necessary text
    $("#startBtn").on("click", function () {
        $("#quizTime").show();
        // $(".questions").show();
        $("#submitBtn").show();
        $("#startBtn").hide();
        run();

        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

        function decrement() {
            timeStart--;
            $("#quizTime").text("Time Left: " + timeStart);
            if (timeStart <= 0) {
                alert("Oops! You ran out of time!");
                stop();
                endGame();
            }
        }
    })

    //If user has attempted all questions before time runs out, click submit
    $("#submitBtn").on("click", function () {
        stop();
        endGame();
    })

    //Stops timer
    function stop() {
        clearInterval(intervalId);
    }

    //End of game stats
    function endGame() {
        // $(".questions").hide();
        $("#quizTime").hide();
        $("#submitBtn").hide();
        $("#stats").show();
        $("#restartBtn").show()

    }

    //Restart to first screen
    $("#restartBtn").on("click", function () {
        // $(".questions").hide();
        $("#quizTime").hide();
        $("#submitBtn").hide();
        $("#restartBtn").hide();
        $("#stats").hide();
        $("#startBtn").show();
        incorrectAnswers = 0;
        correctAnswers = 0;
        notAnswered = 0;
    })

    //answers push to html


})