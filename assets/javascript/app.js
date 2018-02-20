$(document).ready(function(){

    //Create Game Question Object Array
    var gameQuestions = [
        {
            question: "Which one is not Merida's brother?", 
            a1: "Harris", 
            a2: "Hamish", 
            a3: "Humphrey", 
            a4: "Hubert", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:43%;position:relative;" class="clearNextQ"><iframe src="https://giphy.com/embed/WFEZyFxxmZ0Vq" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p class="clearNextQ"><a href="https://giphy.com/gifs/disneypixar-animation-disney-boys-WFEZyFxxmZ0Vq"></a></p>',
            answer: 3
        },
        {
            question: "How old is Carl Fredricksen", 
            a1: "82", 
            a2: "29", 
            a3: "70", 
            a4: "78", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:56%;position:relative;" class="clearNextQ"><iframe src="https://giphy.com/embed/hNU4HmhtpMPTO" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p class="clearNextQ"><a href="https://giphy.com/gifs/disney-pixar-up-disney-hNU4HmhtpMPTO"></a></p>',
            answer: 4
        },
        {
            question: "Which human in 'Toy Story' is aware that the toys are alive?", 
            a1: "Bonnie", 
            a2: "Sid", 
            a3: "Molly", 
            a4: "Andy", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:55%;position:relative;" class="clearNextQ"><iframe src="https://giphy.com/embed/RIVu1bR7N2jEA" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p class="clearNextQ"><a href="https://giphy.com/gifs/disney-laughing-pixar-RIVu1bR7N2jEA"></a></p>',
            answer: 2
        },
        {
            question: "What is Edna Mode's nickname?", 
            a1: "Fashionista", 
            a2: "Diva", 
            a3: "E", 
            a4: "M", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:42%;position:relative;" class="clearNextQ"><iframe src="https://giphy.com/embed/zuQTdinwThT20" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p class="clearNextQ"><a href="https://giphy.com/gifs/the-incredibles-edna-mode-best-scene-zuQTdinwThT20"></a></p>',
            answer: 3
        },
        {
            question: "What is the name of the young boy in 'The Good Dinosaur'?", 
            a1: "Grog", 
            a2: "Spot", 
            a3: "Fido", 
            a4: "Zog", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:42%;position:relative;" class="clearNextQ"><iframe src="https://giphy.com/embed/l9CSJHK88kMTe" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p class="clearNextQ"><a href="https://giphy.com/gifs/disney-pixar-disney-the-good-dinosaur-l9CSJHK88kMTe"></a></p>',
            answer: 2
        },
        {
            question: "What town does Miguel Rivera come from?", 
            a1: "Santa Cecilia", 
            a2: "Lomas Lindas", 
            a3: "Corpus Christi", 
            a4: "San Miguel", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:42%;position:relative;" class="clearNextQ"><iframe src="https://giphy.com/embed/3ohfFi82eai7LjcdJS" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p class="clearNextQ""><a href="https://giphy.com/gifs/am85-mexico-3ohfFi82eai7LjcdJS"></a></p>',
            answer: 1
        },
        {
            question: "Where does Bonnie live?", 
            a1: "234 Elm Street", 
            a2: "1225 Sycamore Street", 
            a3: "324 Oak Tree Lane", 
            a4: "1200 Park Avenue", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:56%;position:relative;", class="clearNextQ"><iframe src="https://giphy.com/embed/lKEstjh615lrW" width="100%" height="99%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p class="clearNextQ"><a href="https://giphy.com/gifs/disney-pixar-disney-toy-story-3-lKEstjh615lrW"></a></p>',
            answer: 2
        },
        {
            question: "What job did Carl Fredriksen hold before he retired?", 
            a1: "Pilot", 
            a2: "Hot Air Balloon Operator", 
            a3: "Balloon Salesman", 
            a4: "Aviator", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:56%;position:relative;" class="clearNextQ"><iframe src="https://giphy.com/embed/EA8GA5ZkkcSoU" width="100%" height="99%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p class="clearNextQ"><a href="https://giphy.com/gifs/disneypixar-disney-pixar-EA8GA5ZkkcSoU"></a></p>',
            answer: 3
        },
        {
            question: "What are the names of Charles Muntz's 4 dogs?", 
            a1: "Alpha, Beta, Gamma, Delta", 
            a2: "Alpha, Beta, Gamma, Dug", 
            a3: "Max, Lollipop, M.J., Tiger", 
            a4: "Alpha, Beta, Gamma, Kevin", 
            giphyTag: '<div style="width:100%;height:0;padding-bottom:52%;position:relative;" class="clearNextQ"><iframe src="https://giphy.com/embed/13SOv8x3U5SMdW" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p class="clearNextQ"><a href="https://giphy.com/gifs/reaction-disney-dogs-13SOv8x3U5SMdW"></a></p>',
            answer: 2
        },
        {
            question: "How much does Mr. Incredible weigh?", 
            a1: "300 pounds", 
            a2: "350 pounds", 
            a3: "275 pounds", 
            a4: "Way too much",
            giphyTag: '<div style="width:100%;height:0;padding-bottom:52%;position:relative;" class="clearNextQ"><iframe src="https://giphy.com/embed/g18rgL6Ou0ODC" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p class="clearNextQ"><a href="https://giphy.com/gifs/disney-pixar-the-incredibles-g18rgL6Ou0ODC"></a></p>', 
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
        $("#qdiv").append("<p id='gameQuestion' class='qanda'></p>");

        //style <p> tag for question
        $("#gameQuestion").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});

        //display the question
        $("#gameQuestion").text(gameQuestions[qnumber-1].question);

        //create <buton> tags to hold answers 1 - 4
        $("#a1div").append("<Button type='button' id='answer1' class='answer qanda btn-block' value=1></button>");
        $("#a2div").append("<Button type='button' id='answer2' class='answer qanda btn-block' value=2></button>");
        $("#a3div").append("<Button type='button' id='answer3' class='answer qanda btn-block' value=3></button>");
        $("#a4div").append("<Button type='button' id='answer4' class='answer qanda btn-block' value=4></button>");

        //style <button> tags
        $(".answer").css({"font-size": "38px", "text-align": "center", "background-color": "transparent", "border": "none", "outline": "none"});
        $(".answer").hover(function(){
            $(this).css({"background-color": "#DCBFD9", "border": "2px solid #486EC3", "cursor": "pointer"})},
            function(){$(this).css({"background-color": "initial", "border": "none"})},
        );

        // run test to see if viewport has been resized
        checkSize();
        
        //display each of the answers
        $("#answer1").html(gameQuestions[qnumber-1].a1);
        $("#answer2").html(gameQuestions[qnumber-1].a2);
        $("#answer3").html(gameQuestions[qnumber-1].a3);
        $("#answer4").html(gameQuestions[qnumber-1].a4);

        //grab giphyTag
        gTag = gameQuestions[qnumber-1].giphyTag;

        //assign correct answer number to variable
        correctAnswerIndex = gameQuestions[qnumber-1].answer;

        //assign correct answer string to variable
        if(correctAnswerIndex == 1) {
            correctAnswer = gameQuestions[qnumber-1].a1;
        } else if(correctAnswerIndex == 2) {
            correctAnswer = gameQuestions[qnumber-1].a2;
        } else if(correctAnswerIndex == 3) {
            correctAnswer = gameQuestions[qnumber-1].a3;
        } else {
            correctAnswer = gameQuestions[qnumber-1].a4;
        }

        //define click event for answers
        $(".answer").click(function() {
            userGuess = this.value;
            displayAnswer();
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
            
            //stop the timer when an answer has been selected
            clearInterval(timerIntervalId);

            //change timerRunning boolean to indicate that the timer is no longer running
            timerRunning=false;

            //reset time
            time = 30;
            
            //conditional statement for whether or not user selected an answer
            if (!guess) {

                //clear display for next question
                $(".qanda").remove();

                //message indicating time's up
                $("#qdiv").append("<p id='timeoutMessage' class='clearNextQ'></p>");
                $("#timeoutMessage").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});                
                $("#timeoutMessage").text("Out of Time!");

                // run test to see if viewport has been resized
                checkSize();

                //increment unanswered
                UnAnswered++;

                //display the correct answer
                $("#qdiv").append("<p id='caMessage' class='clearNextQ'></p>");
                $("#caMessage").css({"font-size": "24px", "text-align": "center", "font-family": "'Times New Roman', Times, serif"});                
                $("#caMessage").text("The correct answer is: " + correctAnswer);

                //display answer GIPHY                
                    $("#gdiv").append(gTag);

                //increment qnumber for next question
                qnumber++;

                //confirm whether the question count has reached 10
                setTimeout(checkQuestionCount, 5000);
            } 
        }  
    }
    
    function reset() {

        //clear screen
        $("#timeoutMessage").remove();
        $(".clearScoreBoard").remove();    
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
            
            //clear screen for next question
            $(".clearNextQ").remove();

            //reset guess boolean
            guess = false;

            displayQuestion();
        }  
        
        if(qnumber > 10) {

            //clear screen for display of score board
            $(".clearNextQ").remove();

            //create <p> tags to hold score board
            $("#qdiv").append("<p id='score' class='clearScoreBoard'></p>");
            $("#a1div").append("<p id='numCorrect' class='score clearScoreBoard'></p>");
            $("#a2div").append("<p id='numWrong' class='score clearScoreBoard'></p>");
            $("#a3div").append("<p id='noAnswer' class='score clearScoreBoard'></p>");
            $("#a4div").append("<p id='startOver' class='clearScoreBoard'></p>");

            //style <p> tags
            $(".score").css({"font-size": "24px", "text-align": "center", "font-family": "'Times New Roman', Times, serif"});
            $("#score").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});
            $("#startOver").css({"font-size": "38px", "text-align": "center"});
            $("#startOver").hover(function(){
            $(this).css({"background-color": "#DCBFD9", "border": "2px solid #486EC3", "cursor": "pointer"})},
            function(){$(this).css({"background-color": "initial", "border": "none"})},
            );

            // run test to see if viewport has been resized
            checkSize();

            //display score
            $("#score").text("All done, here's how you did!");
            $("#numCorrect").text("Correct Answers: " + numberCorrect);
            $("#numWrong").text("Incorrect Answers: " + wrongAnswer);
            $("#noAnswer").text("Unanswered: " + UnAnswered);
            $("#startOver").text("Start Over?");
            $("#startOver").click(reset);
        } 
    }
    
    function displayAnswer() {

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
             $(".qanda").remove();

             //message indicating incorrect answer
             $("#qdiv").append("<p id='iaMessage' class='clearNextQ'></p>");
             $("#iaMessage").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});                
             $("#iaMessage").text("That Is Incorrect!");

            // run test to see if viewport has been resized
            checkSize();

            //display answer GIPHY
            $("#gdiv").append(gTag);
             
            //increment wrong answer count
            wrongAnswer++;

            //display the correct answer
            $("#qdiv").append("<p id='ia2Message' class='clearNextQ'></p>");
            $("#ia2Message").css({"font-size": "24px", "text-align": "center", "font-family": "'Times New Roman', Times, serif"});                
            $("#ia2Message").text("The correct answer is: " + correctAnswer);

             // run test to see if viewport has been resized
            checkSize();

         } else {

            //clear display for next question
            $(".qanda").remove();

            //message indicating correct answer
            $("#qdiv").append("<p id='ciMessage' class='clearNextQ'></p>");
            $("#ciMessage").css({"font-size": "28px", "text-align": "center", "font-family": "'Times New Roman', Times, serif", "font-weight": "bold"});                
            $("#ciMessage").text("You Are Correct!");

            // run test to see if viewport has been resized
            checkSize();

            //display answer GIPHY
            $("#gdiv").append(gTag);

            //increment number correct
            numberCorrect++
         }

        //confirm whether the question count has reached 10
        setTimeout(checkQuestionCount, 5000);
    }
    
    //function to change font sizes if the font-size of "gameTitle" indicates a specific @media query has been activated
    function checkSize(){
        if ($("#gameTitle").css("font-size") == "48px"){
            $("#gameQuestion").css({"font-size": "22px"});
            $(".answer").css({"font-size": "30px"});
            $("#iaMessage").css({"font-size": "22px"});
            $("#ia2Message").css({"font-size": "19px"});
            $("#ciMessage").css({"font-size": "22px"});
            $("#timeoutMessage").css({"font-size": "22px"});
            $("#score").css({"font-size": "22px"});
            $(".score").css({"font-size": "19px"});
            $("#startOver").css({"font-size": "30px"});
        }

        if ($("#gameTitle").css("font-size") == "36px"){
            $("#gameQuestion").css({"font-size": "17px"});
            $(".answer").css({"font-size": "24px"});
            $("#iaMessage").css({"font-size": "17px"});
            $("#ia2Message").css({"font-size": "14px"});
            $("#ciMessage").css({"font-size": "22px"});
            $("#timeoutMessage").css({"font-size": "22px"});
            $("#score").css({"font-size": "22px"});
            $(".score").css({"font-size": "14px"});
            $("#startOver").css({"font-size": "24px"});
        }

        if ($("#gameTitle").css("font-size") == "24px"){
            $("#gameQuestion").css({"font-size": "14px"});
            $(".#answer").css({"font-size": "20px"});
            $("#iaMessage").css({"font-size": "14px"});
            $("#ia2Message").css({"font-size": "11px"});
            $("#ciMessage").css({"font-size": "19px"});
            $("#timeoutMessage").css({"font-size": "19px"});
            $("#score").css({"font-size": "19px"});
            $(".score").css({"font-size": "11px"});
            $("#startOver").css({"font-size": "20px"});
        }
    }
});