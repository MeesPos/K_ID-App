let counter = {};
window.addEventListener("load", function () {
  counter.end = 5;

  counter.min = document.getElementById("cd-min");
  counter.sec = document.getElementById("cd-sec");

  if (counter.end > 0) {
    counter.ticker = setInterval(function(){
      counter.end--;
      if (counter.end <= 0) { 
        clearInterval(counter.ticker); 
        counter.end = 0;
      }

      let secs = counter.end;

      counter.sec.innerHTML = secs;
    }, 1000);
  }
});