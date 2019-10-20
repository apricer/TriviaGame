// Create Variables

$(document).ready(function() {
    var count = 0;
    var time = 61;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

// Arrays of Questions and Answer Choices
    var question = ["Who founded Rolex?", "What was the first brand of timepiece to go on the moon?", "In what year was Rolex founded?", "What brand makes the Khaki King?", "In which country are NOMOS timepieces made?", 
    "What brand is known as 'The Watchmakers' Watch'?", "In what country do Seiko timepieces originate?", "In what year did the Rolex Datejust debut?"]; 
    var answer = ["Hans Wilsdorf", "Omega","1905", "Hamilton", "Germany", "Jaeger LeCoultre", "Japan", "1945"];
    var firstChoice = ["Sir John Rolex", "Rolex", "1885", "Oris", "Switzerland", "Timex", "China", "1910"];
    var secondChoice = ["Rupert Hannigan", "Omega", "1942", "Casio", "Sweden", "Junghans", "Philippines", "1945"];
    var thirdChoice = ["Hans Wilsdorf", "Breguet", "1905", "Patek Philippe", "Germany", "Jaeger LeCoultre", "India", "1962"];
    var fourthChoice = ["Max Xelor", "Breitling", "1915","Hamilton", "Hungary", "Rolex", "Japan", "1953"];

// Show/Hide Functions
function showHolders() {
    $("#questionHolder").show();
    $("#choiceHolder1").show();
    $("#choiceHolder2").show();
    $("#choiceHolder3").show();
    $("#choiceHolder4").show();
    }
function hideHolders() {
    $("#questionHolder").hide();
    $("#choiceHolder1").hide();
    $("#choiceHolder2").hide();
    $("#choiceHolder3").hide();
    $("#choiceHolder4").hide();
    }
function hideResults() {
    $("#correctHolder").hide();
    $("#incorrectHolder").hide();
    $("#unansweredHolder").hide();
    $("#restartHolder").hide();
    }
function displayQuestion () {
    hideResults();
    $("#answerHolder").hide();
    $("#imageHolder").hide();
    $("#timeHolder").show();
    showHolders();
    $("#questionHolder").html(question[count]);
    $("#choiceHolder1").html(firstChoice[count]);
    $("#choiceHolder2").html(secondChoice[count]);
    $("#choiceHolder3").html(thirdChoice[count]);
    $("#choiceHolder4").html(fourthChoice[count]);

// Hover CSS
    $("#choiceHolder1").hover(function() {
        $(this).css("color", "gray");
    },
    function(){
        $(this).css("color", "black");
    });
    $("#choiceHolder2").hover(function() {
        $(this).css("color", "gray");
    },
    function(){
        $(this).css("color", "black");
    });
    $("#choiceHolder3").hover(function() {
        $(this).css("color", "gray");
    },
    function(){
        $(this).css("color", "black");
    });
    $("#choiceHolder4").hover(function() {
        $(this).css("color", "gray");
    },
    function(){
        $(this).css("color", "black");
    });
    }
$("#choiceHolder1").on("click", checkAnswer) 
$("#choiceHolder2").on("click", checkAnswer)
$("#choiceHolder3").on("click", checkAnswer)
$("#choiceHolder4").on("click", checkAnswer)

// Checking the Answer Function
function checkAnswer() {

    hideHolders();

    if($(this).text() === answer[count]) {
        stopTime();
        isSelected = true;
        $("#answerHolder").show();
        $("#answerHolder").html("Right! The answer is: " + answer[count]);
        displayImage();
        correct++;
        count++;
    }
    else {
        stopTime();
        isSelected = true;
        $("#answerHolder").show();
        $("#answerHolder").html("Wrong! The answer is: " + answer[count]);
        displayImage();
        incorrect++;
        count++;
    } 

    checkGameEnd();  
}

// Check Ending the Game Function
function checkGameEnd() {
    if(count === question.length) {
        $("#timeHolder").hide();
        showResults();
        count = 0;
        $(".start").show();
        $(".start").on("click", function() {
            resetResults();
            startGame();
        });
    }
}

function resetTime() {
    time = 31;
}

function displayTime() {
    time--;
    $("#timeHolder").html("Time remaining: " + time);
  
        if(time <= 0) {
            hideHolders();
            stopTime();
            $("#answerHolder").show();
            $("#answerHolder").html("Time is up! The answer is: " + answer[count]);
            displayImage();
            unanswered++;
            count++;
            checkGameEnd();
        }
}

function startTime() {
    clearInterval(ticker);
    ticker = setInterval(displayTime, 1000);
}
function stopTime() {
    clearInterval(ticker);
    resetTime();
    if(count < question.length - 1) {
        setTimeout(startTime, 2000);
        setTimeout(displayQuestion, 3000);
    }
}

resetTime();

// Displaying Images with Answers
function displayImage() {
    if(count === 0) {
        $("#imageHolder").show();
        $("#imageHolder").html('<img src="assets/images/Hans_Wilsdorf.jpeg">');
    }
    else if(count === 1) {
        $("#imageHolder").show();
        $("#imageHolder").html('<img src="assets/images/Omega_Speedmaster.jpeg">');
    }
    else if(count === 2) {
        $("#imageHolder").show();
        $("#imageHolder").html('<img src="assets/images/Rolex.png">');
    }
    else if(count === 3) {
        $("#imageHolder").show();
        $("#imageHolder").html('<img src="assets/images/Hamilton.jpeg">');
    }
    else if(count === 4) {
        $("#imageHolder").show();
        $("#imageHolder").html('<img src="assets/images/Nomos.jpeg">');
    }
    else if(count === 5) {
        $("#imageHolder").show();
        $("#imageHolder").html('<img src="assets/images/Jaeger.png">');
    }
    else if(count === 6) {
        $("#imageHolder").show();
        $("#imageHolder").html('<img src="assets/images/Seiko.jpeg">');
    }
    else if(count === 7) {
        $("#imageHolder").show();
        $("#imageHolder").html('<img src="assets/images/Datejust.jpeg">');
    }
}

// Showing the Results Function 
function showResults() {
    $("#correctHolder").show();
    $("#correctHolder").html("Correct: " + correct);
    $("#incorrectHolder").show();
    $("#incorrectHolder").html("Incorrect: " + incorrect);
    $("#unansweredHolder").show();
    $("#unansweredHolder").html("Unanswered: " + unanswered);
    $("#restartHolder").show();
    $("#restartHolder").html("Click Start above to play again!");
}

// Resetting the Results Function 
function resetResults() {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
}

// Starting the Game Function
function startGame() {
    $(".start").hide();
    startTime();
    displayQuestion();
}

// Starting the Game on 'Click'
$(".start").on("click", function() {
startGame();
});
})