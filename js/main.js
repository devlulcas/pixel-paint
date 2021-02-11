import {getCanvasSize, createSquares, createCanvas, createGrid, applyGridStyle} from './utils.js';
const sizeInputField = document.getElementById('input-canvas-size');
const btnChangeSize = document.getElementById('btn-canvas-size');
const container = document.getElementById('container');

let actualCanvasSize = 0;
btnChangeSize.onclick = () => {
    const canvasSize = getCanvasSize(sizeInputField, 8, 32, 64);
    if (canvasSize != actualCanvasSize){
        actualCanvasSize = canvasSize;
        const squares = createSquares(canvasSize);
        const gridTemplate = createGrid(canvasSize, '1em');
        createCanvas(container, squares);
        applyGridStyle(gridTemplate, container);
    }
}