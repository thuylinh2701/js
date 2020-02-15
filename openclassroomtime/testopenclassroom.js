const getTime = function() {
  const date = new Date();

  const heures = date.getHours();
  const minutes = date.getMinutes();
  const secondes = date.getSeconds();

  if (heures < 23 && minutes < 59 && secondes < 59) {
    return heures + "h:" + minutes + "m:" + (secondes + 1) + "s";
  } else if (heures < 23 && minutes < 59 && secondes === 59) {
    return heures + "h:" + (minutes + 1) + "m:0s";
  } else if (heures < 23 && minutes === 59 && secondes === 59) {
    return heures + 1 + "h:0m:0s";
  } else if (heures === 23 && minutes === 59 && secondes === 59) {
    return "0h:0m:0s (minuit)";
  }
};

window.onload = function() {
  const button = document.getElementById("myBtn");
  button.onclick = function myFunction() {
    const time = getTime();
    console.log(time);
    document.getElementById("demo").innerHTML = time;
  };
};
