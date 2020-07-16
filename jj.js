let audio, userChosenColor, audio2;

let buttonColors = ['green', 'red', 'yellow', 'blue'];
let pattern = [];
let start = false;
let level = 0;
let checkArrayNumber = 0;

//Start with pressing any key

$(document).keydown(function(){
    if(!start){
    $('h1').text(`level ${level}`);
    start = true;
    nextSequence();
    }
})


//Next round

function nextSequence() {
    
setTimeout(function(){
let randomNum = Math.floor(Math.random() * 4);
$('h1').text(`level ${level}`)
level = level + 1

let randomCol = buttonColors[randomNum];
pattern.push(randomCol);

$('.' + randomCol).fadeOut().fadeIn();
audio = new Audio(`./sounds/${randomCol}.mp3`);
audio.play();

}, 800)



}



// clicking the button to choose color

$('div').click(function(event){
    
    userChosenColor = event.target.id;
    gotClick(userChosenColor);
   

    checkPattern(userChosenColor)

    

})


// the effect of clicking the button

function gotClick(color){
    $('.' + color).click(function(){
        $('.' + color).addClass('pressed');
        sounds(color);
        setTimeout(() => { 
            $('.' + color).removeClass("pressed")
        }, 100)
    })
    }

function sounds(color){
    let audio1 = new Audio(`./sounds/${color}.mp3`);
    audio1.play();
}

//after clicking the button, the result is checked if it matches the color in array

function checkPattern(color) {
    //if correct
    if(pattern[checkArrayNumber] === color){
        keepGoing()
    //if not correct
    } else if(pattern[checkArrayNumber] !== color){
 
        gameOver()
    }



}
//if correct
function keepGoing() {
   
    checkArrayNumber = checkArrayNumber + 1
    
    if(pattern.length  === checkArrayNumber){
        checkArrayNumber = 0;
        nextSequence()
    } 
}
//if not correct
function gameOver(){
    $('h1').text(`lol, you got a golden fish memory capacity, press any button to start again.`);
    start = false;
    audio2 = new Audio(`./sounds/wrong.mp3`);
    audio2.play();
    $('body').addClass('gotWrong');
    setTimeout(()=>{
        $('body').removeClass('gotWrong');
    },200)
    pattern = [];
    level = 0;
    checkArrayNumber = 0;

}












