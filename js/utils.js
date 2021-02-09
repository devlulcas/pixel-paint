export {getCanvasSize};

const getCanvasSize = (inputField, normalSize = 32) => {
    const defaultSize = 32;
    let canvasSize = inputField.value;   
    return (canvasSize > 0 ) ? canvasSize : (normalSize > 0) ? normalSize : defaultSize;
}