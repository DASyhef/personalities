// Ici vous pouvez écrire du code JavaScript
let c1 = document.getElementById("color-1");
let c2 = document.getElementById("color-2");
let c3 = document.getElementById("color-3");
let c4 = document.getElementById("color-4");
let c5 = document.getElementById("color-5");
let t1 = document.getElementById("txt-1");
let t2 = document.getElementById("txt-2");
let t3 = document.getElementById("txt-3");
let t4 = document.getElementById("txt-4");
let t5 = document.getElementById("txt-5");


function therock() {
    if (getComputedStyle(c1).opacity != "0") {
        c1.setAttribute('class', 'color off');
        t1.setAttribute('class', 'whozzat t-off')
      } else {
    document.getElementById("color-1").setAttribute('class', 'color on');
    document.getElementById("color-2").setAttribute('class', 'color off');
    document.getElementById("color-3").setAttribute('class', 'color off');
    document.getElementById("color-4").setAttribute('class', 'color off');
    document.getElementById("color-5").setAttribute('class', 'color off');
    document.getElementById("txt-1").setAttribute('class', 'whozzat t-on');
    document.getElementById("txt-2").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-3").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-4").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-5").setAttribute('class', 'whozzat t-off');
      }
}
document.getElementById("therock").addEventListener('click', therock)

function vindiesel() {
    if (getComputedStyle(c2).opacity != "0") {
        c2.setAttribute('class', 'color off');
        t2.setAttribute('class', 'whozzat t-off')
      } else {
    document.getElementById("color-1").setAttribute('class', 'color off');
    document.getElementById("color-2").setAttribute('class', 'color on');
    document.getElementById("color-3").setAttribute('class', 'color off');
    document.getElementById("color-4").setAttribute('class', 'color off');
    document.getElementById("color-5").setAttribute('class', 'color off');
    document.getElementById("txt-1").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-2").setAttribute('class', 'whozzat t-on');
    document.getElementById("txt-3").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-4").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-5").setAttribute('class', 'whozzat t-off');
      }
}
document.getElementById("vindiesel").addEventListener('click', vindiesel)

function imenes() {
    if (getComputedStyle(c3).opacity != "0") {
        c3.setAttribute('class', 'color off');
        t3.setAttribute('class', 'whozzat t-off')
      } else {
    document.getElementById("color-1").setAttribute('class', 'color off');
    document.getElementById("color-2").setAttribute('class', 'color off');
    document.getElementById("color-3").setAttribute('class', 'color on');
    document.getElementById("color-4").setAttribute('class', 'color off');
    document.getElementById("color-5").setAttribute('class', 'color off');
    document.getElementById("txt-1").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-2").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-3").setAttribute('class', 'whozzat t-on');
    document.getElementById("txt-4").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-5").setAttribute('class', 'whozzat t-off');
      }
}
document.getElementById("imenes").addEventListener('click', imenes)

function jessicaalba() {
    if (getComputedStyle(c4).opacity != "0") {
        c4.setAttribute('class', 'color off');
        t4.setAttribute('class', 'whozzat t-off')
      } else {
    document.getElementById("color-1").setAttribute('class', 'color off');
    document.getElementById("color-2").setAttribute('class', 'color off');
    document.getElementById("color-3").setAttribute('class', 'color off');
    document.getElementById("color-4").setAttribute('class', 'color on');
    document.getElementById("color-5").setAttribute('class', 'color off');
    document.getElementById("txt-1").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-2").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-3").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-4").setAttribute('class', 'whozzat t-on');
    document.getElementById("txt-5").setAttribute('class', 'whozzat t-off');
      }
}
document.getElementById("jessicaalba").addEventListener('click', jessicaalba)

function zitahanrot() {
    if (getComputedStyle(c5).opacity != "0") {
        c5.setAttribute('class', 'color off');
        t5.setAttribute('class', 'whozzat t-off')
      } else {
    document.getElementById("color-1").setAttribute('class', 'color off');
    document.getElementById("color-2").setAttribute('class', 'color off');
    document.getElementById("color-3").setAttribute('class', 'color off');
    document.getElementById("color-4").setAttribute('class', 'color off');
    document.getElementById("color-5").setAttribute('class', 'color on');
    document.getElementById("txt-1").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-2").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-3").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-4").setAttribute('class', 'whozzat t-off');
    document.getElementById("txt-5").setAttribute('class', 'whozzat t-on');
      }
}
document.getElementById("zitahanrot").addEventListener('click', zitahanrot)