function reset() {
  window.location.reload()
}

let box = document.querySelector(".box")

function paintItBlack() {
  box.style.backgroundColor = "black"
}

function makeCircle (){
  box.style.borderRadius = "50%"
}


function makeBlinking() {

  setInterval(100) {
    box.style.opacity = "0%"
  }
}

function makeCircle (){
  box.style.borderRadius = "50%"
}
