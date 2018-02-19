# Trivia Game

Trivia Game consists of a set of 10 questions based on movies from Pixar.  Upon clicking on the start button, players have 30 seconds to select the correct answer to the question.  Hovering the mouse over the an answer will highlight it and enable the answer to be clicked on.  After selecting an answer, the game will indicate whether it is correct or not and a giphy related to the question will be displayed.  If the timer runs out before the question is answered this question will be recorded as unanswered and the game will move to the next question.  The game will automatically display the next question and reset the timer.  After all 10 questions have been completed a score will be displayed.  If you missed a question or want to see one of the giphys again just click on the "Start Over?" button to play again.

## About
Trivia Game is programmed in javascript and uses jQuery commands to manipulate images and information on the display.  jQuery ".css()" and ".hover() are used to style newly appended elements.  Functions that utilize setTimeout, setInterval, and clearInterval are utilized to set and control timing events. All game data including questions, answers, correct answer index, and giphy URLs are stored in an array of objects and are utilized with calls made to the array. The source of all giphys is giphy.com and clicking on the giphy will take you to the source.  The game has been optimized for playing on tablets and phones in both portrait and landscape mode.  Dynamic CSS changes to newly appended tags due to different screen sizes are based on looking for @media query changes to the font size of the game title and then making changes to font size and margin accordingly.