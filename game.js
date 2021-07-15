var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var noc = 1;
var level = 0;
var noClick = 0;
var noClickt = 1;
var zz = 0;

function nextS(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColor = buttonColors[randomNumber];
    //console.log(randomChoosenColor);
    gamePattern.push(randomChoosenColor);
    // console.log(gamePattern);
    $("#" + randomChoosenColor).fadeOut(100).fadeIn(100);
    // palySound(randomChoosenColor);
    level++;
    $("h1").text("level " + level);
    
    
}

// function palySound(name){
//     if (name === "red"){
//         var audio = new Audio('sounds/red.mp3');
//         audio.play();
//      }
//      else if (name === "blue"){
//          var audio = new Audio('sounds/blue.mp3');
//          audio.play();
//       }
//       else if (name === "green"){
//          var audio = new Audio('sounds/green.mp3');
//          audio.play();
//       }
//       else if (name === "yellow"){
//          var audio = new Audio('sounds/red.mp3');
//          audio.play();
//       }
      
 
// }

function animatePress(CurrentColor){
    $("." + CurrentColor).addClass("pressed");
    setTimeout(function(){$("." + CurrentColor).removeClass("pressed"); }, 100);
}



$(document).keydown(function(event){
    if (noc === 1){
        nextS();
        $("h1").text("level " + level);
    }
   noc++;
});

$(document).click(function(event){
    if (noc === 1){
        nextS();
        $("h1").text("level " + level);
    }
   noc++;
});


$(".btn").click(function(event){


    if (noc > 1){
        var userChosenColor = event.target.id; 
    userClickedPattern.push(userChosenColor);
    
    // palySound(userChosenColor);
    animatePress(userChosenColor);
    var b = userClickedPattern.length;
    noClick++;
    // console.log(noClick);
    // console.log(gamePattern);
    // console.log(userClickedPattern);
    if ( noClick === gamePattern.length){
        checkAnswer();
    }
    }
    
    
});

function checkAnswer(currentLevel){

    for (i = 0; i < gamePattern.length; i++){
        var aa = gamePattern[i];
        var cc = userClickedPattern[i];
        if (aa === cc){
            zz = 1;
        }
        else{
            zz = 0;
        }
    }

    if(zz === 1){
        noClick = 0;
        userClickedPattern = [];
        // console.log("good");
        setTimeout(function(){nextS();}, 700);
        
    }
    else{
    // console.log("bad");
    // var audio = new Audio('sounds/wrong.mp3');
    //     audio.play();
        $("h1").text("Game Over. Press any key to Restart!");
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over");}, 200);
        noc = 0;
        level = 0;
        gamePattern = [];
        userClickedPattern = [];
        noClick = 0;
        noClickt = 1;
        zz = 0;
    }
}