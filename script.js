function setPixelColour(pixel){
 pixel.style.backgroundColor = penColour;
}

var penColour = 'black';

function setPenColour(pen){
    penColour = pen;
}

const div = document.createElement("div");
div.classList.add("pixel");

