
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const gradient = document.querySelector(".gradient");
const random = document.querySelector(".random");
const copy = document.querySelector(".copy");

function randomize() {
    return Math.floor(Math.random()* 255);
}

function ColorRand() {
    return "rgb(" + randomize() + "," + randomize() + "," + randomize() + ")";
}

function csstext() {
    return css.textContent = gradient.style.background + ";";
}

function gradientColor() {
    gradient.style.background = "linear-gradient(to right," + color1.value +", "+ color2.value +")";
    csstext();
}

function randomGradient() {
    gradient.style.background = "linear-gradient(to right," + ColorRand() +", "+ ColorRand() +")";
    csstext();
}


color1.addEventListener("input", gradientColor);
color2.addEventListener("input", gradientColor);
random.addEventListener("click", randomGradient);
