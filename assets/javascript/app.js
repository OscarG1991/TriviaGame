$(document).ready(function() {   
var counter = 30; 
$(".timer").html("<p>" + counter + "</p>"); 
run();
var intervalId;
function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
}
        function decrement(){
            counter--;
        
       $(".timer").html("<p>" + counter + "</p>"); 

        if (counter === 0) {
            stop();
        }
        }
        function stop (){
            clearInterval(intervalId);
        }
	

 var questions = ["Who is the Greek God of war?", "Who is the God of time?", "Which Mayan God is known for having a twin?", "Which Nordic God lost his hand to Fenrir?"]; 
    var answers =[["Athena", "Vulcan", "Zeus", "Ares"],["Cronus", "Chronos", "Janus", "Mercury"],["Camazotz", "Xbalanque", "Hun-Batz", "Ah Puch"],["Odin", "Thor", "Tyr", "Ullr"]];
    var correctAnswers = ["D. Ares", "Chronos", "Xbalanque","Tyr"];
    var questionA = answers[0];
    var questionB = answers[0];
    var questionC = answers[0];
    var questionD = answers[0];
    var a = questionA[0];
    var b = questionB[1];
    var c = questionC[2];
    var d = questionD[3];

    for (var i = 0; i < answers.length; i++){
    console.log(answers[i]);   
        for (var j= 0; j < answers[i].length; j++) {
            console.log(answers[i][j])
        }
    }
    for (var k = 0; k < answers[0].length; k++){
        console.log(answers[0][k], "example")
    }
    function diplayQuestions(){
    $(".qA").html("<p>" + "A. " + a + "</p>");
    
    $(".qB").html("<p>" + "B. " + b + '</p>'); 

    $(".qC").html("<p>" + "C. " + c + '</p>'); 

    $(".qD").html("<p>" + "D. " + d + '</p>'); 

    }
    
    diplayQuestions();
   $(".qA").click(function(){
        alert("This was clicked");
    });
});

     





