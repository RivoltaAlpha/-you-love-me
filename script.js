function makeNoButtonAppear() {
    var top = getRandomNumber(400, 500);

    var left =  getRandomNumber(200, 1000);

    document.getElementById("no").style.position = "absolute";
    document.getElementById("no").style.top = top + "px";
    document.getElementById("no").style.left = left + "px";
    document.getElementById("no").style.display = "block";
   
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function appearAfterDelay() {
    setTimeout(makeNoButtonAppear, Math.random() * 1000);

}

appearAfterDelay();

document.getElementById("no").onclick = function() { 
    document.getElementById("no").style.display = "none";
   
    appearAfterDelay();
}

document.getElementById("yes").onclick = function() {
    alert("I Love you too (●'◡'●) 😙❤️");
}
