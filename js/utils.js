export {getCanvasSize};

const getCanvasSize = (inputField, minSize = 8, normalSize = 32, maxSize = 128) => {
    const defaultSize = 32;
    let canvasSize= inputField.value;   
    return (canvasSize >= minSize && canvasSize <= maxSize) ? canvasSize 
    : (normalSize >= minSize && normalSize <= maxSize) ? normalSize : defaultSize;
}