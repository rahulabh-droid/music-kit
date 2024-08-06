
for (var i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        sound(this.innerHTML);
        addanimation(this.innerHTML);

   });
}

document.addEventListener("keypress", function(event){
    
    sound(event.key);
    addanimation(event.key);
});


function sound(key)
{

        switch(key){
            case "w":
                 var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
            case "a":
                var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;
            case "s":
                var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
            case "j":
                var guitar = new Audio("sounds/guitar.mp3");
                    guitar.play();
                    break;
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
            default: console.log(key);
        }
}

function addanimation(currentkey){
    
    var currentbutton = document.querySelector("." + currentkey);
    currentbutton.classList.add("pressed");

    setTimeout(function(){
        currentbutton.classList.remove("pressed");
    },100);
}






// var audio = new Audio("sounds/tom-2.mp3");
        // audio.play();