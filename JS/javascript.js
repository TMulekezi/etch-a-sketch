const page = document.querySelector(".container");

// const selections = document.querySelectorAll("option");
// selections.forEach(option => option.addEventListener("click", handleSelection));

const selection = document.querySelector("select");
selection.addEventListener('click', handleSelection);

// function handleSelection(e) {
//     let dimension = parseInt(this.getAttribute("value"));
//     console.log(dimension);
//     createGrid(dimension);
// }

function handleSelection(e) {
    let item = this;
    let dimension = parseInt(this.value);
    createGrid(dimension);
}

function createGrid(dimension) {
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    let boxHeight = (550 - (2 * (dimension - 1) + 2))/dimension;
    let boxWidth = boxHeight;

    let boxNum = dimension * dimension;
    for (let i = 0; i < boxNum; i++ ) {
        const box = document.createElement("div");
        box.setAttribute('style', `height: ${boxHeight}px; width: ${boxWidth}px`);
        box.classList.add("box");
        box.addEventListener('mouseover', changeColor);
        page.appendChild(box);
        
    }
}


function changeColor(e) {
    const tile = this;
    tile.style.background = "white";
    console.log("hello");
}




