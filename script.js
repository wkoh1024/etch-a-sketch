const mainContainer = document.querySelector("#main-container");
const dimChangeButton = document.querySelector("#dimension-change");


const createBoard = (sideLength) => {
    for (let i = 0; i < sideLength ** 2; i++) {
        let addedDiv = document.createElement("div");
        addedDiv.classList.add("pixels")
        mainContainer.append(addedDiv);
    };
    selectAndColorPixels();
};

// makes pixels turn color upon visiting, does not stack over visited pixels
const changeColor = (event) => {
    if (!event.target.classList.contains("visited")) {
        event.target.style.opacity = "0.1";
        event.target.style.backgroundColor = randomColorAsString();
        event.target.classList.add("visited");
    }
    else if (event.target.style.opacity != "1") {
        let currentOpacity = Number(event.target.style.opacity);
        currentOpacity += 0.1;
        event.target.style.opacity = String(currentOpacity);
    }
};


// reselects pixels, enables them to change color, and returns them
const selectAndColorPixels = () => {
    var pixels = document.querySelectorAll(".pixels");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", changeColor);
    });
    return pixels;
};

// wipes page of all pixels
const clearBoard = () => {
    mainContainer.replaceChildren();
};

const randomColorAsString = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
};

const getSideLength = () => {
    let sideLength = prompt("Enter new numbers of sqaures per side");
    while (sideLength > 100) {
        sideLength = prompt("Too large! Enter value less than 100.")
    }
    return sideLength;
};

const changeDim = () => {
    let newSideLength = getSideLength();
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