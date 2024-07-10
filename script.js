const mainContainer = document.querySelector("#main-container");

for (let i = 0; i < 256; i++) {
    let addedDiv = document.createElement("div");

    addedDiv.classList.add("pixels")
    mainContainer.append(addedDiv);
}

const turnColor = (event) => {
    event.target.style.backgroundColor = 'black';
};

let pixels = document.querySelectorAll(".pixels");
pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", turnColor)
});


// function hoveredPixel = () => {

// }
