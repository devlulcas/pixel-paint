import {getCanvasSize, createSquares, createCanvas} from './utils.js';
const sizeInputField = document.getElementById('input-canvas-size');
const btnChangeSize = document.getElementById('btn-canvas-size');
const container = document.getElementById('container');

btnChangeSize.onclick = () => {
    const canvasSize = getCanvasSize(sizeInputField, 32);
    const squares = createSquares(canvasSize);
    console.log(squares)
    createCanvas(container, squares);
}
