document.addEventListener('load', main);

const circle = document.getElementById("moving-circle");
let topPosition = 50;
let leftPosition = 50;

function main() {
    addEventListeners();
}

function addEventListeners() {
    document.addEventListener('keydown', function() {checkArrowKey(e);});
}

function checkArrowKey(e) {
    if(e.keyCode == '38') {
        moveCircleUp();
    }
    else if(e.keyCode == '40') {
        moveCircleDown();
    }
    else if(e.keyCode == '39') {
        moveCircleRight();
    }
    else if(e.keyCode == '37') {
        moveCircleLeft();
    }
}

function moveCircleUp() {
    circle.style.top = topPosition-- + "%"; 
}

function moveCircleDown() {
    circle.style.top = topPosition++ + "%";
}

function moveCircleRight() {
    circle.style.left = leftPosition-- + "%";
}

function moveCircleLeft() {
    circle.style.left = leftPosition++ + "%";
}