//Game start
$(document).ready(function () {
    var timeStart = 120;
    var currentQ = 0;
    var intervalId;
    var incorrectAnswers = 0;
    var correctAnswers = 0;
    var notAnswered = 0;
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

            var choicesArr = questions[0].choices;
            //for loops to add radio buttons
            for (var i = 0; i < choicesArr.length; i++) {
                var button1 = $('<input type="radio" name="choice1"><label>' + choicesArr + '</label><br>');
                button1.text(choicesArr[i]);
                button1.attr("data-one", i);
                $("#answer1").append(button1);
            }

            choicesArr = questions[1].choices;
            for (var j = 0; j < choicesArr.length; j++) {
                var button2 = $('<input type="radio" name="choice2"><label>' + choicesArr + '</label><br>');
                button2.text(choicesArr[j]);
                button2.attr("data-two", j);
                $("#answer2").append(button2);
            }

            choicesArr = questions[2].choices;
            for (var k = 0; k < choicesArr.length; k++) {
                var button3 = $('<input type="radio" name="choice3"><label>' + choicesArr + '</label><br>');
                button3.text(choicesArr[k]);
                button3.attr("data-three", k);
                $("#answer3").append(button3);
            }

            choicesArr = questions[3].choices;
            for (var j = 0; j < choicesArr.length; j++) {
                var button4 = $('<input type="radio" name="choice4"><label>' + choicesArr + '</label><br>');
                button4.text(choicesArr[j]);
                button4.attr("data-four", j);
                $("#answer4").append(button4);
            }

            choicesArr = questions[4].choices;
            for (var j = 0; j < choicesArr.length; j++) {
                var button5 = $('<input type="radio" name="choice5"><label>' + choicesArr + '</label><br>');
                button5.text(choicesArr[j]);
                button5.attr("data-five", j);
                $("#answer5").append(button5);
            }

            choicesArr = questions[5].choices;
            for (var j = 0; j < choicesArr.length; j++) {
                var button6 = $('<input type="radio" name="choice6"><label>' + choicesArr + '</label><br>');
                button6.text(choicesArr[j]);
                button6.attr("data-six", j);
                $("#answer6").append(button6);
            }

            choicesArr = questions[6].choices;
            for (var j = 0; j < choicesArr.length; j++) {
                var button7 = $('<input type="radio" name="choice7"><label>' + choicesArr + '</label><br>');
                button7.text(choicesArr[j]);
                button7.attr("data-seven", j);
                $("#answer7").append(button7);
            }

            choicesArr = questions[7].choices;
            for (var j = 0; j < choicesArr.length; j++) {
                var button8 = $('<input type="radio" name="choice8"><label>' + choicesArr + '</label><br>');
                button8.text(choicesArr[j]);
                button8.attr("data-eight", j);
                $("#answer8").append(button8);
            }

            choicesArr = questions[8].choices;
            for (var j = 0; j < choicesArr.length; j++) {
                var button9 = $('<input type="radio" name="choice9"><label>' + choicesArr + '</label><br>');
                button9.text(choicesArr[j]);
                button9.attr("data-nine", j);
                $("#answer9").append(button9);
            }

            choicesArr = questions[9].choices;
            for (var j = 0; j < choicesArr.length; j++) {
                var button10 = $('<input type="radio" name="choice10"><label>' + choicesArr + '</label><br>');
                button10.text(choicesArr[j]);
                button10.attr("data-ten", j);
                $("#answer10").append(button10);
            }


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







        // if (userGuess === index) {
        //     correctAnswers++;
        // } else {
        //     incorrectAnswers++;
        // }



    });

    
    index = questions[0].correct;
    // correct = questions[0].choices[index];


    //If user has attempted all questions before time runs out, click submit
    $("#submitBtn").on("click", function () {
        var userGuess = $('input:radio[name="choice1"]:checked').val();
        // var selectedVal = checkVal(userGuess);

        if (userGuess === index) {
            correctAnswers++;
        } else if (userGuess != index){
            incorrectAnswers++;
        } else {
            notAnswered++;
        }


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
        incorrectAnswers = 0;
        correctAnswers = 0;
        notAnswered = 0;
    })

    //answers push to html


})