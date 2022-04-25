player1_name=localStorage.getItem("player_1_name");
player2_name=localStorage.getItem("player_2_name");

player_1_score=0;
player_2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;

document.getElementById("player_question").innerHTML="Question Turn:" +player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn:" +player2_name;

Question_Turn = "player1";
Answer_Turn = "player2";

function send(){
    Number1=document.getElementById("Number1").value;   
    Number2=document.getElementById("Number2").value;
    actual_answer=parseInt(Number1)*parseInt(Number2);
    question_number="<h4>" + Number1 +"x"+ Number2 +"<h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button";
    row=question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("Number1").value="";
    document.getElementById("Number2").value="";
}

function check(){
    get_answer = document.getElementById("input_check_box").value;
if(get_answer == actual_answer)
{
    if (Answer_Turn == "player1"){
        update_player1_score = player_1_score+1
        document.getElementById("player_1_score").innerHTML = update_player1_score;
    }
    else{
        update_player2_score = player_2_score+1
        document.getElementById("player_2_score").innerHTML = update_player2_score;
    }
}
if (Question_Turn == "player1"){
Question_Turn = "player2"
    document.getElementById("player_question").innerHTML = "Question Turn - "+player2_name;
    document.getElementById("player_answer").innerHTML = "Answer Turn - "+player1_name;
    
}
else{
    Question_Turn = "player1"
    document.getElementById("player_question").innerHTML = "Question Turn - "+player1_name;
    document.getElementById("player_answer").innerHTML = "Answer Turn - "+player2_name;
}
}
