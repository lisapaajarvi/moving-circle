window.addEventListener('load', main);

let circle;
let position = {
    top: 45,
    left: 45
}


function main() {
    addEventListeners();
    fetchDomElements();
}

function addEventListeners() {
    document.addEventListener('keydown', moveCircle);
}

function fetchDomElements() {
    circle = document.getElementById("moving-circle");
}
function moveCircle(event) {
    console.log(event);
    
    switch(event.key) {
        case 'ArrowUp':
            position.top -= 1;
            break;
        case 'ArrowDown':
            position.top += 1;
            break;
        case 'ArrowRight':
            position.left += 1;
            break;
        case 'ArrowLeft':
            position.left -= 1;
            break;
        default:
            alert("Använd piltangenterna!")
    }   

        updateCirclePosition();
}

function updateCirclePosition() {
    circle.style.left = position.left + '%';
    circle.style.top = position.top + '%';
}