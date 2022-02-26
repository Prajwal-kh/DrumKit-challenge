let noOfDrumButtons = document.querySelectorAll("button.drum").length;

// To detect button click:
for (let i = 0; i < noOfDrumButtons; i++) {
  //we wanted handleClick() function triggers when we click on button:
  //document.querySelectorAll("button")[i].addEventListener("click",handleClick);
  // So instead of calling function we can use anonymous function:
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    let drumPlayed = this.innerHTML;
    buttonSound(drumPlayed);
    animateEvents(drumPlayed);
    //console.log(this);    //will gives triggerd element
    //this.style.color = "white";
  });
}

// To detect keyboard pressed:
document.addEventListener("keydown", function(event) {
  //console.log(event.key);
  buttonSound(event.key);
  animateEvents(event.key);
});

// TO give opacity property using css class
function animateEvents(currentDrum){
  let activeButton = document.querySelector("."+currentDrum);
  // to check applied classes to an element use >document.querySelectorAll("button").classList;
  //activeButton.classList.toggle("pressed");   //to add & remove class used toggle.
  activeButton.classList.add("pressed");
  //to remove that class after 150ms after added.
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },150);
}
// switch statement for both events
function buttonSound(keyClick) {
  switch (keyClick) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3"); //will create a HTML sound element.
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3"); //will create a HTML sound element.
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3"); //will create a HTML sound element.
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3"); //will create a HTML sound element.
      tom4.play();
      break;
    case "j":
      let crash = new Audio("sounds/crash.mp3"); //will create a HTML sound element.
      crash.play();
      break;
    case "k":
      let kick = new Audio("sounds/kick-bass.mp3"); //will create a HTML sound element.
      kick.play();
      break;
    case "l":
      let snare = new Audio("sounds/snare.mp3"); //will create a HTML sound element.
      snare.play();
      break;
    default:
      let windowAlert = new Audio("sounds/windows_alert.mp3"); //will create a HTML sound element.
      console.log("Please play valid drum.");
      windowAlert.play();
  }
}


/*
function handleClick(){
  document.querySelectorAll("button").add;
}

*/
