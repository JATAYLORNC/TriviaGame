$(document).ready(function(){

    //Create Game Question Object Array
    var gameQuestions = [
        {
            question: "What magical creature lead Merida to a witch in 'Brave'?", 
            a1: "Goblins", 
            a2: "Will O' The Wisps", 
            a3: "Ghosts", 
            a4: "Selkies", 
            answer: 2
        },
        {
            question: "Before he became Syndrome, he wore rocket boots and called himself what?", 
            a1: "Incrediboy", 
            a2: "Incredikid", 
            a3: "The Aviator", 
            a4: " Rocket Boy", 
            answer: 1
        },
        {
            question: "What are the 5 emotions in the movie 'Inside Out'?", 
            a1: "Anger, Joy, Hunger, Disgust, Sadness", 
            a2: "Fear, Anger, Disgust, Sadness, Humor", 
            a3: "Blue, Green, Red, Yellow, Light Blue", 
            a4: "Disgust, Fear, Joy, Anger, Sadness", 
            answer: 4
        },
        {
            question: "What is Edna Mode's nickname?", 
            a1: "Fashionista", 
            a2: "Diva", 
            a3: "E", 
            a4: "M", 
            answer: 3
        },
        {
            question: "What is the name of the young boy in 'The Good Dinosaur'?", 
            a1: "Grog", 
            a2: "Spot", 
            a3: "Fido", 
            a4: "Zog", 
            answer: 2
        },
        {
            question: "What town does Miguel Rivera come from?", 
            a1: "Santa Cecilia", 
            a2: "Lomas Lindas", 
            a3: "Corpus Christi", 
            a4: "San Miguel", 
            answer: 1
        },
        {
            question: "Which card did not race against Doc Hudson?", 
            a1: "Louise 'Barnstormer' Nash", 
            a2: "Junior 'Midnight' Moon", 
            a3: "River Scott", 
            a4: "Smokey", 
            answer: 4
        },
        {
            question: "Which human in 'Toy Story' is aware that the toys are alive?", 
            a1: "Bonnie", 
            a2: "Sid", 
            a3: "Molly", 
            a4: "Andy", 
            answer: 2},
        {
            question: "What job did Carl Fredriksen hold before he retired?", 
            a1: "Pilot", 
            a2: "Hot Air Balloon Operator", 
            a3: "Balloon Salesman", 
            a4: "Aviator", 
            answer: 3
        },
        {
            question: "What are the names of Charles Muntz's 4 dogs?", 
            a1: "Alpha, Beta, Gamma, Delta", 
            a2: "Alpha, Beta, Gamma, Dug", 
            a3: "Max, Lollipop, Mary Jane, Tiger", 
            a4: "Alpha, Beta, Gamma, Kevin", 
            answer: 2
        },
        {
            question: "What is the musical that Wall-E watches repeatedly", 
            a1: "Hello Dolly", 
            a2: "Dr. Doolittle (the original version", 
            a3: "My Fair Lady", 
            a4: "The Fantastiks", 
            answer: 1
        },
        {
            question: "How much does Mr. Incredible weigh?", 
            a1: "300 pounds", 
            a2: "350 pounds", 
            a3: "275 pounds", 
            a4: "Way too much", 
            answer: 2
        },
        {
            question: "How old is Carl Fredricksen", 
            a1: "82", 
            a2: "29", 
            a3: "70", 
            a4: "78", 
            answer: 4
        },
        {
            question: "Where does Andy live?", 
            a1: "234 Elm Street", 
            a2: "1225 Sycamore Street", 
            a3: "324 Oak Tree Lane", 
            a4: "1200 Park Avenue", 
            answer: 1
        },
        {
            question: "Which one is not Merida's brother?", 
            a1: "Harris", 
            a2: "Hamish", 
            a3: "Humphrey", 
            a4: "Hubert", 
            answer: 3
        },
        {
            question: "", 
            a1: "", 
            a2: "", 
            a3: "", 
            a4: "", 
            answer: 1
        },
        {
            question: "",
            a1: "", 
            a2: "", 
            a3: "", 
            a4: "", 
            answer: 4
        },
        {
            question: "", 
            a1: "", 
            a2: "", 
            a3: "", 
            a4: "", 
            answer: 4
        },
        {
            question: "", 
            a1: "", 
            a2: "", 
            a3: "", 
            a4: "", 
            answer: 2
        },
        {
            question: "What toy did Wall-E show to Eve", 
            a1: "Lego Bricks", 
            a2: "Rex the Dinosaur", 
            a3: "Rubik's Cube", 
            a4: "Mr. Potato Head", 
            answer: 3
        }
    ];

    //variable that will hold the setInterval that runs the timer
    var timerIntervalId;
    
    //variable that will hold the setTimeout for the display of the next question
    var nextQuestion;

    //variable that will keep track of the question number
    var qnumber = 1;

    //variable to keep track of the time
    var time = 30;

    //variable to hold the index of the correct answer
    var correctAnswerIndex;

    //variable to hold the selected answer
    var userGuess;

    //boolean to control whether or not user made a selection
    var guess;

    //variable to hold correct answer
    var correctAnswer;

    //variable to hold the number of correct guesses
    var numberCorrect = 0;

    //variable to hold the number of wrong answers
    var wrongAnswer = 0;

    //variable to hold the number of unanswered guestions
    var UnAnswered = 0;

    //Boolean to prevent display function from starting new timer if one is already running
    var timerRunning = false;

    //function to start the game 
    $("#startGame").click(function() {

        $("#startGame").remove();


        displayQuestion();
        console.log("startGame calls displayQuestion");
        
    });

        //display the question and the 4 possible answers
    function displayQuestion() {

        console.log("displayQuestion called");

        //conditional statement to ensure the timer only gets started one time for each call to displayQuestion
        if(!timerRunning) {
            //call startTimer function
            startTimer();
            //change timerRunning boolean to indicate that the timer is running
            timerRunning = true;
        }
        
        //reset guess boolean to false;
        guess = false;

        //create a <p> tag to hold the game question
        $("#qdiv").append("<p id='gameQuestion'></p>");

        //style <p> tag for question
        $("#gameQuestion").css({"font-size": "32px", "text-align": "center", "font-family": "'Times New Roman', Times, serif"});

        //display the question
        $("#gameQuestion").text(gameQuestions[qnumber-1].question);

        //create <p> tags to hold answers 1 - 4
        $("#a1div").append("<p id='answer1'></p>");
        $("#a2div").append("<p id='answer2'></p>");
        $("#a3div").append("<p id='answer3'></p>");
        $("#a4div").append("<p id='answer4'></p>");

        //style <p> tags
        $("#answer1").css({"font-size": "32px", "text-align": "center", "font-weight": "bold"});
        $("#answer1").hover(function(){
            $(this).css({"background-color": "#DCBFD9", "border": "2px solid #486EC3"})},
            function(){$(this).css({"background-color": "initial", "border": "none"})},
        );
        $("#answer2").css({"font-size": "32px", "text-align": "center", "font-weight": "bold"});
        $("#answer2").hover(function(){
            $(this).css({"background-color": "#DCBFD9", "border": "2px solid #486EC3"})},
            function(){$(this).css({"background-color": "initial", "border": "none"})},
        );
        $("#answer3").css({"font-size": "32px", "text-align": "center", "font-weight": "bold"});
        $("#answer3").hover(function(){
            $(this).css({"background-color": "#DCBFD9", "border": "2px solid #486EC3"})},
            function(){$(this).css({"background-color": "initial", "border": "none"})},
        );
        $("#answer4").css({"font-size": "32px", "text-align": "center", "font-weight": "bold"});
        $("#answer4").hover(function(){
            $(this).css({"background-color": "#DCBFD9", "border": "2px solid #486EC3"})},
            function(){$(this).css({"background-color": "initial", "border": "none"})},
        );
        
        //display each of the answers
        $("#answer1").text(gameQuestions[qnumber-1].a1);
        $("#answer2").text(gameQuestions[qnumber-1].a2);
        $("#answer3").text(gameQuestions[qnumber-1].a3);
        $("#answer4").text(gameQuestions[qnumber-1].a4);

        //assign correct answer index to variable
        correctAnswerIndex = gameQuestions[qnumber-1].answer;

        if(correctAnswerIndex == 1) {
            correctAnswer = gameQuestions[qnumber-1].a1;
        } else if(correctAnswerIndex == 2) {
            correctAnswer = gameQuestions[qnumber-1].a2;
        } else if(correctAnswerIndex == 3) {
            correctAnswer = gameQuestions[qnumber-1].a3;
        } else {
            correctAnswer = gameQuestions[qnumber-1].a4;
        }

        //define click event for selection of answer 1
        $("#answer1").click(function() {

            //assign the answer number to the variable userGuess
            userGuess = 1;

            //change boolean to indicate that the user has selected an answer
            guess = true;

            //stop the timer when an answer has been selected
            clearInterval(timerIntervalId);

            //change timerRunning boolean to indicate that the timer is no longer running
            timerRunning = false;

            //reset time
            time = 30;

            console.log("----------------------------------------");
            console.log(qnumber);
            //increment qnumber for next question
            qnumber++;
            console.log("qnumber incremented click 1");
            console.log(qnumber);
            console.log("----------------------------------------");

            //conditional statement to display message indicating whether answer is correct or not
            if (userGuess != correctAnswerIndex) {
                
                //increment wrong answer count
                wrongAnswer++;
                
                //message indicating incorrect answer
                $("#gameQuestion").text("Nope!");

                //display the correct answer
                $("#answer1").text("The correct answer is: " + correctAnswer);

            } else {

                //increment number correct
                numberCorrect++

                //message indicating correct answer
                $("#gameQuestion").text("Correct!");

            }

            //confirm whether the question count has reached 10
            setTimeout(checkQuestionCount, 5000);

        });

        //define click event for selection of answer 2
        $("#answer2").click(function() {

            //assign the answer number to the variable userGuess
            userGuess = 2;

            //change boolean to indicate that the user has selected an answer
            guess = true;

            //stop the timer when an answer has been selected
            clearInterval(timerIntervalId);

            //change timerRunning boolean to indicate that the timer is no longer running
            timerRunning = false;

            //reset time
            time = 30;

            console.log("----------------------------------------");
            console.log(qnumber);
            //increment qnumber for next question
            qnumber++;
            console.log("qnumber incremented click 2");
            console.log(qnumber);
            console.log("----------------------------------------");

            //conditional statement to display message indicating whether answer is correct or not
            if (userGuess != correctAnswerIndex) {

                //increment wrong answer count
                wrongAnswer++;

                //message indicating incorrect answer
                $("#gameQuestion").text("Nope!");

                //display the correct answer
                $("#answer1").text("The correct answer is: " + correctAnswer);

            } else {

                //increment number correct
                numberCorrect++

                //message indicating correct answer
                $("#gameQuestion").text("Correct!");

            }

            //confirm whether the question count has reached 10
            setTimeout(checkQuestionCount, 5000);

        });

        //define click event for selection of answer 3
        $("#answer3").click(function() {

            //assign the answer number to the variable userGuess
            userGuess = 3;

            //change boolean to indicate that the user has selected an answer
            guess = true;

            //stop the timer when an answer has been selected
            clearInterval(timerIntervalId);

            //change timerRunning boolean to indicate that the timer is no longer running
            timerRunning = false;

            //reset time
            time = 30;

            console.log("----------------------------------------");
            console.log(qnumber);
            //increment qnumber for next question
            qnumber++;
            console.log("qnumber incremented click 3");
            console.log(qnumber);
            console.log("----------------------------------------");

            //conditional statement to display message indicating whether answer is correct or not
            if (userGuess != correctAnswerIndex) {

                //increment wrong answer count
                wrongAnswer++;

                //message indicating incorrect answer
                $("#gameQuestion").text("Nope!");

                //display the correct answer
                $("#answer1").text("The correct answer is: " + correctAnswer);

            } else {

                //increment number correct
                numberCorrect++

                //message indicating correct answer
                $("#gameQuestion").text("Correct!");

            }

            //confirm whether the question count has reached 10
            setTimeout(checkQuestionCount, 5000);

        });

        //define click event for selection of answer 4
        $("#answer4").click(function() {

            //assign the answer number to the variable userGuess
            userGuess = 4;

            //change boolean to indicate that the user has selected an answer
            guess = true;

            //stop the timer when an answer has been selected
            clearInterval(timerIntervalId);

            //change timerRunning boolean to indicate that the timer is no longer running
            timerRunning=false;

            //reset time
            time = 30;

            console.log("----------------------------------------");
            console.log(qnumber);
            //increment qnumber for next question
            qnumber++;
            console.log("qnumber incremented click 4");
            console.log(qnumber);
            console.log("----------------------------------------");

            //conditional statement to display message indicating whether answer is correct or not
            if (userGuess != correctAnswerIndex) {

                //increment wrong answer count
                wrongAnswer++;

                //message indicating incorrect answer
                $("#gameQuestion").text("Nope!");

                //display the correct answer
                $("#answer1").text("The correct answer is: " + correctAnswer);

            } else {

                //message indicating correct answer
                $("#gameQuestion").text("Correct!");

                //increment number correct
                numberCorrect++
            }

            //confirm whether the question count has reached 10
            setTimeout(checkQuestionCount, 5000);

        });
    }

    //display and start the timer
    function startTimer() {
        timerIntervalId = setInterval(timeCount, 1000);
    }

    function timeCount() {

        if(time > 0) {

        //decrement the time count
        time--;

        //display new time
        $("#timerMessage").text("Time Remaining: " + time + " seconds");
        
        } else {
            clearInterval(timerIntervalId);
            timerRunning = false;
            
            //conditional statement for whether or not user selected an answer
            if (!guess) {
                $("#timerMessage").text("Out of Time!");

                //increment unanswered
                UnAnswered++;

                //display the correct answer
                $("#answer1").text("The correct answer is: " + correctAnswer);

                //reset time
                time =  30;

                console.log("----------------------------------------");
                console.log(qnumber);
                //increment qnumber for next question
                qnumber++;
                console.log("qnumber incremented click 4");
                console.log(qnumber);
                console.log("----------------------------------------");

                setTimeout(function() {
                    //clear display for next question
                    $("#gameQuestion").remove();    
                    $("#answer1").remove();
                    $("#answer2").remove();
                    $("#answer3").remove();
                    $("#answer4").remove();
                }, 5000);

                //confirm whether the question count has reached 10
                setTimeout(checkQuestionCount, 5000);

            } 
        }  
    }
    
    function reset() {

        console.log("--------------------------------");
        console.log("reset clicked");

        $("#score").remove();    
        $("#numCorrect").remove();
        $("#numWrong").remove();
        $("#noAnswer").remove();
        $("#startOver").remove();
        $("#tdiv").append("<p id='timerMessage'></p>");

        // console.log("reset has been called");

        //reset question number
        qnumber = 1;

        //reset time
        time = 30;

        //reset the number of correct guesses
        numberCorrect = 0;

        //reset the number of wrong answers
        wrongAnswer = 0;

        //reset the number of unanswered guestions
        UnAnswered = 0;

        //reset guess boolean
        guess = false;

        //display the first question
        setTimeout(displayQuestion, 3000);

        console.log("reset calls displayQuestion");
        // console.log("---------")

    }

    function checkQuestionCount() {

        //clear display for next question
        $("#gameQuestion").remove();    
        $("#answer1").remove();
        $("#answer2").remove();
        $("#answer3").remove();
        $("#answer4").remove();

        //only disply the next question if the question count has not reached the total
        if(qnumber <= 10 && !timerRunning) {

            console.log("--------------------------------------------");
            console.log("checkQuestionCount called");
            console.log(qnumber);
            console.log("--------------------------------------------");

            // //call startTimer function
            // startTimer();

            // //change timerRunning boolean to indicate that the timer is running
            // timerRunning = true;

            //reset guess boolean
            guess = false;

            displayQuestion();

            console.log("checkQuestionCount calls displayQuestion");

        }  
        
        if(qnumber > 10) {

            console.log("--------------------------------------------");
            console.log(qnumber);
            console.log("Game Over");
            console.log("--------------------------------------------");

            //clear display so that the score can be displayed
            $("#gameQuestion").remove();    
            $("#answer1").remove();
            $("#answer2").remove();
            $("#answer3").remove();
            $("#answer4").remove();
            $("#timerMessage").remove();

            //create <p> tags to hold answers 1 - 4
            $("#qdiv").append("<h2 id='score'></h2>");
            $("#a1div").append("<p id='numCorrect'></p>");
            $("#a2div").append("<p id='numWrong'></p>");
            $("#a3div").append("<p id='noAnswer'></p>");
            $("#a4div").append("<p id='startOver'></p>");
    
            $("#score").text("All done, here's how you did!");

            $("#numCorrect").text("Correct Answers: " + numberCorrect);

            $("#numWrong").text("Incorrect Answers: " + wrongAnswer);

            $("#noAnswer").text("UnAnswered: " + UnAnswered);

            $("#startOver").text("Start Over?");

            $("#startOver").click(reset);

        } 
    }
});