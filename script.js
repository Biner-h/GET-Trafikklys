document.getElementById('rødKnapp').onclick = illuminateRed;
document.getElementById('orangeKnapp').onclick = illuminateOrange;
document.getElementById('grønnKnapp').onclick = illuminateGreen;


function illuminateRed() {
  clearLights();
  document.getElementById('rød').style.opacity = "100%";
}

function illuminateOrange() {
  clearLights();
  document.getElementById('orange').style.opacity = "100%";
}

function illuminateOrangeAndRed() {
  clearLights();
  document.getElementById('orange').style.opacity = "100%";
  document.getElementById('rød').style.opacity = "100%";
}

function illuminateGreen() {
    clearLights();
    document.getElementById('grønn').style.opacity = "100%";
}

function clearLights() {
  document.getElementById('rød').style.opacity = "10%";
  document.getElementById('orange').style.opacity = "10%";
  document.getElementById('grønn').style.opacity = "10%";
}

let timer1;
let timer2;
let timer3;
let timer4;
let timer5;

function changeColor(){
    timer1 = setTimeout(illuminateRed, 1000);
    timer2 = setTimeout(illuminateOrangeAndRed, 2000);
    timer3 = setTimeout(illuminateGreen, 3000);
    timer4 = setTimeout(illuminateOrange, 4000);
    timer5 = setTimeout(changeColor, 4000);
};

function allOff(){
    clearLights();
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(timer5);
}
