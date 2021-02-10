export {getCanvasSize, createSquares, createCanvas, createGrid, applyGridStyle};

function getCanvasSize(inputField, normalSize = 32) {
    const defaultSize = 32;
    let canvasSize = inputField.value;
    return (canvasSize > 0) ? canvasSize : (normalSize > 0) ? normalSize : defaultSize;
}

function createSquares(canvasSize = 32) {
    let squares = ``;
    for (let squaresCreated = 0; squaresCreated < (canvasSize * canvasSize); squaresCreated++) {
        squares += `<div class="default clean"></div>`;
    }
    return squares;
}

function createCanvas(container, squares) {
    container.innerHTML = squares;
}

function createGrid(canvasSize = 32, gridSize = '10px') {
    let grid = ``;
    for (let axis = 0; axis < canvasSize; axis++) {
        grid += ` ${gridSize}`;
    }
    return grid;
}

function applyGridStyle(gridTemplate = 'auto', container) {
    container.style.gridTemplateColumns = gridTemplate;
    container.style.gridTemplateRows = gridTemplate;
}