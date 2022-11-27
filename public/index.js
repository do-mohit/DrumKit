for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// makeSound

function makeSound(k) {
  switch (k) {
    case "w": {
      var tom1 = new Audio("/sounds/tom-1.mp3");
      tom1.play();
      break;
    }
    case "a": {
      tom2 = new Audio("/sounds/tom-2.mp3");
      tom2.play();
      break;
    }
    case "s": {
      tom3 = new Audio("/sounds/tom-3.mp3");
      tom3.play();
      break;
    }
    case "d": {
      tom4 = new Audio("/sounds/tom-4.mp3");
      tom4.play();
      break;
    }
    case "j": {
      snare = new Audio("/sounds/snare.mp3");
      snare.play();
      break;
    }
    case "k": {
      crash = new Audio("/sounds/crash.mp3");
      crash.play();
      break;
    }
    case "l": {
      kick = new Audio("/sounds/kick-bass.mp3");
      kick.play();
      break;
    }
  }
}

// buttonAnimation

function buttonAnimation(k) {
  var activeselect = "." + k;
  console.log(activeselect);
  var activeKey = document.querySelector(activeselect);
  activeKey.classList.add("pressed");

  setTimeout(function () {
    activeKey.classList.remove("pressed");
  }, 100);
}
