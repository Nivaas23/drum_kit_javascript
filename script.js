//for heading ===
 setTimeout(function(){
   document.querySelector('h1').classList.add("title"); 
 }, 100);

setTimeout(buttonsUp(), 100);



//button==
 function buttonsUp(){
 setTimeout(function(){
   document.querySelector('.w').classList.add("title"); 
 }, 100);
 setTimeout(function(){
   document.querySelector('.a').classList.add("title"); 
 }, 200);
 setTimeout(function(){
   document.querySelector('.s').classList.add("title"); 
 }, 300);
 setTimeout(function(){
   document.querySelector('.d').classList.add("title"); 
 }, 400);
 setTimeout(function(){
   document.querySelector('.j').classList.add("title"); 
 }, 500);
 setTimeout(function(){
   document.querySelector('.k').classList.add("title"); 
 }, 600);
 setTimeout(function(){
   document.querySelector('.l').classList.add("title"); 
 }, 700);

 document.querySelector('.w').classList.remove("title")
 document.querySelector('.a').classList.remove("title")
 document.querySelector('.s').classList.remove("title")
 document.querySelector('.d').classList.remove("title")
 document.querySelector('.j').classList.remove("title")
 document.querySelector('.k').classList.remove("title")
 document.querySelector('.l').classList.remove("title")
 }
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(x) {
    console.log(this.innerHTML);
    var buttonIndicate = this.innerHTML;
    clickButton(buttonIndicate);   
  })
}
document.addEventListener("keypress",function(event){
  pressButton(event.key);
});
//mycode==

// function presMode(mode_sp){
//   var buttonPressed = document.querySelector("."+mode_sp); 
//   buttonPressed.classList.add("pressed");
//   setTimeout(function(){
//   buttonPressed.classList.remove("pressed");
//   },100);
// }
// function EffectsCaller(mode){//mode == buttonIndicate
//   if(mode == "buttonIndicate"){
//     this.eff = presMode(mode);
//   }else{
//     this.eff = presMode(mode);
//   }
// }
//====
function clickButton(buttonIndicate){ //w
  switch(buttonIndicate){
    case "w":
      var audio  = new Audio("sounds/tom-1.mp3");
      audio.play();
      // var mode_call = new EffectsCaller(buttonIndicate);//w
      // mode_call.eff;
      break;
    case "a":
      var audio  = new Audio("sounds/tom-2.mp3");
      audio.play();
      // var mode_call = new EffectsCaller(buttonIndicate);
      // mode_call.eff;
      break;
    case "s":
      var audio  = new Audio("sounds/tom-3.mp3");
      audio.play();
      // var mode_call = new EffectsCaller(buttonIndicate);
      // mode_call.eff;
      break;
    case "d":
      var audio  = new Audio("sounds/tom-4.mp3");
      audio.play();
      // var mode_call = new EffectsCaller(buttonIndicate);
      // mode_call.eff;
      break;
    case "j":
      var audio  = new Audio("sounds/snare.mp3");
      audio.play();
      // var mode_call = new EffectsCaller(buttonIndicate);
      // mode_call.eff;
      break;
    case "k":
      var audio  = new Audio("sounds/crash.mp3");
      audio.play();
      // var mode_call = new EffectsCaller(buttonIndicate);
      // mode_call.eff;
      break;
    case "l":
      var audio  = new Audio("sounds/kick-bass.mp3");
      audio.play();
      // var mode_call = new EffectsCaller(buttonIndicate);
      // mode_call.eff;
      break;
    default:
      console.log("invalid input");
  }
}
//===
function pressButton(events){  
  switch(events){
  case "w":
    var audio  = new Audio("sounds/tom-1.mp3");
    audio.play();
    // var mode_call = new EffectsCaller(events);
    // mode_call.eff;
    break;
  case "a":
    var audio  = new Audio("sounds/tom-2.mp3");
    audio.play();
    // var mode_call = new EffectsCaller(events);
    // mode_call.eff;
    break;
  case "s":
    var audio  = new Audio("sounds/tom-3.mp3");
    audio.play();
    // var mode_call = new EffectsCaller(events);
    // mode_call.eff;
    break;
  case "d":
    var audio  = new Audio("sounds/tom-4.mp3");
    audio.play();
    // var mode_call = new EffectsCaller(events);
    // mode_call.eff;
    break;
  case "j":
    var audio  = new Audio("sounds/snare.mp3");
    audio.play();
    // var mode_call = new EffectsCaller(events);
    // mode_call.eff;
    break;
  case "k":
    var audio  = new Audio("sounds/crash.mp3");
    audio.play();
    // var mode_call = new EffectsCaller(events);
    // mode_call.eff;
    break;
  case "l":
    var audio  = new Audio("sounds/kick-bass.mp3");
    audio.play();
    // var mode_call = new EffectsCaller(events);
    // mode_call.eff;
    break;
  default:
    console.log("invalid input");
}}
