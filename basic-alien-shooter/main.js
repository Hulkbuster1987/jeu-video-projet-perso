
let actualPoints = 0;
let winState = 0;
let actualStage = 0;


let stages = [
    {
        ammunitions : 100,
        goalScore : 50,
        greenSpeed : 2000,
        blueSpeed : 2000,
        redSpeed : 2000
    },
    {
        ammunitions : 90,
        goalScore : 60,
        greenSpeed : 1600,
        blueSpeed : 800,
        redSpeed : 400
    },
    {
        ammunitions : 80,
        goalScore : 70,
        greenSpeed : 1600,
        blueSpeed : 600,
        redSpeed : 300
    }
]

let goalScore = stages[actualStage].goalScore;
    let ammunitions = stages[actualStage].ammunitions;
    let greenSpeed = stages[actualStage].greenSpeed;
    let blueSpeed = stages[actualStage].blueSpeed;
    let redSpeed = stages[actualStage].redSpeed;

$(document).ready(function() {
    initiateStage();
    
});

function initiateStage() {
    console.log('initiateStage')
    
    $('.fs').css("display","block");
    $('#win-message').css("display","none");
    $('.continue').css("display","none");

     goalScore = stages[actualStage].goalScore;
     ammunitions = stages[actualStage].ammunitions;
     greenSpeed = stages[actualStage].greenSpeed;
     blueSpeed = stages[actualStage].blueSpeed;
     redSpeed = stages[actualStage].redSpeed;
    actualPoints = 0;

    $('.points').text(actualPoints);
    $('.ammunition-unit').text(ammunitions);
    $('.number').text(actualStage+1);
    $('.goalpoints').text(goalScore);

    animateGreen(greenSpeed);
    animateBlue(blueSpeed);
    animateRed(redSpeed);

   winState = 0;
    
}

$(document).on('click', function(event) {
    console.log(event.target.className);
    if (winState !== 1 && event.target.className !== 'continue'){
        ammunitions >=1 ? ammunitions-- : ammunitions = 0 //if (?) action else (:) action 
        console.log(ammunitions);
        $('.ammunition-unit').text(ammunitions);
        win();
    }
});

function countPoints(points) {
    if (ammunitions != 0){
        actualPoints = actualPoints + points;
        $('.points').text(actualPoints);
    }
}

function makeNewPosition(width, height){
    const h = $('.gameArea').height() - height;
    const w = $('.gameArea').width() - width;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateGreen(speed) {
    var newq = makeNewPosition(140, 113);
    $('.fsGreen').animate({ top: newq[0], left: newq[1] }, speed, 
        function(){
            animateGreen(speed);        
        });
    
};

function animateBlue(speed){
    var newq = makeNewPosition(70, 57);
    $('.fsBlue').animate({ top: newq[0], left: newq[1] }, speed, 
        function(){
            animateBlue(speed);        
        });
    
};

function animateRed(speed){
    var newq = makeNewPosition(70, 57);
    $('.fsRed').animate({ top: newq[0], left: newq[1] }, speed, 
        function(){
            animateRed(speed);        
        });
    
};

function win(){
    if (actualPoints >= goalScore){
        console.log("you win");
        $('.fs').css("display","none");
        $('#win-message').css("display","block");
        $('.continue').css("display","block");
        winState = 1;
    } else if (actualPoints < goalScore && ammunitions == 0){
        console.log("you lose");
        $('#lose-message').css("display","block");
        $('.fs').css("display","none");
    }
    
}

function nextStage() {
    actualStage++;
    initiateStage();
    
}