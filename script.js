const mainContainer = document.querySelector("#main-container");
const dimChangeButton = document.querySelector("#dimension-change");


const createBoard = (sideLength) => {
    for (let i = 0; i < sideLength ** 2; i++) {
        let addedDiv = document.createElement("div");
        addedDiv.classList.add("pixels")
        mainContainer.append(addedDiv);
    }
    selectAndColorPixels();
};

const selectAndColorPixels = () => {
    var pixels = document.querySelectorAll(".pixels");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", turnColor);
    });
    return pixels;
};

// wipes page of all pixels
const clearBoard = () => {
    mainContainer.replaceChildren();
    console.log("Board cleared!");
};

const randomColorAsString = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
};

// makes pixels turn color upon visiting, does not stack over visited pixels
const turnColor = (event) => {
    if (!event.target.classList.contains("visited")) {
        event.target.style.backgroundColor = randomColorAsString();
        event.target.classList.add("visited");
    };
};

const promptSideLength = () => {
    let sideLength = prompt("Enter new numbers of sqaures per side");
    while (sideLength > 100) {
        sideLength = prompt("Too large! Enter value less than 100.")
    }
    return sideLength;
};

const changeDim = () => {
    let newSideLength = promptSideLength();
    clearBoard();
    let newSideLengthFlexBasisAsString = () => {
        let flexBasisValue = 100 / newSideLength;
        return flexBasisValue;
    };
    createBoard(newSideLength);
    let pixels = selectAndColorPixels();
    pixels.forEach((pixel) => {
        pixel.style.flexBasis = newSideLengthFlexBasisAsString() + "%";
    });
};

createBoard(16);

dimChangeButton.addEventListener("click", changeDim);