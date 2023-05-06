const greenLight = document.getElementById("green")
const yellowLight = document.getElementById("yellow")
const redLight = document.getElementById("red")

let green = () => {
  greenLight.style.backgroundColor = "green";
  yellowLight.style.backgroundColor = "black";
  redLight.style.backgroundColor = "black";
}

let yellow = () => {
  greenLight.style.backgroundColor = "black";
  yellowLight.style.backgroundColor = "yellow";
  redLight.style.backgroundColor = "black";
}

let red = () => {
  greenLight.style.backgroundColor = "black";
  yellowLight.style.backgroundColor = "black";
  redLight.style.backgroundColor = "red";
}

let i = 0;

setInterval(() => {
  if (i === 0) {
    green();
    i++;
  }
  else if (i === 1) {
    yellow();
    i++;
  }
  else {
    red();
    i = 0;
  }
}, 1000);