$(document).ready(function () {
    //Grabbing HTML index 
    var questionText = $("#question")
    var answerButton1 = $("#answer-button-1");
    var answerButton2 = $("#answer-button-2");
    var answerButton3 = $("#answer-button-3");
    var answerButton4 = $("#answer-button-4")

    //Global Variables


    //A Bank where all the question and answer pair are stored.    
    var questionBank = [
        {
            question: "How many time zone are there in the United States?",
            answer: ["7", "6", "5", "4"]
        },
        {
            question: "Which Mariah Carey's song is not a billboard #1 hit?",
            answer: ["We Belong Together", "Emotion", "Always Be My Baby", "Vision of Love"]
        }
    ]

    var i = 0

    //Global Functions
    
    
    function askQuestion() {
            questionText.text(questionBank[i].question)
            answerButton1.text(questionBank[i]["answer"][0])
            answerButton2.text(questionBank[i]["answer"][1])
            answerButton3.text(questionBank[i]["answer"][2])
            answerButton4.text(questionBank[1]["answer"][3])
        setTimeout(function () {
            i++
            questionText.text(questionBank[i].question)
            answerButton1.text(questionBank[i]["answer"][0])
            answerButton2.text(questionBank[i]["answer"][1])
            answerButton3.text(questionBank[i]["answer"][2])
            answerButton4.text(questionBank[1]["answer"][3])
        }, 3000)
    }

    askQuestion()
})


