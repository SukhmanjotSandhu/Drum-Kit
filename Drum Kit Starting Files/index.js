var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfButtons; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
 
var buttonInnerHTML = this.innerHTML;

   makeSound(buttonInnerHTML);
   
  buttonAnimation(buttonInnerHTML);
});

}
document.addEventListener("keydown",function(event){

    makeSound(event.key);

    buttonInnerHTML(event.currentkey);
});

function makeSound(key){
switch(key){
    case "w":
    var TOM1 = new Audio('sounds/tom-1.mp3');
    TOM1.play();
    break;

    case "a":
    var TOM2 = new Audio('sounds/tom-2.mp3');
    TOM2.play();    
    break;

    case "s":
    var TOM3 = new Audio('sounds/tom-3.mp3');
    TOM3.play();    
    break;

    case "d":
    var TOM4 = new Audio('sounds/tom-4.mp3');
    TOM4.play();  
     break;

    case "j":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();    
    break;

    case "l":
     var kick = new Audio('sounds/kick-bass.mp3');
     kick.play();    
    break;

    case "k":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();    
     break;

     default:
}
}


function buttonAnimation(currentkey){

    var activateButton = document.querySelector("."+currentkey);

    activateButton.classList.add("pressed");

    setTimeout(function(){
        activateButton.classList.remove("pressed");
    },100);
}