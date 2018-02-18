$(document).ready(function(){

    //Create Game Question Object Array
    var gameQuestions = [
        {
            question: "Which one is not Merida's brother?", 
            a1: "Harris", 
            a2: "Hamish", 
            a3: "Humphrey", 
            a4: "Hubert", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:43%;position:relative;" id="giphydiv"><iframe src="https://giphy.com/embed/WFEZyFxxmZ0Vq" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p id="viaGiphy"><a href="https://giphy.com/gifs/disneypixar-animation-disney-boys-WFEZyFxxmZ0Vq"></a></p>',
            answer: 3
        },
        {
            question: "How old is Carl Fredricksen", 
            a1: "82", 
            a2: "29", 
            a3: "70", 
            a4: "78", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:56%;position:relative;" id="giphydiv"><iframe src="https://giphy.com/embed/hNU4HmhtpMPTO" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p id="viaGiphy"><a href="https://giphy.com/gifs/disney-pixar-up-disney-hNU4HmhtpMPTO"></a></p>',
            answer: 4
        },
        {
            question: "Which human in 'Toy Story' is aware that the toys are alive?", 
            a1: "Bonnie", 
            a2: "Sid", 
            a3: "Molly", 
            a4: "Andy", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:55%;position:relative;" id="giphydiv"><iframe src="https://giphy.com/embed/RIVu1bR7N2jEA" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p id="viaGiphy"><a href="https://giphy.com/gifs/disney-laughing-pixar-RIVu1bR7N2jEA"></a></p>',
            answer: 2
        },
        {
            question: "What is Edna Mode's nickname?", 
            a1: "Fashionista", 
            a2: "Diva", 
            a3: "E", 
            a4: "M", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:42%;position:relative;" id="giphydiv"><iframe src="https://giphy.com/embed/zuQTdinwThT20" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p id="viaGiphy"><a href="https://giphy.com/gifs/the-incredibles-edna-mode-best-scene-zuQTdinwThT20"></a></p>',
            answer: 3
        },
        {
            question: "What is the name of the young boy in 'The Good Dinosaur'?", 
            a1: "Grog", 
            a2: "Spot", 
            a3: "Fido", 
            a4: "Zog", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:42%;position:relative;" id="giphydiv"><iframe src="https://giphy.com/embed/l9CSJHK88kMTe" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><pid="viaGiphy"><a href="https://giphy.com/gifs/disney-pixar-disney-the-good-dinosaur-l9CSJHK88kMTe"></a></p>',
            answer: 2
        },
        {
            question: "What town does Miguel Rivera come from?", 
            a1: "Santa Cecilia", 
            a2: "Lomas Lindas", 
            a3: "Corpus Christi", 
            a4: "San Miguel", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:42%;position:relative;" id="giphydiv"><iframe src="https://giphy.com/embed/3ohfFi82eai7LjcdJS" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p id="viaGiphy"><a href="https://giphy.com/gifs/am85-mexico-3ohfFi82eai7LjcdJS"></a></p>',
            answer: 1
        },
        {
            question: "Where does Bonnie live?", 
            a1: "234 Elm Street", 
            a2: "1225 Sycamore Street", 
            a3: "324 Oak Tree Lane", 
            a4: "1200 Park Avenue", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:56%;position:relative;", id="giphydiv"><iframe src="https://giphy.com/embed/lKEstjh615lrW" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p id="viaGiphy"><a href="https://giphy.com/gifs/disney-pixar-disney-toy-story-3-lKEstjh615lrW"></a></p>',
            answer: 2
        },
        {
            question: "What job did Carl Fredriksen hold before he retired?", 
            a1: "Pilot", 
            a2: "Hot Air Balloon Operator", 
            a3: "Balloon Salesman", 
            a4: "Aviator", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:56%;position:relative;" id="giphydiv"><iframe src="https://giphy.com/embed/EA8GA5ZkkcSoU" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p id="viaGiphy"><a href="https://giphy.com/gifs/disneypixar-disney-pixar-EA8GA5ZkkcSoU"></a></p>',
            answer: 3
        },
        {
            question: "What are the names of Charles Muntz's 4 dogs?", 
            a1: "Alpha, Beta, Gamma, Delta", 
            a2: "Alpha, Beta, Gamma, Dug", 
            a3: "Max, Lollipop, Mary Jane, Tiger", 
            a4: "Alpha, Beta, Gamma, Kevin", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:52%;position:relative;" id="giphydiv"><iframe src="https://giphy.com/embed/13SOv8x3U5SMdW" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p id="viaGiphy"><a href="https://giphy.com/gifs/reaction-disney-dogs-13SOv8x3U5SMdW"></a></p>',
            answer: 2
        },
        {
            question: "How much does Mr. Incredible weigh?", 
            a1: "300 pounds", 
            a2: "350 pounds", 
            a3: "275 pounds", 
            a4: "Way too much",
            giphyTag: '<div style="width:100%;height:0;padding-bottom:52%;position:relative;" id="giphydiv"><iframe src="https://giphy.com/embed/g18rgL6Ou0ODC" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p id="viaGiphy"><a href="https://giphy.com/gifs/disney-pixar-the-incredibles-g18rgL6Ou0ODC"></a></p>', 
            answer: 2
        },
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

    //variable to hold the iframe tag for the animated giphy
    var gTag;

    //function to start the game 
    $("#startGame").click(function() {

        $("#startGame").remove();


        displayQuestion();
        
    });

        //display the question and the 4 possible answers
    function displayQuestion() {

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
        $("#gameQuestion").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});

        //display the question
        $("#gameQuestion").text(gameQuestions[qnumber-1].question);

        //create <p> tags to hold answers 1 - 4
        $("#a1div").append("<p id='answer1'></p>");
        $("#a2div").append("<p id='answer2'></p>");
        $("#a3div").append("<p id='answer3'></p>");
        $("#a4div").append("<p id='answer4'></p>");

        //style <p> tags
        $("#answer1").css({"font-size": "38px", "text-align": "center"});
        $("#answer1").hover(function(){
            $(this).css({"background-color": "#DCBFD9", "border": "2px solid #486EC3"})},
            function(){$(this).css({"background-color": "initial", "border": "none"})},
        );
        $("#answer2").css({"font-size": "38px", "text-align": "center"});
        $("#answer2").hover(function(){
            $(this).css({"background-color": "#DCBFD9", "border": "2px solid #486EC3"})},
            function(){$(this).css({"background-color": "initial", "border": "none", })},
        );
        $("#answer3").css({"font-size": "38px", "text-align": "center"});
        $("#answer3").hover(function(){
            $(this).css({"background-color": "#DCBFD9", "border": "2px solid #486EC3"})},
            function(){$(this).css({"background-color": "initial", "border": "none"})},
        );
        $("#answer4").css({"font-size": "38px", "text-align": "center"});
        $("#answer4").hover(function(){
            $(this).css({"background-color": "#DCBFD9", "border": "2px solid #486EC3"})},
            function(){$(this).css({"background-color": "initial", "border": "none"})},
        );
        
        //display each of the answers
        $("#answer1").text(gameQuestions[qnumber-1].a1);
        $("#answer2").text(gameQuestions[qnumber-1].a2);
        $("#answer3").text(gameQuestions[qnumber-1].a3);
        $("#answer4").text(gameQuestions[qnumber-1].a4);

        //grab giphyTag
        gTag = gameQuestions[qnumber-1].giphyTag;

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

            //increment qnumber for next question
            qnumber++;

            //conditional statement to display message indicating whether answer is correct or not
            if (userGuess != correctAnswerIndex) {

                //clear display for next question
                $("#gameQuestion").remove();    
                $("#answer1").remove();
                $("#answer2").remove();
                $("#answer3").remove();
                $("#answer4").remove();

                //message indicating incorrect answer
                $("#qdiv").append("<p id='iaMessage'></p>");
                $("#iaMessage").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});
                $("#iaMessage").text("That Is Incorrect!");
                
                //increment wrong answer count
                wrongAnswer++;

                $("#qdiv").append("<p id='ia2Message'></p>");
                //display the correct answer
                $("#ia2Message").css({"font-size": "24px", "text-align": "center", "font-family": "'Times New Roman', Times, serif"});                
                $("#ia2Message").text("The correct answer is: " + correctAnswer);

                //display answer GIPHY
                $("#gdiv").append(gTag);

            } else {

                //clear display for next question
                $("#gameQuestion").remove();    
                $("#answer1").remove();
                $("#answer2").remove();
                $("#answer3").remove();
                $("#answer4").remove();

                //message indicating correct answer
                $("#qdiv").append("<p id='ciMessage'></p>");
                $("#ciMessage").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});                
                $("#ciMessage").text("You  Are Correct!");

                //display answer GIPHY
                $("#gdiv").append(gTag);

                //increment number correct
                numberCorrect++

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

            //increment qnumber for next question
            qnumber++;

            //conditional statement to display message indicating whether answer is correct or not
            if (userGuess != correctAnswerIndex) {

                //clear display for next question
                $("#gameQuestion").remove();    
                $("#answer1").remove();
                $("#answer2").remove();
                $("#answer3").remove();
                $("#answer4").remove();

                //message indicating incorrect answer
                $("#qdiv").append("<p id='iaMessage'></p>");
                $("#iaMessage").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});                
                $("#iaMessage").text("That Is Incorrect!");

                //display answer GIPHY
                $("#gdiv").append(gTag);
                
                //increment wrong answer count
                wrongAnswer++;

                $("#qdiv").append("<p id='ia2Message'></p>");
                //display the correct answer
                $("#ia2Message").css({"font-size": "24px", "text-align": "center", "font-family": "'Times New Roman', Times, serif"});                
                $("#ia2Message").text("The correct answer is: " + correctAnswer);

            } else {

                //clear display for next question
                $("#gameQuestion").remove();    
                $("#answer1").remove();
                $("#answer2").remove();
                $("#answer3").remove();
                $("#answer4").remove();

                //message indicating correct answer
                $("#qdiv").append("<p id='ciMessage'></p>");
                $("#ciMessage").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});                
                $("#ciMessage").text("You Are Correct!");

                //display answer GIPHY
                $("#gdiv").append(gTag);
                
                //increment number correct
                numberCorrect++

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


            //increment qnumber for next question
            qnumber++;

            //conditional statement to display message indicating whether answer is correct or not
            if (userGuess != correctAnswerIndex) {

                //clear display for next question
                $("#gameQuestion").remove();    
                $("#answer1").remove();
                $("#answer2").remove();
                $("#answer3").remove();
                $("#answer4").remove();

                //message indicating incorrect answer
                $("#qdiv").append("<p id='iaMessage'></p>");
                $("#iaMessage").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});                
                $("#iaMessage").text("That Is Incorrect!");

                //display answer GIPHY
                $("#gdiv").append(gTag);
                
                //increment wrong answer count
                wrongAnswer++;

                $("#qdiv").append("<p id='ia2Message'></p>");
                //display the correct answer
                $("#ia2Message").css({"font-size": "24px", "text-align": "center", "font-family": "'Times New Roman', Times, serif"});                
                $("#ia2Message").text("The correct answer is: " + correctAnswer);

            } else {

                //clear display for next question
                $("#gameQuestion").remove();    
                $("#answer1").remove();
                $("#answer2").remove();
                $("#answer3").remove();
                $("#answer4").remove();

                //message indicating correct answer
                $("#qdiv").append("<p id='ciMessage'></p>");
                $("#ciMessage").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});                
                $("#ciMessage").text("You Are Correct!");

                //display answer GIPHY
                $("#gdiv").append(gTag);

                //increment number correct
                numberCorrect++

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

            //increment qnumber for next question
            qnumber++;

            //conditional statement to display message indicating whether answer is correct or not
            if (userGuess != correctAnswerIndex) {

                //clear display for next question
                $("#gameQuestion").remove();    
                $("#answer1").remove();
                $("#answer2").remove();
                $("#answer3").remove();
                $("#answer4").remove();

                //message indicating incorrect answer
                $("#qdiv").append("<p id='iaMessage'></p>");
                $("#iaMessage").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});                
                $("#iaMessage").text("That Is Incorrect!");

                //display answer GIPHY
                $("#gdiv").append(gTag);
                
                //increment wrong answer count
                wrongAnswer++;

                $("#qdiv").append("<p id='ia2Message'></p>");
                //display the correct answer
                $("#ia2Message").css({"font-size": "24px", "text-align": "center", "font-family": "'Times New Roman', Times, serif"});                
                $("#ia2Message").text("The correct answer is: " + correctAnswer);

            } else {

                //clear display for next question
                $("#gameQuestion").remove();    
                $("#answer1").remove();
                $("#answer2").remove();
                $("#answer3").remove();
                $("#answer4").remove();

                //message indicating correct answer
                $("#qdiv").append("<p id='ciMessage'></p>");
                $("#ciMessage").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});                
                $("#ciMessage").text("You Are Correct!");

                //display answer GIPHY
                $("#gdiv").append(gTag);

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

                //clear display for next question
                $("#gameQuestion").remove();    
                $("#answer1").remove();
                $("#answer2").remove();
                $("#answer3").remove();
                $("#answer4").remove();

                //message indicating time's up
                $("#qdiv").append("<p id='timeoutMessage'></p>");
                $("#timeoutMessage").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});                
                $("#timeoutMessage").text("Out of Time!");

                //increment unanswered
                UnAnswered++;

                //display the correct answer
                $("#a1div").append("<p id='caMessage'></p>");
                $("#caMessage").css({"font-size": "24px", "text-align": "center", "font-family": "'Times New Roman', Times, serif"});                
                $("#caMessage").text("The correct answer is: " + correctAnswer);

                //reset time
                time =  30;

                //increment qnumber for next question
                qnumber++;

                //confirm whether the question count has reached 10
                setTimeout(checkQuestionCount, 5000);

            } 
        }  
    }
    
    function reset() {


        $("#timeoutMessage").remove();
        $("#score").remove();    
        $("#numCorrect").remove();
        $("#numWrong").remove();
        $("#noAnswer").remove();
        $("#startOver").remove();
        $("#timerMessage").text("");

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

    }

    function checkQuestionCount() {

       

        //only disply the next question if the question count has not reached the total
        if(qnumber <= 10 && !timerRunning) {
            
            $("#ciMessage").remove();
            $("#iaMessage").remove();
            $("#ia2Message").remove();
            $("#timeoutMessage").remove();
            $("#caMessage").remove();
            $("#viaGiphy").remove();
            $("#giphydiv").remove();

            //reset guess boolean
            guess = false;

            displayQuestion();

        }  
        
        if(qnumber > 10) {

            $("#ciMessage").remove();
            $("#caMessage").remove();
            $("#timeoutMessage").remove();
            $("#iaMessage").remove();
            $("#ia2Message").remove();
            $("#viaGiphy").remove();
            $("#giphydiv").remove();

            //create <p> tags to hold answers 1 - 4
            $("#qdiv").append("<p id='score'></p>");
            $("#a1div").append("<p id='numCorrect'></p>");
            $("#a2div").append("<p id='numWrong'></p>");
            $("#a3div").append("<p id='noAnswer'></p>");
            $("#a4div").append("<p id='startOver'></p>");

             //style <p> tags
            $("#score").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});
            $("#numCorrect").css({"font-size": "24px", "text-align": "center", "font-family": "'Times New Roman', Times, serif"});
            $("#numWrong").css({"font-size": "24px", "text-align": "center", "font-family": "'Times New Roman', Times, serif"});
            $("#noAnswer").css({"font-size": "24px", "text-align": "center", "font-family": "'Times New Roman', Times, serif"});
            $("#startOver").css({"font-size": "38px", "text-align": "center"});
            $("#startOver").hover(function(){
            $(this).css({"background-color": "#DCBFD9", "border": "2px solid #486EC3"})},
            function(){$(this).css({"background-color": "initial", "border": "none"})},
            );
            $("#score").text("All done, here's how you did!");

            $("#numCorrect").text("Correct Answers: " + numberCorrect);

            $("#numWrong").text("Incorrect Answers: " + wrongAnswer);

            $("#noAnswer").text("Unanswered: " + UnAnswered);

            $("#startOver").text("Start Over?");

            $("#startOver").click(reset);

        } 
    }
});