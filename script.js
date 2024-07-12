const mainContainer = document.querySelector("#main-container");
const dimChangeButton = document.querySelector("#dimension-change");

for (let i = 0; i < 256; i++) {
    let addedDiv = document.createElement("div");

    addedDiv.classList.add("pixels")
    mainContainer.append(addedDiv);
}

const colorAsString = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

const turnColor = (event) => {
    event.target.style.backgroundColor = colorAsString();
};

let pixels = document.querySelectorAll(".pixels");
pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", turnColor)
});