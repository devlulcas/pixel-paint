export {getCanvasSize, createSquares, createCanvas};

const getCanvasSize = (inputField, normalSize = 32) => {
    const defaultSize = 32;
    let canvasSize = inputField.value;   
    return (canvasSize > 0 ) ? canvasSize : (normalSize > 0) ? normalSize : defaultSize;
}

const createSquares = (canvasSize = 32) => {
    const squares = ``;
    for (let i = 0; i <= canvasSize; i++){
        squares += `
                <div class="default clean"></div>
        `;
    }
    return squares;
}

const createCanvas = (container, squares) => {
    container.innerHTML = squares;
}