$(document).ready(function () {

    //Grabbing HTML index 
    var questionText = $("#question")
    var answerButton1 = $("#answer-button-1");
    var answerButton2 = $("#answer-button-2");
    var answerButton3 = $("#answer-button-3");
    var answerButton4 = $("#answer-button-4")
    var timerText = $("#timer")
    var startButton = $("#start")
    var answerButton = $(".answer-button")
    var correctText = $("#correct")
    var incorrectText = $("#incorrect")
    var video = $("#video")
    var scoreboardText = $("#scoreboard")

    //Global Variables
    var correct = 0;
    var incorrect = 0;
    var gameStarted = false;
    var showQuestion;
    var questionCounter = 0
    var timer;
    var time = 30
    var correctAnswerArr = ["Miley Cyrus", "All I Want For Christmas Is You", "Kourtney Kardashian", "0", "Peter Hernandez", "Kelly Rowland","Kendall Jenner", "Little Monster", "Kelly Clarkson", "Tyra Banks"]
    //A Bank where all the question and answer pair are stored.    
    var questionBank = [
        {
            question: "Which on these female singer did not participate in the song 'Bang Bang'?",
            answer: ["Ariana Grande", "Jessie J", "Nicki Minaj", "Miley Cyrus"],
            image: "https://gifimage.net/wp-content/uploads/2017/09/bang-bang-bang-gif-11.gif"
        },
        {
            question: "Which Mariah Carey's song is not a billboard #1 hit?",
            answer: ["We Belong Together", "All I Want For Christmas Is You", "Always Be My Baby", "Vision of Love"],
            image: "https://media.vanityfair.com/photos/57d1f0fc5475d07256a8b2d9/master/w_690,c_limit/taylor-swift-britney-spears-i-dont-know-her-04.gif"
        },
        {
            question: "Which of the Kardashian is the oldest?",
            answer: ["Kim Kardashian", "Khole Kardashian", "Kourtney Kardashian", "Rob Kardashian"],
            image: "https://media.giphy.com/media/XDYCYqXqV8VX2/giphy.gif"
        },
        {
            question: "How many Grammy Awards has singer, Katy Perry, won?",
            answer: ["0", "1", "2", "3"],
            image: "https://media0.giphy.com/media/u7DzdWhEbXfUs/giphy.gif"
        },
        {
            question: "What is Bruno Mars's birthname?",
            answer: ["Roger Garcia", "Peter Hernandez", "Bruno Mars", "Edward Rodriguez"],
            image: "https://media.giphy.com/media/3o7TKr77iosHAxJmUM/giphy.gif"
        },
        {
            question: "Which one of these female singer did not participate in the 2006 movie, Dreamgirls?",
            answer: ["Beyonce Knowles", "Jennifer Hudson", "Kelly Rowland", "Anika Noni Rose"],
            image: "https://media.giphy.com/media/mrTkACKkXyUiA/giphy.gif"
        },
        {
            question: "Which of these female model was not a cast in Taylor Swift's Bad Blood music video?",
            answer: ["Gigi Hadid", "Kendall Jenner", "Karlie Klos", "Cara Delevingne"],
            image: "https://media.giphy.com/media/1k2VgNODsyUtXqSYz3/giphy.gif"
        },
        {
            question: "What do Lady Gaga call her fans?",
            answer: ["Little Monster", "Little Creature", "Little Freak", "Little Beast"],
            image: "https://media.giphy.com/media/yZsfsDAiQvhxS/giphy.gif"
        },
        {
            question: "Which of these singer was not a micky mouse club singer?",
            answer: ["Kelly Clarkson", "Christina Aguilera", "Britney Spears", "Justin Timberlake"],
            image:  "https://media.giphy.com/media/6nYNPwSUsExLGeFBMz/giphy.gif"
        },
        {
            question: "Which model created the tv show, America's Next Top Model?",
            answer: ["Tyra Banks", "Naomi Campbell", "Kate Moss", "Cindy Crawford"],
            image: "https://media0.giphy.com/media/UyH4vj65PQseY/giphy.gif?cid=3640f6095c665b834942545641df99c1"
        }
    ]



    //Global Functions
    function resetBetweenQuestions() {
        clearInterval(showQuestion)
        time = 30;
        nextQuestion();
    }

    function displayTimer() {
        timerText.text(time)
        time--
        if (time <= 0) {
            time = 30
        }
    }

    function startGame() {
        if (!gameStarted) {
            gameStarted = true
            displayQuestion()
            displayTimer()
            showQuestion = setInterval(nextQuestion, 30000)
            timer = setInterval(displayTimer, 1000)
        }
    }

    function nextQuestion() {
        questionCounter++
        if (questionCounter > questionBank.length-1) {
            gameStarted = false
            clearInterval(showQuestion)
            clearInterval(timer)
            scoreboardText.text("Correct: " + correct + "  " + "Incorrect: " + incorrect)
        };
        if (gameStarted) {
            showQuestion = setInterval(nextQuestion, 30000)
            displayQuestion()
            displayTimer()
            // setTimeout(displayQuestion, 1000)
        }
        else {
            return
        }
        
    }

    function displayQuestion() {
        questionText.text(questionBank[questionCounter].question);
        answerButton1.text(questionBank[questionCounter]["answer"][0]);
        answerButton1.attr("value", questionBank[questionCounter]["answer"][0]);
        answerButton2.text(questionBank[questionCounter]["answer"][1]);
        answerButton2.attr("value", questionBank[questionCounter]["answer"][1])
        answerButton3.text(questionBank[questionCounter]["answer"][2]);
        answerButton3.attr("value", questionBank[questionCounter]["answer"][2])
        answerButton4.text(questionBank[questionCounter]["answer"][3]);
        answerButton4.attr("value", questionBank[questionCounter]["answer"][3])

    }
    //The two commented out codes below need more work
    answerButton.on("click", compareCorrectAnswer)

    function compareCorrectAnswer() {
        var value = $(this).attr("value");
        if (gameStarted) {
            if (correctAnswerArr.indexOf(value) === -1) {
                incorrect++
                incorrectText.text("Incorrect: " + incorrect)
                console.log(correctAnswerArr.indexOf(value))
                console.log(questionCounter)
                resetBetweenQuestions()
            }
            else {
                correct++
                correctText.text("Correct: " + correct);
                console.log(correctAnswerArr.indexOf(value));
                console.log(questionCounter)
                resetBetweenQuestions()
            }
        }
    }

    console.log(correctAnswerArr.length)
    startButton.click(startGame)
})




