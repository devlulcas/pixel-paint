export {getCanvasSize, createSquares, createCanvas};

const getCanvasSize = (inputField, normalSize = 32) => {
    const defaultSize = 32;
    let canvasSize = inputField.value;   
    return (canvasSize > 0 ) ? canvasSize : (normalSize > 0) ? normalSize : defaultSize;
}

const createSquares = (canvasSize = 32) => {
    let squares = ``;
    for (let lines = 0; lines < canvasSize; lines++){
        for (let columns = 0; columns < canvasSize; columns++){
            squares += `<div class="default clean"></div>`;
        }
        squares+=`<br>`;
    }
    return squares;
}

const createCanvas = (container, squares) => {
    container.innerHTML = squares;
}