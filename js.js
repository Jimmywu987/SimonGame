
let color = ['green', 'red', ' yellow', 'blue']
let record = [];
let inputing = [];
let counting = 0;
function round() {
    setTimeout(()=> {
    let randomNum = Math.floor(Math.random() * 4);
    let randomCol = color[randomNum];
    if($('.green').attr('class') === randomCol) {
        record.push(randomCol)
        $(".green").fadeOut().fadeIn();
        greenSds()
    } else if ($('.red').attr('class') === randomCol) {
        record.push(randomCol)
        $(".red").fadeOut().fadeIn();
        redSds()
    } else if ($('.yellow').attr('class') === randomCol) {
        record.push(randomCol)
        $(".yellow").fadeOut().fadeIn();
        yellowSds()
    } else if ($('.blue').attr('class') === randomCol) {
        record.push(randomCol)
        $(".blue").fadeOut().fadeIn();
        blusSds()
    }

}, 1000)
}


    $('.green').click(function(){
        $(this).addClass('pressed');
        greenSds();
        inputing.push('green')
        counting++;
        compare()
        setTimeout(() => { 
            $(this).removeClass("pressed")
        }, 100)
    })
    
    
    $('.red').click(function(){
        $(this).addClass('pressed');
        redSds ();
        inputing.push('red')
        counting++;
        compare()
        setTimeout(() => { 
            $(this).removeClass("pressed")
        }, 100)
    })
    
    
    $('.yellow').click(function(){
        $(this).addClass('pressed');
        yellowSds ();
        inputing.push('yellow')
        counting++;
        compare()
        setTimeout(() => { 
            $(this).removeClass("pressed")
        }, 100)
    })
    
    
    $('.blue').click(function(){
        $(this).addClass('pressed');
        blusSds ();
        inputing.push('blue')
        counting++;
        compare()
        setTimeout(() => { 
            $(this).removeClass("pressed")
        }, 100)
    })
    
    
    
    function greenSds(){
        new Audio('./sounds/green.mp3').play();
    }
    function redSds(){
        new Audio('./sounds/red.mp3').play();
    }
    function yellowSds(){
        new Audio('./sounds/yellow.mp3').play();
    }
    function blusSds(){
        new Audio('./sounds/blue.mp3').play();
    }
  
       

        if(record.length > 0) {
            $('h1').html(`level ${record.length}`)
        } else {
            $('h1').html(`Start`)
        }
function compare() {
    if(record[0] === inputing[0]){
        console.log(record[0] === inputing[0])
        console.log(record[0])
        console.log(inputing[0])
        round()
        inputing = [];
    } else if (record[counting] === inputing[counting]){
        round()
        inputing = [];
    } else {
        new Audio('./sounds/wrong.mp3').play();
        $(body).addClass('boddy')
        lost();

    }
}


function lost(){
    $('h1').html(`Gameover, press anything to start again`)
    $(document).keydown(function(){
        inputing = [];
        counting = 0;
        record = [];
        round();
    })
}

   




//button pressing 









// function opacity() {
//     $('')
// }







// let btn = document.querySelectorAll('button');

// btn.forEach(el => {
//     el.addEventListener('click', function(){
//         this.classList.add('pressed')

//         setTimeout(() => { 
//             this.classList.remove("pressed")
//         }, 100)
        
//     })
// })



round();