//Game start
$(document).ready(function () {
    var timeStart = 120;
    var intervalId;
    var incorrectAnswers = 0;
    var correctAnswers = 0;
    var notAnswered = 0;
    var questionDiv = $("#gameDiv");
    var questions = [{
        question: "What is the title of Lifehouse's debut album?",
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
    $(".questions").hide();
    $("#quizTime").hide();
    $("#submitBtn").hide();
    $("#restartBtn").hide();
    $("#stats").hide();
    $("#choices").hide();
    $("#nextBtn").hide();


    //Clicking start begins timer and hides non necessary text
    $("#startBtn").on("click", function () {
        $("#quizTime").show();
        $(".questions").show();
        $("#submitBtn").show();
        $("#startBtn").hide();
        $("#choices").show();
        $("#nextBtn").show();
        run();

        function run() {
            clearInterval(intervalId);
            //Starts timer
            intervalId = setInterval(decrement, 1000);
            var choices;
            var userGuess = [];
            //loop through questions array, for loop,
            //question and radio buttons in container element give id-question[#]
            //create<p> give value of questions[].question
            //for loop 
            //create <form> append radio here once created
            //append question and each form group to initial div
            //for each div, append to container div by id

            for (var i = 0; i < questions.length; i++) {
                var gameDiv = $("<p>" + questions[i].question + "</p>");
                questionDiv.append(gameDiv);
                var choicesDiv = $("<form/>");
                gameDiv.append(choicesDiv);
                for (var j = 0; j < questions[i].choices.length; j++) {
                    var radioBtn = $('<input type="radio" name="button" class="answer" id=' + j + '>' + questions[i].choices[j] + '</input>');
                    choicesDiv.append(radioBtn);
                }

            }


        };

        function decrement() {
            timeStart--;
            $("#quizTime").text("Time Left: " + timeStart);
            if (timeStart <= 0) {
                alert("Oops! You ran out of time!");
                stop();
                endGame();
            }
        };

    });

    //Attach values to radio buttons, that seems to be what is missing,
    //all questions are showing "unanswered" in the stats page.
    //$("#myform input[type='radio']:checked").val();

    function checkAns(userGuesses) {
        for (i = 0; i < questions.length; i++) {
            console.log(parseInt(userGuesses[i].id));
            console.log(questions[i].correct);
            if (parseInt(userGuesses[i].id) === questions[i].correct) {
                console.log("true");
                correctAnswers++;
            } else if (!$('input[name="button"]:checked')) {
                notAnswered++;
            } else {
                incorrectAnswers++;
            }
            
        }
    };



    // index = questions[0].correct;
    // correct = questions[0].choices[index];


    //If user has attempted all questions before time runs out, clici submit
    $("#submitBtn").on("click", function () {
        var userGuesses = $("form").children("input:checked");
        console.log(userGuesses);
        checkAns(userGuesses);
        stop();
        endGame();
    })

    //Stops timer
    function stop() {
        clearInterval(intervalId);
    }

    //End of game stats
    function endGame() {
        $(".questions").hide();
        $("#quizTime").hide();
        $("#submitBtn").hide();
        $("#stats").show();
        $("#restartBtn").show();
        $("#choices").hide();
        $("#nextBtn").hide();
        $(".correct").text("Answered Correctly: " + correctAnswers);
        $(".incorrect").text("Answered Incorrectly: " + incorrectAnswers);
        $(".unanswered").text("Unanswered: " + notAnswered);

    }

    //Restart to first screen
    $("#restartBtn").on("click", function () {
        $(".questions").hide();
        $("#quizTime").hide();
        $("#submitBtn").hide();
        $("#restartBtn").hide();
        $("#stats").hide();
        $("#startBtn").show();
        $("#choices").hide();
        $("#nextBtn").hide();
        $("input[name='button']").prop("checked", false);
        incorrectAnswers = 0;
        correctAnswers = 0;
        notAnswered = 0;
    })

    //answers push to html
    


});