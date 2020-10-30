var body = document.getElementById("back"),
    input1 = document.getElementById("color1"),
    input2 = document.getElementById("color2"),
    h3 = document.getElementById("details");

input1.value =  "#182d39";
input2.value = "#155261";

h3.textContent = `linear-gradient(to right, ${input1.value}, ${input2.value})`
function setGradient() {
    body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
    h3.textContent = body.style.background;
}

input1.addEventListener("input", setGradient);
input2.addEventListener("input", setGradient);
