let gold = document.getElementById("gold");
let silver = document.getElementById("silver");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let graphite = document.getElementById("graphite");

let phoneImage = document.getElementById("phone-image");


gold.onclick = function() {
    phoneImage.src = "images/gold.PNG";
}

silver.onclick = function() {
    phoneImage.src = "images/silver.PNG";
}

blue.onclick = function() {
    phoneImage.src = "images/sierra-blue.PNG";
}

green.onclick = function() {
    phoneImage.src = "images/green.PNG";
}

graphite.onclick = function() {
    phoneImage.src = "images/graphite.PNG";
}