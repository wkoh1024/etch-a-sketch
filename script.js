const mainContainer = document.querySelector("#main-container");

for (let i = 0; i < 256; i++) {
    let addedDiv = document.createElement("div");

    addedDiv.classList.add("pixels")
    mainContainer.append(addedDiv);
}