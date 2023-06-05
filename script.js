// Ici vous pouvez écrire du code JavaScript
function therock() {
    document.querySelector(".color").setAttribute('class', 'color on');
    document.getElementById("clip-2").setAttribute('class', 'color off');
    document.getElementById("clip-3").setAttribute('class', 'color off');
    document.getElementById("clip-4").setAttribute('class', 'color off');
    document.getElementById("clip-5").setAttribute('class', 'color off');
}
document.getElementById("therock").addEventListener('click', therock)

function vindiesel() {
    document.querySelector(".color").setAttribute('class', 'color off');
    document.getElementById("clip-2").setAttribute('class', 'color on');
    document.getElementById("clip-3").setAttribute('class', 'color off');
    document.getElementById("clip-4").setAttribute('class', 'color off');
    document.getElementById("clip-5").setAttribute('class', 'color off');
}
document.getElementById("therock").addEventListener('click', vindiesel)