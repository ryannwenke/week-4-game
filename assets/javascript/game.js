$( document ).ready(function(){
  var Random = Math.floor(Math.random()*101+19)
  
  $("#randomNumber").text(Random);
 
  var num1 = Math.floor(Math.random()*11+1)
  var num2 = Math.floor(Math.random()*11+1)
  var num3 = Math.floor(Math.random()*11+1)
  var num4 = Math.floor(Math.random()*11+1)
  
  var userTotal = 0; 
  var wins = 0;
  var losses = 0;
  
$("#wins").text(wins);
$("#losses").text(losses);

function reset(){
      Random = Math.floor(Math.random()*101+19);
      console.log(Random)
      $("#randomNumber").text(Random);
      num1 = Math.floor(Math.random()*11+1);
      num2 = Math.floor(Math.random()*11+1);
      num3 = Math.floor(Math.random()*11+1);
      num4 = Math.floor(Math.random()*11+1);
      userTotal= 0;
      $("#totalScore").text(userTotal);
      } 

function youWon(){
alert("You won!");
  wins++; 
  $("#wins").text(wins);
  reset();
}

function youLose(){
alert ("You lose!");
  losses++;
  $("#losses").text(losses);
  reset()
}

  $("#one").on ('click', function(){
    userTotal = userTotal + num1;
    $("#totalScore").text(userTotal); 
          
        if (userTotal == Random){
          youWon();
        }
        else if ( userTotal > Random){
          youLose();
        }   
  })  
  $("#two").on ('click', function(){
    userTotal = userTotal + num2;
    $("#totalScore").text(userTotal); 
        
        if (userTotal == Random){
          youWon();
        }
        else if ( userTotal > Random){
          youLose();
        } 
  })  
  $("#three").on ('click', function(){
    userTotal = userTotal + num3;
    $("#totalScore").text(userTotal);
          
        if (userTotal == Random){
          youWon();
        }
        else if ( userTotal > Random){
          youLose();
        } 
  })  
  $("#four").on ('click', function(){
    userTotal = userTotal + num4;
    $("#totalScore").text(userTotal); 
      
        if (userTotal == Random){
          youWon();
        }
        else if ( userTotal > Random){
          youLose();
        }
  });   
}); 