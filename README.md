# TriviaGame
This trivia game has the theme of Hollywood Celebrity.
![alt text](assets/images/ReadMe.gif "exampe gif") 
## How to Play
When the start button is pressed, the first question and answer set will be generated and displayed on the page. The user may choose from one of the four answers. When the user make the correct choice, the correct counter will increase by one. On the other hand, if the user choose the wrong answer, the incorrect counter will increase by one. The user is given 30 seconds to answer each question. If the user did not make any choice before the time is up, the unanswered counter will increase by one. 

## Technologies Used:
+ HTML
+ CSS 
+ Bootstrap
+ Javascript
+ jQuery

## Essential Codes 
The inBetweemQuestion function display the correct answer in between each question and it also facilitate the transition from one question to the next. There's two situation that it maybe call. One situation is when the user clicked on one of the answer button. Another situation is when the time is up for that question. 
```
    function inBetweenQuestions () {
        questionText.text("")
        answerButton.text("")
        timerText.text("")
        clearInterval(timer)
        correctAnswer.text("The correct answer is: " + correctAnswerArr[questionCounter])
        answerImage.attr("src", questionBank[questionCounter].image)
        setTimeout(resetBetweenQuestions, 1000)
        if(!clicked){
            unanswer ++
            unaswerText.text("Unanswered: " + unanswer)
        }
    }


    function nextQuestion() {
        questionCounter++
        if (questionCounter > questionBank.length-1) {
            gameStarted = false
            clearInterval(showQuestion)
            clearInterval(timer)
            resetScoresText()
            scoreboardText.append("Correct: " + correct)
            scoreboardText.append("<br>" + "Incorrect: " + incorrect) 
            scoreboardText.append("<br>" + "Unanswered: " + unanswer)
            var restartButton = $("<button>").text("Play Again")
            restartButton.addClass("restart rounded-pill mx-auto text")
            $(".scoreboard").append(restartButton)
        };
        if (gameStarted) {
            showQuestion = setInterval(inBetweenQuestions, 30000)
            displayQuestion()
            displayTimer()
        }
        else {
            return
        }
        
    }
```