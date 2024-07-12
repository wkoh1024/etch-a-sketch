const mainContainer = document.querySelector("#main-container");
const dimChangeButton = document.querySelector("#dimension-change");

dimChangeButton.addEventListener("click", () => {
    var newDim = prompt("Enter new numbers of sqaures per side");

});

for (let i = 0; i < 256; i++) {
    let addedDiv = document.createElement("div");

    addedDiv.classList.add("pixels")
    mainContainer.append(addedDiv);
}

const colorAsString = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

const turnColor = (event) => {
    if (!event.target.classList.contains("visited")) {
        event.target.style.backgroundColor = colorAsString();
        event.target.classList.add("visited");
    }
};

let pixels = document.querySelectorAll(".pixels");
pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", turnColor)
});