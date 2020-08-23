var number = document.querySelectorAll(".drum").length;

for (var i = 0; i < number; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button = this.innerHTML;
    ovoz(button);
    bosish(button);
  });
}

document.addEventListener("keypress", function(event) {
  ovoz(event.key);
  bosish(event.key);
});

function ovoz(button) {
  switch (button) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "f":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "g":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "h":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default: console.log(button);
  }
}

function bosish(button) {
  var activeButton = document.querySelector("." + button);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
