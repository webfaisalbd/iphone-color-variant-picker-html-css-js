let gold = document.getElementById("gold");
let silver = document.getElementById("silver");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let graphite = document.getElementById("graphite");

let phoneImage = document.getElementById("phone-image");
let colorName = document.getElementById("color-name");


gold.onclick = function() {
    phoneImage.src = "images/gold.PNG";
    colorName.innerText = "Gold";
    colorName.style.color = "#d5c7ad";
}

silver.onclick = function() {
    phoneImage.src = "images/silver.PNG";
    colorName.innerText = "Silver";
    colorName.style.color = "#d8d9d3";
}

blue.onclick = function() {
    phoneImage.src = "images/sierra-blue.PNG";
    colorName.innerText = "Sierra Blue";
    colorName.style.color = "#a4bacf";
}

green.onclick = function() {
    phoneImage.src = "images/green.PNG";
    colorName.innerText = "Alpine Green";
    colorName.style.color = "#6f816e";
}

graphite.onclick = function() {
    phoneImage.src = "images/graphite.PNG";
    colorName.innerText = "Graphite";
    colorName.style.color = "#5a5955";
}