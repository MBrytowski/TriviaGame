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
        choices: ["The Grapes of Wrath", "East of Eden", "The Casi of Amontillado", "Of Mice and Men"],
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
                var choicesDiv = $("<form>" + questions[i].choices + "</form>");
                questionDiv.append(gameDiv);
                gameDiv.append(choicesDiv);
                for (var j = 0; j < questions[j].choices; j++) {
                    var radioBtn = $('<input type="radio" name="button" />');
                    choicesDiv.append(radioBtn);
                }


            }

            // var choicesArr = questions[0].choices;
            //for loops to add radio buttons

            for (var i = 0; i < choicesArr.length; i++) {
                var button1 = $('<input type="radio" name="choice_1" value="' + choicesArr[i] + '"><label>' + choicesArr + '</label>');
                button1.text(choicesArr[i]);
                button1.attr("data-one", i);
                $("#answer1").append(button1);
            }

            // choicesArr = questions[1].choices;
            // for (var i = 0; i < choicesArr.length; i++) {
            //     var button2 = $('<input type="radio" name="choice_2" value="' + choicesArr[i] + '"><label>' + choicesArr + '</label>');
            //     button2.text(choicesArr[i]);
            //     button2.attr("data-two", i);
            //     $("#answer2").append(button2);
            // }

            // choicesArr = questions[2].choices;
            // for (var i = 0; i < choicesArr.length; i++) {
            //     var button3 = $('<input type="radio" name="choice_3" value="' + choicesArr[i] + '"><label>' + choicesArr + '</label><br>');
            //     button3.text(choicesArr[i]);
            //     button3.attr("data-three", i);
            //     $("#answer3").append(button3);
            // }

            // choicesArr = questions[3].choices;
            // for (var i = 0; i < choicesArr.length; i++) {
            //     var button4 = $('<input type="radio" name="choice_4" value="' + choicesArr[i] + '"><label>' + choicesArr + '</label><br>');
            //     button4.text(choicesArr[i]);
            //     button4.attr("data-four", i);
            //     $("#answer4").append(button4);
            // }

            // choicesArr = questions[4].choices;
            // for (var i = 0; i < choicesArr.length; i++) {
            //     var button5 = $('<input type="radio" name="choice_5" value="' + choicesArr[i] + '"><label>' + choicesArr + '</label><br>');
            //     button5.text(choicesArr[i]);
            //     button5.attr("data-five", i);
            //     $("#answer5").append(button5);
            // }

            // choicesArr = questions[5].choices;
            // for (var i = 0; i < choicesArr.length; i++) {
            //     var button6 = $('<input type="radio" name="choice_6" value="' + choicesArr[i] + '"><label>' + choicesArr + '</label><br>');
            //     button6.text(choicesArr[i]);
            //     button6.attr("data-six", i);
            //     $("#answer6").append(button6);
            // }

            // choicesArr = questions[6].choices;
            // for (var i = 0; i < choicesArr.length; i++) {
            //     var button7 = $('<input type="radio" name="choice_7" value="' + choicesArr[i] + '"><label>' + choicesArr + '</label><br>');
            //     button7.text(choicesArr[i]);
            //     button7.attr("data-seven", i);
            //     $("#answer7").append(button7);
            // }

            // choicesArr = questions[7].choices;
            // for (var i = 0; i < choicesArr.length; i++) {
            //     var button8 = $('<input type="radio" name="choice_8" value="' + choicesArr[i] + '"><label>' + choicesArr + '</label><br>');
            //     button8.text(choicesArr[i]);
            //     button8.attr("data-eight", i);
            //     $("#answer8").append(button8);
            // }

            // choicesArr = questions[8].choices;
            // for (var i = 0; i < choicesArr.length; i++) {
            //     var button9 = $('<input type="radio" name="choice_9" value="' + choicesArr[i] + '"><label>' + choicesArr + '</label><br>');
            //     button9.text(choicesArr[i]);
            //     button9.attr("data-nine", i);
            //     $("#answer9").append(button9);
            // }

            // choicesArr = questions[9].choices;
            // for (var i = 0; i < choicesArr.length; i++) {
            //     var button10 = $('<input type="radio" name="choice_10" value="' + choicesArr[i] + '"><label>' + choicesArr + '</label><br>');
            //     button10.text(choicesArr[i]);
            //     button10.attr("data-ten", i);
            //     $("#answer10").append(button10);
            // }


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


        // var userGuess = $('input[name="choice1"]:checied').val()
        // if (userGuess === questions[0].choices[2]) {
        //     correctAnswers++;
        // } else if (userGuess != questions[0].choices[2]) {
        //     incorrectAnswers++;
        // } else {
        //     notAnswered++;
        // }

    });

    //Attach values to radio buttons, that seems to be what is missing,
    //all questions are showing "unanswered" in the stats page.
    //$("#myform input[type='radio']:checked").val();

    function checkAns() {
        for (i = 0; i < questions.length; i++) {
            console.log($("input[name=choice_num" + i + "]"))
            if ($("input[name=choice_num" + i + "]").is(":checked")) {
                if ($("input[name=choice_num" + i + "]:checked").val() === questions[i].correct) {
                    correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
            } else {
                notAnswered++;
            }
        }
    };



    // index = questions[0].correct;
    // correct = questions[0].choices[index];


    //If user has attempted all questions before time runs out, clici submit
    $("#submitBtn").on("click", function () {
        // var userGuess = $('input[name="choice1"]:checied').val();
        // // var selectedVal = checiVal(userGuess);

        // if (userGuess === index) {
        //     correctAnswers++;
        // } else if (userGuess != index){
        //     incorrectAnswers++;
        // } else {
        //     notAnswered++;
        // }

        checkAns();
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


});