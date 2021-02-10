export {getCanvasSize, createSquares, createCanvas};

const getCanvasSize = (inputField, normalSize = 32) => {
    const defaultSize = 32;
    let canvasSize = inputField.value;   
    return (canvasSize > 0 ) ? canvasSize : (normalSize > 0) ? normalSize : defaultSize;
}

const createSquares = (canvasSize = 32) => {
    let squares = ``;
    for (let squaresCreated = 0; squaresCreated < (canvasSize * canvasSize); squaresCreated++){
        squares += `<div class="default clean"></div>`;
    }
    return squares;
}

const createCanvas = (container, squares) => {
    container.innerHTML = squares;
}

const createGrid = (canvasSize = 32, gridSize = '10px') => {
    let grid = ``;
    for (let axis = 0; axis < canvasSize; axis++){
        grid += ` ${gridSize}`
    }
    return grid;
}