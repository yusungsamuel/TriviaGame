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

    //Global Variables
    var correct = 0;
    var incorrect = 0;
    var gameStarted = false;
    var showQuestion;
    var questionCounter = 0
    var timer;
    var time = 30
    var correctAnswerArr = ["Miley Cyrus", "All I Want For Christmas Is You", "Kourtney Kardashian","0", "Nick Jonas", "Peter Hernandez", "Kendall Jenner", "Tommy Hilfiger", "Kelly Clarkson", "Tyra Banks"]
    //A Bank where all the question and answer pair are stored.    
    var questionBank = [
        {
            question: "Which on these female singer did not participate in the song 'Bang Bang'?",
            answer: ["Ariana Grande", "Jessie J", "Nicki Minaj", "Miley Cyrus"]
        },
        {
            question: "Which Mariah Carey's song is not a billboard #1 hit?",
            answer: ["We Belong Together", "All I Want For Christmas Is You", "Always Be My Baby", "Vision of Love"]
        },
        {
            question: "Which of the Kardashian is the oldest?",
            answer: ["Kim Kardashian", "Khole Kardashian", "Kourtney Kardashian", "Rob Kardashian"]
        },
        {
            question: "How many Grammy Awards has singer, Katy Perrt, won?",
            answer: ["0", "1", "2", "3"]
        },
        {
            question: "Which of these male celebrity have Taylor Swift not dated?",
            answer: ["Harry Styles", "Calvin Harris", "John Mayer", "Nick Jonas"]
        },
        {
            question: "What is Bruno Mars's birhtname?",
            answer: ["Roger Garcia", "Peter Hernandez", "Bruno Mars", "Edward Rodriguez"]
        },
        {
            question: "Which one of these female singer did not participate in the 2006 movie Dreamgirls?",
            answer: ["Beyonce Knowles", "Jennifer Hudson", "Kelly Rowland", "Anika Noni Rose"]
        },
        {
            question: "Which of these female model was not a cast in Taylor Swift's Bad Blood music video?",
            answer: ["Gigi Hadid", "Kendall Jenner", "Karlie Klos", "Cara Delevingne"]
        },
        {
            question: "Which of these male designer is not gay?",
            answer: ["Tom Ford", "Yves Saint Laurent", "Stefano Gabbana", "Tommy Hilfiger"]
        },
        {
            question: "Which of these singer was not a micky mouse club singer?",
            answer: ["Kelly Clarkson","Christina Aguilera", "Britney Spears", "Justin Timberlake"]
        }, 
        {
            question: "Which model created the tv show, America's Next Top Model?",
            answer: ["Tyra Banks", "Naomi Campbell", "Kate Moss", "Cindy Crawford"]
        }
    ]

    

    //Global Functions
    function displayTimer () {
        timerText.text(time)
        time -- 
        if (time === 0){
            time = 30
        }    
    }
    
    function startGame () {
        if (!gameStarted){
            gameStarted = true
            displayQuestion()
            displayTimer()
            showQuestion = setInterval(nextQuestion, 30000)
            timer = setInterval(displayTimer,1000)
        }
    }

    function nextQuestion () {
        if(gameStarted){
        questionCounter ++ ;
        displayQuestion() 
        displayTimer() 
        setTimeout(displayQuestion, 1000)}
        else{
            return
        } 
        if (questionCounter === questionBank.length-1){
            gameStarted = false
            clearInterval(showQuestion)
        }
    }

    function displayQuestion (){
        questionText.text(questionBank[questionCounter].question);
        answerButton1.text(questionBank[questionCounter]["answer"][0]);
        answerButton1.attr("value",questionBank[questionCounter]["answer"][0]);
        answerButton2.text(questionBank[questionCounter]["answer"][1]);
        answerButton2.attr("value",questionBank[questionCounter]["answer"][1])
        answerButton3.text(questionBank[questionCounter]["answer"][2]);
        answerButton3.attr("value",questionBank[questionCounter]["answer"][2])
        answerButton4.text(questionBank[questionCounter]["answer"][3]); 
        answerButton4.attr("value",questionBank[questionCounter]["answer"][3])

    }
//The two commented out codes below need more work
    answerButton.on("click", compareCorrectAnswer)

    function compareCorrectAnswer (){
        var value = $(this).attr("value");  
        if (correctAnswerArr.indexOf(value) === -1) {
            incorrect ++
            incorrectText.text("Incorrect: " + incorrect)
            console.log(correctAnswerArr.indexOf(value))
            console.log(value)
            time = 30;
            nextQuestion()
        }
        else {
            correct ++
            correctText.text("Correct: " + correct);
            console.log(correctAnswerArr.indexOf(value));  
            time = 30;
            nextQuestion();          
        }
    }
    
    
    startButton.click(startGame) 
})




